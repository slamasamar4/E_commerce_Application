"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchProducts = exports.signUpUser = exports.loginUser = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Base URL for the backend
var BASE_URL = 'http://localhost:8080/api'; // Replace with your backend URL

var loginUser = function loginUser(credentials) {
  var response;
  return regeneratorRuntime.async(function loginUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].post("".concat(BASE_URL, "/auth/login"), credentials));

        case 2:
          response = _context.sent;
          return _context.abrupt("return", response.data);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.loginUser = loginUser;

var signUpUser = function signUpUser(userDetails) {
  var response;
  return regeneratorRuntime.async(function signUpUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].post("".concat(BASE_URL, "/auth/signup"), userDetails));

        case 2:
          response = _context2.sent;
          return _context2.abrupt("return", response.data);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.signUpUser = signUpUser;

var fetchProducts = function fetchProducts() {
  var response;
  return regeneratorRuntime.async(function fetchProducts$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(BASE_URL, "/products")));

        case 2:
          response = _context3.sent;
          return _context3.abrupt("return", response.data);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.fetchProducts = fetchProducts;
//# sourceMappingURL=apiService.dev.js.map
