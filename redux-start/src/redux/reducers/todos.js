import {ADD_TODO, COMPLETE_TODO} from "../actions";

// [{text: '코딩', done: false}, {text: '식사', done: false}, ...]
const initialState = [];
export default function todos(prevState = initialState, action) {

	if (action.type === ADD_TODO) {
		return [...prevState, {text: action.text, done: false}]
	}

	if (action.type === COMPLETE_TODO){
		return prevState.map((todo, index) => {
			if (index === action.index) {
				return {...todo, done: true};
			}
			return todo;
		});
	}
	return prevState;   // 변화가 없는 경우우}
}
