import PersonContext from "../contexts/PersonContext";

export default function Example1(){
	return <PersonContext.Consumer>
		{(v) => (
			<ul>
				{v.map((v) =>(
					<li key={v.id}>{v.name}</li>
				))}
			</ul>
		)}
	</PersonContext.Consumer>
}