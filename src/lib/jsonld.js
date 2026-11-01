// Serializes structured data for a <script type="application/ld+json"> tag.
// JSON.stringify leaves "<" untouched, so API-sourced text such as "</script><script>..."
// could close the tag early. Escape the characters that matter in an HTML script context.
const LINE_SEP = new RegExp(String.fromCharCode(0x2028), 'g');
const PARA_SEP = new RegExp(String.fromCharCode(0x2029), 'g');

export function jsonLd(data) {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(LINE_SEP, '\\u2028')
    .replace(PARA_SEP, '\\u2029');
}
