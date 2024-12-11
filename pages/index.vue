<script setup lang="ts"></script>
<template>
  <div>
    <LandingHero title="I'm Jorge.">
      <template #description>
        <ContentDoc />
      </template>
      <template #headline>
        <UAvatar
          src="https://avatars.githubusercontent.com/u/9056469?s=96&v=4"
          alt="Avatar"
          size="3xl"
        />
      </template>
    </LandingHero>
  </div>
</template>
