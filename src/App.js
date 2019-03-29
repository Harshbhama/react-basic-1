import React from "react"
import Todolist from "./Todolist"
import data from "./Tododata"

function App(){

		const dispList = data.map(function(exm){
			return(
				<Todolist key = {exm.id} item = {exm}/>
			)
		})
	return(
				<div className = "todolist">
						{dispList}
				</div>


		);
}

export default App;
