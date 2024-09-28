<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { routes } from '~/types/routes';

// Definición de links a partir de routes
const links = routes as { name: string; to: string }[];

// Mostrar u ocultar el header
const showHeader = ref(true);
const lastScrollPosition = ref(0);

// Función que maneja el scroll
const onScroll = () => {
  // Obtener la posición actual del scroll
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Ignorar scroll negativo o cambios menores
  if (currentScrollPosition < 0) return;
  if (Math.abs(currentScrollPosition - lastScrollPosition.value) < 60) return;

  // Mostrar el header si estamos desplazándonos hacia arriba
  showHeader.value = currentScrollPosition < lastScrollPosition.value;

  // Actualizar la última posición de scroll
  lastScrollPosition.value = currentScrollPosition;
};

// Asegurarse de que solo se ejecuta en el cliente
if (process.client) {
  // Montar el listener de scroll cuando el componente esté montado
  onMounted(() => {
    window.addEventListener('scroll', onScroll);
  });

  // Limpiar el listener de scroll cuando el componente se desmonte
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll);
  });
}
</script>

<template>
  <div :class="[showHeader ? 'translate-y-0' : '-translate-y-full', 'transform-gpu transition-transform duration-500 sticky top-0 z-50']">
    <Container class="pt-4 lg:pt-10">
      <div class="flex items-center justify-between">
        <Logo />
        <div class="border border-zinc-300/50 dark:border-zinc-900/60 rounded-full pl-2 lg:pl-4 pr-2 py-2 backdrop-blur-lg bg-zinc-100/50 dark:bg-zinc-800/50">
          <div class="flex items-center gap-4">
            <div class="hidden lg:block">
              <NavLinks :links="links" />
            </div>
            <div class="lg:hidden">
              <NavLinksMobile :links="links" />
            </div>
            <ColorModeSwitch />
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>
