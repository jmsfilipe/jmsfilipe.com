<template>
  <div class="relative border-b border-gray-200 dark:border-gray-800 py-8">
    <div class="flex flex-col lg:flex-row items-start gap-6">
      <div class="flex-1">
        <div
          class="flex flex-col lg:flex-row lg:items-center lg:justify-between"
        >
          <h1
            class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight"
          >
            <slot name="title">
              {{ title }}
            </slot>
          </h1>
        </div>

        <div
          v-if="description || $slots.description"
          class="mt-4 text-lg text-gray-500 dark:text-gray-400"
        >
          <slot name="description">
            {{ description }}
          </slot>
        </div>

        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { title = "", description = "" } = defineProps<{
  title: string;
  description?: string;
}>();
</script>
