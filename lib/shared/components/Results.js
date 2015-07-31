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

var Results = (function (_React$Component) {
	_inherits(Results, _React$Component);

	function Results(props) {
		_classCallCheck(this, Results);

		_get(Object.getPrototypeOf(Results.prototype), "constructor", this).call(this, props);
		this.state = { resultsURIs: props.resultsURIs,
			searching: props.searching };
	}

	_createClass(Results, [{
		key: "render",
		value: function render() {
			var divStyle = { padding: "20px", overflow: "hidden", maxHeight: "230px", maxWidth: "230px", float: "left", background: "url(loader.gif) center center no-repeat" };
			var frameStyle = { marginTop: "-140px", marginLeft: "-60px" };
			return _react2["default"].createElement(
				"div",
				null,
				this.state.resultsURIs ? this.state.resultsURIs.albums.items.map(function (album) {
					var source = "https://embed.spotify.com/?view=coverart&uri=spotify:album:" + album.id;
					return _react2["default"].createElement(
						"div",
						{ style: divStyle },
						_react2["default"].createElement("iframe", { style: frameStyle, src: source, width: "350", height: "430", frameborder: "0", allowtransparency: "true" })
					);
				}) : "Search for an album, and I will bring up the most hip songs containing your keyword ;)"
			);
		}
	}]);

	return Results;
})(_react2["default"].Component);

exports["default"] = Results;

Results.propTypes = { resultsURIs: _react2["default"].PropTypes.object,
	searching: _react2["default"].PropTypes.bool };

Results.defaultProps = { resultsURIs: null,
	searching: false };
module.exports = exports["default"];