import React from "react";

export default class Results extends React.Component {
	constructor(props) {
		super(props);
		this.state = {	resultsURIs: props.resultsURIs,
						searching: props.searching		};
	}
	render() {
		var divStyle = { overflow: "hidden", maxHeight: "230px", maxWidth: "230px", float: "left", background:"url(loader.gif) center center no-repeat"};
		var frameStyle = {marginTop: "-140px", marginLeft: "-60px"};
		var listStyle = { padding: "30px", fontSize: "20px", textAlign: "left"};
		var itemStyle = { padding: "20px" };
	    return (
	      <div style={{ margin: "40px", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
	      	{this.state.resultsURIs ? this.state.resultsURIs.albums.items.map(function(album) {
	        	let source = "https://embed.spotify.com/?view=coverart&uri=spotify:album:" + album.id
	        	return (
	        		<div style={divStyle}>
	        			<iframe style={frameStyle} src={source} width="350" height="430" frameborder="0" allowtransparency="false"></iframe>
	        		</div>);
	        }) : <ol className="instruction" style={listStyle}>
	        		<li style={itemStyle}>Search fot a song</li>
	        		<li style={itemStyle}>Click on an album</li>
	        		<li style={itemStyle}>Enjoy your non-mainstream song!</li>
	        	</ol>}
	      </div>
	    );
  	}
}

Results.propTypes = {	resultsURIs: React.PropTypes.object,
						searching: React.PropTypes.bool	};

Results.defaultProps = { 	resultsURIs: null,
							searching: false	};