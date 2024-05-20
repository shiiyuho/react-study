import React, { useState } from "react";
import "./App.css";
import TodoInput from "./component/input/TodoInput";
import TodoContainer from "./component/container/TodoContaier";

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);

  const handleAddTask = (taskText) => {
    setTasks([...tasks, { text: taskText, completed: false }]);
  };

  const handleSelectTask = (index) => {
    setSelectedTaskIndex(index);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TodoApp</h1>
        <TodoInput handleAddTask={handleAddTask} />
        <TodoContainer
          tasks={tasks}
          selectedTaskIndex={selectedTaskIndex}
          handleSelectTask={handleSelectTask}
        />
      </header>
    </div>
  );
}

export default App;
