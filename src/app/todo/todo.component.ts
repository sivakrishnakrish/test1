import { Component, OnInit } from "@angular/core";
import { TodoService } from "../services/todo.service";
@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  todo;
  todoList;
  editMode = false;
  editData;
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getTodos();
  }
  getTodos() {
    this.todoList = this.todoService.todoData();
    console.log("this.todoList", this.todoList);
  }
  addTodo() {
    this.todoService.addTodo({ todoTitle: this.todo, completed: false });
    this.todo = "";
    this.getTodos();
  }
  completeTodo(data) {
    this.todoService.complete(data);
    this.todo = "";
    this.editMode = false;
  }
  editTodo(data) {
    if (!data.completed) {
      this.editMode = true;
      this.todo = data.todoTitle;
      this.editData = data;
    }
  }
  update() {
    this.editData.todoTitle = this.todo;
    this.todoService.edit(this.editData);
    this.editMode = false;
    this.todo = "";
  }
}
