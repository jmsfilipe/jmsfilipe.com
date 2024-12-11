<script setup lang="ts">
const { data: jobs } = await useAsyncData("work-experience", () =>
  queryContent("/work-experience")
    .where({ _id: { $not: "content:work-experience:index.md" } })
    .find()
);
</script>
<template>
  <UContainer>
    <BasePage>
      <PageHeader title="Work experience" />
      <PageBody prose>
        <ContentDoc />
        <div
          class="lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3 mb-4"
        >
          <UButton
            icon="i-heroicons-arrow-down-tray"
            size="sm"
            color="primary"
            variant="ghost"
            label="Download CV"
            :trailing="false"
            external
            target="_blank"
            to="/cv_jmsfilipe.pdf"
            >Download CV</UButton
          >
        </div>
        <PageGrid>
          <LandingCard v-for="job in jobs" :key="job._id">
            <template #icon>
              <UAvatar :src="job.avatar" />
            </template>
            <template #title>
              {{ job.company }}
            </template>
            <template #description>
              <div>
                {{ job.title }}
              </div>
              <div>
                {{ job.location }}
              </div>
            </template>
            <ContentRendererMarkdown :value="job.body" />
          </LandingCard>
        </PageGrid>
      </PageBody>
    </BasePage>
  </UContainer>
</template>
