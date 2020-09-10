function addEvent(evt, elem, f) {
  elem.addEventListener
    ? elem.addEventListener(evt, f, false)
    : elem.attachEvent
      ? elem.attachEvent('on' + evt, f)
      : elem['on' + evt] = f
}

function singularize(s) {
  return s.endsWith('s') ? s.slice(0, -1) : s
}

function pluralize(s) {
  return `${s}s`
}
