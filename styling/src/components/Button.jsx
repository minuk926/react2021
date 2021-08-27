import React from "react";
import styles from './Button.module.css';
import classNames from "classnames/bind";

const cbx = classNames.bind(styles);

class Button extends React.Component {
	state = {
		loading: false,
	}
	render(){
		console.log(classNames(styles['button'], styles['loading']));
		const {loading} = this.state;
		return(
			<button className={
				//classNames(styles['button'], {[styles['loading']]: this.state.loading})
				//cbx('button', {'loading': this.state.loading})
				cbx('button', {loading}) // cbx('button', {loading: loading})
			}
			{...this.props}
			onClick={this.startLoading}
			/>
		)
	}

	startLoading = () => {
		this.setState({loading: true});
		setTimeout(()=>{
			this.setState({loading: false});
		}, 1000)
	}
}

export default Button;