import { useSelector, useDispatch } from "react-redux";
import {
  increaseByOne,
  decreasedByOne,
  increaseByValue,
  resetAll,
} from "./counterSlice";
import { useState } from "react";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [userValue, setUserValue] = useState(0);
  const addedValue = Number(userValue) || 0;
  const reset = () => {
    setUserValue(0);
    dispatch(resetAll());
  };
  return (
    <div>
      <h1>Current Counter : {count}</h1>
      <button onClick={() => dispatch(increaseByOne())}>+</button>
      <button onClick={() => dispatch(decreasedByOne())}>-</button>
      <div>
        <input
          type="text"
          value={addedValue}
          onChange={(e) => setUserValue(e.target.value)}
        />
        <button onClick={() => dispatch(increaseByValue(addedValue))}>
          Add Value
        </button>
        <button onClick={reset}>Reset All</button>
      </div>
    </div>
  );
}
