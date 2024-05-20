import React from "react";
import Button from "../TodoButton/TodoButton";

//関数「TodoInput」を定義インプットタグと追加ボタンを中に移す　↙（props：コンポーネントの引数）
const TodoInput = ({ textValue, handleTextChange, handleAddOption }) => {
  return (
    <div>
      <label>
        <input
          type="text"
          value={textValue}
          onChange={handleTextChange}
          className="text-input"
          placeholder="新しいオプションを入力"
        />
      </label>
      <label>
        {/* ボタンを呼び込み */}
        <Button
          onClick={handleAddOption}
          label="追加ボタン"
          className="add-button"
          type="button"
        />
      </label>
    </div>
  );
};

export default TodoInput;
