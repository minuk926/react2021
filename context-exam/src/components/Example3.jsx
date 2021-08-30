import PersonContext from "../contexts/PersonContext";
import {useContext} from "react";

export default function Example3(){
	const persons = useContext(PersonContext);
	return (
		<ul>
			{persons.map((persons) =>(
				<li key={persons.id}>{persons.name}</li>
			))}
		</ul>
	)
}