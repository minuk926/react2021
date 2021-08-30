import queryString from "query-string";
import {useLocation, useParams} from "react-router-dom";

// export default function Profile(props) {
// 	const id = props.match.params.id;
// 	console.log(props);
//
// 	let query = null;
// 	if(props.location.search)	query = queryString.parse(props.location.search);
// 	//console.log(query, typeof query);
//
// 	return (
// 		<div>
// 			<h2>Profile</h2>
// 			{id && <p>id는 {id} 입니다</p>}
// 			{query && <p>parameter는 {JSON.stringify(query)} 입니다</p>}
// 		</div>
// 	)
// }

export default function Profile() {
	//const id = props.match.params.id;
	//console.log(props);

	const id = useParams().id;

	//let query = null;
	//if(props.location.search)	query = queryString.parse(props.location.search);

	const query = useLocation().search;

	return (
		<div>
			<h2>Profile</h2>
			{id && <p>id는 {id} 입니다</p>}
			{query && <p>parameter는 {JSON.stringify(query)} 입니다</p>}
		</div>
	)
}