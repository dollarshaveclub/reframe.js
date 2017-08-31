<p align="center">
  <img alt="Reframe.js, reframe your content responsively" src="https://yowainwright.imgix.net/gh/reframe.svg" width="400" />
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/reframe.js">
    <img alt="npm version 0.3.6" src="https://badge.fury.io/js/reframe.js.svg" />
  </a>
  <a href="https://github.com/dollarshaveclub/reframe.js">
    <img alt="Bower version 0.3.6" src="https://badge.fury.io/bo/reframe.js.svg" />
  </a>
  <a href="https://greenkeeper.io/">
    <image alt="Greenkeeper" src="https://badges.greenkeeper.io/dollarshaveclub/reframe.js.svg" />
  </a>
  <a href="https://travis-ci.org/dollarshaveclub/reframe.js">
    <img alt="Build Status" src="https://travis-ci.org/dollarshaveclub/reframe.js.svg?branch=master" />
  </a>
  <a href="https://twitter.com/home?status=Reframe+unresponsive+elements+responsively.+%F0%9F%92%AAhttps%3A%2F%2Fgithub.com%2Fdollarshaveclub%2Freframe.js+%40DSCEngineering+%40yowainwright+%23JavaScript">
    <img alt="Share" src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social&maxAge=2592000" />
  </a>
</p>
<hr>
<h1 align="center">🖼 Reframe.js</h1>

<h4 align="center">Reframe.js is a javascript plugin that makes elements scale at a fixed ratio.</h4>

This is particularly awesome for making embedded stuff, like videos or playlists, scale appropriately within a content area. This can done by hand but it's difficult to maintain, especially with CMS's and multiple editors. Reframe.js solves this issue—perfectly!

Alternatively, [noframe.js](#noframe) is provided. Noframe.js scales selected elements at a fixed ratio but **does not** manipulate the dom's element structure at all! This keeps things like analytic events that run on embedded content intact!


### Installing

NPM
```sh
npm i reframe.js --save
```
Bower
```sh
bower i reframe.js --save
```
Yarn
```sh
yarn add reframe.js 
```

### Setup

1.  Add `dist/reframe.js`
2.  `reframe` the element you'd like to re-frame.

### Examples

```javascript
reframe('iframe'); // Wrap all iFrames in the page
reframe(document.getElementById('my-frame')); // Pass a DOM element
reframe(document.querySelectorAll('.my-targets')) // Pass a live node list
```

Elements that have been wrapped with reframe will not be wrapped twice.

### How?

**Reframe.js** wraps a specified element in a `div` that is an [intrinsic ratio](http://alistapart.com/article/creating-intrinsic-ratios-for-video) of the original element. This plugin is great for **embedded content** like `iframes` or `videos`.

### Why Reframe.js?

**Reframe.js** is inspired by [FitVids](https://github.com/davatron5000/FitVids.js) and does what FitVids does but without the need for `jQuery`. This makes the plugin highly valuable when including it in a module that has to be very small and with minimal dependencies. Here's a basic [codepen example](http://codepen.io/yowainwright/pen/7f34f86e716ea93013899a71752dbff6).

This plugin is small - `~1.3kb` unminified and is meant to do 1 thing - _wrap elements that aren't responsive and make them responsive_. 💪

### Options

If you'd like to not use the classname 'js-reframe', just use your own.

```javascript
reframe('iframe', 'my-classname');
```
### jQuery

**Reframe.js** works with jQuery or Zepto. As of version 2.0.0, use `jquery.reframe.js` for jQuery or Zepto. 

```javascript
$('iframe').reframe();

// While using a custom class name
$('iframe').reframe('my-classname');
```
<hr>

<h2 id="noframe" align="center">🌐 Noframe.js</h2>

Noframe.js makes the same ratio as Reframe.js using [css calc](https://developer.mozilla.org/en-US/docs/Web/CSS/calc).

Noframe.js's doesn't wrap the element you'd like to be responsive. It, instead, does a calculation based on its or a parent element's `max-width`. Here's a basic [codepen example](http://codepen.io/yowainwright/pen/19cd3f2fc3e00ce80e36285feae20b77).

**Noframe.js Notes**
-   The reframed element requires a parent element with a `max width` to scale above the selected elements intial size otherwise the reframed element will only scale below its initial size. 👍

### Setup
1.  Add `dist/noframe.js`
2.  `noframe` the element you'd like to re-frame.

### Examples

```javascript
noframe('iframe');
noframe('iframe', 'parent');
```

### jQuery

**Noframe.js** works with jQuery or Zepto. As of version 2.0.0, use `jquery.noframe.js` for jQuery or Zepto. 

```javascript
$('iframe').noframe();
$('iframe').noframe('parent');
```
## Reframe.js or Noframe.js?

Reframe.js offers the **simplest solution** to making elements scale at an intrinsic ratio.

Noframe.js **doesn't wrap** the selected element to make it scale at an intrinsic ratio. Noframe.js is the ideal solution when various events, like tracking events, could be affected when an element is _wrapped_. It _does_ require a `width` or `max-width` which can involve a bit more setup awareness.

----

Created and maintained by [Jeff Wainwright](https://github.com/yowainwright) with [Dollar Shave Club Engineering](https://github.com/dollarshaveclub).
