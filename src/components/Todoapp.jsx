import React, { useEffect } from 'react'
import {useState} from 'react'
import './Todo.css'
import AddToTask from './AddToTask'
import ListTasks from './ListTasks'

const Todoapp = () => {
    const [tasks,setTasks]=useState([]);
    useEffect(()=>{
        document.title=`You have ${tasks.length} pending task(s)`
    });

    const addTask = (title)=>{
        if (title.trim() === '') {
            return; 
        }   
        
        if (tasks.some(task => task.title === title)) {
            alert('Task already exists!'); 
            return; 
        }
        const newTask = [...tasks, {title}]
        setTasks(newTask);
    };
    const removeTask=(index)=>{
        const newTask = [...tasks]
        newTask.splice(index,1)
        setTasks(newTask)
    }

  return (
    <>
    <div className='todo-container'>
        <div className='header'>TODO APP</div>
        <div className='add-task'>
            <AddToTask addTask={addTask}/>
        </div>
        <div className='tasks'>
            {tasks.map((task,index) => (
            <ListTasks task={task} 
            removeTask={removeTask}
            index={index}
            key={index}
            />
            )
            )}
            
        </div>
    </div>
    </>
  )
}

export default Todoapp