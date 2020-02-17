import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  let todo = store.State.todos;
  let todoElm = document.getElementById("todos")
  let template = ""

  todo.forEach(todo => {
    template + todo.Template
  })
  todoElm.innerHTML = template
}

export default class TodoController {
  constructor() {
    store.subscribe("todos", _drawTodos)
    //TODO Remember to register your subscribers
    TodoService.getTodos();
  }

  addTodo(event) {
    event.preventDefault();
    let form = event.target;
    let newTodo = {
      Todo: form.todo.value

      //TODO build the todo object from the data that comes into this method
    };
    console.log(newTodo)
    TodoService.addTodoAsync();
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}
