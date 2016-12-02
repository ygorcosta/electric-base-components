'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.Updates = undefined;

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

  // This file was automatically generated from Updates.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Updates.
   * @public
   */

  goog.module('Updates.incrementaldom');

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
    ie_open('div', null, null, 'class', 'updates');
    ie_open('div', null, null, 'class', 'container');
    $updates(opt_data, null, opt_ijData);
    ie_close('div');
    ie_close('div');
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'Updates.render';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $updates(opt_data, opt_ignored, opt_ijData) {
    ie_open('div', null, null, 'class', 'row');
    ie_open('div', null, null, 'class', 'col-lg-10 col-lg-offset-3 col-md-16 col-md-offset-0');
    if (opt_data.updates) {
      var updateList141 = opt_data.updates;
      var updateListLen141 = updateList141.length;
      for (var updateIndex141 = 0; updateIndex141 < updateListLen141; updateIndex141++) {
        var updateData141 = updateList141[updateIndex141];
        ie_open('section', null, null, 'class', 'update');
        ie_open('div', null, null, 'class', 'row update-row');
        ie_open('div', null, null, 'class', 'col-sm-3 ' + (updateData141.major ? 'major' : 'minor') + '-update update-timeline');
        ie_open('div', null, null, 'class', 'update-point');
        var dyn7 = updateData141.version;
        if (typeof dyn7 == 'function') dyn7();else if (dyn7 != null) itext(dyn7);
        ie_close('div');
        ie_close('div');
        ie_open('div', null, null, 'class', 'col-sm-13 update-features');
        $features({ features: updateData141.features }, null, opt_ijData);
        ie_close('div');
        ie_close('div');
        ie_close('section');
      }
    }
    ie_close('div');
    ie_close('div');
  }
  exports.updates = $updates;
  if (goog.DEBUG) {
    $updates.soyTemplateName = 'Updates.updates';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $features(opt_data, opt_ignored, opt_ijData) {
    ie_open('div', null, null, 'class', 'row');
    var featureList155 = opt_data.features;
    var featureListLen155 = featureList155.length;
    for (var featureIndex155 = 0; featureIndex155 < featureListLen155; featureIndex155++) {
      var featureData155 = featureList155[featureIndex155];
      ie_open('div', null, null, 'class', 'col-xs-16 col-sm-8 update-feature');
      ie_open('div', null, null, 'class', 'feature-topper');
      ie_void('span', null, null, 'class', 'feature-icon icon-16-' + featureData155.icon);
      ie_open('h1', null, null, 'class', 'feature-header');
      var dyn8 = featureData155.title;
      if (typeof dyn8 == 'function') dyn8();else if (dyn8 != null) itext(dyn8);
      ie_close('h1');
      ie_close('div');
      ie_open('div', null, null, 'class', 'feature-content');
      ie_open('p', null, null, 'class', 'feature-lead');
      var dyn9 = featureData155.description;
      if (typeof dyn9 == 'function') dyn9();else if (dyn9 != null) itext(dyn9);
      ie_close('p');
      ie_open('div', null, null, 'class', 'read-more');
      ie_open('a', null, null, 'href', featureData155.url);
      itext('Read more\u2026');
      ie_close('a');
      ie_close('div');
      ie_close('div');
      ie_close('div');
    }
    ie_close('div');
  }
  exports.features = $features;
  if (goog.DEBUG) {
    $features.soyTemplateName = 'Updates.features';
  }

  exports.render.params = ["updates"];
  exports.render.types = { "updates": "any" };
  exports.updates.params = ["updates"];
  exports.updates.types = { "updates": "any" };
  exports.features.params = ["features"];
  exports.features.types = { "features": "any" };
  exports.templates = templates = exports;
  return exports;
});

var Updates = function (_Component) {
  _inherits(Updates, _Component);

  function Updates() {
    _classCallCheck(this, Updates);

    return _possibleConstructorReturn(this, (Updates.__proto__ || Object.getPrototypeOf(Updates)).apply(this, arguments));
  }

  return Updates;
}(_metalComponent2.default);

_metalSoy2.default.register(Updates, templates);
exports.Updates = Updates;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */