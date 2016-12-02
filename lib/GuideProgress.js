'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metalAffix = require('metal-affix');

var _metalAffix2 = _interopRequireDefault(_metalAffix);

var _metalComponent = require('metal-component');

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metal = require('metal');

var _metal2 = _interopRequireDefault(_metal);

var _metalDom = require('metal-dom');

var _metalDom2 = _interopRequireDefault(_metalDom);

var _metalReadingProgress = require('metal-reading-progress');

var _metalReadingProgress2 = _interopRequireDefault(_metalReadingProgress);

var _metalSoy = require('metal-soy');

var _metalSoy2 = _interopRequireDefault(_metalSoy);

var _GuideProgress = require('./GuideProgress.soy');

var _GuideProgress2 = _interopRequireDefault(_GuideProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GuideProgress = function (_Component) {
	_inherits(GuideProgress, _Component);

	function GuideProgress() {
		_classCallCheck(this, GuideProgress);

		return _possibleConstructorReturn(this, (GuideProgress.__proto__ || Object.getPrototypeOf(GuideProgress)).apply(this, arguments));
	}

	_createClass(GuideProgress, [{
		key: 'attached',
		value: function attached() {
			this.renderReadingProgress_();
		}
	}, {
		key: 'renderReadingProgress_',
		value: function renderReadingProgress_() {
			var articleContainer = this.articleContainer,
			    articleSelector = this.articleSelector,
			    element = this.element,
			    offsetTop = this.offsetTop,
			    titleSelector = this.titleSelector;


			if (articleContainer) {
				var articles = articleContainer.querySelectorAll(articleSelector);

				var articleIds = [].map.call(articles, function (article) {
					return '#' + article.id;
				});

				this.progress = new metal.ReadingProgress({
					items: articleIds,
					titleSelector: titleSelector,
					trackerConfig: {
						activeClass: 'reading',
						completedClass: 'read'
					}
				}, this.refs.readingContainer);

				this.affix = new metal.Affix({
					element: element,
					offsetTop: offsetTop
				});
			}
		}
	}]);

	return GuideProgress;
}(_metalComponent2.default);

;

GuideProgress.STATE = {
	articleContainer: {
		setter: _metalDom2.default.toElement,
		value: '.docs-guide'
	},

	articleSelector: {
		validator: _metal2.default.isString,
		value: 'article'
	},

	offsetTop: {
		validator: _metal2.default.isNumber,
		value: 230
	},

	titleSelector: {
		validator: _metal2.default.isString,
		value: 'h2'
	}
};

_metalSoy2.default.register(GuideProgress, _GuideProgress2.default);

exports.default = GuideProgress;