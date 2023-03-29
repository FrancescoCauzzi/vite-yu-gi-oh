import { reactive } from "vue";

export const store = reactive({
  userName: "Franklin",

  cards: [],

  APIcall: "https://db.ygoprodeck.com/api/v7/cardinfo.php",

  cardName: "",
});
