import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {

  const handleDeleteTask = (taskId) => {
    console.log(`Deleting task with id: ${taskId}`);
  };

  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.id} text={task.text} category={task.category} onDelete={() => handleDeleteTask(task.id)} />
      ))}
    </div>
  );
}

export default TaskList;
