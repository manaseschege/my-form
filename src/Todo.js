import React,{useState} from "react"

const Todo =()=>{
    const[todoItem,setTodoItem] = useState("")
    const [todoList,setTodoList] = useState([])

   const handleChange=(e)=>{
    setTodoItem(e.target.value)
   }
   const addTodoHandler =()=>{
    
    setTodoList(todoList.concat(todoItem))
    setTodoItem("")
   
   };

    return(
        <div>
         <input className="input" type="text" value={todoItem} onChange={handleChange}/>
         <button onClick={addTodoHandler}>ADD</button>
         <ol>
            {todoList.map(todo =>(
                <li><strong>{todo}</strong></li>
            ))}
         </ol>
        
        </div>
    )
};
export default Todo;