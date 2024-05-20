import React from "react";
import TodoTitle from "../../title/TodoTitle";

//関数「TodoContaier」を定義しApp.jsで定義したコードを移す
const TodoContainer = ({ tasks, selectedTaskIndex, handleSelectTask }) => {
  return (
    <fieldset className="option-group">
      <legend>追加されたタスク</legend>
      {tasks.map((task, index) => (
        <label key={index} className={index > 0 ? "option-label" : ""}>
          <div className="option-item">
            <TodoTitle
              task={task}
              index={index}
              isSelected={selectedTaskIndex === index}
              handleSelectTask={handleSelectTask}
            />
          </div>
        </label>
      ))}
    </fieldset>
  );
};

export default TodoContainer;
