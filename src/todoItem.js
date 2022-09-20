import { useState } from "react";
import { observer } from "mobx-react";

const TodoItem = observer(({ todo }) => {

  const onRename = () => {
    const task = prompt('Task name', todo.task) || todo.task;
    todo.task = task;
  }

  return (
    <li onDoubleClick={onRename}>
      <input
        type='checkbox'
        checked={todo.completed}
      />
      {todo.task}
    </li>
  );
});

export default TodoItem;