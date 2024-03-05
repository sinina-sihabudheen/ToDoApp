import React from 'react'
import { useState } from 'react';

const AddToTask = ({addTask}) => {
    const [value, setValue]=useState("");
    const addItem= () => {
         addTask(value);
         setValue("")

    }
  return (
    <>
    <div className='input-container'>
        <input className='input' placeholder='Add a new Task' type="text" 
        value={value}
        onChange={(e)=>{
            setValue(e.target.value);
            }}
            />
        <button onClick={addItem} className='add-btn'>ADD</button>
    </div>
    </>
  )
}

export default AddToTask