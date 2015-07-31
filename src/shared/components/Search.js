import React from "react";

export default class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {	searching: props.searching,
						query: ''		};
	}
	handleChange(event) {
		this.setState({query: event.target.value});
	}
	search() {
		if (this.state.query != '')
			this.props.searchFunc(this.state.query);
	}
	keyDown(e) {
		if (e.keyCode == 13) {
			this.search();
		}
	}
	render() {
	    return (
	     	<div>
        		<input type="text" style={{width: "200px"}} value={this.state.query} onKeyDown={this.keyDown.bind(this)} onChange={this.handleChange.bind(this)}/>
        		<button type="button" onClick={this.search.bind(this)}>Search</button>
      		</div>
	    );
  	}
}

Search.propTypes = {	searchFunc: React.PropTypes.func,
						searching: React.PropTypes.bool	};

Search.defaultProps = { 	searching: false	};