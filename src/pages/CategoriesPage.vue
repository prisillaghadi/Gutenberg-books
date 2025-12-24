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
          class="flex items-center justify-between
            bg-white h-[50px] px-[10px] rounded-[4px] shadow-[var(--shadow-card)] 
            hover:shadow-md transition"
        >
          <div class="flex items-center gap-4">
            <img
              :src="cat.icon"
              alt=""
              class="w-5 h-5"
            />
            <span class="uppercase tracking-wide text-[20px] font-medium
            text-[var(--color-grey-dark)]">
              {{ cat.label }}
            </span>

          </div>
          <ArrowRightIcon
            class="w-5 h-5 text-[#5E56E7]"
          />
        </button>
      </div>

    </div>
  </div>
</template>
