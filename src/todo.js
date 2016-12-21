export class Todo {
  lastId = 0;
  constructor(title, completed = false) {
    this.id = ++this.lastId;
    this.title = title;
    this.completed = completed;
  }
}
