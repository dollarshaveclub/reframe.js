/* noframe.js () 🖼
  -------------
  takes 2 arguments:
  => target: targeted <element>
  => container: optional targeted <parent> of targeted <element>
  -------------
  defines the height/width ratio of the targeted <element>
  based on the targeted <parent> width
*/
export default function noframe(target, container) {
  let frames = (typeof target === 'string') ? document.querySelectorAll(target) : target;
  if (!('length' in frames)) frames = [frames];
  for (let i = 0; i < frames.length; i += 1) {
    const frame = frames[i];
    let parent = frame.parentElement;
    const h = frame.offsetHeight;
    const w = frame.offsetWidth;
    const styles = frame.style;
    let maxW = `${w}px`;
    if (typeof container !== 'undefined') {
      // gets/sets the height/width ratio
      // => if a targeted <parent> element is defined
      parent = document.querySelector(container);
      maxW = window.getComputedStyle(parent, null).getPropertyValue('max-width');
      styles.width = '100%';
      styles.maxHeight = `calc(${maxW} * ${h}/${w})`;
    } else {
      // gets/sets the height/width ratio
      // => if a targeted <element> closest parent <element> is NOT defined
      styles.display = 'block';
      styles.marginLeft = 'auto';
      styles.marginRight = 'auto';
      let fullW = `${maxW}px`;
      // if targeted <element> width is > than it's parent <element>
      // => set the targeted <element> maxheight/fullwidth to it's parent <element>
      if (w > parent.offsetWidth) {
        fullW = parent.offsetWidth;
        styles.maxH = `calc(${fullW}px * ${h}/${w})`;
      } else {
        styles.maxH = `calc(${maxW} * ${h}/${w})`;
      }
      styles.width = `${fullW}px`;
    }
    // set a calculated height of the targeted <element>
    styles.height = `calc(100vw * ${h}/${w})`;
    styles.maxWidth = '100vw';
  }
}
