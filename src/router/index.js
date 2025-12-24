import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Categories',
    component: () => import('../pages/CategoriesPage.vue') // lazy loaded
  },
  {
    path: '/books/:category',
    name: 'Books',
    component: () => import('../pages/BooksPage.vue'), // lazy loaded
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
