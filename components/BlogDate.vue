<script setup lang="ts">
const { date } = defineProps<{
  date: string;
}>();
const datetime = computed(() => {
  if (!date) {
    return undefined;
  }

  try {
    return new Date(date).toISOString();
  } catch {
    return undefined;
  }
});
</script>
<template>
  <time
    v-if="date"
    :datetime="datetime"
    class="text-sm text-gray-500 dark:text-gray-400 font-medium pointer-events-none"
  >
    {{ date }}
  </time>
</template>
