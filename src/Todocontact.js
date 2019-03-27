import React from "react"

function Todocontact(props){
  console.log(props)
  return(

    <div className = "contacts-name">
        <img className = "img" src  = {props.contact.imgUrl} />
        <p>{props.contact.name}</p>
        <p>Phone no :{props.contact.phone}</p>

    </div>

  )
}

export default Todocontact
