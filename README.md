[![npm version 0.1.7](https://badge.fury.io/js/reframe.js.svg)](https://www.npmjs.com/package/reframe.js)
[![Bower version 0.0.5](https://badge.fury.io/bo/reframe.js.svg)](https://github.com/dollarshaveclub/reframe.js)
[![Build Status](https://travis-ci.org/dollarshaveclub/reframe.js.svg?branch=master)](https://travis-ci.org/dollarshaveclub/reframe.js)
[![Share](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&maxAge=2592000)](https://twitter.com/home?status=Reframe+unresponsive+elements+responsively.+%F0%9F%92%AAhttps%3A%2F%2Fgithub.com%2Fdollarshaveclub%2Freframe.js+%40DSCEngineering+%40yowainwright+%23JavaScript)

## 🖼 Reframe.js

Reframe.js is a javascript plugin that makes unresponsive elements responsive.

### Setup

```terminal
npm install reframe.js --save-dev
```
or
```terminal
bower install reframe.js --save-dev
```

### Run

1. Add `dist/reframe.js`.
2. Add reframe `css/scss`  to your `css`.
3. `reframe` the element you'd like to re-frame.

```javascript
reframe('selector'); // 🔥
```

### Examples

**Basic**
```javascript
reframe('selector');
```

**Or Multiples**
```javascript
reframe('selector');
```

**But not this one**
```javascript
reframe('selector:not([not this selector])');
```

### How?

**Reframe.js** removes a specified element's `height & width attributes` & then wraps that element in `div` that is an [intrinsic ratio](http://alistapart.com/article/creating-intrinsic-ratios-for-video) of the original element. This plugin is great for **embedded content** like `iframes` or `videos`.

### Why?

**Reframe.js** is inspired by [FitVids](https://github.com/davatron5000/FitVids.js) & does what FitVids does but without the need for `jQuery`. This makes the plugin highly valuable when including it in a module that has to be very small & with minimal dependencies. Here's a basic [codepen example](http://codepen.io/yowainwright/pen/amzAEo).

This plugin is small - `~1.3kb` unminified & is meant to do 1 thing - _wrap elements that aren't responsive & make them responsive_. 💪

### Options

If you'd like to not use the classname 'js-reframe', just use your own.

```javascript
reframe('selector', 'classname');
```
### jQuery

You can use **Reframe.js** with jQuery as well.

```javascript
$('selector').reframe();
```
&, if you'd like to use a custom classname

```javascript
$('selector').reframe('classname');
```



