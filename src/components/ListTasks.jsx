import React, { useState } from 'react'

const ListTasks = ({task, index, removeTask, isEdit, update, toggleDone }) => {
  const [value, setValue] = useState(task.title)
  return (
    <>
            <div className={`list-tasks ${task.done ? 'done' : ''}`}>
                <span className={`task-title ${task.done ? 'done' : ''}`}>
                    {!task.isEdit ? task.title : <input type="text" onChange={(e) => setValue(e.target.value)} value={value} />}
                </span>
                <button onClick={removeTask} className='delete-btn'>Delete</button>
                {!task.isEdit ? 
                    (!task.done ? <button className='edit-btn' onClick={() => isEdit(task)}>Edit</button> : null) : 
                    <button className='edit-btn' onClick={() => update(task.id, value)}>Save</button>
                }
                {!task.isEdit && !task.done ? <button className='done-btn' onClick={() => toggleDone(task.id)}>Done</button> : null}
            </div>

    </>
  );
};

export default ListTasks