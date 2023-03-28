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
      store,
    };
  },
  components: {
    YugiMainCard,
  },

  created() {
    // facciamo la chiamata API al caricamento della pagina

    axios
      .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0")
      .then((res) => {
        this.store.cards = res.data;
        console.log(this.store.cards);
      });
  },
};
</script>
<template>
  <div class="container-fluid __container-outer py-5">
    <div class="container __cards-container">
      <YugiMainCard
        v-for="card in store.cards.data"
        :card="card"
      ></YugiMainCard>
    </div>
  </div>
</template>
<style scoped>
/* .__cards-container {

} */
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
