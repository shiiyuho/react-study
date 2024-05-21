import React from "react";
import Button from "../component/TodoButton/TodoButton";

const TodoTitle = ({
  task,
  index,
  handleDeleteTask,
  handleToggleTaskCompletion,
}) => {
  //ラジオボタンの設定
  const handleRadioChange = () => {
    handleToggleTaskCompletion(index);
  };
  //削除ボタン
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
      {/* 「button」を呼び出し「削除機能」を追加 */}
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
