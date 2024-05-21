import React from "react";
import TodoTitle from "../../title/TodoTitle";

//関数「TodoContaier」を定義しApp.jsで定義したコードを移す
const TodoContainer = ({
  tasks,
  handleDeleteTask,
  handleToggleTaskCompletion,
}) => {
  const incompleteTasks = tasks.filter((task) => !task.completed);
  const completeTasks = tasks.filter((task) => task.completed);

  return (
    <div>
      {/* 上の項目について */}
      <fieldset className="option-group">
        <legend>未完了のタスク</legend>
        {incompleteTasks.map((task, index) => (
          // titleを呼びだし
          <TodoTitle
            key={index}
            task={task}
            index={tasks.indexOf(task)}
            handleDeleteTask={handleDeleteTask}
            handleToggleTaskCompletion={handleToggleTaskCompletion}
          />
        ))}
      </fieldset>
      <fieldset className="option-group">
        <legend>完了したタスク</legend>
        {completeTasks.map((task, index) => (
          <TodoTitle
            key={index}
            task={task}
            index={tasks.indexOf(task)}
            handleDeleteTask={handleDeleteTask}
            handleToggleTaskCompletion={handleToggleTaskCompletion}
          />
        ))}
      </fieldset>
    </div>
  );
};

export default TodoContainer;
