import TodoStore from './todoStore.js'
import TodoList from './todoList.js'
import './App.css'

export default function App() {
  console.log("Starting App");

  const todoStore = new TodoStore();
  todoStore.addTodo("read MobX tutorial");

  return (
    <main>
      SMS Learning Time: React + MobX
      <TodoList store={todoStore} ></TodoList>
    </main>
  )
}