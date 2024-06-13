import React from "react";
import Button from "../component/TodoButton/TodoButton";

/**
 * タスクのタイトルを表示し、削除と完了状態の切り替え機能を提供するコンポーネント。
 * @component
 * @param {Object} props - プロパティオブジェクト。
 * @param {Object} props.task - タスクオブジェクト。
 * @param {number} props.index - タスクのインデックス。
 * @param {function} props.handleDeleteTask - タスクを削除する関数。
 * @param {function} props.handleToggleTaskCompletion - タスクの完了状態を切り替える関数。
 */
const TodoTitle = ({
  task,
  index,
  handleDeleteTask,
  handleToggleTaskCompletion,
}) => {
  /**
   * ラジオボタンの変更イベントを処理し、タスクの完了状態を切り替えます。
   */

  const handleRadioChange = () => {
    handleToggleTaskCompletion(index);
  };

  /**
   * 削除ボタンのクリックイベントを処理します。
   */

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
