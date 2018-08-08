/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ItemModel = function () {
  function ItemModel() {
    _classCallCheck(this, ItemModel);
  }

  _createClass(ItemModel, null, [{
    key: "updateLocalStorage",
    value: function updateLocalStorage(val) {
      var todoItems = ItemModel.getTodoList();
      var id = todoItems.count++;
      todoItems.data[id] = {
        id: id,
        item: val,
        date: new Date(),
        done: false
      };
      ItemModel.setTodoList(todoItems);
      return todoItems.data[id];
    }
  }, {
    key: "getTodoList",
    value: function getTodoList() {
      return JSON.parse(localStorage.getItem("my-todo-list"));
    }
  }, {
    key: "setTodoList",
    value: function setTodoList(val) {
      localStorage.setItem("my-todo-list", JSON.stringify(val));
    }
  }]);

  return ItemModel;
}();

exports.default = ItemModel;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _itemModel = __webpack_require__(0);

var _itemModel2 = _interopRequireDefault(_itemModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  _createClass(Util, null, [{
    key: 'toggleListDisplay',
    value: function toggleListDisplay() {
      var todoItems = _itemModel2.default.getTodoList();
      var itemList = document.querySelector('.item-list');
      var itemCount = document.querySelector('.count');

      var len = Object.keys(todoItems.data).length;
      if (len > 0) {
        itemList.style.display = "block";
        len = Util.getPendingCount();
        itemCount.innerHTML = len + ' ' + Util.getLabel(len) + ' left';
      } else {
        itemList.style.display = "none";
      }
    }
  }, {
    key: 'getLabel',
    value: function getLabel(count) {
      return count === 1 ? "item" : "items";
    }
  }, {
    key: 'getPendingCount',
    value: function getPendingCount() {
      var count = 0;
      var todoItems = _itemModel2.default.getTodoList();
      Object.keys(todoItems.data).forEach(function (i) {
        if (!todoItems.data[i].done) {
          count++;
        }
      });
      return count;
    }
  }]);

  return Util;
}();

exports.default = Util;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _itemRowView = __webpack_require__(3);

var _itemRowView2 = _interopRequireDefault(_itemRowView);

var _itemModel = __webpack_require__(0);

var _itemModel2 = _interopRequireDefault(_itemModel);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var el = document.querySelector('.more');
var btn = el.querySelector('.more-btn');
var menu = el.querySelector('.more-menu');
var visible = false;

function showMenu(e) {
	e.preventDefault();
	if (!visible) {
		visible = true;
		el.classList.add('show-more-menu');
		menu.setAttribute('aria-hidden', false);
		document.addEventListener('mousedown', hideMenu, false);
	}
}

function hideMenu(e) {
	if (btn.contains(e.target)) {
		return;
	}
	if (visible) {
		visible = false;
		el.classList.remove('show-more-menu');
		menu.setAttribute('aria-hidden', true);
		document.removeEventListener('mousedown', hideMenu);
	}
}

btn.addEventListener('click', showMenu, false);

var todoList = function () {
	function todoList() {
		var _this = this;

		_classCallCheck(this, todoList);

		this.addField = document.querySelector('input[type="text"]');
		this.ulList = document.querySelector('.taskList');
		this.checkAllElement = document.querySelector('#checkAll');
		this.onLoad();
		this.addField.addEventListener('change', function (e) {
			return _this.addItem(e);
		});
		this.checkAllElement.addEventListener('click', function (e) {
			return _this.checkAll(e);
		});
	}

	_createClass(todoList, [{
		key: 'onLoad',
		value: function onLoad() {
			var self = this;
			var todoItems = _itemModel2.default.getTodoList();
			if (todoItems === null) {
				todoItems = {};
				todoItems["data"] = {};
				todoItems["count"] = 0;
				_itemModel2.default.setTodoList(todoItems);
			} else {}
			self.renderList();
		}
	}, {
		key: 'addItem',
		value: function addItem(e) {
			var self = this;
			var addVal = e.currentTarget.value;
			if (typeof addVal === "string") {
				addVal = addVal.trim();
				if (addVal !== '') {
					self.updateList(addVal);
				}
			}
			e.currentTarget.value = '';
		}
	}, {
		key: 'updateList',
		value: function updateList(val) {
			var self = this;
			var todoItems = _itemModel2.default.getTodoList();
			if (Object.keys(todoItems.data).length < todoList.MAX_ITEMS) {
				var newItem = _itemModel2.default.updateLocalStorage(val);
				_utils2.default.toggleListDisplay();
				self.getRowTemplate(newItem);
			} else {
				console.error('Only ' + todoList.MAX_ITEMS + ' Items supported.');
			}
		}
	}, {
		key: 'getRowTemplate',
		value: function getRowTemplate(obj) {
			var self = this;
			var todoItem = document.createElement('item-row');
			todoItem.id = 'item-row-' + obj.id;

			self.ulList.insertBefore(todoItem, self.ulList.childNodes[0]);
			todoItem.setMessage(obj);
		}
	}, {
		key: 'renderList',
		value: function renderList() {
			var self = this;
			var todoItems = _itemModel2.default.getTodoList();
			Object.keys(todoItems.data).forEach(function (i) {
				var obj = todoItems.data[i];
				self.getRowTemplate(obj);
			});
			_utils2.default.toggleListDisplay();
		}
	}, {
		key: 'checkAll',
		value: function checkAll(e) {
			var checked = e.currentTarget.checked;
			document.querySelectorAll('input[type="checkbox"]').forEach(function (checkbox) {
				if (checkbox.checked !== checked) {
					checkbox.click();
				}
			});
		}
	}], [{
		key: 'MAX_ITEMS',
		get: function get() {
			return 10;
		}
	}]);

	return todoList;
}();

