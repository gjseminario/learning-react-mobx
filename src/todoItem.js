import { useState } from "react";
import { observer } from "mobx-react";

const TodoItem = observer(({ todo }) => {

  const [todoItem, setTodoItem] = useState(todo);

  const onToggleCompleted = () => {
    setTodoItem({ ...todoItem, completed: !todoItem.completed });
  }

  const onRename = () => {
    const task = prompt('Task name', todoItem.task) || todoItem.task;
    setTodoItem({ ...todoItem, task });
  }

  return (
    <li onDoubleClick={onRename}>
      <input
        type='checkbox'
        checked={todoItem.completed}
        onChange={onToggleCompleted}
      />
      {todoItem.task}
    </li>
  );
});

export default TodoItem;