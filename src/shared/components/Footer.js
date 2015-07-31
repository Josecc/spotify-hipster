import React from "react";

export default class Footer extends React.Component {  
	constructor(props) {
		super(props);
		this.state = {  };
	}
	render() {
		var copy = {
			padding: "10px",
			backgroundColor: "#84bd00",
			color: "#262626"
		}
		var left = {
			width: "45%",
			marginLeft: "5%",
			textAlign: "left",
			display: "inline-block"
		}
		var right = {
			width: "45%",
			marginRight: "5%",
			textAlign: "right",
			display: "inline-block"
		}
		return (
			<div style={copy}>
				<div style={left}>
					<span>© <a href="https://www.jose-canahui.com" target="_blank">JOSE CANAHUI</a></span>
				</div>
				<div style={right}>
					<span>MADE WITH ♥ USING <a href="http://reactjs.net/" target="_blank"> REACTJS </a></span>
				</div>
			</div>
			);
	}
};