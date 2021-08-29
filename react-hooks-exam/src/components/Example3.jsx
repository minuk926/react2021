import React from "react";

export default function Example3 () {
	const [state, setState] = React.useState({count: 0});

	return (
		<div>
			<p>You clicked {state.count} times</p>
			<button onClick={click}>Click me</button>
		</div>
	);

	function click(e) {
		setState((state) => ({count: state.count + 1}));
	}
}