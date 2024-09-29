<script setup lang="ts">
const props = defineProps({
    path: String,
    title: String,
    description: String,
    cover: String,
    author: Object,
});

const twitter = props.author?.link?.replace("https://twitter.com/", "@");
</script>

<template>
    <div
        class="w-full h-full flex flex-col items-center justify-center text-white bg-gray-900 p-8"
    >
        <div class="px-5 py-3 rounded absolute bottom-10 bg-white right-10">
            <img src="/logo.svg" width="99" height="29" />
        </div>
        <div class="pb-10 flex flex-col items-center">
            <img
                v-if="cover"
                :src="cover"
                width="432"
                height="243"
                class="rounded-lg overflow-hidden"
            />
            <h1 class="text-6xl leading-tight mt-5">
                {{ title }}
            </h1>
            <p class="text-2xl leading-snug text-gray-400 mx-10 mt-5">
                {{ description }}
            </p>
            <div v-if="author" class="flex items-center mt-5">
                <img
                    :src="author.avatarUrl"
                    width="80"
                    height="80"
                    class="rounded-full mr-5"
                />
                <div class="flex flex-col text-gray-300">
                    <div class="text-3xl whitespace-pre">
                        {{ author.name }}
                    </div>
                    <div class="text-gray-200">{{ twitter }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
