'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metalComponent = require('metal-component');

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metal = require('metal');

var _metal2 = _interopRequireDefault(_metal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBase = function (_Component) {
	_inherits(SearchBase, _Component);

	function SearchBase() {
		_classCallCheck(this, SearchBase);

		return _possibleConstructorReturn(this, (SearchBase.__proto__ || Object.getPrototypeOf(SearchBase)).apply(this, arguments));
	}

	_createClass(SearchBase, [{
		key: 'attached',
		value: function attached() {
			this.on('queryChanged', this.handleQueryChange_.bind(this));
		}
	}, {
		key: 'filterResults_',
		value: function filterResults_(data, query) {
			var _this2 = this;

			var children = data.children,
			    description = data.description,
			    title = data.title;


			var results = [];

			description = description ? description.toLowerCase() : '';
			title = title ? title.toLowerCase() : '';

			if (title.indexOf(query) > -1 || description.indexOf(query) > -1) {
				results.push(data);
			}

			if (children) {
				children.forEach(function (child) {
					results = results.concat(_this2.filterResults_(child, query));
				});
			}

			return results;
		}
	}, {
		key: 'handleQueryChange_',
		value: function handleQueryChange_(_ref) {
			var newVal = _ref.newVal;

			this.results = this.search_(newVal);
		}
	}, {
		key: 'search_',
		value: function search_(query) {
			var maxResults = this.maxResults,
			    section = this.section;


			var results = [];

			if (section && query) {
				results = this.filterResults_(section, query.toLowerCase());

				if (results.length > maxResults) {
					results = results.slice(0, maxResults);
				}
			}

			return results;
		}
	}]);

	return SearchBase;
}(_metalComponent2.default);

;

SearchBase.STATE = {
	maxResults: {
		validator: _metal2.default.isNumber,
		value: 4
	},

	query: {
		validator: _metal2.default.isString,
		value: ''
	},

	results: {
		validator: _metal2.default.isArray,
		value: []
	},

	section: {
		validator: _metal2.default.isObject
	}
};

exports.default = SearchBase;