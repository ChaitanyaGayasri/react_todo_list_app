
import { useState } from 'react';
import './App.css';

function App() {

  const [todo,setTodo] = useState("")
  const [todo1,setTodo1] = useState([])
  const [editId,setEditId] = useState(0)

  const handleForm = (e) => {
    e.preventDefault()

    if (editId){
      const editTodo = todo1.find((i) => i.id === editId)
      const updatedTodo = todo1.map((t) => t.id === editTodo.id ?(
        t= {id: t.id,todo}): {id: t.id, todo: t.todo}
      )
      setTodo1(updatedTodo)
      setEditId(0)
      setTodo("")
      return
    }

    if ( todo !== ""){
      setTodo1([{id: `${todo}-${Date.now()}` , todo}, ...todo1])
      setTodo("")

    }
  }


  const handaleEdit = (id) => {
    const editTodo = todo1.find((i) => i.id === id)
    setTodo(editTodo.todo)
    setEditId(id)
  }

const handleDelete = (id) => {
  const deleteTodo = todo1.filter((item) => item.id !== id)
  setTodo1([...deleteTodo])

}
  return (
    <div className="app">
      <div className='container'>
        <h1>Todo List App</h1>
        <form className="todoForm" onSubmit={handleForm}>
          <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)}/>
          <button type='submit'>{editId ? "Edit": "Go"}</button>
        </form>

        <ul className='todolist'>
          {todo1.map((t) =>(
            <li className='todolist2'><span className='todoText' key={t.id}>{t.todo}</span>
          <button onClick={() => handaleEdit(t.id)}>Edit</button>
          <button onClick={() => handleDelete(t.id)}>Delete</button>
          </li>
          ))}
          
        </ul>
      </div>
    </div>
  );
}

export default App;
