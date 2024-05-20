import React from "react";
//TodoTitleをインポート
import TodoTitle from "../../title/TodoTitle";

//関数「TodoContaier」を定義しApp.jsで定義したコードを移す
const TodoContainer = ({
  options,
  selectedOption,
  handleOptionChange,
  handleSubmit,
}) => {
  return (
    <fieldset className="option-group">
      <legend>追加された内容</legend>
      {options.map((option, index) => (
        <label key={index} className={index > 0 ? "option-label" : ""}>
          <div className="option-item">
            {/* 関数TodoTitleを読み込み */}
            <TodoTitle
              option={option}
              selectedOption={selectedOption}
              handleOptionChange={handleOptionChange}
              handleSubmit={handleSubmit}
              index={index}
            />
          </div>
        </label>
      ))}
    </fieldset>
  );
};

export default TodoContainer;
