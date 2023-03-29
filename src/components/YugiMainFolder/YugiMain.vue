<script>
import YugiMainCard from "./YugiMainCard.vue";
import YugiSearchButton from "./YugiSearchButton.vue";

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
    YugiSearchButton,
  },

  created() {
    //this.fetchData();
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
    async searchCards() {
      // In this example, the searchQuery variable contains the search query "Dark Magician". The encodeURIComponent() function is then used to encode the search query into the encodedQuery variable. The resulting encoded search query is "Dark%20Magician", which can be used in a URL to search for cards with the name "Dark Magician".
      const searchQuery = this.searchQuery;
      const encodedQuery = encodeURIComponent(searchQuery);
      const apiUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${encodedQuery}`;

      try {
        const response = await axios.get(apiUrl);
        this.cards = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    search() {
      let apiNewString = this.store.APIcall;

      // controlliamo se almeno un parametro di ricerca è stato settato
      if (this.store.cardName != "") {
        // iniziamo a dirgli di preparare la query dei parametri
        apiNewString += "?";

        // se il nome è stato indicato
        if (this.store.cardName != "") {
          // inserisco la ricerca del nome
          apiNewString += `fname=${this.store.cardName}`;

          // se ho inserito il nome E c'è anche la ricerca per stato
          // if (this.store.cardStatus != "") {
          //   apiNewString += "&";
          // }
        }

        // se è settato il valore del campo characterStatus
        // if (this.store.characterStatus != "") {
        //   apiNewString += `status=${this.store.characterStatus}`;
        // }
      }

      console.log(apiNewString);

      axios.get(apiNewString).then((res) => {
        console.log(res.data);
        this.store.cards = res.data;
      });
    },
  },
};
</script>
<template>
  <div class="container-fluid __container-outer py-5">
    <div class="container">
      <div class="__search-field py-4">
        <YugiSearchButton @searchCard="search()"></YugiSearchButton>
      </div>
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
  min-height: 87vh;
}

.__cards-container {
  display: flex;

  flex-flow: row wrap;
  gap: 20px;
}
</style>
