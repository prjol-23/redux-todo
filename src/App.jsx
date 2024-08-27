import React from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
const App = () => {
  return (
    <>
      <h1>Welcome to redux Todo Handler</h1>
      <AddTodo/>

      <div className='todo'>
        <Todo/>
      </div>
    </>
  )
}

export default App