# [Highlight.js](https://github.com/isagalaev/highlight.js) Plugin for [DocPad](http://docpad.org)

<!-- BADGES/ -->

<span class="badge-travisci"><a href="http://travis-ci.org/docpad/docpad-plugin-highlightjs" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/docpad/docpad-plugin-highlightjs/master.svg" alt="Travis CI Build Status" /></a></span>
<span class="badge-npmversion"><a href="https://npmjs.org/package/docpad-plugin-highlightjs" title="View this project on NPM"><img src="https://img.shields.io/npm/v/docpad-plugin-highlightjs.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/docpad-plugin-highlightjs" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/docpad-plugin-highlightjs.svg" alt="NPM downloads" /></a></span>
<span class="badge-daviddm"><a href="https://david-dm.org/docpad/docpad-plugin-highlightjs" title="View the status of this project's dependencies on DavidDM"><img src="https://img.shields.io/david/docpad/docpad-plugin-highlightjs.svg" alt="Dependency Status" /></a></span>
<span class="badge-daviddmdev"><a href="https://david-dm.org/docpad/docpad-plugin-highlightjs#info=devDependencies" title="View the status of this project's development dependencies on DavidDM"><img src="https://img.shields.io/david/dev/docpad/docpad-plugin-highlightjs.svg" alt="Dev Dependency Status" /></a></span>
<br class="badge-separator" />
<span class="badge-patreon"><a href="https://patreon.com/bevry" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
<span class="badge-opencollective"><a href="https://opencollective.com/bevry" title="Donate to this project using Open Collective"><img src="https://img.shields.io/badge/open%20collective-donate-yellow.svg" alt="Open Collective donate button" /></a></span>
<span class="badge-gratipay"><a href="https://www.gratipay.com/bevry" title="Donate weekly to this project using Gratipay"><img src="https://img.shields.io/badge/gratipay-donate-yellow.svg" alt="Gratipay donate button" /></a></span>
<span class="badge-flattr"><a href="https://flattr.com/profile/balupton" title="Donate to this project using Flattr"><img src="https://img.shields.io/badge/flattr-donate-yellow.svg" alt="Flattr donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>
<span class="badge-bitcoin"><a href="https://bevry.me/bitcoin" title="Donate once-off to this project using Bitcoin"><img src="https://img.shields.io/badge/bitcoin-donate-yellow.svg" alt="Bitcoin donate button" /></a></span>
<span class="badge-wishlist"><a href="https://bevry.me/wishlist" title="Buy an item on our wishlist for us"><img src="https://img.shields.io/badge/wishlist-donate-yellow.svg" alt="Wishlist browse button" /></a></span>
<br class="badge-separator" />
<span class="badge-slackin"><a href="https://slack.bevry.me" title="Join this project's slack community"><img src="https://slack.bevry.me/badge.svg" alt="Slack community badge" /></a></span>

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

<h2>History</h2>

<a href="https://github.com/docpad/docpad-plugin-highlightjs/blob/master/HISTORY.md#files">Discover the release history by heading on over to the <code>HISTORY.md</code> file.</a>

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

<h2>Contribute</h2>

<a href="https://github.com/docpad/docpad-plugin-highlightjs/blob/master/CONTRIBUTING.md#files">Discover how you can contribute by heading on over to the <code>CONTRIBUTING.md</code> file.</a>

<!-- /CONTRIBUTE -->


<!-- BACKERS/ -->

<h2>Backers</h2>

<h3>Maintainers</h3>

These amazing people are maintaining this project:

<ul><li><a href="http://thedev.infinityatlas.com">Chase Colman</a> — <a href="https://github.com/docpad/docpad-plugin-highlightjs/commits?author=chase" title="View the GitHub contributions of Chase Colman on repository docpad/docpad-plugin-highlightjs">view contributions</a></li>
<li><a href="http://balupton.com">Benjamin Lupton</a> — <a href="https://github.com/docpad/docpad-plugin-highlightjs/commits?author=balupton" title="View the GitHub contributions of Benjamin Lupton on repository docpad/docpad-plugin-highlightjs">view contributions</a></li></ul>

<h3>Sponsors</h3>

