import { useState,useEffect,useRef } from 'react'
import Navbar from './components/Navbar'


function App() {
  const handleEdit = ()=>
  {
    
  }
  const handleDelete = ()=>
  {

  }
  const handleAdd = ()=>
  {

  }
  return (
    <>
    <Navbar/>
      <div className='container mx-auto bg-violet-200 p-5 rounded-xl min-h-[80vh]'>
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold '>Add a Todo</h2>
          <input type="text" className='bg-amber-50 w-1/2' />
          <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6'>Add</button>
        </div>
        <h2 className='text-lg font-bold'>Your Todos</h2>
        <div className="todos">
          <div className="todo flex">
            <div className="text">{todo}</div>
              <div className="buttons">
                <button onClick={handleEdit()} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-2'>Edit</button>
                <button onClick={handleDelete()} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-2'>Delete</button> 
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
