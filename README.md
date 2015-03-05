# [Highlight.js](https://github.com/isagalaev/highlight.js) Plugin for [DocPad](http://docpad.org)

<!-- BADGES/ -->

[![Build Status](https://img.shields.io/travis/docpad/docpad-plugin-highlightjs/master.svg)](http://travis-ci.org/docpad/docpad-plugin-highlightjs "Check this project's build status on TravisCI")
[![NPM version](https://img.shields.io/npm/v/docpad-plugin-highlightjs.svg)](https://npmjs.org/package/docpad-plugin-highlightjs "View this project on NPM")
[![NPM downloads](https://img.shields.io/npm/dm/docpad-plugin-highlightjs.svg)](https://npmjs.org/package/docpad-plugin-highlightjs "View this project on NPM")
[![Dependency Status](https://img.shields.io/david/docpad/docpad-plugin-highlightjs.svg)](https://david-dm.org/docpad/docpad-plugin-highlightjs)
[![Dev Dependency Status](https://img.shields.io/david/dev/docpad/docpad-plugin-highlightjs.svg)](https://david-dm.org/docpad/docpad-plugin-highlightjs#info=devDependencies)<br/>
[![Gratipay donate button](https://img.shields.io/gratipay/docpad.svg)](https://www.gratipay.com/docpad/ "Donate weekly to this project using Gratipay")
[![Flattr donate button](https://img.shields.io/badge/flattr-donate-yellow.svg)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](https://img.shields.io/badge/bitcoin-donate-yellow.svg)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](https://img.shields.io/badge/wishlist-donate-yellow.svg)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

<!-- /BADGES -->


This plugin enables [Highlight.js](https://github.com/isagalaev/highlight.js) syntax highlighting for [DocPad](https://docpad.org)


## Install

### Install the Plugin

```
docpad install highlightjs
```

### Download a Stylesheet

[Available stylesheets are here.](https://github.com/isagalaev/highlight.js/tree/8.0/src/styles) [You can preview some of them here.](http://highlightjs.org/static/test.html)


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

### Class Name

You can customise the css classname that is added by adjusting the `className` configuration option, defaults to `highlight`

``` coffee
plugins:
	highlightjs:
		className: 'blah'
```


<!-- HISTORY/ -->

## History
[Discover the change history by heading on over to the `HISTORY.md` file.](https://github.com/docpad/docpad-plugin-highlightjs/blob/master/HISTORY.md#files)

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

## Contribute

[Discover how you can contribute by heading on over to the `CONTRIBUTING.md` file.](https://github.com/docpad/docpad-plugin-highlightjs/blob/master/CONTRIBUTING.md#files)

<!-- /CONTRIBUTE -->


<!-- BACKERS/ -->

## Backers

### Maintainers

These amazing people are maintaining this project:

- Chase Colman <chase@infinityatlas.com> (https://github.com/chase)
- Benjamin Lupton <b@lupton.cc> (https://github.com/balupton)

### Sponsors

No sponsors yet! Will you be the first?

[![Gratipay donate button](https://img.shields.io/gratipay/docpad.svg)](https://www.gratipay.com/docpad/ "Donate weekly to this project using Gratipay")
[![Flattr donate button](https://img.shields.io/badge/flattr-donate-yellow.svg)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](https://img.shields.io/badge/bitcoin-donate-yellow.svg)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](https://img.shields.io/badge/wishlist-donate-yellow.svg)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

### Contributors

These amazing people have contributed code to this project:

- [Benjamin Lupton](https://github.com/balupton) <b@lupton.cc> — [view contributions](https://github.com/docpad/docpad-plugin-highlightjs/commits?author=balupton)
- [Chase Colman](https://github.com/chase) <chase@infinityatlas.com> — [view contributions](https://github.com/docpad/docpad-plugin-highlightjs/commits?author=chase)
- [Delapouite](https://github.com/Delapouite) — [view contributions](https://github.com/docpad/docpad-plugin-highlightjs/commits?author=Delapouite)
- [mathiasbynens](https://github.com/mathiasbynens) — [view contributions](https://github.com/docpad/docpad-plugin-highlightjs/commits?author=mathiasbynens)
- [RobLoach](https://github.com/RobLoach) — [view contributions](https://github.com/docpad/docpad-plugin-highlightjs/commits?author=RobLoach)
- [troykershaw](https://github.com/troykershaw) — [view contributions](https://github.com/docpad/docpad-plugin-highlightjs/commits?author=troykershaw)

[Become a contributor!](https://github.com/docpad/docpad-plugin-highlightjs/blob/master/CONTRIBUTING.md#files)

<!-- /BACKERS -->


<!-- LICENSE/ -->

## License

Unless stated otherwise all works are:

- Copyright &copy; 2012+ Chase Colman <chase@infinityatlas.com> (http://thedev.infinityatlas.com)

and licensed under:

- The incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT License](http://opensource.org/licenses/mit-license.php)

<!-- /LICENSE -->


