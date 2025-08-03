import React from 'react'
import Taskcard from './Taskcard'

const InProgrerss = ({ task }) => {
  return (
    <div className="flex flex-col gap-2">

      {task && task.map((items,i)=>( <Taskcard key={i} data={items} />)
         
      )}
      
    </div>
  )
}

export default InProgrerss
