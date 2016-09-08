[![npm version 0.1.5](https://badge.fury.io/js/reframe.js.svg)](https://badge.fury.io/js/reframe.js)
[![Bower version 0.0.3](https://badge.fury.io/bo/reframe.js.svg)](https://badge.fury.io/bo/reframe.js)

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
reframe(selector);🔥
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

