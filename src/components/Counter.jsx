// Counter.js
import useStore from "../store/store";

const Counter = () => {
  const {
    count,
    increment,
    decrement,
    removeAll,
    inputValue,
    item,
    addTask,
    setInputValue,
    handleApiLink,
  } = useStore();

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Plus</button>
      <button onClick={decrement} disabled={count === 0}>
        Minus
      </button>
      <button onClick={removeAll} disabled={count === 0}>
        Remove all
      </button>
      <input
        placeholder="Your task here"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {item.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <button onClick={handleApiLink}>GET API</button>
    </>
  );
};

export default Counter;
