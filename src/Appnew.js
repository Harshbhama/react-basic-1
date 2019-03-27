import React from "react"

import Todocontact from "./Todocontact"

function Appnew(){
  return(
          <div className = "contacts">
            <Todocontact
            contact = {{imgUrl: "https://images.unsplash.com/photo-1527424726923-52e678bdbc3e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
            name: "Mr Aakash", phone: "90912"}}
            />
            <Todocontact
            contact = {{imgUrl: "https://images.unsplash.com/photo-1524173988983-845c4353965b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
            name: "Mr Anshul", phone: "021"}}
             />
            <Todocontact
            contact = {{imgUrl: "https://images.unsplash.com/photo-1517638083100-3f5eb3055a8d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
            name: "Mr Harsh", phone: "122"}}
            />

          </div>
  )
}

export default Appnew
