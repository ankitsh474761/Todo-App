import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, editTask, toggleTask } from "../store/Actions";
import { MdOutlineDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const TaskList = () => {
    // using useSelector hook we will have access to the store reducers 
  const tasks = useSelector((state) => state.tasks);
//   useDispatch hook will dispatch the action 
  const dispatch = useDispatch();

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleEditTask = (taskId) => {
    const updatedTask = prompt("Edit the task:");
    if (updatedTask !== null) {
      dispatch(editTask(taskId, updatedTask));
    }
  };

      const handleToggleTask = (taskId) => {
        dispatch(toggleTask(taskId));
      };

  return (
    <div className="m-4 ">
      <ul className="list-none p-0">

        {tasks && tasks?.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center bg-gray-100 border p-2 rounded my-2 ${
              task.completed ? "line-through" : ""
            }`}
          >
            {task.text}
            <div>
              <button
                className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-800"
                onClick={() => handleToggleTask(task.id)}
              >
                {task.completed ? <RxCross2/>  : <MdOutlineDone/>}
              </button>
              <button
                className="bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-800"
                onClick={() => handleEditTask(task.id)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-800"
                onClick={() => handleDeleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
