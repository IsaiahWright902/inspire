export default class Quote {
  constructor(data) {
    this.quote = data.quote.body;
    this.author = data.quote.author

  }
  get Template() {
    return `<h4 class="whiteText">"${this.quote}"</h4>
    <h3 class="whiteText">${this.author}</h3>`
  }
}