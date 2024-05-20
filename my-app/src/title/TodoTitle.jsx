import React from "react";
import Button from "../component/TodoButton/TodoButton";

const TodoTitle = ({ task, index, isSelected, handleSelectTask }) => {
  const handleRadioChange = () => {
    handleSelectTask(index);
  };

  return (
    <>
      <input
        type="radio"
        checked={isSelected}
        onChange={handleRadioChange}
        className="tuika"
      />
      {task.text}
      <div className="sakujo">
        <Button label="削除" className="delete-button" type="button" />
      </div>
    </>
  );
};

export default TodoTitle;
