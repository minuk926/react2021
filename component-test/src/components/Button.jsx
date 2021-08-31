import {useEffect, useRef, useState} from "react";

export default function Button(){
	const BUTTON_TEXT = {
		NORMAL: '버튼이 눌리지 않았다.',
		CLICKED: '버튼이 방금 눌렸다.'
	}
	const [message, setMessage] = useState(BUTTON_TEXT.NORMAL);
	const timer = useRef();

	// willUnmount
	useEffect(()=>{
		return () => {
			if(timer.current){
				clearTimeout(timer.current);
			}
		}
	}, []);

	return (
		<div>
			<p>{message}</p>
			<button onClick={click} disabled={message === BUTTON_TEXT.CLICKED}>button</button>
		</div>
	)

	function click(){
		setMessage(BUTTON_TEXT.CLICKED);
		timer.current = setTimeout(()=>{
			setMessage( BUTTON_TEXT.NORMAL);
		}, 5000)
	}
}