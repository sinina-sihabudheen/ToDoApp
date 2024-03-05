import React from 'react'

const ListTasks = ({task, index, removeTask}) => {
  return (
    <>
        <div className='list-tasks'>
            {task.title}
            <button onClick={()=>{removeTask(index)}} className='delete-btn'>Delete</button>
        </div>
    </>
  );
};

export default ListTasks