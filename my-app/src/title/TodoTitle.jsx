import React from "react";
import Button from "../component/TodoButton/TodoButton";

const TodoTitle = ({
  task,
  index,
  handleDeleteTask,
  handleToggleTaskCompletion,
}) => {
  const handleRadioChange = () => {
    handleToggleTaskCompletion(index);
  };

  const handleDeleteClick = () => {
    handleDeleteTask(index);
  };

  return (
    <div className="todo-item">
      <input
        type="radio"
        checked={task.completed}
        onChange={handleRadioChange}
        className="task-radio"
      />
      {task.text}
      <Button
        onClick={handleDeleteClick}
        label="削除"
        className="delete-button"
        type="button"
      />
    </div>
  );
};

export default TodoTitle;
