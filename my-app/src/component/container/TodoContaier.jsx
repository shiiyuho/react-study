import React from "react";
import TodoTitle from "../../title/TodoTitle";

/**
 * 未完了と完了したタスクを表示するコンテナコンポーネント。
 * @component
 * @param {Object} props - プロパティオブジェクト。
 * @param {Array} props.tasks - タスクリスト。
 * @param {function} props.handleDeleteTask - タスクを削除する関数。
 * @param {function} props.handleToggleTaskCompletion - タスクの完了状態を切り替える関数。
 */
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
