<script>
export default {
  data() {
    return {
      title: "Yu Gi Oh Cards",
    };
  },
};
</script>
<template>
  <!-- Image and text -->
  <nav
    class="navbar bg-dark d-flex justify-content-start text-white px-3 __navbar"
  >
    <a class="navbar-brand" href="#">
      <img
        src="/img/logo.png"
        width="30"
        height="30"
        class="d-inline-block align-top"
        alt=""
      />
    </a>
    <h1>{{ title }}</h1>
  </nav>
</template>
<style scoped>
.__navbar {
  border-bottom: 2px solid brown;
}
</style>
