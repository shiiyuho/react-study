import React from "react";
import Sec2Input from "../Input/Sec2Input";
import Sec2Title from "../Title/Sec2Title";
import { useState } from "react";

const ReportCreation = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (taskText) => {
    setTasks([...tasks, { text: taskText, completed: false }]);
  };
  return (
    <div>
      <Sec2Input handleAddTask={handleAddTask} />
      <Sec2Title />
    </div>
  );
};

export default ReportCreation;
