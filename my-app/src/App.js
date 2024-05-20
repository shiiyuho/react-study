import React, { useState } from "react";
import "./App.css";
import TodoInput from "./component/input/TodoInput";
import TodoContainer from "./component/container/TodoContaier";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (taskText) => {
    setTasks([...tasks, { text: taskText, completed: false }]);
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

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
