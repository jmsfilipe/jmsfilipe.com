<script setup lang="ts">
const { data: posts } = await useAsyncData("blog-posts", () =>
  queryContent("/blog").find()
);
</script>
<template>
  <UContainer>
    <BasePage>
      <PageHeader title="Blog" />
      <PageBody>
        <BlogList>
          <BlogPost
            v-for="post in posts"
            :key="post._id"
            :title="post.title"
            :description="post.description"
            :image="post.image"
            :to="post._path"
            :date="post.timestamp"
            :author="post.author"
          />
        </BlogList>
      </PageBody>
    </BasePage>
  </UContainer>
</template>
