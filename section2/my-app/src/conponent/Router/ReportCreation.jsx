import React from "react";
import Sec2Input from "../Input/Sec2Input";
import { useState } from "react";

/**
 * 報告書作成ページのコンポーネント。
 * @component
 */
const ReportCreation = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (taskText) => {
    setTasks([...tasks, { text: taskText, completed: false }]);
  };
  return (
    <div>
      <Sec2Input handleAddTask={handleAddTask} />
    </div>
  );
};

export default ReportCreation;
