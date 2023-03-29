<script>
import { store } from "../../store.js";

export default {
  name: "YugiSearchButton",

  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <div class="__search">
    <input
      v-model="store.cardName"
      type="text"
      placeholder="Srcivi il nome della carta che cerchi"
      @keyup.enter="$emit('searchCard')"
    />
    <button @click="$emit('searchCard')">Cerca</button>
  </div>
</template>
<style></style>
