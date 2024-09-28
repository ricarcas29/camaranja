<template>
  <div>
      <NuxtLoadingIndicator />
      <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { useHead } from "@vueuse/head";
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