import React, {useState} from "react";
export default function A(){
	const [value, setValue] = useState('초기값');
	return (
		<div>
			<B value={value}/>
			<button onClick={click}>E값 교체</button>
		</div>
	)

	function click(e) {
		setValue('E 값 변경');
	}
}

function B({value}){
	return (
		<div>
			<p>여긴 B</p>
			<C value={value}/>
		</div>
	)
}

function C({value}){
	return (
		<div>
			<p>여긴 C</p>
			<D value={value}/>
		</div>
	)
}

function D({value}){
	return (
		<div>
			<p>여긴 D</p>
			<E value={value}/>
		</div>
	)
}

function E({value}){
	return (
		<div>
			<p>여긴 E</p>
			<h3>{value}</h3>
		</div>
	)
}