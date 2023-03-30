<script>
import { store } from "../../store.js";
export default {
  name: "YugiMainNumberVisual",
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <div class="__visualizer mb-3 container bg-dark text-white w-50 fw-bold py-2">
    <span>
      There {{ store.cardsLength === 1 ? "is" : "are" }}
      {{ store.cardsLength }} card{{ store.cardsLength === 1 ? "" : "s" }} that
      correspond to your query</span
    >
  </div>
</template>
<style scoped>
.__visualizer {
  text-align-last: center;
  font-size: 1.2em;
}
</style>
