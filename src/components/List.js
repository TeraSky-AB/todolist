import React, { useState } from 'react'
import TodoItem from './TodoItem'
import TodoAdder from './TodoAdder'

function List() {
  const [ dateSorting, setDateSorting ] = useState(false)
  const [ todoList, setTodoList ] = useState([
    {
      id: 1,
      text: "Go to sleep at 12am",
      date: new Date(),
      state: false,
    },
    {
      id: 2,
      text: "Make the dishes",
      date: new Date(),
      state: true,
    },
    {
      id: 5,
      text: "Tidy my room",
      date: new Date(),
      state: true,
    },
    {
      id: 4,
      text: "Suspendisse potenti. In quis condimentum ipsum. Nulla convallis in lectus in tempor. Aenean ac arcu scelerisque, convallis augue vel, aliquet ligula.",
      date: new Date(new Date()-10000),
      state: false,
    },
  ])

  const deleteTodo = (id) => {
    const newTodoList = todoList.filter(e => e.id !== id)
    console.log(newTodoList, id)
    setTodoList(newTodoList)
  }

  const addTodo = (tdText) => {
    const nextID = todoList.sort(idSortingFunc)[todoList.length-1].id+1
    const newTodo = {
      id: nextID,
      text: tdText,
      date: new Date(),
      state: false,
    }
    setTodoList([...todoList, newTodo])
  }

  const dateSortingFunc = () => {
    const newTodoList = todoList.sort((a,b) => {
        return a.date > b.date ? 1 : -1
    })
    setTodoList(newTodoList)
  }

  const idSortingFunc = () => {
    const newTodoList = todoList.sort((a,b) => {
      return a.id > b.id ? 1 : -1
    })
    setTodoList(newTodoList)
  }
  
  
  

  return (
    <div className='min-h-fit min-w-[60%] max-w-[80%] px-10 py-7 mx-auto bg-slate-300 dark:bg-slate-800 dark:text-white rounded-xl flex flex-col gap-[6px] relative'>
        <TodoAdder addTodo={addTodo}/>
        <div className='relative top-[-4px] flex justify-between font-semibold text-slate-500'>
          <span>List:</span>
          <div className='flex gap-1'>
            Sort:
            <button onClick={() => {idSortingFunc();setDateSorting(false)}} className={dateSorting ? "ml-1" : "text-slate-900 dark:text-slate-200 ml-1"}>ID</button>
            <button onClick={() => {dateSortingFunc();setDateSorting(true)}} className={dateSorting ? "text-slate-900 dark:text-slate-200" : ""}>Date</button>
          </div>
          
        </div>
        {todoList.map(task => <TodoItem item={task} deleteTodo={deleteTodo} key={task.id}/>)}
    </div>
  )
}

export default List