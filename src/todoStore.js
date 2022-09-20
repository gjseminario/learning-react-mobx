import { makeObservable, observable, computed, action, autorun } from "mobx"

export default class TodoStore {
  todos = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      report: computed, // check if needed
      addTodo: action // check if needed
    });
    autorun(() => console.log(this.report));
  }

  get completedTodosCount() {
    return this.todos.filter(
        todo => todo.completed === true
    ).length;
  }

  get report() {
    if (this.todos.length === 0)
      return "<none>";
    const nextTodo = this.todos.find(todo => todo.completed === false);
    return `Next todo: "${nextTodo ? nextTodo.task : "<none>"}". ` +
      `Progress: ${this.completedTodosCount}/${this.todos.length}`;
  }

  addTodo(task) {
    console.log("Action -> adding a new todoItem to the todoStore");
    this.todos.push({
      task: task,
      completed: false
    });
  }

  removeTodo(todo) {
    this.todos = this.todos.filter(todoItem => todoItem !== todo);
  }
}