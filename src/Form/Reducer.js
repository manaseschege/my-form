import React, { useReducer, useMemo } from "react";
import Effect from "./Effect";

const CHANGE_NAME = "CHANGE_NAME";
const CHANGE_Age = "CHANGE_AGE";
const CHANGE_SCHOOL = "CHANGE_SCHOOL";

const defaultState = {
  name: "manasses",
  age: 29,
  school: "zetetch",
};

const reducer = (state, action) => {
  if (action.type === CHANGE_NAME) {
    return {
      ...state,
      name: "kingori",
    };
  }
  if (action.type === CHANGE_Age) {
    return {
      ...state,
      age: state.age + 1,
    };
  }
};
export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const memoA = useMemo(() => {
    return <Effect count={state.age} />;
  }, [state.age]);

  const changeNameHandler = () => {
    dispatch({ type: CHANGE_NAME });
  };
  const changeAge = () => {
    dispatch({ type: CHANGE_Age });
  };

  return (
    <div>
      <h1>my name is {state.name}</h1>
      <button onClick={changeNameHandler}>change name</button>
      <h3>age is {state.age}</h3>
      <button onClick={changeAge}>change age</button>
      {memoA}
    
    </div>
  );
}
