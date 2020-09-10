addEvent('DOMContentLoaded', document, () => {
  const class_name = 'active'
  const navs = document.querySelectorAll('[data-nav]')
  navs.forEach(p => p.firstElementChild.classList.remove(class_name))

  const path = document.location.pathname
  const paths = Array.prototype.map.call(navs, p => p.getAttribute('data-nav'))

  let selected_nav = paths.filter(
    (p, i) => (
      path.indexOf(p) !== -1 ||
      path.indexOf(singularize(p)) !== -1
    )
  )

  if (selected_nav.length === 1) {
    document
      .querySelector(`[data-nav="${selected_nav[0]}"]`)
      .firstElementChild
      .classList
      .add(class_name)
  }
})
