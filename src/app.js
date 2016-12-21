import {Todo} from './todo';

export class App {
  constructor() {
    this.todos = [
      new Todo('Task one', false),
      new Todo('Task two', false),
      new Todo('Task three', false)
    ];
    this.todoTitle = ''
    this.message = 'Todo List';
  }

  addTodo() {
    this.todos.push(new Todo(this.todoTitle, false));
    this.todoTitle = '';
  }
}
