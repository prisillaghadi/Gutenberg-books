<script setup>
import { useRouter } from 'vue-router'
import { categories } from '@/utils/categories'
import { ArrowRightIcon } from '@heroicons/vue/24/outline'

const router = useRouter()

const goToCategory = (key) => {
  router.push({
    name: 'Books',
    params: { category: key }
  })
}
</script>

<template>
  <div class="min-h-screen app-bg flex justify-center px-4">
    <div class="w-full max-w-5xl py-14">

      <!-- Header -->
      <h1 class="text-4xl font-bold text-[#5E56E7] mb-3">
        Gutenberg Project
      </h1>

      <p class="text-gray-700 max-w-xl mb-12 leading-relaxed">
        A social cataloging website that allows you to freely search its database of books,
        annotations, and reviews.
      </p>

      <!-- Categories -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <button
          v-for="cat in categories"
          :key="cat.key"
          @click="goToCategory(cat.key)"
          class="category-card flex items-center justify-between
                 rounded-lg px-6 py-4"
        >
          <div class="flex items-center gap-4">
            <!-- <span class="text-[#5E56E7] text-lg">
              {{ cat.icon }}
            </span>
            <span class="uppercase font-medium tracking-wide text-gray-800">
              {{ cat.label }}
            </span> -->
            <component
              :is="cat.icon"
              class="w-5 h-5 text-[#5E56E7]"
            />
            <span class="uppercase font-medium tracking-wide text-gray-800">
              {{ cat.label }}
            </span>

          </div>

          <!-- <span class="text-[#5E56E7] text-xl">→</span> -->
        </button>
      </div>

    </div>
  </div>
</template>
