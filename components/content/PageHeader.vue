<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  orientation: {
    type: String,
    required: false,
    default: "left",
  },
});
</script>

<template>
  <div class="not-prose relative pt-14 pb-10 lg:mt-28 lg:pb-24">
    <div class="absolute top-0 left-0 pointer-events-none w-full text-clip overflow-hidden" :class="[orientation === 'center' ? 'flex justify-center' : '']" v-parallax data-rellax-speed="2">
      <span 
      :class="[
        'font-display text-zinc-900 dark:text-zinc-50 opacity-2 text-center w-full',
        title.length > 10 ? 'text-[6rem] lg:text-[7rem]' : 'text-[9rem] lg:text-[10rem]'
      ]"
      >
      {{ title }}
      </span>
    </div>
    <div>
      <template v-if="orientation === 'left'">
        <div class="max-w-xl">
          <h1 class="font-thin font-display text-6xl text-gradient leading-tighter w-max max-w-full">{{ title }}</h1>
        </div>
        <div class="max-w-2xl">
          <p class="mt-6 lg:mt-9 dark:text-zinc-500">
            <slot name="description">{{ description }}</slot>
          </p>
        </div>
      </template>
      <template v-if="orientation === 'center'">
        <div class="max-w-xl mx-auto flex justify-center">
          <h1 class="font-display text-6xl text-gradient leading-tighter text-center w-max">{{ title }}</h1>
        </div>
        <div class="max-w-2xl mx-auto">
          <p class="mt-6 lg:mt-9 dark:text-zinc-500 text-center">
            <slot name="description">{{ description }}</slot>
          </p>
        </div>
      </template>
    </div>
  </div>
</template>
