<script setup lang="ts">
const { links } = defineProps<{ links: { name: string; to: string }[] }>();

const containsRoute = (path: string, to: string) => {
  if (to === '/') {
    return path === '/';
  }
  return path.startsWith(to) && path !== '/';
};
</script>

<template>
  <ul class="flex items-center gap-4">
    <li v-for="(link, index) in links" :key="`navlinks-${index}`">
      <NuxtLink
        :to="link.to"
        :class="[
          containsRoute($route.path, link.to)
            ? 'text-gradient'
            : 'text-zinc-700 dark:text-zinc-400',
          'px-2 hover:text-zinc-900 dark:hover:text-zinc-200'
        ]"
      >
        {{ link.name }}
      </NuxtLink>
    </li>
  </ul>
</template>