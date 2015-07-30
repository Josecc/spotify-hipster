import React from "react";

export default class Results extends React.Component {
	constructor(props) {
		super(props);
		this.state = {	resultsURIs: props.resultsURIs,
						searching: props.searching		};
	}
	render() {
		var divStyle = {padding: "20px", overflow: "hidden", maxHeight: "230px", maxWidth: "230px", float: "left"};
		var frameStyle = {marginTop: "-140px", marginLeft: "-60px"};
	    return (
	      <div>
	      	{this.state.resultsURIs ? this.state.resultsURIs.albums.items.map(function(album) {
	        	let source = "https://embed.spotify.com/?view=coverart&uri=spotify:album:" + album.id
	        	return (
	        		<div style={divStyle}>
	        			<iframe style={frameStyle} src={source} width="350" height="430" frameborder="0" allowtransparency="true"></iframe>
	        		</div>);
	        }) : "Search for an album, and I will bring up the most hip songs containing your keyword ;)"}
	      </div>
	    );
  	}
}

Results.propTypes = {	resultsURIs: React.PropTypes.object,
						searching: React.PropTypes.bool	};

Results.defaultProps = { 	resultsURIs: null,
							searching: false	};