No sponsors yet! Will you be the first?

<span class="badge-patreon"><a href="https://patreon.com/bevry" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
<span class="badge-opencollective"><a href="https://opencollective.com/bevry" title="Donate to this project using Open Collective"><img src="https://img.shields.io/badge/open%20collective-donate-yellow.svg" alt="Open Collective donate button" /></a></span>
<span class="badge-gratipay"><a href="https://www.gratipay.com/bevry" title="Donate weekly to this project using Gratipay"><img src="https://img.shields.io/badge/gratipay-donate-yellow.svg" alt="Gratipay donate button" /></a></span>
<span class="badge-flattr"><a href="https://flattr.com/profile/balupton" title="Donate to this project using Flattr"><img src="https://img.shields.io/badge/flattr-donate-yellow.svg" alt="Flattr donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>
<span class="badge-bitcoin"><a href="https://bevry.me/bitcoin" title="Donate once-off to this project using Bitcoin"><img src="https://img.shields.io/badge/bitcoin-donate-yellow.svg" alt="Bitcoin donate button" /></a></span>
<span class="badge-wishlist"><a href="https://bevry.me/wishlist" title="Buy an item on our wishlist for us"><img src="https://img.shields.io/badge/wishlist-donate-yellow.svg" alt="Wishlist browse button" /></a></span>

<h3>Contributors</h3>

These amazing people have contributed code to this project:

<ul><li><a href="http://thedev.infinityatlas.com">Chase Colman</a> — <a href="https://github.com/docpad/docpad-plugin-highlightjs/commits?author=chase" title="View the GitHub contributions of Chase Colman on repository docpad/docpad-plugin-highlightjs">view contributions</a></li>
<li><a href="http://balupton.com">Benjamin Lupton</a> — <a href="https://github.com/docpad/docpad-plugin-highlightjs/commits?author=balupton" title="View the GitHub contributions of Benjamin Lupton on repository docpad/docpad-plugin-highlightjs">view contributions</a></li>
<li><a href="http://delapouite.com">Bruno Heridet</a> — <a href="https://github.com/docpad/docpad-plugin-highlightjs/commits?author=Delapouite" title="View the GitHub contributions of Bruno Heridet on repository docpad/docpad-plugin-highlightjs">view contributions</a></li>
<li><a href="http://mathiasbynens.be/">Mathias Bynens</a> — <a href="https://github.com/docpad/docpad-plugin-highlightjs/commits?author=mathiasbynens" title="View the GitHub contributions of Mathias Bynens on repository docpad/docpad-plugin-highlightjs">view contributions</a></li>
<li><a href="http://robloach.net">Rob Loach</a> — <a href="https://github.com/docpad/docpad-plugin-highlightjs/commits?author=RobLoach" title="View the GitHub contributions of Rob Loach on repository docpad/docpad-plugin-highlightjs">view contributions</a></li>
<li><a href="http://troykershaw.com">Troy Kershaw</a> — <a href="https://github.com/docpad/docpad-plugin-highlightjs/commits?author=troykershaw" title="View the GitHub contributions of Troy Kershaw on repository docpad/docpad-plugin-highlightjs">view contributions</a></li>
<li><a href="https://github.com/vsopvsop">vsopvsop</a> — <a href="https://github.com/docpad/docpad-plugin-highlightjs/commits?author=vsopvsop" title="View the GitHub contributions of vsopvsop on repository docpad/docpad-plugin-highlightjs">view contributions</a></li>
<li><a href="http://www.merrickchristensen.com">Merrick Christensen</a> — <a href="https://github.com/docpad/docpad-plugin-highlightjs/commits?author=iammerrick" title="View the GitHub contributions of Merrick Christensen on repository docpad/docpad-plugin-highlightjs">view contributions</a></li></ul>

<a href="https://github.com/docpad/docpad-plugin-highlightjs/blob/master/CONTRIBUTING.md#files">Discover how you can contribute by heading on over to the <code>CONTRIBUTING.md</code> file.</a>

<!-- /BACKERS -->


<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; 2012+ <a href="http://thedev.infinityatlas.com">Chase Colman</a></li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->
