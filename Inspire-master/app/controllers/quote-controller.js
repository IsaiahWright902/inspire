
import store from "../store.js";
import quoteService from "../services/quote-service.js";

function drawQuote() {
  let quote = store.State.quote;
  document.getElementById("quote").innerHTML = quote.Template;
}

export default class QuoteController {
  constructor() {
    store.subscribe("quote", drawQuote)
    quoteService.getQuote()
  }
}
