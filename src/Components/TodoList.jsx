import React, {useState} from "react";


//3. correct key to use

// const todoList = [
//     {
//         todo: "make dinner",
//         dueDate: "2025-11-29"
//     },
//     {
//         todo: "buy chairs",
//         dueDate: "2025-10-28"
//     },
//     {
//         todo: "go to the beach",
//         dueDate: "2025-08-10"
//     }
// ]



const DisplayTodoList =()=>{
    const [todo, setTodo] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [todos, setTodos] = useState([
    {
        todo: "make dinner",
        dueDate: "2025-11-29"
    },
    {
        todo: "buy chairs",
        dueDate: "2025-10-28"
    },
    {
        todo: "go to the beach",
        dueDate: "2025-08-10"
    }
])


    const handleTodoChange = (e)=>{
    setTodo(e.target.value)

}
const handleDueDateChange =(e)=>{
    setDueDate(e.target.value)
}
const handleAddTodo = (e)=>{
    e.preventDefault();
    setTodos(prev=>[...prev, {todo, dueDate}])
    // todoList.push({
    //     //todo: todo,
    //     //dueDate: dueDate
    //     todo,
    //     dueDate
    // })
    console.log(todo, dueDate);
    setTodo("");
    setDueDate("");
}

const handleDelete =(indexToDelete)=>{
    setTodos(prev=>prev.filter((_, index)=> index !== indexToDelete))
}


    return(
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleAddTodo}>
                <input type="text" placeholder="type a todo" value={todo} onChange={handleTodoChange}/>
                <input type="date" value={dueDate} onChange={handleDueDateChange}/>
                <input type="submit" value="add" />
            </form>
            { 
            todos.map((item, index)=>(
                <div key={index}>
                   <li> {item.todo}</li>
                   <li> {item.dueDate}</li>
                   {/* onClick={todoList.splice(index, 1) } */}
                    <button onClick={()=>handleDelete(index)} >
                        Delete 
                    </button>
                </div>
            ))
            }
        </div>
    )
}

export default DisplayTodoList;