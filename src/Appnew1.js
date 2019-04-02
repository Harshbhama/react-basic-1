import React from "react"

// class Appnew1 extends React.Component{
//
//   constructor(){
//     super()
//     this.state = {
//       name: "harsh",
//       age: "22"
//     }
//   }
//
//
//   render(){
//     return(
//       <div>
//         <h1>{this.state.name}</h1>
//         <h3>{this.state.age}</h3>
//       </div>
//     )
//   }
// }

  class Appnew1 extends React.Component{

    constructor(){
      super()
      this.isloggedin = {
        value: false
      }
    }

    render(){
      return(
        <h1> You are currently logged {this.isloggedin.value?"in":"out"} </h1>
      )
    }
  }



export default Appnew1
