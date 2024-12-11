<script setup lang="ts">
const { path } = useRoute();

const { data: post } = await useAsyncData(`blog-post-${path}`, () =>
  queryContent("/blog").where({ _path: path }).findOne()
);
</script>
<template>
  <UContainer>
    <BasePage>
      <article>
        <PageHeader :title="post.title" />
        <BlogHero :title="post.title" :image="post.image" />
        <div class="relative flex items-center gap-x-3 mt-4">
          <BlogAuthor :author="post.author" />
          <BlogDate :date="post.timestamp" />
        </div>
        <PageBody prose>
          <ContentRendererMarkdown :value="post.body" />
        </PageBody>
      </article>
    </BasePage>
  </UContainer>
</template>
