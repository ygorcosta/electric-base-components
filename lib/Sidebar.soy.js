'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.Sidebar = undefined;

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

  // This file was automatically generated from Sidebar.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Sidebar.
   * @hassoydeltemplate {Navigation.anchor.idom}
   * @public
   */

  goog.module('Sidebar.incrementaldom');

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

  var $templateAlias2 = _metalSoy2.default.getTemplate('Navigation.incrementaldom', 'render');

  var $templateAlias1 = _metalSoy2.default.getTemplate('SearchAutocomplete.incrementaldom', 'render');

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    ie_open('nav', null, null, 'class', 'sidebar');
    ie_open('a', null, null, 'class', 'sidebar-header toggler-header-collapsed');
    ie_void('span', null, null, 'class', 'sidebar-icon icon-16-menu');
    ie_open('span');
    itext('Docs Menu');
    ie_close('span');
    ie_open('span', null, null, 'class', 'sidebar-icon-right');
    ie_void('span', null, null, 'class', 'icon-12-arrow-down-short');
    ie_void('span', null, null, 'class', 'icon-12-arrow-up-short');
    ie_close('span');
    ie_close('a');
    ie_open('div', null, null, 'class', 'sidebar-search');
    $templateAlias1({ section: opt_data.section, placeholder: 'Search Docs' }, null, opt_ijData);
    ie_close('div');
    $templateAlias2({ elementClasses: 'sidebar-list sidebar-list-1 toggler-collapsed', listItemClasses: 'sidebar-item', anchorVariant: 'sidebar', section: opt_data.section }, null, opt_ijData);
    ie_close('nav');
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'Sidebar.render';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function __deltemplate_s114_ab749c92(opt_data, opt_ignored, opt_ijData) {
    ie_open('a', null, null, 'class', 'sidebar-link ' + (opt_data.page.active ? 'sidebar-link-selected' : ''), 'href', opt_data.page.url);
    ie_void('span', null, null, 'class', 'sidebar-icon icon-16-' + opt_data.page.icon);
    ie_open('span');
    var dyn6 = opt_data.page.title;
    if (typeof dyn6 == 'function') dyn6();else if (dyn6 != null) itext(dyn6);
    ie_close('span');
    ie_close('a');
  }
  exports.__deltemplate_s114_ab749c92 = __deltemplate_s114_ab749c92;
  if (goog.DEBUG) {
    __deltemplate_s114_ab749c92.soyTemplateName = 'Sidebar.__deltemplate_s114_ab749c92';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Navigation.anchor.idom'), 'sidebar', 0, __deltemplate_s114_ab749c92);

  exports.render.params = ["section"];
  exports.render.types = { "section": "any" };
  exports.templates = templates = exports;
  return exports;
});

var Sidebar = function (_Component) {
  _inherits(Sidebar, _Component);

  function Sidebar() {
    _classCallCheck(this, Sidebar);

    return _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).apply(this, arguments));
  }

  return Sidebar;
}(_metalComponent2.default);

_metalSoy2.default.register(Sidebar, templates);
exports.Sidebar = Sidebar;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */