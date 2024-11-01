<script setup lang="ts">
import type { Image } from "~/types/image";
import type { PropType } from "vue";

type Gallery = {
  _path: string;
  title: string;
  description?: string;
  cover?: Image;
  images?: Image[];
};

defineProps({
  gallery: {
    type: Object as PropType<Gallery>,
    required: true,
    validator: (value: Gallery) => !!value._path && !!value.title,
  },
});
</script>

<template>
  <NuxtLink :to="gallery._path" class="group">
    <div class="relative flex h-full flex-col justify-center overflow-hidden">
      <div class="relative h-full w-full rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
        <div class="w-full h-full overflow-hidden rounded-xl border border-gray-200 opacity-100 transition group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
          <NuxtImg
            :src="gallery.cover?.src || 'img/placeholder.jpg'"
            :alt="gallery.cover?.alt || gallery.title"
            :width="gallery.cover?.width"
            :height="gallery.cover?.height"
            class="h-full w-full object-cover object-center group-hover:opacity-75"
            sizes="sm:100vw md:50vw lg:30vw"
            loading="lazy"
            placeholder
          />
          <div v-if="gallery.images?.length" class="grid grid-cols-3 gap-3">
            <div v-for="(thumbnail, index) in gallery.images.slice(0, 4)" :key="index" class="aspect-square w-full rounded-lg overflow-hidden group-hover:opacity-75 dark:bg-zinc-800">
              <NuxtImg :src="thumbnail.src" :alt="thumbnail.alt" class="w-full object-cover object-center" loading="lazy" sizes="sm:100vw md:50vw lg:30vw" placeholder />
            </div>
          </div>
        </div>
        <div class="absolute bottom-0 z-20 pb-4 ps-4 transition group-hover:-translate-y-1 group-hover:translate-x-2 group-hover:scale-105">
          <h1 class="font-serif w-full text-wrap text-xl lg:text-lg md:text-sm font-bold text-white shadow-sm">{{ gallery.title }}</h1>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
