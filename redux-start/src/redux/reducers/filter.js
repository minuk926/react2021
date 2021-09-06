import {SHOW_ALL, SHOW_COMPLETE} from "../actions";

//{ todos:  [{text: '코딩', done: false}, {text: '식사', done: false}, ...], filter: 'ALL'}
const initialState = 'ALL';
export default function filter(prevState = initialState, action) {

	if (action.type === SHOW_COMPLETE) {
		return 'COMPLETE';
	}

	if (action.type === SHOW_ALL) {
		return 'ALL';
	}
	return prevState;   // 변화가 없는 경우우}
}