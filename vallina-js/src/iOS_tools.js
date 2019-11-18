/**
 * Enables copy to ClipBoard on Safari browser
 */
export function copyToClipboard(str) {
  let tmpElem = document.createElement('textarea')
  tmpElem.style.fontSize = '12pt'
  tmpElem.style.border = '0'
  tmpElem.style.padding = '0'
  tmpElem.style.margin = '0'
  tmpElem.style.top =
    (window.pageYOffset || document.documentElement.scrollTop) + 'px'
  tmpElem.style.position = 'fixed'
  tmpElem.style[
    document.documentElement.getAttribute('dir') === 'rtl' ? 'right' : 'left'
  ] = '-9999px'
  tmpElem.setAttribute('readonly', '')
  tmpElem.value = str
  document.body.appendChild(tmpElem)
  var selectedText = tmpElem.select()
  var result = document.execCommand('copy')
  window.getSelection().removeAllRanges()
  document.body.removeChild(tmpElem)
}
