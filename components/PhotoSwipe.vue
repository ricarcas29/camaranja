<script setup>
import { ref, onMounted, onUnmounted, useSlots } from "vue";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

const gallery = ref(null);
const slots = useSlots();
const children = slots.default() ? slots.default()[0].children : false;
const childrenType = children ? children[0].type : false;

let lightbox;

onMounted(() => {
  if (!lightbox && childrenType) {
    lightbox = new PhotoSwipeLightbox({
      gallery: gallery.value,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();
  }
});

onUnmounted(() => {
  if (lightbox) {
    lightbox.destroy();
    lightbox = null;
  }
});
</script>

<template>
  <div ref="gallery">
    <slot />
  </div>
</template>

<style>
.pswp img {
  object-fit: cover;
  object-position: center;
}

.watermark-container {
  position: relative;
  display: inline-block;
}

.watermark-container img {
  display: block;
}

.watermark {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px;
  font-size: 12px;
  pointer-events: none;
}
</style>
