import { createStore } from "redux";
import { loadState, saveState } from "./LocalStorage";
import taskReducer from './Reducers';


const persistedState = loadState();

const store = createStore(
  taskReducer,
  persistedState
);

// the suscribe method will be called whenever the state in the redux store changes
// whenever the state of store will change it will call the saveState() method to store the data in redux store

store.subscribe(() => {
  saveState(store.getState()); 
});

export default store;
