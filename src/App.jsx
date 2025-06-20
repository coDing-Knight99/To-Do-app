import { useState,useEffect,useRef } from 'react'
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todo, setTodo] = useState("");
const [todos, setTodos] = useState(()=>{
  let todosstring=localStorage.getItem("todos");
  return todosstring?JSON.parse(todosstring):[]
});
const [showFinished, setshowFinished] = useState(true)
// const savetoLS=(params) => {
//   localStorage.setItem("todos",JSON.stringify(todos))
// }
// useEffect(() => {
//   let todoString=localStorage.getItem("todos");
//   if(todoString)
//   {
//     let todos=JSON.parse(todoString);
//     setTodos(todos);
//   }
// }, [])
useEffect(() => {
  localStorage.setItem("todos",JSON.stringify(todos));
}, [todos])

const toggleshowFinished=()=>{
  setshowFinished(!showFinished);
}
const handleDelete=(e,id)=>{
  let newTodos=todos.filter(item=>{
    return item.id!==id;
  })
  setTodos(newTodos);
  // savetoLS();
}
const handleEdit=(e,id)=>{
  let newTodos=[...todos];
  let idx=todos.findIndex(item=>{
    return item.id===id;
  })
  newTodos[idx].isEdit=!newTodos[idx].isEdit;
  setTodos(newTodos)
  // savetoLS();
}
const handleDone=(e,id)=>{
  let newTodos=[...todos];
  let idx=todos.findIndex(item=>{
    return item.id===id;
  })
  // newTodos[idx].isEdit=!newTodos[idx].isEdit;
  // setTodo(item.todo);
  newTodos[idx].isEdit=!newTodos[idx].isEdit;
  setTodos(newTodos);
  console.log(todos)
  // savetoLS();
}
const handleAdd=()=>{
  setTodos([...todos,{id:uuidv4(),todo, isCompleted:false,isEdit:false}])
  setTodo("")
  console.log(todos)
  // savetoLS();
}
const handleChange=(e)=>{
  setTodo(e.target.value);
}
const handleEChange=(e,id)=>{
  let newTodos=[...todos];
  let idx=todos.findIndex(item=>{
    return item.id===id;
  })
  newTodos[idx].todo=e.target.value;
  setTodos(newTodos);
  // savetoLS();
  // setTodo()

}

const handleCheckbox=(e)=>{
  let id=e.target.name;
  let index=todos.findIndex(item=>{
    return item.id===id;
  })
  let newTodos=[...todos];
  newTodos[index].isCompleted=!newTodos[index].isCompleted;
  setTodos(newTodos);
  // savetoLS();
}
  return (
    <>
    <Navbar/>
      <div className='md:container md:mx-auto bg-violet-200 p-5 rounded-xl md:min-h-[80vh] h-[100vh] md:w-1/2 w-full'>
      <h1 className='font-bold text-center text-xl'>iTask - Manage your todos at one place  </h1>
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className='text-lg font-bold '>Add a Todo</h2>
          <input onChange={handleChange} value={todo} type="text" className='bg-amber-50 w-full px-5 py-2 rounded-full' />
          <button onClick={handleAdd} disabled={todo.length<3} className='bg-violet-800 hover:bg-violet-950 disabled:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md '>Save</button>
        </div>
        <input type="checkbox" onChange={toggleshowFinished} checked={showFinished} />&nbsp; Show Finished
        <div className='h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2'></div>
        <h2 className='text-lg font-bold'>Your Todos</h2>
        <div className="todos">
          {todos.length===0 && <div className='m-5'>No Todos to display</div>}
            {todos.map(item=>{
              return (showFinished || !item.isCompleted) && <div key={item.id}>{item.isEdit?<div key={item.id} className="todoe">
                <input onChange={(e)=>handleEChange(e,item.id)} value={item.todo??""} type="text" className='bg-amber-50 w-1/2 p-1' />
                <button onClick={(e)=>handleDone(e,item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6'>Done</button>
              </div>:<div key={item.id} className="todo flex w-full justify-between my-3">
                <input onChange={handleCheckbox} name={item.id} type="checkbox" value={item.isCompleted}
                checked={item.isCompleted} id="" />
            <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
              <div className="buttons flex h-full">
                <button onClick={(e)=>{handleEdit(e,item.id)}} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-2'><FaEdit /></button>
                <button onClick={(e)=>{handleDelete(e,item.id)}} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-2'><AiFillDelete /></button> 
            </div>
            </div>
            }</div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
