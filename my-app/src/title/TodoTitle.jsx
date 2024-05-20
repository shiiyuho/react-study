import React from "react";
import Button from "../component/TodoButton/TodoButton";

const TodoTitle = ({
  option,
  selectedOption,
  handleOptionChange,
  handleSubmit,
  index,
}) => {
  return (
    <>
      <input
        type="radio"
        value={option}
        checked={selectedOption === option}
        onChange={handleOptionChange}
        className="tuika"
      />
      {option}
      <div className="sakujo">
        <Button
          onClick={handleSubmit}
          label="削除ボタン"
          className="submit-button"
          type="submit"
        />
      </div>
    </>
  );
};

export default TodoTitle;
