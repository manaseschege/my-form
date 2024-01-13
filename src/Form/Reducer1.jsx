import React, { useReducer } from 'react'
   const defaultState = {
     name: "Manasses",
     age: 22,
   };
   const reducer = (state, action) => {
     if (action.type === "CHANGE_NAME") {
       return { ...state, name: "chege" };
     }
        if (action.type === "INCREASE_AGE") {
          return { ...state, age: state.age + 1 };
        }
   };
w
const Reducer1 = () => {
    const[state,dispatch]=useReducer(reducer,defaultState)
       const changeName = () => {
         dispatch({ type: "CHANGE_NAME" });
       };
       const changeAge = () => {
         dispatch({ type: "INCREASE_AGE" });
       };
  return (
    <div>
        <button onClick={changeName}>change name</button>
        <h2>{state.name}</h2>
        <button onClick={changeAge}>change age</button>
        <h2>{state.age}</h2>
        
    </div>
  )
}

export default Reducer1