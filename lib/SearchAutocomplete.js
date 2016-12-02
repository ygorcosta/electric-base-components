'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metalAutocomplete = require('metal-autocomplete');

var _metalAutocomplete2 = _interopRequireDefault(_metalAutocomplete);

var _metal = require('metal');

var _metal2 = _interopRequireDefault(_metal);

var _metalSoy = require('metal-soy');

var _metalSoy2 = _interopRequireDefault(_metalSoy);

var _SearchBase2 = require('../SearchBase/SearchBase');

var _SearchBase3 = _interopRequireDefault(_SearchBase2);

var _SearchAutocomplete = require('./SearchAutocomplete.soy');

var _SearchAutocomplete2 = _interopRequireDefault(_SearchAutocomplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchAutocomplete = function (_SearchBase) {
	_inherits(SearchAutocomplete, _SearchBase);

	function SearchAutocomplete() {
		_classCallCheck(this, SearchAutocomplete);

		return _possibleConstructorReturn(this, (SearchAutocomplete.__proto__ || Object.getPrototypeOf(SearchAutocomplete)).apply(this, arguments));
	}

	_createClass(SearchAutocomplete, [{
		key: 'attached',
		value: function attached() {
			var element = this.element;
			var input = this.refs.input;


			if (input) {
				var autocomplete = new _metalAutocomplete2.default({
					data: this.search_.bind(this),
					format: this.format_.bind(this),
					inputElement: input,
					select: function select() {}
				});
			}
		}
	}, {
		key: 'format_',
		value: function format_(data) {
			var title = data.title,
			    description = data.description,
			    url = data.url;


			if (description && description.length > 100) {
				description = description.substr(0, 100) + '...';
			}

			return {
				textPrimary: '<a class="autocomplete-link" href="' + url + '">\n\t\t\t\t<div class="autocomplete-result">\n\t\t\t\t\t<p class="autocomplete-title">' + title + '</p>\n\t\t\t\t\t<p class="autocomplete-text">' + description + '</p>\n\t\t\t\t</div>\n\t\t\t</a>'
			};
		}
	}]);

	return SearchAutocomplete;
}(_SearchBase3.default);

;

_metalSoy2.default.register(SearchAutocomplete, _SearchAutocomplete2.default);

exports.default = SearchAutocomplete;