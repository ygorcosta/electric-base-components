'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.Navigation = undefined;

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

  // This file was automatically generated from Navigation.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Navigation.
   * @hassoydeltemplate {Navigation.anchor.idom}
   * @hassoydelcall {Navigation.anchor.idom}
   * @public
   */

  goog.module('Navigation.incrementaldom');

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
    var localAnchorVariant__soy8 = ($$temp = opt_data.anchorVariant) == null ? 'basic' : $$temp;
    var localCurrentDepth__soy9 = ($$temp = opt_data.currentDepth) == null ? 0 : $$temp;
    var localListItemActiveClasses__soy10 = ($$temp = opt_data.listItemActiveClasses) == null ? 'active' : $$temp;
    if (opt_data.section.children) {
      ie_open('ul', null, null, 'class', ($$temp = opt_data.elementClasses) == null ? '' : $$temp);
      var pageList36 = opt_data.section.children;
      var pageListLen36 = pageList36.length;
      for (var pageIndex36 = 0; pageIndex36 < pageListLen36; pageIndex36++) {
        var pageData36 = pageList36[pageIndex36];
        if (!pageData36.hidden) {
          ie_open('li', null, null, 'class', (($$temp = opt_data.listItemClasses) == null ? '' : $$temp) + (pageData36.active ? ' ' + localListItemActiveClasses__soy10 : ''));
          soy.$$getDelegateFn(soy.$$getDelTemplateId('Navigation.anchor.idom'), localAnchorVariant__soy8, false)(soy.$$assignDefaults({ page: pageData36 }, opt_data), null, opt_ijData);
          if (!opt_data.depth || localCurrentDepth__soy9 + 1 < opt_data.depth) {
            $render({ currentDepth: localCurrentDepth__soy9 + 1, currentURL: opt_data.currentURL, depth: opt_data.depth, elementClasses: opt_data.elementClasses, linkClasses: opt_data.linkClasses, listItemActiveClasses: opt_data.listItemActiveClasses, listItemClasses: opt_data.listItemClasses, section: pageData36 }, null, opt_ijData);
          }
          ie_close('li');
        }
      }
      ie_close('ul');
    }
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'Navigation.render';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function __deltemplate_s39_169e6899(opt_data, opt_ignored, opt_ijData) {
    var $$temp;
    if (opt_data.page.url) {
      ie_open('a', null, null, 'class', ($$temp = opt_data.linkClasses) == null ? '' : $$temp, 'href', opt_data.page.url);
      ie_open('span');
      var dyn0 = ($$temp = opt_data.page.title) == null ? 'Missing' : $$temp;
      if (typeof dyn0 == 'function') dyn0();else if (dyn0 != null) itext(dyn0);
      ie_close('span');
      ie_close('a');
    } else {
      ie_open('span', null, null, 'class', ($$temp = opt_data.linkClasses) == null ? '' : $$temp);
      var dyn1 = ($$temp = opt_data.page.title) == null ? 'Missing' : $$temp;
      if (typeof dyn1 == 'function') dyn1();else if (dyn1 != null) itext(dyn1);
      ie_close('span');
    }
  }
  exports.__deltemplate_s39_169e6899 = __deltemplate_s39_169e6899;
  if (goog.DEBUG) {
    __deltemplate_s39_169e6899.soyTemplateName = 'Navigation.__deltemplate_s39_169e6899';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Navigation.anchor.idom'), 'basic', 0, __deltemplate_s39_169e6899);

  exports.render.params = ["section", "anchorVariant", "currentDepth", "currentURL", "depth", "elementClasses", "linkClasses", "listItemActiveClasses", "listItemClasses"];
  exports.render.types = { "section": "any", "anchorVariant": "any", "currentDepth": "any", "currentURL": "any", "depth": "any", "elementClasses": "any", "linkClasses": "any", "listItemActiveClasses": "any", "listItemClasses": "any" };
  exports.templates = templates = exports;
  return exports;
});

var Navigation = function (_Component) {
  _inherits(Navigation, _Component);

  function Navigation() {
    _classCallCheck(this, Navigation);

    return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
  }

  return Navigation;
}(_metalComponent2.default);

_metalSoy2.default.register(Navigation, templates);
exports.Navigation = Navigation;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */