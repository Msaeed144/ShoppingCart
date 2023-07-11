"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProducts = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BASE_URL = "https://fakestoreapi.com";

var getProducts = function getProducts() {
  var response;
  return regeneratorRuntime.async(function getProducts$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(BASE_URL, "/products")));

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

exports.getProducts = getProducts;