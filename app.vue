<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { useHead } from "@vueuse/head";

const { page } = useContent();
if (page.value) {
  defineOgImage({
    component: "default",
    title: page.value.title,
    description: page.value.description,
    layout: page.value.layout,
    cover: page.value.cover,
    author: page.value.author,
    date: page.value.date,
    ...(page.value.ogImage || {}),
  });
}
useHead({
  title: "Portfolio",
  htmlAttrs: {
    lang: "es",
    class: "font-body h-full antialiased",
  },
  bodyAttrs: {
    class: "flex h-full flex-col bg-zinc-100 text-zinc-700 dark:text-zinc-300 dark:bg-body-dark",
  },
});
</script>
