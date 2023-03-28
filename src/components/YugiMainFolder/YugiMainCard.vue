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
    <div class="__content">
      <div class="__title">{{ card.name }}</div>
      <div class="__type">{{ card.type }}</div>
    </div>
  </div>
</template>
<style scoped></style>
