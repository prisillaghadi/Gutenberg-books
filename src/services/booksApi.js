const BASE_URL = 'http://skunkworks.ignitesol.com:8000'
const BOOKS_PATH = '/books'

function normalizeNextUrl(nextUrl) {
  if (!nextUrl) return null

  const url = new URL(nextUrl)
  return `${BASE_URL}${url.pathname}${url.search}`
}

export function fetchBooks({ category, search = '', pageUrl = null }) {
  let url = ''

  if (pageUrl) {
    url = normalizeNextUrl(pageUrl)
  } else {
    url = `${BASE_URL}${BOOKS_PATH}/?topic=${category}&mime_type=image/`
    if (search) {
      url += `&search=${encodeURIComponent(search)}`
    }
  }

  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to fetch books')
    }
    return response.json()
  })
}
