'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = require('metal');

var _metal2 = _interopRequireDefault(_metal);

var _metalSoy = require('metal-soy');

var _metalSoy2 = _interopRequireDefault(_metalSoy);

var _SearchBase2 = require('../SearchBase/SearchBase');

var _SearchBase3 = _interopRequireDefault(_SearchBase2);

var _Search = require('./Search.soy');

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_SearchBase) {
	_inherits(Search, _SearchBase);

	function Search() {
		_classCallCheck(this, Search);

		return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
	}

	_createClass(Search, [{
		key: 'attached',
		value: function attached() {
			_SearchBase3.default.prototype.attached.apply(this);

			var queryString = window.location.search;
			var queryIndex = queryString.indexOf('q=');

			if (queryIndex !== -1) {
				this.query = queryString.substr(queryIndex + 2);
			}
		}
	}, {
		key: 'handleInput_',
		value: function handleInput_(event) {
			var target = event.target;


			this.query = target.value;
		}
	}]);

	return Search;
}(_SearchBase3.default);

;

_metalSoy2.default.register(Search, _Search2.default);

exports.default = Search;