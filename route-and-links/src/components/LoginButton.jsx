import {withRouter} from "react-router-dom";

export default withRouter(function LoginButton(props){
	function login(){
		console.log(props);
		setTimeout(()=>{
			props.history.push("/");
		})
	}

	return (
		<button onClick={login}>로그인하기</button>
	)
})