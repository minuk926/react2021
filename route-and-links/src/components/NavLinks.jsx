import {NavLink} from "react-router-dom";

const activeStyle = {color: "green"};

export default function NavLinks(){
	return (
		<ul>
			<li><NavLink to="/" exact activeStyle={activeStyle}>Home</NavLink></li>
			<li><NavLink to="/profile"
						 activeStyle={activeStyle} isActive={(match,location)=>{
				         return match === null && !location.search
			}}>Profile</NavLink></li>
			<li><NavLink to="/profile/1" activeStyle={activeStyle}>Profile/1</NavLink></li>
			<li><NavLink to="/profile?name=Mark"
						 activeStyle={activeStyle}
						 isActive={(match, location) => {
							 return match !== null && location.search
						 }}>Profile?name=Mark</NavLink></li>
			<li><NavLink to="/profile/1?name=Mark"
						 activeStyle={activeStyle} isActive={(match, location) =>{
							 return match?.params?.id && location.search
			}}>Profile/1?name=Mark</NavLink></li>
			<li><NavLink to="/about" exact activeStyle={activeStyle}>About</NavLink></li>
		</ul>
	);
}