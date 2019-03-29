import React from "react"

function Todolist(props){
  return(
        <div className = "todoitem">
          <input type = "checkbox" checked = {props.item.completed} />
          <p className = "p-style"> {props.item.text} </p>
          
        </div>


  )
}

export default Todolist
