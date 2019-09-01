"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _courseTeacherService = _interopRequireDefault(require("../services/courseTeacherService"));

var _Util = _interopRequireDefault(require("../utils/Util"));

var util = new _Util["default"]();

var courseTeacherController =
/*#__PURE__*/
function () {
  function courseTeacherController() {
    (0, _classCallCheck2["default"])(this, courseTeacherController);
  }

  (0, _createClass2["default"])(courseTeacherController, null, [{
    key: "getOne",
    value: function () {
      var _getOne = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var id, one;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = req.params.id;
                _context.prev = 1;
                _context.next = 4;
                return _courseTeacherService["default"].getOne_(id);

              case 4:
                one = _context.sent;

                if (!(Object.values(one).length >= 1)) {
                  _context.next = 10;
                  break;
                }

                util.setSuccess("Found", 200, one);
                return _context.abrupt("return", util.send(res));

              case 10:
                util.setError(400, "Can't find what You are looking for");
                return _context.abrupt("return", util.send(res));

              case 12:
                _context.next = 18;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](1);
                util.setError(400, "A problem occured >> ".concat(_context.t0.message));
                return _context.abrupt("return", util.send(res));

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 14]]);
      }));

      function getOne(_x, _x2) {
        return _getOne.apply(this, arguments);
      }

      return getOne;
    }()
  }, {
    key: "getAll",
    value: function () {
      var _getAll = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var list;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _courseTeacherService["default"].getAll();

              case 3:
                list = _context2.sent;

                if (!(Object.values(list).length >= 1)) {
                  _context2.next = 9;
                  break;
                }

                util.setSuccess("Found ", 200, list);
                return _context2.abrupt("return", util.send(res));

              case 9:
                util.setError(400, "A problem occured can't find any data");
                return _context2.abrupt("return", util.send(res));

              case 11:
                _context2.next = 17;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](0);
                util.setError(400, "an error occured " + _context2.t0.message);
                return _context2.abrupt("return", util.send(res));

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 13]]);
      }));

      function getAll(_x3, _x4) {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }, {
    key: "adder",
    value: function () {
      var _adder = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res) {
        var data, date, teacherId_, courseId_, dataToadd, added;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                data = req.body;
                date = new Date();
                teacherId_ = req.body.teachername.slice(0, 3) + '-' + Math.floor(Math.random() * 100) + '-' + date.getFullYear();
                courseId_ = req.body.courseName.slice(0, 3) + '-' + Math.floor(Math.random() * 100) + '-' + date.getFullYear();
                dataToadd = {
                  "teachername": req.body.teachername,
                  "teacherId": teacherId_,
                  "courseName": req.body.courseName,
                  "courseId": courseId_,
                  "classId": req.body.classId
                };

                if (!(Object.values(data).length < 3 == false)) {
                  _context3.next = 14;
                  break;
                }

                _context3.next = 9;
                return _courseTeacherService["default"].addNew(dataToadd);

              case 9:
                added = _context3.sent;
                util.setSuccess("Added successfully", 200, added);
                return _context3.abrupt("return", util.send(res));

              case 14:
                util.setError(400, "can't add");
                return _context3.abrupt("return", util.send(res));

              case 16:
                _context3.next = 22;
                break;

              case 18:
                _context3.prev = 18;
                _context3.t0 = _context3["catch"](0);
                util.setError(400, "an error occured " + _context3.t0.message);
                return _context3.abrupt("return", util.send(res));

              case 22:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 18]]);
      }));

      function adder(_x5, _x6) {
        return _adder.apply(this, arguments);
      }

      return adder;
    }()
  }, {
    key: "udpdate",
    value: function () {
      var _udpdate = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(req, res) {
        var id, data, updated;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                id = req.params.id;
                data = req.body;

                if (!(Object.values(data).length >= 1)) {
                  _context4.next = 11;
                  break;
                }

                _context4.next = 6;
                return _courseTeacherService["default"].updater(id, data);

              case 6:
                updated = _context4.sent;
                util.setSuccess("Updated successfully", 200, updated);
                return _context4.abrupt("return", util.send(res));

              case 11:
                util.setError(400, "C'mon you got to atleast update one");
                return _context4.abrupt("return", util.send(res));

              case 13:
                _context4.next = 19;
                break;

              case 15:
                _context4.prev = 15;
                _context4.t0 = _context4["catch"](0);
                util.setError(400, "An error occured " + _context4.t0.message);
                return _context4.abrupt("return", util.send(res));

              case 19:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 15]]);
      }));

      function udpdate(_x7, _x8) {
        return _udpdate.apply(this, arguments);
      }

      return udpdate;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(req, res) {
        var id, deleted;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                id = req.params.id;
                _context5.next = 4;
                return _courseTeacherService["default"].deleter(id);

              case 4:
                deleted = _context5.sent;

                if (!deleted) {
                  _context5.next = 10;
                  break;
                }

                util.setSuccess("Deleted successfully", 200, deleted);
                return _context5.abrupt("return", util.send(res));

              case 10:
                util.setError(400, "Can't delete may be it's already gone");
                return _context5.abrupt("return", util.send(res));

              case 12:
                _context5.next = 18;
                break;

              case 14:
                _context5.prev = 14;
                _context5.t0 = _context5["catch"](0);
                util.setError(400, "An error occured " + _context5.t0.message);
                return _context5.abrupt("return", util.send(res));

              case 18:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 14]]);
      }));

      function _delete(_x9, _x10) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);
  return courseTeacherController;
}();

var _default = courseTeacherController;
exports["default"] = _default;
//# sourceMappingURL=courseTeacherController.js.map