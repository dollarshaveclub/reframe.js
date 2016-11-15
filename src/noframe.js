export default function noframe(target, container) {
  let els = typeof target === 'string' ? document.querySelectorAll(target) : target;
  if (!('length' in els)) {
    els = [els];
  }
  for (let i = 0; i < els.length; i++) {
    const el = els[i];
    const height = el.offsetHeight;
    const width = el.offsetWidth;
    if (typeof container !== 'undefined') {
      const parent = document.querySelector(container);
      const maxwidth = window.getComputedStyle(parent, null).getPropertyValue('max-width');
      el.style.width = '100%';
      el.style.maxHeight = `calc(${maxwidth} * ${height}/${width})`;
    } else {
      const maxwidth = `${width}px`;
      el.style.display = 'block';
      el.style.marginLeft = el.style.marginRight = 'auto';
      let fullwidth = `${maxwidth}px`;
      if (width > el.parentElement.offsetWidth) {
        fullwidth = el.parentElement.offsetWidth;
        el.style.maxHeight = `calc(${fullwidth}px * ${height}/${width})`;
      } else {
        el.style.maxHeight = `calc(${maxwidth} * ${height}/${width})`;
      }
      el.style.width = `${fullwidth}px`;
    }
    el.style.height = `calc(100vw * ${height}/${width})`;
    el.style.maxWidth = '100vw';
  }
}
if (typeof window !== 'undefined') {
  const plugin = window.$ || window.jQuery || window.Zepto;
  if (plugin) {
    plugin.fn.noframe = function noframePlugin(cName) {
      noframe(this, cName);
      return this;
    };
  }
}