;
window.addEventListener('load', function () {
	return new todoList();
});
exports.default = todoList;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _itemModel = __webpack_require__(0);

var _itemModel2 = _interopRequireDefault(_itemModel);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ItemRowView = function (_HTMLElement) {
  _inherits(ItemRowView, _HTMLElement);

  function ItemRowView() {
    _classCallCheck(this, ItemRowView);

    return _possibleConstructorReturn(this, (ItemRowView.__proto__ || Object.getPrototypeOf(ItemRowView)).apply(this, arguments));
  }

  _createClass(ItemRowView, [{
    key: 'createdCallback',
    value: function createdCallback() {
      var _this2 = this;

      this.classList.add('task-row');

      this.innerHTML = ItemRowView.TEMPLATE;
      this.itemName = this.querySelector('p');
      this.itemCheck = this.querySelector('input');
      this.itemDelete = this.querySelector('a');
      this.itemLabel = this.querySelector('label');

      this.itemDelete.addEventListener('click', function (e) {
        return _this2.deleteItem(e);
      });
      this.itemCheck.addEventListener('click', function (e) {
        return _this2.markItemDone(e);
      });
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(attributeName) {
      // We display/update the created date message if the id changes.
      /*if (attributeName == 'id') {
      	let date
      	if (this.id) {
      		date = new Date(parseInt(this.id));
      	} else {
      		date = new Date();
      	}
      	// Format the date
      	let dateFormatterOptions = {
      		day: 'numeric',
      		month: 'short'
      	};
      	let shortDate = new Intl.DateTimeFormat("en-US", dateFormatterOptions).format(date);
       	this.dateElement.textContent = `Created on ${shortDate}`;
      }*/
    }
  }, {
    key: 'setMessage',
    value: function setMessage(obj) {
      if (obj.done) {
        this.classList.add('done');
        this.itemCheck.checked = true;
      }
      this.itemName.textContent = obj.item;
      this.itemName.title = obj.item;

      this.itemCheck.id = obj.id;
      this.itemLabel.setAttribute("for", obj.id);
      this.itemDelete.id = 'item-delete-' + obj.id;
    }
  }, {
    key: 'markItemDone',
    value: function markItemDone(e) {
      var self = this;
      var id = e.currentTarget.id;
      var todoItems = _itemModel2.default.getTodoList();
      if (e.currentTarget.checked) {
        todoItems.data[id].done = true;
        self.classList.add('done');
      } else {
        todoItems.data[id].done = false;
        self.classList.remove('done');
      }
      _itemModel2.default.setTodoList(todoItems);
      _utils2.default.toggleListDisplay();
    }
  }, {
    key: 'deleteItem',
    value: function deleteItem(e) {
      var self = this;
      var id = e.currentTarget.id.split("item-delete-");
      id = id[1];
      var todoItems = _itemModel2.default.getTodoList();
      delete todoItems.data[id];
      _itemModel2.default.setTodoList(todoItems);
      self.parentNode.removeChild(self);

      _utils2.default.toggleListDisplay();
    }
  }]);

  return ItemRowView;
}(HTMLElement);

ItemRowView.TEMPLATE = '\n\t  <div class="viewTaskView">\n\t\t <input  type="checkbox"/>\n\t\t <label></label>\n\t\t <p></p>\n\t\t <a  class="icon-delete"></a>\n\t  </div>';

document.registerElement('item-row', ItemRowView);

exports.default = ItemRowView;

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map