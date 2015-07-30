"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _sharedRoutes = require("../shared/routes");

var _sharedRoutes2 = _interopRequireDefault(_sharedRoutes);

var app = (0, _express2["default"])();

// set up Jade
app.set('views', './views');
app.set('view engine', 'jade');

app.get('/*', function (req, res) {
  _reactRouter2["default"].run(_sharedRoutes2["default"], req.url, function (Handler) {
    var content = _react2["default"].renderToString(_react2["default"].createElement(Handler, null));
    res.render('index', { content: content });
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});