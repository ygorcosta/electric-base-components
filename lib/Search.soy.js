'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.Search = undefined;

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

  // This file was automatically generated from Search.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Search.
   * @public
   */

  goog.module('Search.incrementaldom');

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
    opt_data = opt_data || {};
    ie_open('div', null, null, 'class', 'search');
    $form(opt_data, null, opt_ijData);
    $results(opt_data, null, opt_ijData);
    ie_close('div');
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'Search.render';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $form(opt_data, opt_ignored, opt_ijData) {
    opt_data = opt_data || {};
    ie_open('form', null, null, 'class', 'docs-home-top-form', 'action', opt_data.action, 'method', 'GET', 'enctype', 'multipart/form-data');
    ie_open('div', null, null, 'class', 'row');
    ie_open('div', null, null, 'class', 'col-md-7 col-md-offset-3 col-xs-16');
    ie_open('div', null, null, 'class', 'form-group');
    ie_open('div', null, null, 'class', 'input-inner-addon input-inner-addon-right');
    ie_open('input', null, null, 'autocomplete', 'off', 'class', 'form-control', 'name', 'q', 'onInput', 'handleInput_', 'placeholder', opt_data.placeholder, 'value', opt_data.query, 'type', 'text');
    ie_close('input');
    ie_void('span', null, null, 'class', 'input-inner-icon-helper icon-16-magnifier');
    ie_close('div');
    ie_close('div');
    ie_close('div');
    ie_open('div', null, null, 'class', 'col-md-3 col-xs-16');
    ie_open('button', null, null, 'class', 'btn btn-accent btn-block', 'type', 'submit');
    itext('Search');
    ie_close('button');
    ie_close('div');
    ie_close('div');
    ie_close('form');
  }
  exports.form = $form;
  if (goog.DEBUG) {
    $form.soyTemplateName = 'Search.form';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $results(opt_data, opt_ignored, opt_ijData) {
    opt_data = opt_data || {};
    ie_open('div', null, null, 'class', 'search-result-container');
    if (opt_data.query) {
      ie_open('p', null, null, 'class', 'search-result-summary');
      itext('Showing ');
      var dyn2 = opt_data.results.length;
      if (typeof dyn2 == 'function') dyn2();else if (dyn2 != null) itext(dyn2);
      itext(' results for ');
      ie_open('strong');
      itext('"');
      var dyn3 = opt_data.query;
      if (typeof dyn3 == 'function') dyn3();else if (dyn3 != null) itext(dyn3);
      itext('"');
      ie_close('strong');
      ie_close('p');
    }
    if (opt_data.results) {
      var resultList93 = opt_data.results;
      var resultListLen93 = resultList93.length;
      for (var resultIndex93 = 0; resultIndex93 < resultListLen93; resultIndex93++) {
        var resultData93 = resultList93[resultIndex93];
        ie_open('div', null, null, 'class', 'search-result');
        if (resultData93.icon) {
          ie_open('div', null, null, 'class', 'search-result-icon');
          ie_void('span', null, null, 'class', 'icon-16-' + resultData93.icon);
          ie_close('div');
        }
        ie_open('a', null, null, 'class', 'search-result-link', 'href', resultData93.url);
        var dyn4 = resultData93.title;
        if (typeof dyn4 == 'function') dyn4();else if (dyn4 != null) itext(dyn4);
        ie_close('a');
        ie_open('p', null, null, 'class', 'search-result-text');
        var dyn5 = resultData93.description;
        if (typeof dyn5 == 'function') dyn5();else if (dyn5 != null) itext(dyn5);
        ie_close('p');
        ie_close('div');
      }
    }
    ie_close('div');
  }
  exports.results = $results;
  if (goog.DEBUG) {
    $results.soyTemplateName = 'Search.results';
  }

  exports.render.params = ["action", "placeholder", "query", "results"];
  exports.render.types = { "action": "any", "placeholder": "any", "query": "any", "results": "any" };
  exports.form.params = ["action", "placeholder", "query"];
  exports.form.types = { "action": "any", "placeholder": "any", "query": "any" };
  exports.results.params = ["results", "query"];
  exports.results.types = { "results": "any", "query": "any" };
  exports.templates = templates = exports;
  return exports;
});

var Search = function (_Component) {
  _inherits(Search, _Component);

  function Search() {
    _classCallCheck(this, Search);

    return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
  }

  return Search;
}(_metalComponent2.default);

_metalSoy2.default.register(Search, templates);
exports.Search = Search;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */