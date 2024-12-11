<script setup lang="ts">
import type { Author } from "~/types";
const { author } = defineProps<{
  author: Author;
}>();
</script>
<template>
  <UAvatar
    :alt="author?.name"
    :src="author?.avatar"
    class="relative ring-1 lg:hover:scale-105 lg:hover:ring-primary-500 dark:lg:hover:ring-primary-400 transition-transform"
  >
    <NuxtLink
      v-if="author?.to"
      :to="author?.to"
      class="focus:outline-none"
      tabindex="-1"
    >
      <span class="absolute inset-0" aria-hidden="true" />
    </NuxtLink>
  </UAvatar>
</template>
