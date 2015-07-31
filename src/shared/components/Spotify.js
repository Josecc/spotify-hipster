import React from "react";
import Search from "./Search";
import Results from "./Results";

export default class Spotify extends React.Component {  
	constructor(props) {
		super(props);
		this.state = {  query: props.query,
						searchResult: props.searchResult,
						searching: props.searching		};
	}
	search(searchQuery){
		this.setState({ query: searchQuery,
						searching: true		});
		//perform search

		var callback = 'c'+Math.floor((Math.random()*100000000)+1);

		$.ajax({
			type: 'GET',
			url: 'https://api.spotify.com/v1/search?q=' + searchQuery +'%20tag:hipster&type=album&market=US&limit=12',
			jsonpCallback: callback, //specify callback name
			contentType: 'application/json',
			dataType: 'json', //specify jsonp
			success: function(data) {
				this.setState({	searchResult: data,
								searching: false	});
			}.bind(this),
			error: function(e) {
				console.log('error', e);
				this.setState({	searching:false	});
			}
		});

		//update state to search result.
	}
	render() {
		return (
			<div>
				<h1> Hipster Spotify Search </h1>
				<Search searchFunc={this.search.bind(this)} />
				<Results key={this.state.searching} resultsURIs={this.state.searchResult} searching={this.state.searching}/>
			</div>
			);
	}
};

Spotify.propTypes = {	query: React.PropTypes.string,
						searchResult: React.PropTypes.object,
						searching: React.PropTypes.bool	};

Spotify.defaultProps = { 	query: "",
							searchResult: null,
							searching: false	};