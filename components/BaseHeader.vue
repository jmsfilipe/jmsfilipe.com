<template>
  <header
    class="bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50"
  >
    <UContainer
      class="flex items-center justify-between gap-3 h-[--header-height]"
    >
      <div class="lg:flex-1 flex items-center gap-1.5">
        <slot name="left">
          <ULink
            :to="to"
            aria-label="To homepage"
            class="flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white flex items-end gap-1.5"
          >
            <slot name="logo">
              {{ title }}
            </slot>
          </ULink>
        </slot>
      </div>

      <slot name="center">
        <HeaderLinks :links="links" class="hidden lg:flex" />
      </slot>

      <div class="flex items-center justify-end lg:flex-1 gap-1.5">
        <slot name="right" />

        <slot name="panel-button" :open="isHeaderDialogOpen">
          <UButton
            v-if="links.length || $slots.panel"
            class="lg:hidden"
            :aria-label="`${isHeaderDialogOpen ? 'Close' : 'Open'} Menu`"
            :icon="
              isHeaderDialogOpen
                ? appConfig.ui.icons.close
                : appConfig.ui.icons.menu
            "
            @click="isHeaderDialogOpen = !isHeaderDialogOpen"
          />
        </slot>
      </div>
    </UContainer>

    <Dialog
      as="div"
      :open="isHeaderDialogOpen"
      @close="isHeaderDialogOpen = false"
    >
      <DialogPanel
        class="fixed inset-0 z-50 overflow-y-auto bg-background lg:hidden mt-[--header-height]"
      >
        <div class="px-4 sm:px-6 pt-3 pb-6">
          <slot name="panel">
            <AsideLinks :links="links" />
          </slot>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, provideUseId } from "@headlessui/vue";
import type { Link } from "../types";
import { useId } from "#imports";

const appConfig = useAppConfig();

const {
  links = [],
  to = "/",
  title = "Title",
} = defineProps<{
  links: Link[];
  to?: string;
  title?: string;
}>();

const route = useRoute();
const { isHeaderDialogOpen } = useUIState();

watch(
  () => route.fullPath,
  () => {
    isHeaderDialogOpen.value = false;
  }
);

provideUseId(() => useId() as string);
</script>
<style>
:root {
  --header-height: 3rem;
}
</style>
