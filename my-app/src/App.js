import React, { useState } from "react";
import "./App.css";
import TodoInput from "./component/input/TodoInput";
import TodoContainer from "./component/container/TodoContaier";

/**
 * メインのAppコンポーネント。タスクの状態を管理し、TodoInputおよびTodoContainerコンポーネントをレンダリングします。
 * @component
 */
function App() {
  const [tasks, setTasks] = useState([]);

  /**
   * 新しいタスクを追加します。
   * @param {string} taskText - 新しいタスクのテキスト。
   */
  const handleAddTask = (taskText) => {
    setTasks([...tasks, { text: taskText, completed: false }]);
  };

  /**
   * 登録されたタスクを削除します。
   * @param {number} index - 削除するタスクのデータ。
   */
  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  /**
   * 登録したタスクの完了状態を切り替えます。
   * @param {number} index - 完了状態を切り替えるタスク。
   */
  const handleToggleTaskCompletion = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TodoApp</h1>

        <TodoContainer
          tasks={tasks}
          handleDeleteTask={handleDeleteTask}
          handleToggleTaskCompletion={handleToggleTaskCompletion}
        />
        <TodoInput handleAddTask={handleAddTask} />
      </header>
    </div>
  );
}

export default App;
