import { reactive } from "vue";

export const store = reactive({
  userName: "Franklin",

  cards: [],

  cardsLength: 0,

  errorMessage: "",
  errorMessageToVisulize: "",
  cardNameToVisualuize: "",

  APIcall: "https://db.ygoprodeck.com/api/v7/cardinfo.php",

  cardName: "",
});
