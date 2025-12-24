<script setup>
import { toRef } from 'vue'
import { useRouter } from 'vue-router'
import BookCard from '@/components/BookCard.vue'
import SkeletonBookCard from '@/components/SkeletonBookCard.vue'
import { useBooks } from '@/composables/useBooks'



import {
  ArrowLeftIcon,
  MagnifyingGlassIcon,
  XMarkIcon
} from '@heroicons/vue/24/outline'

const props = defineProps({
  category: String
})

const router = useRouter()

const {
  books,
  loading,
  error,
  search,
  observerTarget,
  loadBooks
} = useBooks(toRef(props,'category'))
</script>


<template>
  <section class="min-h-screen app-bg px-6 py-10">

    <!-- HEADER -->
    <div class="flex items-center gap-3 mb-6">
      <ArrowLeftIcon
        class="w-5 h-5 text-[#5E56E7] cursor-pointer"
        @click="router.back()"
      />
      <h2 class="text-xl font-semibold text-[#5E56E7] capitalize">
        {{ category }}
      </h2>
    </div>

    <!-- SEARCH -->
    <div class="relative max-w-xl mb-10">
      <MagnifyingGlassIcon
        class="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
      />
      <input
        v-model="search"
        type="text"
        placeholder="Search"
        class="w-full pl-10 pr-10 py-3 rounded-md
               border border-gray-200 bg-gray-100"
      />
      <XMarkIcon
        v-if="search"
        class="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
        @click="search = ''"
      />
    </div>

    <!-- ERROR -->
    <p v-if="error" class="text-red-500">
      {{ error }}
    </p>

    <!-- GRID -->
    <div
      v-else-if="loading && books.length === 0"
      class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6"
    >
      <SkeletonBookCard
        v-for="n in 12"
        :key="n"
      />
    </div>

    <div
      v-else-if="!loading && books.length === 0 && search"
      class="text-center text-gray-500 mt-20"
    >
      No results found for “{{ search }}”
    </div>

    <div v-else
      class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-x-6 gap-y-10"
    >
      <BookCard
        v-for="book in books"
        :key="book.id"
        :title="book.title"
        :author="book.author"
        :cover="book.cover"
        :formats="book.formats"
      />
    </div>

    <!-- OBSERVER TARGET -->
    <div ref="observerTarget" class="h-10"></div>

    <!-- LOADING -->
    <p 
      v-if="loading && books.length > 0" class="text-gray-500 mt-4">
      Loading more books…
    </p>

  </section>
</template>
