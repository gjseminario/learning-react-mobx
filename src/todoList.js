import { useState } from "react";
import { observer } from "mobx-react";
import TodoItem from './todoItem';

const TodoList = observer(({ store }) => {

  const onNewTodo = () => {
    store.addTodo(prompt('Enter a new todo:', 'coffee plz'));
    console.log(store.todos);
  }
 
  return (
    <div>
      <p>TO DO:</p>
      <p>{store.report}</p>
      <ul>
        {store.todos.map(
          (todo, idx) => <TodoItem todo={todo} key={idx} />
        )}
      </ul>
      <button onClick={onNewTodo}>New Todo</button>
      <small> (double-click a todo to edit)</small>
    </div>
  );
});

export default TodoList;