<script>
import YugiNav from "./components/YugiNav.vue";
import YugiFooter from "./components/YugiFooter.vue";
import YugiMain from "./components/YugiMainFolder/YugiMain.vue";

export default {
  data() {
    return {};
  },
  components: {
    YugiNav,
    YugiFooter,
    YugiMain,
  },
};
</script>

<template>
  <YugiNav></YugiNav>
  <YugiMain></YugiMain>
  <YugiFooter></YugiFooter>
</template>

<style scoped></style>
