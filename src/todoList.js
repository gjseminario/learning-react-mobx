import { observer } from "mobx-react";
import TodoItem from './todoItem';

const TodoList = observer(({ store }) => {

  const onNewTodo = () => {
    store.addTodo(prompt('Enter a new todo:', 'coffee plz'));
    console.log("Reaction -> todoList updated after adding a new todoItem =>", store.todos.map(todo => todo.task));
  }

  const onDeleteTodo = (todo) => {
    store.removeTodo(todo);
    console.log("Reaction -> todoList updated after deleting a todoItem =>", store.todos.map(todo => todo.task));
  }
 
  return (
    <div>
      <p>TO DO:</p>
      <p>{store.report}</p>
      <ul>
        {store.todos.map(
          (todo, idx) => {
            return (
              <div key={idx}>
                <TodoItem todo={todo} />
                <button onClick={() => onDeleteTodo(todo)}>X</button>
              </div>
            )
          }
       )}
      </ul>
      <button onClick={onNewTodo}>New Todo</button>
      <small> (double-click a todo to edit)</small>
    </div>
  );
});

export default TodoList;