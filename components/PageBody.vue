<template>
  <div
    :class="[
      'mt-8 pb-24',
      prose ? 'prose prose-primary dark:prose-invert max-w-none' : '',
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const { prose = false } = defineProps<{
  prose?: boolean;
}>();
</script>
