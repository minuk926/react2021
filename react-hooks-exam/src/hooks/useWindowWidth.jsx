import React, {useState, useEffect} from "react";

export default function useWindowWidth(){
	const [width, setWidth] = React.useState(window.innerWidth);

	useEffect(()=>{
		const resize = ()=>setWidth(window.innerWidth);
		window.addEventListener('resize', resize);

		return () =>{
			window.removeEventListener('resize', resize)
		}
	}, [])

	// useEffect(()=>{
	// 	const resize = ()=>setWidth(window.innerWidth);
	// 	window.addEventListener('resize', resize);
	//
	// 	return () =>{
	// 		window.removeEventListener('resize', resize)
	// 	}
	// }, [])

	return width;
}