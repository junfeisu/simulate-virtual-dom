window.onload = function () {
  let ul = new Sjf.default('ul', {
    style: 'background: red',
    id: 'test'
  }, [
    new Sjf.default('li', {
      class: 'li'
    }, ['1']),
  ])

  let ulRoot = ul.render()
  document.body.appendChild(ulRoot)
}