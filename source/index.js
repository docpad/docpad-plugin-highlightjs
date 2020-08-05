/* eslint-disable class-methods-use-this */
// @ts-nocheck
'use strict'

const ropo = require('ropo')
const trimIndentation = require('trim-indentation').default
const extendr = require('extendr')
const hljs = require('highlight.js')

module.exports = function (BasePlugin) {
	// Requires
	const cache = {}

	// Define Plugin
	return class HighlightjsPlugin extends BasePlugin {
		// Plugin name
		get name() {
			return 'highlightjs'
		}

		// Plugin configuration
		get initialConfig() {
			return {
				replaceTab: '    ',
				transforms: null,
				escape: false,
				removeIndentation: false,
				className: 'highlight',
				aliases: {
					coffee: 'coffeescript',
					rb: 'ruby',
					js: 'javascript',
					html: 'xml',
					htm: 'xml',
					eco: 'xml',
					erb: 'xml',
					phtml: 'xml',
				},
			}
		}

		// Extract language
		extractLanguage(str) {
			// Prepare
			str = (str || '').toLowerCase()

			// No highlighting
			if (/no[-]?highlight|none/i.test(str)) {
				return 'no-highlight'
			}

			// Return the last listed language class
			const matches = str.match(/lang(?:uage)?-\w+/g)
			if (matches) {
				return matches.pop().match(/lang(?:uage)?-(\w+)/)[1]
			}

			// Return the string if it is it
			if (str.includes(' ') === false) {
				return str
			}

			// Auto-highlighting
			return ''
		}

		// Highlight an element
		highlightSource(opts) {
			// Prepare
			const { docpad } = this
			let { source, language } = opts
			const config = extendr.extend({}, this.getConfig(), opts.config || {})
			const {
				escape,
				replaceTab,
				aliases,
				transforms,
				removeIndentation,
				className,
			} = config
			let result

			// Remove Indentation
			if (removeIndentation !== false) {
				source = trimIndentation(source)
			}

			// Extrat language
			language = this.extractLanguage(language)

			// Highlight
			result = source
			if (language !== 'no-highlight') {
				// Correctly escape the source
				if (escape !== true) {
					// Unescape the output as highlightjs always escape
					source = require('he').decode(source)
				}

				// Transforms
				for (const transform of transforms || []) {
					if (typeof transform === 'function') {
						// transforms = (source) ->
						source = transform(source, language)
					} else if (Array.isArray(transform) && transform.length === 2) {
						// transforms = ['find' or RegExp, 'replace']
						source = source.replace(transform[0], transform[1])
					}
				}

				// Replace tabs
				if (replaceTab) {
					hljs.fixMarkup(source, replaceTab)
				}

				// Highlight
				try {
					// Correct aliases
					if (language && aliases[language]) {
						language = aliases[language]
					}

					// Perform the render
					if (language) {
						if (hljs.getLanguage(language)) {
							result = hljs.highlight(language, source)
						} else {
							docpad.warn(
								[
									`Highlight.js: Syntax highlight definition does not exist for language: ${language}`,
									'Your probably want to add an alias for this language to one that we do support',
									'More information here: https://github.com/docpad/docpad-plugin-highlightjs#language-aliases',
								].join('\n')
							)
							result = hljs.highlightAuto(source)
						}
					} else {
						result = hljs.highlightAuto(source)
					}

					// Extract the result
					language = result.language
					result = result.value
				} catch (err) {
					return Promise.reject(err)
				}
			}

			// Handle
			result = `<pre class="${className}"><code class="hljs ${language}">${result}</code></pre>`.replace(
				/\t/g,
				replaceTab
			)
			return Promise.resolve(result)
		}

		// Render the document
		renderDocument(opts, next) {
			const { extension, file } = opts
			const { className } = this.getConfig()
			const plugin = this

			// Handle
			if (file.type === 'document' && extension === 'html') {
				// Check cache
				const cacheKey =
					opts.content +
					((file.attributes.plugins && file.attributes.plugins.highlightjs) ||
						'')
				const cacheResult = cache[cacheKey]
				if (cacheResult) {
					opts.content = cacheResult
					return next()
				}

				// Grab all the code blocks
				ropo
					.replaceElementAsync(opts.content, /pre/, function (
						sections,
						captures
					) {
						// Check
						const classes =
							ropo.extractAttribute(captures.attributes, 'class') || ''
						if (classes.includes(className)) {
							return sections.outer
						}

						// Replace
						return ropo.replaceElementAsync(sections.inner, /code/, function (
							sections,
							captures
						) {
							const classes =
								ropo.extractAttribute(captures.attributes, 'class') || ''
							return plugin.highlightSource({
								source: sections.inner,
								language: classes,
								config:
									file.attributes.plugins &&
									file.attributes.plugins.highlightjs,
							})
						})
					})
					.then(function (result) {
						opts.content = result
						cache[cacheKey] = result
						return next()
					})
					.catch(next)
			} else {
				return next()
			}
		}
	}
}
