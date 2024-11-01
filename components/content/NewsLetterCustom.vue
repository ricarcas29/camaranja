<template>
  <div id="container-stars" class="2xl:mx-auto 2xl:container mx-4 py-16">
    <div id="stars" class="w-full relative flex items-center justify-center">
      <NuxtImg
        placeholder
        class="w-full h-full absolute z-0 hidden xl:block object-cover"
        :src="image1?.src || defaultImage"
        :alt="image1?.alt || 'No alt text'"
        format="webp"
        loading="lazy"
      />
      <NuxtImg
        placeholder
        class="w-full h-full object-cover absolute z-0 hidden sm:block xl:hidden"
        :src="image2?.src || defaultImage"
        :alt="image2?.alt || 'No alt text'"
        format="webp"
        loading="lazy"
      />
      <NuxtImg
        placeholder
        class="object-cover w-full h-full absolute z-0 sm:hidden"
        :src="image3?.src || defaultImage"
        :alt="image3?.alt || 'No alt text'"
        format="webp"
        loading="lazy"
      />
      <div class="bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
        <p class="text-4xl leading-9 text-white dark:text-white text-center">{{ props.title }}</p>
        <p v-if="props.description" class="text-base leading-normal text-center text-white mx-3">{{ props.description }}</p>
        <div class="flex flex-col sm:flex-row items-center lg:w-8/12 w-full mx-4 space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            v-model="email"
            type="email"
            class="border-zinc-300/50 dark:border-zinc-900/60 rounded-full pl-2 lg:pl-4 pr-2 py-2 backdrop-blur-lg bg-zinc-100/50 dark:bg-zinc-800/50 border-white border text-base w-full font-medium leading-none text-white p-2 focus:outline-none placeholder-white"
            placeholder="Email Address"
          />
          <button
            beforeIcon="MailIcon"
            afterIcon="CheckIcon"
            @click.prevent="handleSubmit"
            :disabled="sendingNewsletter || emailError.length > 1"
            class="mx-2 border border-zinc-300/50 dark:border-zinc-900/60 rounded-full pl-2 lg:pl-4 pr-2 py-2 backdrop-blur-lg bg-zinc-100/50 dark:bg-zinc-800/50"
          >
            {{ props.buttonText }}
            <div class="arrow-wrapper">
              <div class="arrow"></div>
            </div>
          </button>
        </div>
        <div v-if="emailError && email.length > 1" class="text-red-500 text-lg font-semibold leading-9">{{ emailError }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import type { Image } from "../../types/image";

interface NewsletterProps {
  title: string;
  description?: string;
  buttonText: string;
  image1?: Image;
  image2?: Image;
  image3?: Image;
}

const props = withDefaults(defineProps<NewsletterProps>(), {
  buttonText: "Suscríbete",
  image1: () => ({ src: "/img/home/personal-photo.webp", alt: "Imagen personal" }),
  image2: () => ({ src: "/img/home/hero-couple.webp", alt: "Pareja" }),
  image3: () => ({ src: "/img/home/hero-beach.webp", alt: "Playa" }),
});

const email = ref("");
const sendingNewsletter = ref(false);

const emailError = computed(() => {
  if (!email.value) return "El correo electrónico es requerido";
  if (email.value.length < 5) return "El correo electrónico es demasiado corto";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) return "El formato del correo electrónico es incorrecto";
  return "";
});

const isFormValid = computed(() => !emailError.value && email.value);

async function handleSubmit() {
  if (!isFormValid.value) return;

  try {
    sendingNewsletter.value = true;
    // Asume que tienes una función sendNewsletter definida en algún lugar
    // const result = await sendNewsletter(email.value);
    console.log(`Email ${email.value} added to subscribers`);

    email.value = "";
  } catch (error) {
    console.error("Error al suscribirse:", error);
  } finally {
    sendingNewsletter.value = false;
  }
}

const defaultImage = "/img/placeholder.jpg";
</script>

<style scoped>
#container-stars {
  overflow: hidden;
  transition: 0.3s;
}

#stars {
  position: relative;
  background: transparent;
}

#stars::after,
#stars::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(#ffffff 1px, transparent 1%);
  background-size: 60px 60px;
  animation: animStar 4s reverse infinite;
}

#stars::after {
  animation-duration: 4s;
  opacity: 0.3;
}

#stars::before {
  animation-duration: 4s;
  opacity: 0.4;
}

@keyframes animStar {
  0% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1.2);
  }
}

button {
  --primary-color: #ff7e00;
  --secondary-color: #fff;
  --hover-color: #da5700;
  --arrow-width: 10px;
  --arrow-stroke: 2px;
  box-sizing: border-box;
  border: 0;
  border-radius: 8px;
  color: var(--secondary-color);
  padding: 1rem auto;
  font-size: 14px;
  background: var(--primary-color);
  display: flex;
  transition: 0.2s background;
  align-items: center;
  gap: 0.6em;
  font-weight: bold;
}

button .arrow-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

button .arrow {
  margin-top: 1px;
  width: var(--arrow-width);
  background: var(red);
  height: var(--arrow-stroke);
  position: relative;
  transition: 0.2s;
}

button .arrow::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  border: solid var(--secondary-color);
  border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
  display: inline-block;
  top: -3px;
  right: 2px;
  transition: 0.2s;
  padding: 3px;
  transform: rotate(-45deg);
}

button:hover {
  background-color: var(--hover-color);
}

button:hover .arrow {
  background: var(--secondary-color);
}

button:hover .arrow:before {
  right: 0;
}
</style>
