import React from "react";

class ControlledComponent extends React.Component {
	state = {
		value: ""
	};

	render() {
		return (
			<div>
				<input type="text" value={this.state.value} onChange={this.change} placeholder='ControlledComponent'/>
				<button onClick={this.click}>전송</button>
			</div>
		);
	}

	change = (e) => {
		this.setState({
			value: e.target.value
		});
	}

	click = (e) => {
		console.log(this.state.value);
	}
}

export default ControlledComponent;