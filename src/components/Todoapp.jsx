import React, { useEffect } from 'react'
import {useState} from 'react'
import './Todo.css'
import AddToTask from './AddToTask'
import ListTasks from './ListTasks'

const Todoapp = () => {
    const [tasks,setTasks]=useState([]);
    useEffect(()=>{
        document.title=`You have ${tasks.length } pending task(s)`
        // const storedTasks = localStorage.getItem('todo');
        // if(storedTasks){
        //     let todos = JSON.parse(storedTasks)
        //     setTasks(todos)
        // }
        console.log("HELOO")
    },[]);

    const addTask = (title)=>{
        if (title.trim() === '') {
            return; 
        }   
        
        if (tasks.some(task => task.title === title)) {
            alert('Task already exists!'); 
            return; 
        }
        const newTask = [...tasks, {id:Date.now(),title,isEdit:false}]
        setTasks(newTask);
        // localStorage.setItem('todo',JSON.stringify(newTask))
    };
    const removeTask=(index)=>{
        const newTask = [...tasks]
        newTask.splice(index,1)
        setTasks(newTask)
        // localStorage.setItem('todo',JSON.stringify(newTask))

    };
    const toggleDone = (index) => {
        const newTasks = [...tasks];
        newTasks[index].done = !newTasks[index].done;
        setTasks(newTasks);
        // localStorage.setItem('todo',JSON.stringify(newTasks))

    };

    const editTask = (item) => {
        setTasks((prevTodos) =>
            prevTodos.map((list) => {
                if (list.id === item.id) {
                    return { ...list, isEdit: true };
                }
                return list;
            })
        );

    };

    const updateTask =(id,newText)=>{
        console.log(id,newText);
        setTasks((prevTodos) =>
        prevTodos.map((list) => {
            if (list.id === id) {
                return { ...list, title: newText, isEdit: false, };
            }
            return list;
        })
        );
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
            removeTask={() => removeTask(index)}
            toggleDone={() => toggleDone(index)}
            isEdit={editTask}
            update={updateTask}
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