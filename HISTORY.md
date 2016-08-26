# History

- v2.4.0 August 26th, 2016
	- Updated dependencies
		- highlight.js ^9.6.0

- v2.3.0 October 19, 2014
	- Updated dependencies
		- coffee-script 1.8.0
		- highlight.js 8.3.0
		- he 0.5.0

- v2.2.2 June 9, 2014
	- Switch to [_he_](https://github.com/mathiasbynens/he) for more robust HTML entity decoding
		- Thanks to [Mathias Bynens](http://mathiasbynens.be/) for [pull request #10](http://github.com/docpad/docpad-plugin-highlightjs/pull/10)

- v2.2.1 February 15, 2014
	- Fix to have the `hljs` class in the code element
		- Thanks to [Troy Kershaw](https://github.com/troykershaw) for [pull request #8](http://github.com/docpad/docpad-plugin-highlightjs/pull/8)
	- Updated dependencies
		- coffee-script 1.6.2 to 1.7.1

- v2.2.0 January 10, 2014
	- Updated dependencies

- v2.1.9 December 10, 2013
	- You can now customise the css classname that is added via the `className` property, defaults to `highlight`
	- Updated dependencies

- v2.1.8 October 2, 2013
	- Updated dependencies

- v2.1.7 June 26, 2013
	- Repackaged
	- Updated dependencies

- v2.1.6 April 24, 2013
	- Obey the `replaceTabs` configuration option

- v2.1.5 April 24, 2013
	- Replace tabs with spaces now that DocPad v6.31 doesn't

- v2.1.4 April 5, 2013
	- Updated dependencies

- v2.1.3 April 1, 2013
	- Updated dependencies

- v2.1.2 March 7, 2013
	- Repackaged
	- Updated dependencies
		-  `bal-util` from ~1.13.13 to ~1.16.8
		-  `highlight.js` from 7.3.x to ~7.3.0
		-  `ent` from 0.0.4 to ~0.0.4

- v2.1.1 October 26, 2012
	- Fixed no highlight detection

- v2.1.0 October 22, 2012
	- Removed jsdom for simpler and way faster approach
	- Fixed specifying language in some instances
	- Changed `sourceFilter` option to the new `transforms` option
	- Documented the `aliases` option
	- Warns when language highlight definition is not found

- v2.0.1 October 18, 2012
	- Updated for Highlight.js 7.3.x
	- Released

- v2.0.0 October 12, 2012
	- Cleaned
	- Added aliases

- v0.1.3 September 8, 2012
	- Fixed the document loop error which occurred when processing documents not
		containing code
	- Fixed the handling of [the new default Marked plugin](https://github.com/bevry/docpad-extras/tree/master/plugins/markdown)

- v0.1.2 August 25, 2012
	- Changed to the HTML5 parser because jsdom's default HTML parser occasionally failed on the provided tests
	- Better handle [the default Markdown plugin](https://github.com/bevry/docpad-extras/tree/master/plugins/markdown)'s HTML output
		- Languages like Coffeescript get butchered in fenced code because it doesn't continue the code block properly

- v0.1.1 August 23, 2012
	- If an unrecognized language tag is used, the plugin falls back to
		Highlight.js's autodetection feature
	- Tests!

- v0.1.0 August 21, 2012
	- The [Highlight.js](https://github.com/isagalaev/highlight.js) Syntax
		Highlighting Plugin is Created
