import PersonContext from "../contexts/PersonContext";
import React from "react";

export default class Example2 extends React.Component{
	static contextType = PersonContext;
	render(){
		const persons = this.context;
		return (
			<ul>
				{persons.map((persons) =>(
					<li key={persons.id}>{persons.name}</li>
				))}
			</ul>
		)
	}
}