[![npm version 0.1.7](https://badge.fury.io/js/reframe.js.svg)](https://www.npmjs.com/package/reframe.js)
[![Bower version 0.0.5](https://badge.fury.io/bo/reframe.js.svg)](https://github.com/dollarshaveclub/reframe.js)
[![Build Status](https://travis-ci.org/dollarshaveclub/reframe.js.svg?branch=master)](https://travis-ci.org/dollarshaveclub/reframe.js)
[![Share](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&maxAge=2592000)](https://twitter.com/home?status=Reframe+unresponsive+elements+responsively.+%F0%9F%92%AAhttps%3A%2F%2Fgithub.com%2Fdollarshaveclub%2Freframe.js+%40DSCEngineering+%40yowainwright+%23JavaScript)

## 🖼 Reframe.js

Reframe.js is a javascript plugin that makes embedded content responsive.

### Setup

```terminal
npm install reframe.js --save-dev
```
```terminal
bower install reframe.js --save-dev
```

### Run

1. Include **reframe.js** into your `vendor` file or in a `<script>` tag.
2. Add reframe `css/scss`  to your `css`.
3. `reframe` the element you'd like to re-frame. 

```javascript
reframe('selector');🔥
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

**Reframe.js** removes a specified element `style attributes` & then wraps that element in responsive `div` that is a perfect ratio of the original div's size. This simple plugin is great for **embedded content** like `iframes`.

### Why?

**Reframe.js** is inspired by [FitVids](https://github.com/davatron5000/FitVids.js) & does what FitVids does but without the need for `jQuery`. This makes the plugin highly valuable when including it in a module that has to be very small & with minimal dependencies. 

This plugin is small - `~1kb` unminified & is meant to do 1 thing - _wrap elements that aren't responsive & make them responsive_. 💪

