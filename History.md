## History

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
