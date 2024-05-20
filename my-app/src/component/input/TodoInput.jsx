import React from "react";
import Button from "../TodoButton/TodoButton";
import { useState } from "react";

//関数「TodoInput」を定義インプットタグと追加ボタンを中に移す
const TodoInput = ({ handleAddTask }) => {
  const [textValue, setTextValue] = useState("");

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleAddClick = () => {
    if (textValue.trim() !== "") {
      handleAddTask(textValue);
      setTextValue("");
    }
  };

  return (
    <div>
      <label>
        <input
          type="text"
          value={textValue}
          onChange={handleTextChange}
          className="text-input"
          placeholder="新しいタスクを入力"
        />
      </label>
      <label>
        <Button
          onClick={handleAddClick}
          label="追加ボタン"
          className="add-button"
          type="button"
        />
      </label>
    </div>
  );
};

export default TodoInput;
