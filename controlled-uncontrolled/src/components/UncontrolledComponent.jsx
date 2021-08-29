import React from "react";

class UncontrolledComponent extends React.Component {
	inputRef = React.createRef();

	render() {
		console.log(`initial render`, this.inputRef);

		return (
			<div>
				<input type="text" ref={this.inputRef} id='myInput' placeholder='UncontrolledComponent'/>
				<button onClick={this.click}>전송</button>
			</div>
		);
	}

	componentDidMount() {
		console.log(`componentDidMount`, this.inputRef);
	}

	click = (e) => {
		// console.log(document.querySelectorAll('input[type=text]')[1]);
		// console.log(document.querySelector('#myInput').value);

		console.log(this.inputRef.current.value);
	}
}

export default UncontrolledComponent;