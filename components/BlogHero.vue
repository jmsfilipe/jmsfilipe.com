<script setup lang="ts">
const { title = "", image = "" } = defineProps<{
  title: string;
  image: string;
}>();
</script>
<template>
  <div
    class="ring-1 ring-gray-200 dark:ring-gray-800 relative overflow-hidden aspect-[16/9] w-full rounded-lg pointer-events-none"
  >
    <NuxtImg
      :src="image"
      :alt="title"
      class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover:scale-105"
    />
  </div>
</template>
