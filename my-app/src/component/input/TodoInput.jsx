import React from "react";
import Button from "../TodoButton/TodoButton";
import { useState } from "react";

/**
 * 新しいタスクを追加するための入力コンポーネント。
 * @component
 * @param {Object} props - プロパティオブジェクト。
 * @param {function} props.handleAddTask - 新しいタスクを追加。
 */
const TodoInput = ({ handleAddTask }) => {
  const [textValue, setTextValue] = useState("");

  /**
   * 入力フィールドの変更を処理します。
   * @param {Object} e - イベントオブジェクト。
   */
  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };

  /**
   * 追加ボタンのクリックイベントを処理します。
   */
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
