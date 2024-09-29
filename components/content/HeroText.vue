<template>
  <div class="not-prose lg:max-w-3xl mx-auto pt-4 lg:pt-2 content-visibility-auto contain-intrinsic-size-[auto_400px]">
    <div class="flex flex-col gap-9">
      <div class="text-center font-display font-light leading-snug text-3xl md:text-4xl lg:text-5xl text-zinc-700 dark:text-zinc-300">
        <slot> Creatividad, imaginación y un poco de amor. </slot>
      </div>
      <p class="text-zinc-700 dark:text-zinc-400 text-center text-sm lg:text-base px-0 md:px-14 lg:px-24">
        <slot name="description"> Explora mi portafolio de fotografía y ve el mundo a través de mi lente creativo. Contáctame si deseas contratarme. </slot>
      </p>
    </div>
  </div>
</template>
