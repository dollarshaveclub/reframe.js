[![npm version 0.0.6](https://badge.fury.io/js/reframe.js.svg)](https://badge.fury.io/js/reframe.js)
[![Bower version 0.0.3](https://badge.fury.io/bo/reframe.js.svg)](https://badge.fury.io/bo/reframe.js)

## 🖼 Reframe.js

> Reframe.js wraps a div around embed content & makes it responsive.

🖼&npsp;**Reframe.js** is a lil' javascript plugin that makes embedded content responsive.

## Setup

**Bower**
```terminal
npm install reframe.js --save-dev
```

**NPM**
```terminal
npm install reframe.js --save-dev
```
\* Or just download it here ^ (top right corner).

## Example
Some html&hellip;
```html
<iframe width="560" height="315" src="[your source]" frameborder="0" allowfullscreen></iframe>
```

A lil' Js&hellip;
```javascript
reframe('iframe');

```
A dash of Css&hellip; (optional)
```css
.js-reframe {
  padding-top: 56.25%;
  position: relative;
  width: 100%; }
  .js-reframe iframe {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%; }
```
💡 &npbsp;Here's a full [example](https://codepen.io/yowainwright/pen/amzAEo/)! 

