<template>
  <div class="py-24 sm:py-32 md:py-40 relative">
    <UContainer class="gap-16 sm:gap-y-24 flex flex-col">
      <div class="text-center">
        <div v-if="$slots.headline" class="mb-10">
          <slot name="headline" />
        </div>

        <h1
          class="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl"
        >
          <slot name="title">
            {{ title }}
          </slot>
        </h1>

        <div
          v-if="description || $slots.description"
          class="mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300n"
        >
          <slot name="description">
            {{ description }}
          </slot>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const { title = "title", description = "" } = defineProps<{
  title: string;
  description?: string;
}>();
</script>
