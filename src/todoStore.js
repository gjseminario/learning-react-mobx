import { makeObservable, observable, computed, action, autorun } from "mobx"

export default class TodoStore {
  todos = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      report: computed,
      addTodo: action
    });
    autorun(() => console.log(this.report));
  }

  get report() {
    if (this.todos.length === 0)
      return "<none>";
    const nextTodo = this.todos.find(todo => todo.completed === false);
    return `Next todo: "${nextTodo ? nextTodo.task : "<none>"}". ` +
      `Progress: 0/${this.todos.length}`;
  }

  addTodo(task) {
    console.log("Action -> adding a new todoItem to the todoStore");
    this.todos.push({
      task: task,
      completed: false
    });
  }
}