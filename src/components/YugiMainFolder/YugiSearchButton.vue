<script>
import { store } from "../../store.js";

export default {
  name: "YugiSearchButton",

  data() {
    return {
      store,
    };
  },
  computed: {
    isDisabled() {
      return this.store.cardName === "";
    },
  },
};
</script>
<template>
  <div class="__search">
    <label
      for="cardNameSearch"
      class="form-label px-4 py-2 fw-bold text-white bg-dark"
      id="cardNameSearchLabel"
      >Search for a card in the database of Yugi Oh!</label
    >

    >
    <div class="d-flex gap-2">
      <input
        id="cardNameSearch"
        type="text"
        class="form-control w-50"
        v-model="store.cardName"
        placeholder="Scrcivi il nome della carta che cerchi"
        @keyup.enter="$emit('searchCard')"
      />
      <button
        type="button"
        class="btn btn-primary fw-bold __mybtn-primary"
        @click="$emit('searchCard')"
        :disabled="isDisabled"
      >
        Search
      </button>
    </div>
  </div>
</template>
<style>
#cardNameSearchLabel {
  border-radius: 3px;
  border: 1px solid white;
}

.__mybtn-primary {
  border-radius: 10px;
  border: 2px solid white;
}
</style>
