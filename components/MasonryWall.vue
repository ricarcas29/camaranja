<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, toRefs, watch } from "vue";
import type { Ref } from "vue";

type Column = number[];

interface Props {
  items: unknown[];
  columnWidth?: number;
  gap?: number;
  rtl?: boolean;
  ssrColumns?: number;
  scrollContainer?: HTMLElement | null;
}

const props = withDefaults(defineProps<Props>(), {
  columnWidth: 400,
  gap: 0,
  rtl: false,
  ssrColumns: 0,
  scrollContainer: null,
});

const emit = defineEmits<{
  (event: "redraw"): void;
  (event: "redrawSkip"): void;
}>();

const { columnWidth, items, gap, rtl, ssrColumns, scrollContainer } =
  toRefs(props);
const columns = ref<Column[]>([]);
const wall = ref<HTMLDivElement>() as Ref<HTMLDivElement>;

// Definir la cantidad de columnas
function columnCount(): number {
  const count = Math.floor(
    (wall.value.getBoundingClientRect().width + gap.value) /
      (columnWidth.value + gap.value)
  );
  return count > 0 ? count : 1;
}

// Crear nuevas columnas
function createColumns(count: number): Column[] {
  return [...new Array(count)].map(() => []);
}

// Generar columnas de forma estática en SSR (si `ssrColumns` es mayor que 0)
if (ssrColumns.value > 0) {
  const newColumns = createColumns(ssrColumns.value);
  items.value.forEach((_: unknown, i: number) =>
    newColumns[i % ssrColumns.value]!.push(i)
  );
  columns.value = newColumns;
}

// Función para distribuir los elementos en las columnas
async function fillColumns(itemIndex: number) {
  if (itemIndex >= items.value.length) return;
  await nextTick();

  const columnDivs = [...wall.value.children] as HTMLDivElement[];
  if (rtl.value) columnDivs.reverse();

  const target = columnDivs.reduce((prev, curr) =>
    curr.getBoundingClientRect().height < prev.getBoundingClientRect().height
      ? curr
      : prev
  );
  columns.value[+target.dataset.index!]!.push(itemIndex);
  await fillColumns(itemIndex + 1);
}

// Función para redibujar las columnas
async function redraw(force = false) {
  if (columns.value.length === columnCount() && !force) {
    emit("redrawSkip");
    return;
  }
  columns.value = createColumns(columnCount());

  const scrollTarget = scrollContainer?.value;
  const scrollY = scrollTarget ? scrollTarget.scrollTop : window.scrollY;

  await fillColumns(0);

  scrollTarget
    ? scrollTarget.scrollBy({ top: scrollY - scrollTarget.scrollTop })
    : window.scrollTo({ top: scrollY });

  emit("redraw");
}

// Definir `ResizeObserver` solo si está disponible en el cliente
let resizeObserver: ResizeObserver | undefined;

if (process.client) {
  resizeObserver =
    typeof ResizeObserver === "undefined"
      ? undefined
      : new ResizeObserver(() => redraw());
}

// Solo ejecuta el código relacionado con el DOM en el cliente
if (process.client) {
  onMounted(() => {
    redraw();
    resizeObserver?.observe(wall.value);
  });

  onBeforeUnmount(() => {
    resizeObserver?.unobserve(wall.value);
  });

  // Observa cambios en los items y RTL para redibujar las columnas
  watch([items, rtl], () => redraw(true));

  // Observa cambios en `columnWidth` y `gap` para redibujar
  watch([columnWidth, gap], () => redraw());
}
</script>

<template>
  <div
    ref="wall"
    class="masonry-wall"
    :style="{ display: 'flex', gap: `${gap}px` }"
  >
    <div
      v-for="(column, columnIndex) in columns"
      :key="columnIndex"
      class="masonry-column"
      :data-index="columnIndex"
      :style="{
        display: 'flex',
        'flex-basis': '0px',
        'flex-direction': 'column',
        'flex-grow': 1,
        gap: `${gap}px`,
        height: ['-webkit-max-content', '-moz-max-content', 'max-content'] as any,
        'min-width': 0
      }"
    >
      <div v-for="itemIndex in column" :key="itemIndex" class="masonry-item">
        <slot :item="items[itemIndex]" :index="itemIndex">
          {{ items[itemIndex] }}
        </slot>
      </div>
    </div>
  </div>
</template>
