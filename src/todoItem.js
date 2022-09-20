import { observer } from "mobx-react";

const TodoItem = observer(({ todo }) => {

  const onRename = () => {
    const task = prompt('Task name', todo.task) || todo.task;
    todo.task = task;
  }

  const onChange = () => {
    todo.completed = !todo.completed;
  }

  return (
    <li onDoubleClick={onRename}>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={onChange}
      />
      {todo.task}
    </li>
  );
});

export default TodoItem;