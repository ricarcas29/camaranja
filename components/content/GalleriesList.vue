<script setup lang="ts">
import { withTrailingSlash } from "ufo";
import { ref } from "vue";
import { useAsyncData } from "#app";

interface Gallery {
  id: number;
  name: string;
  // Add other fields as necessary
}

const props = defineProps({
  path: {
    type: String,
    default: "galleries",
  },
});

const galleries = ref<Gallery[]>([]);
const error = ref<string | null>(null);
const maxRetries = 3;
let retryCount = 0;

async function fetchGalleries() {
  try {
    return await queryContent(withTrailingSlash(props.path)).find();
  } catch (err) {
    if (err.response && err.response.status === 503 && retryCount < maxRetries) {
      retryCount++;
      console.warn(`Retrying fetch galleries... Attempt ${retryCount}`);
      return fetchGalleries();
    } else {
      error.value = "Failed to fetch galleries.";
      console.error(err);
      return [];
    }
  }
}

const { data: _galleries, error: fetchError } = await useAsyncData("galleries", fetchGalleries);

if (fetchError.value) {
  error.value = fetchError.value.message;
}

galleries.value = _galleries.value || [];
</script>

<template>
  <div v-show="galleries.length" class="not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <GalleryListItem v-for="(gallery, index) in galleries" :key="index" :gallery="gallery" />
  </div>
  <div v-show="!galleries.length && !error" class="text-center">
    <p>No galleries found.</p>
  </div>
  <div v-if="error" class="text-center text-red-500">
    <p>{{ error }}</p>
  </div>
</template>
