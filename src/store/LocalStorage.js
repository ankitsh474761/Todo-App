export const loadState = () => {
  try {
    const tasks  = localStorage.getItem("tasks");
    // here i have used if condition because in starting there will be no task in the local storage
    // so tasks will be equal to none so  it will return undefined when there will be no task
    if (tasks  === null) {
      return undefined;
    }
    // parsing the tasks into javascript objects
    return JSON.parse(tasks);
  } catch (err) {
    console.error("Could not load state", err);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    // converting the state into JSON string
    const tasks = JSON.stringify(state);
    // setting the tasks into local storage
    localStorage.setItem("tasks", tasks);
  } catch (err) {
    console.error("Could not save state", err);
  }
};
