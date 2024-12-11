<script setup lang="ts">
const isDarkMode = useIsDarkMode();
</script>
<template>
  <NuxtImg v-if="isDarkMode" src="/logo_dark.svg" />
  <NuxtImg v-else src="/logo.svg" />
</template>
