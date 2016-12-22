import {IdGenerator} from "./idgenerator";

export class Todo {
  constructor(title, completed = false) {
    this.id = IdGenerator.getNextId();
    this.title = title;
    this.completed = completed;
  }
}
