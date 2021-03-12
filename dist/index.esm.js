import React, { useState, useEffect } from 'react';
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import PerfectScrollbar from 'react-perfect-scrollbar';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// import {AxiosService} from "../../../services/apiService";
// import GlobalConfig from "../../../globalConfig/globalConfig";
//
// import {
//     getAllConversationsByReceiver,
//     getAllConversationsBySender,
//     getByQueryId,
//     markMessageRead
//
// } from "./repository";
//
//
var MessageBoxServices = function MessageBoxServices() {
  _classCallCheck(this, MessageBoxServices);
}; //


var MessageBoxService = new MessageBoxServices();

// import GlobalConfig from "../../../globalConfig/globalConfig";
// const { TextArea } = Input;

var MessageChatBox = function MessageChatBox(props) {
  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      messageReader = _useState2[0];
      _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2);
      _useState4[0];
      _useState4[1]; //const [intervalID, setIntervalID] = useState('');


  var userChatInfo = props.userChatInfo;
  var userDetails = localStorage.getItem('userDTO');
  var userDTO = JSON.parse(userDetails);
  var intervalID = null;
  useEffect(function () {
    getByQueryId();
  }, []);

  var getByQueryId = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var data, response;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              data = userChatInfo;
              data.readMsg = 1;
              _context2.next = 5;
              return MessageBoxService.markMessageRead(data);

            case 5:
              response = _context2.sent;
              response.data; // if (responseData.status === GlobalConfig.MESSAGES_TYPES.TRUE) {
              //     setMessageReader(responseData.data)
              //
              // } else {
              //     console.log('getRoles no response');
              // }

              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              console.log('Error occured in getRoles');

            case 12:
              intervalID = setInterval( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _response;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return MessageBoxService.getByQueryId(userChatInfo.queryId);

                      case 3:
                        _response = _context.sent;
                        _response.data; // if (responseData.status === GlobalConfig.MESSAGES_TYPES.TRUE) {
                        //     setMessageReader(responseData.data)
                        //
                        // } else {
                        //     console.log('getRoles no response');
                        // }

                        _context.next = 10;
                        break;

                      case 7:
                        _context.prev = 7;
                        _context.t0 = _context["catch"](0);
                        console.log('Error occured in getRoles');

                      case 10:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, null, [[0, 7]]);
              })), 1000);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 9]]);
    }));

    return function getByQueryId() {
      return _ref.apply(this, arguments);
    };
  }();

  useEffect(function () {
    clearInterval(intervalID);
  }, [userChatInfo]);

  var handleChatClosed = function handleChatClosed() {
    props.handleChatClosed();
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "message-chat-box user-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "message-header"
  }, /*#__PURE__*/React.createElement("h3", null, userDTO.role == "USER" ? userChatInfo.ministryName : userChatInfo.receiverName, " ", /*#__PURE__*/React.createElement("span", {
    className: "close-icon",
    onClick: handleChatClosed
  }))), /*#__PURE__*/React.createElement("div", {
    className: "message-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chat-section"
  }, /*#__PURE__*/React.createElement(PerfectScrollbar, null, /*#__PURE__*/React.createElement("ul", null, messageReader === null || messageReader === void 0 ? void 0 : messageReader.map(function (item, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, /*#__PURE__*/React.createElement("h3", null, userDTO.role == "USER" ? /*#__PURE__*/React.createElement("span", null, userDTO.id === item.senderId ? 'You' : userChatInfo.ministryName) : /*#__PURE__*/React.createElement("span", null, userDTO.id === item.senderId ? 'You' : item.receiverName)), /*#__PURE__*/React.createElement("p", null, item.fullMessage));
  })))), /*#__PURE__*/React.createElement("div", {
    className: "chatmessage"
  })));
};

