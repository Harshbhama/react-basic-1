import React from "react"

function Todocontact(props){
  console.log(props)
  return(

    <div className = "contacts-name">
        <img className = "img" src  = {props.imgUrl} />
        <p>{props.name}</p>
        <p>{props.phone}</p>

    </div>

  )
}

export default Todocontact
