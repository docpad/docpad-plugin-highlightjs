# Highlight.js Plugin for DocPad
This plugin enables [Highlight.js](https://github.com/isagalaev/highlight.js) syntax highlighting for [DocPad](https://docpad.org)


## Install

```
npm install --save docpad-plugin-highlightjs
```


## Configure

### Language Aliases
Sometimes one of the languages you want to highlight isn't available. In which case, you'd probably want to add an alias for it to a language that is similar. To do this, you'll want to add something like the following to your docpad configuration file.

``` coffee
plugins:
	highlightjs:
		aliases:
			missinglanguage: 'alternativelanguage'
```

[You can find a list of languages that are supported via the Highlight.js source tree.](https://github.com/isagalaev/highlight.js/tree/master/src/languages)


### Replacing Tabs
By default, this plugin does not expand `\t` characters to any number of spaces, etc.
This can be changed in your [DocPad configuration file](https://github.com/bevry/docpad/wiki/Configuration) by adding something similar to the following:

``` coffee
plugins:
    highlightjs:
        replaceTab: '    '
```

This will replace all `\t` characters to 4 spaces.


### Transforms

You can apply transformations to code blocks before they are highlighted by using the `transforms` configuration option. It accepts an array of functions or arrays.

``` coffee
plugins:
    highlightjs:
    	transforms: [
    		# Remove extra indentation from the code block
    		# Requires: http://balupton.com/project/bal-util
    		(source, language) ->
        		require('bal-util').removeIndentation(source)  if language in ['bash','coffeescript']

        	# Replace "(C)" with "&copy;"
        	(source) -> source.replace /\(C\)/gm, '&copy;'
        ]
```


## History
You can discover the history inside the `History.md` file


## Special Thanks to
- Benjamin Lupton for [DocPad](https://docpad.org) and the [Pygments plugin](https://github.com/bevry/docpad-extras/tree/master/plugins/pygments), after which the code for this plugin was modeled
- Ivan Sagalaev and contributors for [Highlight.js](https://github.com/isagalaev/highlight.js), which this plugin relies on for syntax highlighting


## License
Licensed under the incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT License](http://creativecommons.org/licenses/MIT/)
<br/>Copyright &copy; 2012 [Chase Colman](http://thedev.infinityatlas.com)
