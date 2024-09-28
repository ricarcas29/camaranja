<script setup lang="ts">
import { withTrailingSlash } from "ufo";
import { ref} from "vue";

const props = defineProps({
  path: {
    type: String,
    default: "stories",
  },
});

const loading = ref(true);
const error = ref(null);
const stories = ref([]);

try {
  const { data: _stories } = await useAsyncData(
    "stories",
    async () =>
      await queryContent(withTrailingSlash(props.path)).sort({ date: -1 }).find()
  );
  stories.value = _stories.value || [];
} catch (err) {
  error.value = err.message || "Failed to load stories.";
} finally {
  loading.value = false;
}

</script>

<template>
  <div v-if="loading">
    <p>Loading stories...</p>
  </div>
  <div v-else-if="error">
    <p class="text-red-500">{{ error }}</p>
  </div>
  <div
    v-else-if="stories.length"
    class="not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
  >
    <StoryListItem v-for="story in stories" :key="story._path" :story="story" />
  </div>
  <div v-else>
    <p>No Stories found.</p>
  </div>
</template>
