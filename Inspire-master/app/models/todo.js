import { generateId } from "../utils.js";


export default class Todo {
  constructor(data) {
    this.todo = data.todo
    this._id = data.data.id || generateId()

  }
  get Template() {
    return ` 
    <li>${this.todo}</li>`
  }
}