'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.SearchAutocomplete = undefined;

var _metalComponent = require('metal-component');

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = require('metal-soy');

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from SearchAutocomplete.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace SearchAutocomplete.
   * @public
   */

  goog.module('SearchAutocomplete.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var $$temp;
    opt_data = opt_data || {};
    ie_open('div', null, null, 'class', 'page-autocomplete');
    ie_open('div', null, null, 'class', 'form-group');
    ie_open('div', null, null, 'class', 'input-inner-addon input-inner-addon-right');
    ie_open('input', null, null, 'autocomplete', 'off', 'class', 'form-control', 'name', 'query', 'placeholder', ($$temp = opt_data.placeholder) == null ? '' : $$temp, 'ref', 'input', 'required', '', 'type', 'text');
    ie_close('input');
    ie_void('span', null, null, 'class', 'input-inner-icon-helper icon-16-magnifier');
    ie_close('div');
    ie_close('div');
    ie_close('div');
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'SearchAutocomplete.render';
  }

  exports.render.params = ["placeholder"];
  exports.render.types = { "placeholder": "any" };
  exports.templates = templates = exports;
  return exports;
});

var SearchAutocomplete = function (_Component) {
  _inherits(SearchAutocomplete, _Component);

  function SearchAutocomplete() {
    _classCallCheck(this, SearchAutocomplete);

    return _possibleConstructorReturn(this, (SearchAutocomplete.__proto__ || Object.getPrototypeOf(SearchAutocomplete)).apply(this, arguments));
  }

  return SearchAutocomplete;
}(_metalComponent2.default);

_metalSoy2.default.register(SearchAutocomplete, templates);
exports.SearchAutocomplete = SearchAutocomplete;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */