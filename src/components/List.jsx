import React from 'react'

const List = ({ title, data}) => {
  return (
   <div>
    <h1>{title}</h1>
     <div className="list-group" id="list-tab" role="tablist">
      {data.map((item, index)=>(
         <a key={index}className="list-group-item list-group-item-action" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home ">{item}</a>

      ))}

      
    </div>

  </div>
  
  )
}

export default List


