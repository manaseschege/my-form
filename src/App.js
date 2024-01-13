import React from "react";
import Form from "Form/Form";
import Todo from "Todo";
import NewForm from "NewForm";
import Reducer from "./Form/Reducer";
import Reducer1 from "Form/Reducer1";
function App() {
  return (
    <div>
      <Form />
      <Todo />
      <NewForm />
      <Reducer />
      <Reducer1/>
    </div>
  );
}

export default App;
