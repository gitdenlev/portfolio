// store.js
import { create } from "zustand";
import axios from "axios";

const useStore = create((set) => ({
  // Count store
  count: 0,
  increment: () => set((state) => ({ count: (state.count += 1) })),
  decrement: () => set((state) => ({ count: (state.count -= 1) })),
  removeAll: () => set((state) => ({ count: (state.count = 0) })),
  // Todo store
  item: [],
  inputValue: "",
  addTask: () =>
    set((state) => ({
      item: [...state.item, state.inputValue],
      inputValue: "",
    })),
  setInputValue: (value) => set({ inputValue: value }),
  //
  handleApiLink: () => {
    console.log("Loading data...");
    axios.get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  },
}));

export default useStore;
