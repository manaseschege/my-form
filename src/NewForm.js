import React, { useEffect, useState } from "react";

const NewForm = () => {
  const [name, setName] = useState("");
  const [inputIsValid, setInputIsValid] = useState(true);
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setName(e.target.value);
    if (e.target.value.trim().length <= 2) {
      setInputIsValid(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setName((e.target.value = ""));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setInput("");
    setTodos([...todos, input]);
  };

  //Adding Data to the database(firestore) using firebase

  // dblClick.collection("message").add({
  //   name: name,
  //   text: text,
  //   //Adding a timestamp to arrange data with the latest one
  //   timestamp: firebase.firestore.fieldValue.serverTimestamp(),
  // });

  //fetching data from firebase

  // useEffect(()=>{
  //   // db.collection("messages")
  //.orderBy('timestamp','desc')
  //.onSnapshot((snapshot) =>
  //   //   setMessage(snapshot.docs.map((doc) => doc.data()))
  //   // );
  // },[])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={name} />
        {inputIsValid && (
          <p className="errorP">name should be more than 2 characters </p>
        )}
        <button disabled={!name} type="submit">
          submit
        </button>
      </form>

      <input
        style={{ border: "2px solid red" }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />
      <button disabled={!input} type="submit" onClick={submitHandler}>
        submit
      </button>
      {todos.map((todo, index) => {
        return (
          <ul key={index}>
            <li>{todo}</li>
          </ul>
        );
      })}
    </div>
  );
};
export default NewForm;
