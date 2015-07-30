"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Search = require("./Search");

var _Search2 = _interopRequireDefault(_Search);

var _Results = require("./Results");

var _Results2 = _interopRequireDefault(_Results);

var Spotify = (function (_React$Component) {
	_inherits(Spotify, _React$Component);

	function Spotify(props) {
		_classCallCheck(this, Spotify);

		_get(Object.getPrototypeOf(Spotify.prototype), "constructor", this).call(this, props);
		this.state = { query: props.query,
			searchResult: props.searchResult,
			searching: props.searching };
	}

	_createClass(Spotify, [{
		key: "search",
		value: function search(searchQuery) {
			this.setState({ query: searchQuery,
				searching: true });
			//perform search

			var callback = 'c' + Math.floor(Math.random() * 100000000 + 1);

			$.ajax({
				type: 'GET',
				url: 'https://api.spotify.com/v1/search?q=' + searchQuery + '%20tag:hipster&type=album&market=US&limit=12',
				jsonpCallback: callback, //specify callback name
				contentType: 'application/json',
				dataType: 'json', //specify jsonp
				success: (function (data) {
					this.setState({ searchResult: data,
						searching: false });
				}).bind(this),
				error: function error(e) {
					console.log('error', e);
					this.setState({ searching: false });
				}
			});

			//update state to search result.
		}
	}, {
		key: "render",
		value: function render() {
			return _react2["default"].createElement(
				"div",
				null,
				_react2["default"].createElement(
					"span",
					null,
					" Hipster Spotify Search "
				),
				_react2["default"].createElement(_Search2["default"], { searchFunc: this.search.bind(this) }),
				_react2["default"].createElement(_Results2["default"], { key: this.state.searching, resultsURIs: this.state.searchResult, searching: this.state.searching })
			);
		}
	}]);

	return Spotify;
})(_react2["default"].Component);

exports["default"] = Spotify;
;

Spotify.propTypes = { query: _react2["default"].PropTypes.string,
	searchResult: _react2["default"].PropTypes.object,
	searching: _react2["default"].PropTypes.bool };

Spotify.defaultProps = { query: "",
	searchResult: null,
	searching: false };
module.exports = exports["default"];