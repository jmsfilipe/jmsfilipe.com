<script setup lang="ts">
const links = [
  {
    label: "About",
    icon: "i-heroicons-book-open",
    to: "/about",
  },
  {
    label: "Work experience",
    icon: "i-heroicons-square-3-stack-3d",
    to: "/work-experience",
  },
  {
    label: "Projects",
    icon: "i-heroicons-square-3-stack-3d",
    to: "/projects",
  },
  {
    label: "Blog",
    icon: "i-heroicons-rocket-launch",
    to: "/blog",
  },
];
</script>
<template>
  <div>
    <BaseHeader :links="links">
      <template #logo>
        <BaseLogo class="w-auto h-6" />
      </template>

      <template #right>
        <ColorModeButton variant="ghost" />
      </template>
    </BaseHeader>

    <BaseMain>
      <slot />
    </BaseMain>

    <BaseFooter>
      <template #left> Copyright © {{ new Date().getFullYear() }} </template>

      <template #right>
        <UButton
          icon="i-simple-icons-linkedin"
          color="gray"
          variant="ghost"
          to="https://www.linkedin.com/in/jmsfilipe/"
          target="_blank"
        />
        <UButton
          icon="i-simple-icons-github"
          color="gray"
          variant="ghost"
          to="https://github.com/jmsfilipe"
          target="_blank"
        />
      </template>
    </BaseFooter>
  </div>
</template>
