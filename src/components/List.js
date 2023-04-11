import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem'
import TodoAdder from './TodoAdder'

function List() {
  const todosItemName = "todos"
  const [ onlyNotDoneTodo, setOnlyNotDoneTodo ] = useState(false)
  const [ fullTodoList, setFullTodoList ] = useState(() => {
    return JSON.parse(localStorage.getItem(todosItemName)) || []
  })
  const [ todoList, setTodoList ] = useState(fullTodoList)

  const checkTodo = (id) => {
    let todoChecked = fullTodoList.find(e => e.id === id)
    const newFullTodoList = fullTodoList.filter(e => e.id !== id)
    todoChecked.state = !todoChecked.state
    const newTodoList = [...newFullTodoList, todoChecked]
    setFullTodoList(newTodoList.sort((a,b) => a.id > b.id ? 1 : -1))
  }

  const deleteTodo = (id) => {
    const newTodoList = fullTodoList.filter(e => e.id !== id)
    setFullTodoList(newTodoList)
  }

  const addTodo = (tdText) => {
    const listLen = fullTodoList.length
    const nextID =  listLen > 2 ? fullTodoList.sort(idSortingFunc)[todoList.length-1].id+1 : listLen ? 1 : 0 
    const newTodo = {
      id: nextID,
      text: tdText,
      date: new Date(),
      state: false,
    }
    setFullTodoList([...todoList, newTodo])
  }

  const idSortingFunc = () => {
    const newTodoList = todoList.sort((a,b) => {
      return a.id > b.id ? 1 : -1
    })
    setTodoList(newTodoList)
  }
  
  const displayOnlyNotDoneTodos = () => {
    if(onlyNotDoneTodo) {
      //Only not done todos
      const newTodoList = fullTodoList.filter(e => e.state === false)
      setTodoList(newTodoList)
    } else {
      //All todos
      const newTodoList = fullTodoList
      setTodoList(newTodoList)
    }
  }

  useEffect(() => {
    displayOnlyNotDoneTodos()
    // eslint-disable-next-line
  }, [onlyNotDoneTodo])

  useEffect(() => {
    displayOnlyNotDoneTodos()
    localStorage.setItem(todosItemName, JSON.stringify(fullTodoList))
    // eslint-disable-next-line
  }, [fullTodoList])
    
  return (
    <div className='min-h-fit min-w-[60%] max-w-[80%] px-10 py-7 mx-auto bg-slate-300 dark:bg-slate-800 dark:text-white rounded-xl flex flex-col gap-[6px] relative'>
        <TodoAdder addTodo={addTodo}/>
        <div className='relative top-[-4px] flex justify-between font-semibold text-slate-500'>
          <span>List:</span>
          <div className='flex gap-1'>
            Filter:
            <button onClick={() => {setOnlyNotDoneTodo(!onlyNotDoneTodo)}} className="text-slate-900 dark:text-slate-200">{onlyNotDoneTodo ? "Not done" : "All"}</button>
          </div>
        </div>
        {todoList.length === 0 ? <p className='p-5 bg-slate-200 rounded-md dark:text-slate-950'>{onlyNotDoneTodo ? "All your tasks are done !" : "Add your first task !"}</p> : todoList.map(task => <TodoItem item={task} deleteTodo={deleteTodo} checkTodo={checkTodo} key={task.id}/>)}
    </div>
  )
}

export default List