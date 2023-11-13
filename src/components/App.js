import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [filteredTasks, setFilteredTasks] = useState(TASKS);

  const handleCategorySelect = (selectedCategory) => {
    if (selectedCategory === "All") {
      setFilteredTasks(tasks);
    } else {
      const filteredTasks = tasks.filter((task) => task.category === selectedCategory);
      setFilteredTasks(filteredTasks);
    }
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  
    // Update filtered tasks based on the selected category
    handleCategorySelect(newTask.category);
  };
  

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onSelectCategory={handleCategorySelect} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default App;
