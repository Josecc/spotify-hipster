"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _reactRouter = require("react-router");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _componentsSpotify = require("./components/Spotify");

var _componentsSpotify2 = _interopRequireDefault(_componentsSpotify);

exports["default"] = _react2["default"].createElement(_reactRouter.Route, { handler: _componentsSpotify2["default"], path: "/" });
module.exports = exports["default"];