var MessageChats = function MessageChats(props) {
  debugger;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      messageListVisible = _useState2[0],
      setMessageListVisible = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      messageSender = _useState4[0];
      _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      ministriesList = _useState6[0];
      _useState6[1];

  var _useState7 = useState([]),
      _useState8 = _slicedToArray(_useState7, 2),
      departmentList = _useState8[0];
      _useState8[1];

  var _useState9 = useState({}),
      _useState10 = _slicedToArray(_useState9, 2),
      userChatInfo = _useState10[0],
      setUserChatInfo = _useState10[1];

  var _useState11 = useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      chatboxVisible = _useState12[0],
      setChatboxVisible = _useState12[1];

  var userDetails = localStorage.getItem('userDTO');
  var userDTO = JSON.parse(userDetails);

  var handlechatboxpopup = function handlechatboxpopup() {
    setMessageListVisible(!messageListVisible);
  };

  useEffect(function () {
    getMininstriesListing();
    getDepartmentListing();
  }, []);
  useEffect(function () {
    getAllConversationsByReceiver();
  }, [ministriesList, departmentList]);

  var getMininstriesListing = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var payload;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              try {
                payload = {}; // const response = await LicenseFormServices.ministriesDetails(payload);
                // const responseData = response.data;
                // if (responseData.status === GlobalConfig.MESSAGES_TYPES.TRUE) {
                //     setMinistriesList(responseData.data)
                //
                // } else {
                //     console.log('getRoles no response');
                // }
              } catch (_unused) {
                console.log('Error occured in getRoles');
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getMininstriesListing() {
      return _ref.apply(this, arguments);
    };
  }();

  var getDepartmentListing = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getDepartmentListing() {
      return _ref2.apply(this, arguments);
    };
  }();

  var getAllConversationsByReceiver = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var userDetails, userDTO, response, _response;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              userDetails = localStorage.getItem('userDTO');
              userDTO = JSON.parse(userDetails);

              if (!(userDTO.role == "USER")) {
                _context3.next = 15;
                break;
              }

              _context3.prev = 3;
              _context3.next = 6;
              return MessageBoxService.getAllConversationsByReceiver(userDTO.id);

            case 6:
              response = _context3.sent;
              response.data; // if (responseData.status === GlobalConfig.MESSAGES_TYPES.TRUE) {
              //     let messages = [];
              //     console.log( responseData.data, ' responseData.data.conversations')
              //     responseData.data.map((item) => {
              //         item.fullMessage = item.conversations[item.conversations.length - 1].fullMessage
              //         ministriesList && ministriesList.map((ministry) => {
              //             if(ministry.id == item.ministryId){
              //                 item.ministryName = ministry.name;
              //             }
              //         });
              //         departmentList && departmentList.map((department) => {
              //             if(department.id == item.departmentId){
              //                 item.departmentName = department.name;
              //             }
              //         })
              //         messages.push(item);
              //     })
              //
              //     setMessageSender(messages);
              // }

              _context3.next = 13;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](3);
              console.log("Error occurred", _context3.t0);

            case 13:
              _context3.next = 25;
              break;

            case 15:
              _context3.prev = 15;
              _context3.next = 18;
              return MessageBoxService.getAllConversationsBySender(userDTO.id);

            case 18:
              _response = _context3.sent;
              _response.data; // if (responseData.status === GlobalConfig.MESSAGES_TYPES.TRUE) {
              //     let messages = [];
              //     responseData.data.map((item) => {
              //         item.fullMessage = item.conversations[item.conversations.length - 1].fullMessage;
              //         ministriesList && ministriesList.map((ministry) => {
              //             if(ministry.id == item.ministryId){
              //                 item.ministryName = ministry.name;
              //             }
              //         });
              //         departmentList && departmentList.map((department) => {
              //             if(department.id == item.departmentId){
              //                 item.departmentName = department.name;
              //             }
              //         })
              //         messages.push(item);
              //     })
              //     setMessageSender(messages)
              // }

              _context3.next = 25;
              break;

            case 22:
              _context3.prev = 22;
              _context3.t1 = _context3["catch"](15);
              console.log("Error occurred", _context3.t1);

            case 25:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[3, 10], [15, 22]]);
    }));

    return function getAllConversationsByReceiver() {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleUserChatBox = function handleUserChatBox(item) {
    setUserChatInfo(item);
    setChatboxVisible(true);
  };

  var handleChatClosed = function handleChatClosed() {
    setUserChatInfo({});
    setChatboxVisible(false);
  };

  console.log(messageSender && messageSender, 'messageSender');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "message-chat-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "message-header",
    onClick: handlechatboxpopup
  }, /*#__PURE__*/React.createElement("h3", null, " Messaging "), messageListVisible ? /*#__PURE__*/React.createElement(UpOutlined, null) : /*#__PURE__*/React.createElement(DownOutlined, null)), messageListVisible ? /*#__PURE__*/React.createElement("div", {
    className: "message-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chat-section"
  }, /*#__PURE__*/React.createElement(PerfectScrollbar, null, /*#__PURE__*/React.createElement("ul", null, messageSender === null || messageSender === void 0 ? void 0 : messageSender.map(function (item, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index,
      onClick: function onClick() {
        return handleUserChatBox(item);
      }
    }, /*#__PURE__*/React.createElement("h3", null, userDTO.role == "USER" ? item.ministryName : item.receiverName), /*#__PURE__*/React.createElement("p", null, item.fullMessage));
  }))))) : null), chatboxVisible && userChatInfo ? /*#__PURE__*/React.createElement(MessageChatBox, {
    userChatInfo: userChatInfo,
    handleChatClosed: handleChatClosed
  }) : null);
};

export { MessageChats as HelloWorld };
