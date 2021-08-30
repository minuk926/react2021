import React, {useReducer} from "react";


const reducer = (state, action) => {
	if(action.type === 'PLUS'){
		return {
			count: state.count + 1
		}
	}
	return state;
}

export default function Example6 () {
	// reducer => state를 변경하는 함수
	// dispatch => action 객체를 넣어서 실행
	// action => 객체이고 필수 property로 type을 갖는다
	const [state, dispatch] = useReducer(reducer, {count: 0});

	return (
		<div>
			<p>You clicked {state.count} times</p>
			<button onClick={click}>Click me</button>
		</div>
	);

	function click(e) {
		dispatch({type: 'PLUS'});
	}
}