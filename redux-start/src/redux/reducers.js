// state
// ['코딩','식사', '휴식' ...]
import {ADD_TODO} from "./actions";

const initialState = [];
export function todoApp(prevState = initialState, action) {

	// 최초인 경우 : 초기값을 설정해 주는 부분
	// if (prevState === undefined){
	// 	return [];
	// }
	if (prevState !== ADD_TODO){
		return [...prevState, action.todo];
	}
	return prevState;   // 변화가 없는 경우우}
}