# [Highlight.js](https://github.com/isagalaev/highlight.js) Plugin for [DocPad](http://docpad.org)

<!-- BADGES -->

This plugin enables [Highlight.js](https://github.com/isagalaev/highlight.js) syntax highlighting for [DocPad](https://docpad.org)


## Install

### Install the Plugin

```
docpad install highlightjs
```

### Download a Stylesheet

[Available stylesheets are here.](https://github.com/isagalaev/highlight.js/tree/edbe72ae43c820f5d6e417bd3f0a5a71f0f65046/src/styles) [You can preview some of them here.](http://softwaremaniacs.org/media/soft/highlight/test.html)


## Usage

Example inputs are [here](https://github.com/docpad/docpad-plugin-highlightjs/tree/master/test/src/documents) and their corresponding outputs are [here](https://github.com/docpad/docpad-plugin-highlightjs/tree/master/test/out-expected). For the general gist of things, the following will suffice:

### HTML

#### Input

``` html
<h3>Coffescript - Lang tag</h3>
<pre><code class="lang-coffeescript">
if true
	func = -&gt;
		alert "hello world"

	func()
</code></pre>
```

#### Output

``` html
<h3>Coffescript - Lang tag</h3>
<pre class="highlighted"><code class="coffeescript">
<span class="keyword">if</span> <span class="literal">true</span>
	<span class="function"><span class="title">func</span></span> = -&gt;
		alert <span class="string">"hello world"</span>

	func()
</code></pre>
```

### Markdown

#### Input

	### Coffeescript with fenced code

	``` coffeescript
	if true
		func = ->
			alert 'hello world'
		func()
	```

#### Output

``` html
<h3>Coffeescript with fenced code</h3>
<pre class="highlighted"><code class="coffeescript"><span class="keyword">if</span> <span class="literal">true</span>
	<span class="function"><span class="title">func</span></span> = -&gt;
		alert <span class="string">'hello world'</span>
	func()</code></pre>
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
By default, we replace tabs with 4 spaces. This can be changed by changing the `replaceTab` configuration option:

``` coffee
plugins:
	highlightjs:
		replaceTab: null  # keep tabs
```


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

<!-- HISTORY -->

<!-- CONTRIBUTE -->

<!-- BACKERS -->

<!-- LICENSE -->
