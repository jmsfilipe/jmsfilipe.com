<template>
  <article
    class="relative group flex flex-col w-full gap-y-6 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-center"
  >
    <div v-if="image || $slots.image">
      <slot name="image">
        <BlogHero :title="title" :image="image" />
      </slot>
    </div>

    <div class="flex flex-col justify-between flex-1">
      <div class="flex-1">
        <NuxtLink v-if="to" :to="to" class="focus:outline-none" tabindex="-1">
          <span class="absolute inset-0" aria-hidden="true" />
        </NuxtLink>

        <h2
          v-if="title || $slots.title"
          class="text-gray-900 dark:text-white text-xl font-semibold truncate group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200"
        >
          <slot name="title">
            {{ title }}
          </slot>
        </h2>

        <div
          v-if="description || $slots.description"
          class="text-base text-gray-500 dark:text-gray-400 mt-1"
        >
          <slot name="description">
            {{ description }}
          </slot>
        </div>

        <slot />
      </div>

      <div
        v-if="author || $slots.author || date || $slots.date"
        class="relative flex items-center gap-x-3 mt-4"
      >
        <slot name="author">
          <BlogAuthor :author="author" />
        </slot>

        <slot name="date">
          <BlogDate :date="date" />
        </slot>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Author } from "~/types";

const {
  to = "",
  title = "",
  description = "",
  date = "",
  image = "",
  author,
} = defineProps<{
  to?: string;
  title?: string;
  description?: string;
  date?: string;
  image?: string;
  author: Author;
}>();
</script>
