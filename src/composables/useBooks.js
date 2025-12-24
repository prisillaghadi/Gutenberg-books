import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { fetchBooks } from '@/services/booksApi'
import { debounce } from '@/utils/debounce'

export function useBooks(categoryRef) {
  const books = ref([])
  const nextPage = ref(null)
  const loading = ref(false)
  const error = ref(null)
  const search = ref('')
  const observerTarget = ref(null)

  let observer = null

  function mapBook(book) {
    return {
      id: book.id,
      title: book.title,
      author: book.authors?.[0]?.name || 'Unknown Author',
      cover: book.formats['image/jpeg'],
      formats: book.formats
    }
  }

  function loadBooks({ reset = false } = {}) {
    if (loading.value) return
    if (!reset && !nextPage.value) return

    loading.value = true
    error.value = null

    fetchBooks({
      category: categoryRef.value,
      search: search.value,
      pageUrl: reset ? null : nextPage.value
    })
      .then((data) => {
        const mapped = data.results.map(mapBook)
        books.value = reset ? mapped : [...books.value, ...mapped]
        nextPage.value = data.next
      })
      .catch(() => {
        error.value = 'Failed to load books'
      })
      .finally(() => {
        loading.value = false
      })
  }

  const debouncedSearch = debounce(() => {
    books.value = []
    nextPage.value = null
    loadBooks({ reset: true })
  }, 500)

  watch(search, () => {
    debouncedSearch()
  })

  onMounted(() => {
    loadBooks({ reset: true })

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadBooks()
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(observerTarget.value)
  })

  onBeforeUnmount(() => {
    if (observer) observer.disconnect()
  })

  return {
    books,
    loading,
    error,
    search,
    observerTarget,
    loadBooks
  }
}
