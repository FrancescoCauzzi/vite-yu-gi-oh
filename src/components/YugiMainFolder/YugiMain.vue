<script>
import YugiMainCard from "./YugiMainCard.vue";
import YugiSearchButton from "./YugiSearchButton.vue";
import YugiMainNumberVisual from "./YugiMainNumberVisual.vue";

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
    YugiMainNumberVisual,
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
      if (this.store.cardName.trim()) {
        this.loading = true;
        // In this example, the searchQuery variable contains the search query "Dark Magician". The encodeURIComponent() function is then used to encode the search query into the encodedQuery variable. The resulting encoded search query is "Dark%20Magician", which can be used in a URL to search for cards with the name "Dark Magician".
        let apiNewString = this.store.cardName;
        let encodedQuery = encodeURIComponent(apiNewString);
        let apiUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${encodedQuery}`;
        console.log(encodedQuery);

        try {
          this.store.errorMessageToVisulize = "";
          this.store.cardNameToVisualuize = "";

          let response = await axios.get(apiUrl);
          this.store.cards = response.data;
          this.store.cardsLength = this.store.cards.data.length;
          console.log(this.store.cards);

          this.loading = false;
        } catch (error) {
          console.log(error);
          this.store.errorMessage = error.message;
          console.log(this.store.errorMessage);
          this.store.errorMessageToVisulize = this.store.errorMessage;
          this.store.cardNameToVisualuize = this.store.cardName;
        }
        this.store.errorMessage = "";
        this.store.cardName = "";
      }
    },
    // Altro metodo che si occupa di visualizzare le carte
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
        }
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
        <YugiSearchButton @searchCard="searchCards()"></YugiSearchButton>
      </div>
      <div class="__loader d-flex justify-content-center" v-if="loading">
        <div
          class="__error-displayer fw-bold text-white p-3"
          v-if="store.errorMessageToVisulize !== ''"
        >
          The server could not find any card with the name:
          <span class="__error-emph"> '{{ store.cardNameToVisualuize }}'</span>,
          the error you encountered was
          <span class="__error-emph">'{{ store.errorMessageToVisulize }}'</span
          >. <br />
          Search for an existing card.
        </div>
      </div>
      <div class="container" v-else>
        <YugiMainNumberVisual></YugiMainNumberVisual>
        <div class="__cards-container">
          <YugiMainCard
            v-for="item in store.cards.data"
            :card="item"
          ></YugiMainCard>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.__loader {
  background-image: url(/img/yugi-bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 700px;
  padding-top: 10px;
  /* position: fixed; */
}
.__container-outer {
  background-image: url(/img/bg-custom-img.jpg);
  background-repeat: repeat;
  min-height: 87vh;
}

.__error-emph {
  color: red;
  font-weight: bolder;
}
.__cards-container {
  display: flex;

  flex-flow: row wrap;
  gap: 20px;
}

.__error-displayer {
  text-align-last: center;
  background-color: black;
  width: 60%;
  height: 14%;
  border: 2px solid white;
  box-shadow: 5px 5px grey;
}
</style>
