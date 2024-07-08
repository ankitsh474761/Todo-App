import React, { useState } from "react";
import { addTask } from "../store/Actions";
import { useDispatch } from "react-redux";


const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    // here i have used trim() method to remove the space from the front and end of the task 
    if (task.trim()) {
      dispatch(addTask(task));
      setTask("");
    }
  };

  return (
    
    <div className="flex justify-center my-4">
      {/* here i have used input type text to take the task from the user  */}

      <input
        type="text"
        className="border rounded p-2 mr-2 w-1/2"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
      />

      {/* on click the add task the handleAddTask function will be called which will add (dispatch) the task to store */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
