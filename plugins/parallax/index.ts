import Rellax from "rellax";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("parallax", {
    mounted(el, binding) {
      const defaultOptions = {
        speed: -2,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false,
      };

      const options = { ...defaultOptions, ...binding.value };

      el.rellaxInstance = new Rellax(el, options);
    },
    unmounted(el) {
      if (el.rellaxInstance) {
        el.rellaxInstance.destroy();
      }
    },
  });
});
