<template>
  <UCard>
    <div>
      <div v-if="icon || $slots.icon" class="mb-2 pointer-events-none">
        <slot name="icon"> </slot>
      </div>

      <p
        v-if="title || $slots.title"
        class="text-gray-900 dark:text-white text-base font-bold truncate"
      >
        <slot name="title">
          {{ title }}
        </slot>
      </p>

      <div
        v-if="description || $slots.description"
        class="text-[15px] text-gray-500 dark:text-gray-400 mt-1"
      >
        <slot name="description">
          {{ description }}
        </slot>
      </div>

      <slot name="container" />
    </div>

    <slot v-if="$slots.default" />
  </UCard>
</template>

<script setup lang="ts">
const {
  title = "title",
  description = "",
  icon = "",
} = defineProps<{
  title?: string;
  description?: string;
  icon?: string;
}>();
</script>
