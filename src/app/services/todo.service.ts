import { Injectable } from "@angular/core";
import * as data from "./../todo.json";
@Injectable({
  providedIn: "root"
})
export class TodoService {
  todoList: [any];
  constructor() {}
  todoData() {
    this.todoList = JSON.parse(localStorage.getItem("todoList"));
    console.log(this.todoList);
    return this.todoList;
  }
  addTodo(todo) {
    todo.id = this.todoList ? this.todoList.length + 1 : 0;
    debugger;
    this.todoList = JSON.parse(localStorage.getItem("todoList"));
    if (this.todoList) {
      this.todoList.push(todo);
    } else {
      this.todoList = [todo];
    }

    localStorage.setItem("todoList", JSON.stringify(this.todoList));
  }
  complete(item) {
    console.log(item);
    this.todoList.forEach((element, index) => {
      if (element.id === item.id) {
        this.todoList[index].completed = true;
      }
    });
    localStorage.setItem("todoList", JSON.stringify(this.todoList));
  }
  edit(item) {
    this.todoList.forEach((element, index) => {
      if (element.id === item.id) {
        this.todoList[index].todoTitle = item.todoTitle;
      }
    });
    localStorage.setItem("todoList", JSON.stringify(this.todoList));
  }
}
