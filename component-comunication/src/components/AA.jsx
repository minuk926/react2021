import React, {useState} from "react";
export default function AA(){
	const [value, setValue] = useState('초기값');
	return (
		<div>
			<B setValue={setValue}/>
			<h1>{value}</h1>
		</div>
	)
}

function B({setValue}){
	return (
		<div>
			<p>여긴 B</p>
			<C setValue={setValue}/>
		</div>
	)
}

function C({setValue}){
	return (
		<div>
			<p>여긴 C</p>
			<D setValue={setValue}/>
		</div>
	)
}

function D({setValue}){
	return (
		<div>
			<p>여긴 D</p>
			<E setValue={setValue}/>
		</div>
	)
}

function E({setValue}){
	return (
		<div>
			<p>여긴 E</p>
			<button onClick={click}>click</button>
		</div>
	)

	function click(){
		setValue('A값 변경');
	}
}