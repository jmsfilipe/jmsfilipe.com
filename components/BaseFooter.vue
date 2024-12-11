<template>
  <footer class="relative">
    <div>
      <UContainer
        class="py-8 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3"
      >
        <div
          class="flex items-center justify-center lg:justify-start lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1"
        >
          <slot name="left" />
        </div>

        <div
          class="lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3"
        >
          <slot name="right" />
        </div>
      </UContainer>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
