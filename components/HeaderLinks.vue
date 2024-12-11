<template>
  <ul v-if="links?.length" class="flex items-center gap-x-8">
    <li v-for="(link, index) of links" :key="index" class="relative">
      <ULink
        class="text-sm/6 font-semibold flex items-center gap-1"
        active-class="text-primary"
        inactive-class="hover:text-primary"
        :to="link.to"
      >
        <slot name="label" :link="link">
          {{ link.label }}
        </slot>
      </ULink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Link } from "../types";

const { links = [] } = defineProps<{
  links: Link[];
}>();
</script>
