const pagesRoot = document.location.href.split('/').slice(0, -1).join('/')
const filename = document.location.pathname.split('/').slice(-1)[0]
const filenameNumericId = parseInt(filename.split('.')[0])
const lastPageNumericId = 15

const previousPage = () => {
  const previousPageNumericId = filenameNumericId - 1
  if (previousPageNumericId < 1) return
  console.log('prev')
  navigatePage(previousPageNumericId)
}

const nextPage = () => {
  const nextPageNumericId = filenameNumericId + 1
  if (nextPageNumericId > lastPageNumericId) return
  navigatePage(nextPageNumericId)
}

const navigatePage = pageNumericId => {
  console.log('navigatePage', pageNumericId)
  document.location.href = `${pagesRoot}/${pageNumericId}.html`
}

const actionKeys = {
  ArrowLeft: previousPage,
  ArrowRight: nextPage
}

document.addEventListener('keydown', event => {
  const { key } = event
  if (actionKeys[key]) actionKeys[key]()
})
