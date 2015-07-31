'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var Search = (function (_React$Component) {
	_inherits(Search, _React$Component);

	function Search(props) {
		_classCallCheck(this, Search);

		_get(Object.getPrototypeOf(Search.prototype), 'constructor', this).call(this, props);
		this.state = { searching: props.searching,
			query: '' };
	}

	_createClass(Search, [{
		key: 'handleChange',
		value: function handleChange(event) {
			this.setState({ query: event.target.value });
		}
	}, {
		key: 'search',
		value: function search() {
			if (this.state.query != '') this.props.searchFunc(this.state.query);
		}
	}, {
		key: 'keyDown',
		value: function keyDown(e) {
			if (e.keyCode == 13) {
				this.search();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement('input', { type: "text", style: { width: "200px" }, value: this.state.query, onKeyDown: this.keyDown.bind(this), onChange: this.handleChange.bind(this) }),
				_react2['default'].createElement(
					'button',
					{ type: "button", onClick: this.search.bind(this) },
					'Search'
				)
			);
		}
	}]);

	return Search;
})(_react2['default'].Component);

exports['default'] = Search;

Search.propTypes = { searchFunc: _react2['default'].PropTypes.func,
	searching: _react2['default'].PropTypes.bool };

Search.defaultProps = { searching: false };
module.exports = exports['default'];