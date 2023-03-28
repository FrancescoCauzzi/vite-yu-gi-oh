<script>
export default {
  name: "YugiMainCard",
  data() {
    return {};
  },
  props: {
    card: Object,
  },
};
</script>
<template>
  <div class="__card">
    <div class="__image-container">
      <img :src="card.card_images[0].image_url" />
    </div>
    <div class="__content d-flex flex-column align-items-center">
      <div class="__title fw-bold">{{ card.name }}</div>
      <div class="__type">{{ card.type }}</div>
    </div>
  </div>
</template>
<style scoped>
.__card {
  width: calc(100% / 5 * 1 - (20px / 5 * 4));
  border: 1px solid black;
  box-shadow: 5px 10px;
  min-width: 220px;
}

.__content {
  background-color: black;
  color: white;
}

img {
  width: 100%;
}
</style>
