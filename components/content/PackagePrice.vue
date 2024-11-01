<template>
  <div class="not-prose">
    <div class="mx-auto max-w-2xl rounded-3xl ring-1 ring-zinc-200 dark:ring-zinc-50/5 lg:mx-0 lg:flex lg:max-w-none lg:items-stretch">
      <div class="p-8 sm:p-10 lg:flex-auto">
        <h3 class="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-200">{{ title }}</h3>
        <p v-if="description" class="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-500">{{ description }}</p>
        <ul role="list" class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          <li v-for="feature in includedFeatures" :key="feature" class="flex gap-x-2">
            <Icon name="heroicons:check" class="h-6 w-5 flex-none text-yellow-600" />
            {{ feature }}
          </li>
        </ul>
      </div>
      <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-sm lg:flex-shrink-0">
        <div
          class="relative overflow-hidden rounded-2xl py-10 text-center ring-1 ring-inset ring-zinc-900/5 lg:flex lg:flex-col lg:justify-center lg:py-8 lg:h-full"
          :class="[image ? 'bg-zinc-900/30 dark:bg-zinc-800' : 'bg-zinc-900/30 dark:bg-zinc-800/30']"
        >
          <div v-if="image" class="absolute inset-0 mix-blend-overlay">
            <NuxtImg :src="image.src" :alt="image.alt" :width="image.width" :height="image.height" class="w-full h-full object-cover" />
          </div>
          <div class="mx-auto max-w-xs px-8 z-10 flex flex-col justify-between h-full">
            <p class="flex items-baseline justify-center gap-x-2">
              <span class="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">{{ price }}</span>
              <span class="text-sm font-semibold leading-6 tracking-wide text-zinc-800 dark:text-zinc-200">{{ currency }}</span>
            </p>
            <a :href="$props.url" target="_blank" rel="noopener noreferrer" class="mt-4 decoration-transparent">
              <button class="btn">¡Comencemos!</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Image } from "~/types/image";
interface Props {
  title: string;
  description?: string;
  includedFeatures: string[];
  price: string;
  currency?: string;
  image?: Image;
  url?:string;
}

withDefaults(defineProps<Props>(), {
  description: "",
  currency: "MXN",
});
</script>
<style scoped>
.btn {
  padding: 0.5em 1em;
  background: none;
  border: 2px solid #fff;
  font-size: 1rem;
  color: #131313;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  border-radius: 12px;
  background-color: #facc15;
  font-weight: bolder;
  box-shadow: 0 2px 0 2px #000;
}

.btn:before {
  content: "";
  position: absolute;
  width: 100px;
  height: 120%;
  background-color: #db2777;
  top: 50%;
  transform: skewX(30deg) translate(-150%, -50%);
  transition: all 0.5s;
}

.btn:hover {
  background-color: #facc15;
  color: #fff;
  font-size: 0.875rem;
  box-shadow: 0 2px 0 2px #0d3b66;
}

.btn:hover::before {
  transform: skewX(30deg) translate(150%, -50%);
  transition-delay: 0.1s;
}

.btn:active {
  transform: scale(0.9);
}

@media (max-width: 768px) {
  .btn {
    font-size: 0.875rem;
    padding: 0.5em 0.75em;
  }
}

@media (max-width: 480px) {
  .btn {
    font-size: 0.75rem;
    padding: 0.5em 0.5em;
  }
}
</style>
