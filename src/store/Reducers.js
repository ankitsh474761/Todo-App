import {ADD_TASK,DELETE_TASK,EDIT_TASK, TOGGLE_TASK} from './Actions.js'
import { v4 as uuidv4 } from "uuid";
const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {

    // it will add the task if the case is matched
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: uuidv4(), text: action.payload, completed: false },
        ],
      };

      // it will remove the task 
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

// it will edit the task 
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId
            ? { ...task, text: action.payload.updatedTask }
            : task
        ),
      };

      // it will toggle the task as completed or incomplete
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    default:
      return state;
  }
};

export default taskReducer;
