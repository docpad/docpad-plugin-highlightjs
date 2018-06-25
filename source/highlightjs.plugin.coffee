module.exports = (BasePlugin) ->
	# Requires
	balUtil = require('bal-util')
	extendr = require('extendr')
	hljs = require('highlight.js')
	cache = {}

	# Define Plugin
	class HighlightjsPlugin extends BasePlugin
		# Plugin name
		name: 'highlightjs'

		# Plugin configuration
		config:
			replaceTab: '    '
			transforms: null
			escape: false
			removeIndentation: false
			className: 'highlight'
			aliases:
				coffee: 'coffeescript'
				rb: 'ruby'
				js: 'javascript'
				html: 'xml'
				htm: 'xml'
				eco: 'xml'
				erb: 'xml'
				phtml: 'xml'

		# Extract language
		extractLanguage = (str) ->
			# Prepare
			str = (str or '').toLowerCase()

			# No highlighting
			return 'no-highlight'  if /no[-]?highlight|none/i.test(str)

			# Return the last listed language class
			matches = str.match(/lang(?:uage)?-\w+/g)
			return matches.pop().match(/lang(?:uage)?-(\w+)/)[1]  if matches

			# Return the string if it is it
			return str  if str.indexOf(' ') is -1

			# Auto-highlighting
			return ''

		# Highlight an element
		highlightSource: (opts) ->
			# Prepare
			docpad = @docpad
			{source,language,next} = opts
			config = extendr.extend({}, @getConfig(), opts.config or {})
			{escape,replaceTab,aliases,transforms,removeIndentation,className} = config

			# Remove Indentation
			source = balUtil.removeIndentation(source)  if removeIndentation isnt false

			# Extrat language
			language = extractLanguage(language)

			# Highlight
			result = source
			if language isnt 'no-highlight'
				# Correctly escape the source
				if escape isnt true
					# Unescape the output as highlightjs always escape
					source = require('he').decode(source)

				# Transforms
				for transform in transforms or []
					if transform instanceof Function
						# transforms = (source) ->
						source = transform(source, language)
					else if transform instanceof Array and transform.length is 2
						# transforms = ['find' or RegExp, 'replace']
						source = source.replace(transform[0], transform[1])

				# Replace tabs
				hljs.fixMarkup(source, replaceTab)  if replaceTab

				# Highlight
				try
					# Correct aliases
					if language and aliases[language]
						language = aliases[language]

					# Perform the render
					if language
						if hljs.getLanguage(language)
							result = hljs.highlight(language, source)
						else
							docpad.warn """
								Highlight.js: Syntax highlight definition does not exist for language: #{language}
								Your probably want to add an alias for this language to one that we do support
								More information here: https://github.com/docpad/docpad-plugin-highlightjs#language-aliases
								"""
							result = hljs.highlightAuto(source)
					else
						result = hljs.highlightAuto(source)

					# Extract the result
					language = result.language
					result = result.value
				catch err
					return next(err)  if err

			# Handle
			result = """
				<pre class="#{className}"><code class="hljs #{language}">#{result}</code></pre>
				""".replace(/\t/g, replaceTab)
			next(null,result)

			# Chain
			@

		# Render the document
		renderDocument: (opts, next) ->
			{extension,file} = opts
			{className} = @getConfig()
			plugin = @

			# Handle
			if file.type is 'document' and extension is 'html'
				# Check cache
				cacheKey = opts.content+file.attributes.plugins?.highlightjs
				cacheResult = cache[cacheKey]
				if cacheResult
					opts.content = cacheResult
					return next()

				# Grab all the code blocks
				balUtil.replaceElementAsync(
					html: opts.content
					element: 'pre'
					removeIndentation: false
					replace: (outerHTML, elementNameMatched, attributes, innerHTML, replaceElementCompleteCallback) ->
						# Check
						classes = balUtil.getAttribute(attributes,'class') or ''
						return replaceElementCompleteCallback(null,outerHTML)  if classes.indexOf(className) isnt -1

						# Replace
						balUtil.replaceElementAsync(
							html: innerHTML
							element: 'code'
							removeIndentation: false
							replace: (outerHTML, elementNameMatched, attributes, innerHTML, replaceElementCompleteCallback) ->
								classes = balUtil.getAttribute(attributes,'class') or ''
								plugin.highlightSource(
									source: innerHTML
									language: classes
									config: file.attributes.plugins?.highlightjs
									next: replaceElementCompleteCallback
								)
							next: replaceElementCompleteCallback
						)

					next: (err,result) ->
						return next(err)  if err
						opts.content = result
						cache[cacheKey] = result
						return next()
				)

			else
				return next()
