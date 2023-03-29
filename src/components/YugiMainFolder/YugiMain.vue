<script>
import YugiMainCard from "./YugiMainCard.vue";

import { store } from "../../store.js";

// RICORDIAMOCI che dobbiamo prima installare la dipendenza "axios" con npm install
// sintassi per importare axios, uguale per tutti
import axios from "axios";

export default {
  name: "YugiMain",
  data() {
    return {
      loading: false,
      store,
    };
  },
  components: {
    YugiMainCard,
  },

  created() {
    this.fetchData();
    // facciamo la chiamata API al caricamento della pagina
    // axios
    //   .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0")
    //   .then((res) => {
    //     this.store.cards = res.data;
    //     console.log(this.store.cards);
    //   });
  },
  methods: {
    async fetchData() {
      this.loading = true;
      try {
        const response = await axios.get(
          "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0"
        );
        this.store.cards = response.data;
        console.log(this.store.cards);
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
    },
  },
};
</script>
<template>
  <div class="container-fluid __container-outer py-5">
    <div class="container">
      <div class="__loader" v-if="loading"></div>
      <div class="__cards-container" v-else>
        <YugiMainCard
          v-for="item in store.cards.data"
          :card="item"
        ></YugiMainCard>
      </div>
    </div>
  </div>
</template>
<style scoped>
.__loader {
  background-image: url(/img/yugi-bg.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 1000px;
  /* position: fixed; */
}
.__container-outer {
  background-image: url(/img/bg-custom-img.jpg);
  background-repeat: repeat;
}

.__cards-container {
  display: flex;

  flex-flow: row wrap;
  gap: 20px;
}
</style>
