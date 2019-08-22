"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _models = _interopRequireDefault(require("../../models"));

var _sequelize = _interopRequireDefault(require("sequelize"));

var op = _sequelize["default"];

var termServices =
/*#__PURE__*/
function () {
  function termServices() {
    (0, _classCallCheck2["default"])(this, termServices);
  }

  (0, _createClass2["default"])(termServices, null, [{
    key: "addNew",
    value: function () {
      var _addNew = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(newEntry) {
        var added;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _models["default"].Term.create(newEntry);

              case 3:
                added = _context.sent;

                if (!(Object.values(added).length > 1)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", added);

              case 6:
                return _context.abrupt("return", null);

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                throw _context.t0;

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }));

      function addNew(_x) {
        return _addNew.apply(this, arguments);
      }

      return addNew;
    }()
  }, {
    key: "deleter",
    value: function () {
      var _deleter = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(id) {
        var deleted;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _models["default"].Term.destroy({
                  where: {
                    studentId: id
                  }
                });

              case 3:
                deleted = _context2.sent;

                if (!deleted) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", deleted);

              case 6:
                return _context2.abrupt("return", null);

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                throw _context2.t0;

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 9]]);
      }));

      function deleter(_x2) {
        return _deleter.apply(this, arguments);
      }

      return deleter;
    }()
  }, {
    key: "updater",
    value: function () {
      var _updater = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(id, updated_) {
        var updated;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _models["default"].Term.update(updated_, {
                  where: {
                    studentId: id
                  }
                });

              case 3:
                updated = _context3.sent;

                if (!updated) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt("return", updated);

              case 6:
                return _context3.abrupt("return", null);

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                throw _context3.t0;

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 9]]);
      }));

      function updater(_x3, _x4) {
        return _updater.apply(this, arguments);
      }

      return updater;
    }()
  }, {
    key: "getAll",
    value: function () {
      var _getAll = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4() {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _models["default"].Term.findAll();

              case 3:
                return _context4.abrupt("return", _context4.sent);

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](0);
                throw _context4.t0;

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 6]]);
      }));

      function getAll() {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }, {
    key: "getOne",
    value: function () {
      var _getOne = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(searchParam) {
        var foundTerm;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _models["default"].Term.findAll({
                  where: (0, _defineProperty2["default"])({}, op.or, [{
                    studentId: (0, _defineProperty2["default"])({}, op.like, '%' + searchParam + '%')
                  }, {
                    maxTj: (0, _defineProperty2["default"])({}, op.like, '%' + searchParam + '%')
                  }, {
                    tj: (0, _defineProperty2["default"])({}, op.like, '%' + searchParam + '%')
                  }, {
                    maxExam: (0, _defineProperty2["default"])({}, op.like, '%' + searchParam + '%')
                  }, {
                    exam: (0, _defineProperty2["default"])({}, op.like, '%' + searchParam + '%')
                  }])
                });

              case 3:
                foundTerm = _context5.sent;

                if (!foundTerm) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return", foundTerm);

              case 6:
                return _context5.abrupt("return", null);

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](0);
                throw _context5.t0;

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 9]]);
      }));

      function getOne(_x5) {
        return _getOne.apply(this, arguments);
      }

      return getOne;
    }()
  }, {
    key: "getOneComplex",
    value: function () {
      var _getOneComplex = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(classId_n, term_n, studentId_n, course_n) {
        var foundTerm;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _models["default"].Term.findAll({
                  where: (0, _defineProperty2["default"])({}, op.and, [{
                    classId: classId_n
                  }, {
                    studentId: studentId_n
                  }, {
                    term: term_n
                  }, {
                    course: course_n
                  }])
                });

              case 3:
                foundTerm = _context6.sent;

                if (!(Object.values(foundTerm).length >= 1)) {
                  _context6.next = 8;
                  break;
                }

                return _context6.abrupt("return", foundTerm);

              case 8:
                return _context6.abrupt("return", null);

              case 9:
                _context6.next = 14;
                break;

              case 11:
                _context6.prev = 11;
                _context6.t0 = _context6["catch"](0);
                throw _context6.t0;

              case 14:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 11]]);
      }));

      function getOneComplex(_x6, _x7, _x8, _x9) {
        return _getOneComplex.apply(this, arguments);
      }

      return getOneComplex;
    }()
  }]);
  return termServices;
}();

var _default = termServices;
exports["default"] = _default;
//# sourceMappingURL=termServices.js.map