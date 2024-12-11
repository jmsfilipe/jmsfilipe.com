<template>
  <div v-if="links?.length" class="space-y-3 mb-3 lg:mb-6 -mx-1 lg:mx-0">
    <ULink
      v-for="(link, index) in links"
      :key="index"
      v-slot="{ isActive }"
      class="flex items-center gap-1.5 lg:gap-2 group"
      active-class="text-primary font-semibold"
      inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 font-medium"
      :to="link.to"
    >
      <div
        v-if="link.icon"
        :class="[
          'rounded-md p-1 inline-flex ring-inset ring-1',
          isActive
            ? 'bg-primary ring-primary text-background'
            : 'bg-gray-100/50 dark:bg-gray-800/50 ring-gray-300 dark:ring-gray-700 group-hover:bg-primary group-hover:ring-primary group-hover:text-background',
        ]"
      >
        <UIcon :name="link.icon" class="w-4 h-4 flex-shrink-0" />
      </div>

      <span class="text-sm/6 relative">
        {{ link.label }}
      </span>
    </ULink>
  </div>
</template>

<script setup lang="ts">
import type { Link } from "../types";

const { links = [] } = defineProps<{
  links: Link[];
}>();
</script>
