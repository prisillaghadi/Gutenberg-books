<script setup>
defineProps({
  title: String,
  author: String,
  cover: String,
  formats: Object
})

import { getReadableBookUrl } from '@/utils/openBook'

function openBook(formats) {
  const url = getReadableBookUrl(formats)
  if (!url) {
    alert('No viewable version available')
    return
  }
  window.open(url, '_blank')
}
</script>

<template>
  <div
    class="cursor-pointer w-[114px]"
    @click="openBook(formats)"
  >
    <img
      :src="cover"
      alt="Book cover"
      class="w-[114px] h-[162px]
      object-cover rounded-[8px]
      shadow-[var(--shadow-card)]"
    />

    <p class="mt-2 text-[12px] font-medium text-[var(--color-grey-dark)] leading-tight">
      {{ title }}
    </p>

    <p class="text-[12px] text-[var(--color-grey-medium)]">
      {{ author }}
    </p>
  </div>
</template>
