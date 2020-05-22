function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/administration/admin-panel/admin-panel.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/administration/admin-panel/admin-panel.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdministrationAdminPanelAdminPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n    <div class=\"my-3 p-3 bg-white rounded shadow-sm\">\r\n        <h6 class=\"border-bottom border-gray pb-2 mb-0\">ADMINISTRATION</h6>\r\n        <div class=\"media text-muted pt-3\">\r\n                <img src=\"/assets/virtualReality.jpg\" class=\"bd-placeholder-img mr-2 rounded\" width=\"32\" height=\"32\">\r\n                <div class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\">\r\n                    <div class=\"d-flex justify-content-between align-items-center w-100\">\r\n                        <strong class=\"text-gray-dark\">User</strong>\r\n                        <a routerLink=\"/administration/user\" data-dismiss=\"modal\" aria-label=\"Close\">Go to...</a>\r\n                    </div>\r\n                    <span class=\"d-block\">Remove and assign privileges and delete users</span>\r\n                </div>\r\n            </div>\r\n        <div class=\"media text-muted pt-3\">\r\n            <img src=\"/assets/headquarter.jpg\" class=\"bd-placeholder-img mr-2 rounded\" width=\"32\" height=\"32\">\r\n            <div class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\">\r\n                <div class=\"d-flex justify-content-between align-items-center w-100\">\r\n                    <strong class=\"text-gray-dark\">Headquarter</strong>\r\n                    <a routerLink=\"/administration/headquarter\" data-dismiss=\"modal\" aria-label=\"Close\">Go to...</a>\r\n                </div>\r\n                <span class=\"d-block\">Add, edit or delete headquarter</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"media text-muted pt-3\">\r\n            <img src=\"/assets/parking.jpg\" class=\"bd-placeholder-img mr-2 rounded\" width=\"32\" height=\"32\">\r\n            <div class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\">\r\n                <div class=\"d-flex justify-content-between align-items-center w-100\">\r\n                    <strong class=\"text-gray-dark\">Parking-lot</strong>\r\n                    <a routerLink=\"/administration/parking-lot\" data-dismiss=\"modal\" aria-label=\"Close\">Go to...</a>\r\n                </div>\r\n                <span class=\"d-block\">Add, edit or delete parking-lot</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"media text-muted pt-3\">\r\n            <img src=\"/assets/zone.jpg\" class=\"bd-placeholder-img mr-2 rounded\" width=\"32\" height=\"32\">\r\n            <div class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\">\r\n                <div class=\"d-flex justify-content-between align-items-center w-100\">\r\n                    <strong class=\"text-gray-dark\">Zone</strong>\r\n                    <a routerLink=\"/administration/zone\" data-dismiss=\"modal\" aria-label=\"Close\">Go to...</a>\r\n                </div>\r\n                <span class=\"d-block\">Add, edit or delete zone,..</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"media text-muted pt-3\">\r\n            <img src=\"/assets/reports.png\" class=\"bd-placeholder-img mr-2 rounded\" width=\"32\" height=\"32\">\r\n            <div class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\">\r\n                <div class=\"d-flex justify-content-between align-items-center w-100\">\r\n                    <strong class=\"text-gray-dark\">Report</strong>\r\n                    <a routerLink=\"/administration/report\" data-dismiss=\"modal\" aria-label=\"Close\">Go to...</a>\r\n                </div>\r\n                <span class=\"d-block\">Create reports</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/administration/headquarter/headquarter.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/administration/headquarter/headquarter.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdministrationHeadquarterHeadquarterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button class=\"botonF1\" routerLink=\"\">\r\n  <span><i class=\"fas fa-arrow-left    \"></i></span>\r\n</button>\r\n<div class=\"container\">\r\n  <br>\r\n  <section class=\"jumbotronHeader col-md-12 mb-4 jumbotron  justify-content-center text-center\">\r\n    <h3 class=\"font-weight-bold\"> HEADQUARTER ADMINISTRATION</h3>\r\n  </section>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4 col-md-6 mt-3\">\r\n      <input type=\"text\" class=\"form-control\" name=\"filterHeadquarters\" placeholder=\"Search...\"  maxlength=\"40\" \r\n        [(ngModel)]=\"filterHeadquarters\">\r\n    </div>\r\n    <div class=\"col-sm-8 col-md-6 mt-3\">\r\n      <button type=\"button\" class=\"btnAdd btn btn-primary btn-block\" data-toggle=\"modal\" data-target=\"#addHeadquarter\">\r\n        <strong><i class=\"fas fa-plus-square\"></i> NEW HEADQUARTER</strong>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <div>\r\n    <div class=\"table-responsive mt-5 ml-2 mr-2\">\r\n      <table class=\"table table-bordered table-hover\">\r\n        <thead class=\"tableThead thead\">\r\n          <tr>\r\n            <th scope=\"col\"><strong>NAME</strong></th>\r\n            <th scope=\"col\"><strong>COUNTRY</strong></th>\r\n            <th scope=\"col\"><strong>CITY</strong></th>\r\n            <th scope=\"col\"><strong>ACTION</strong></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let headquarter of headquarters | headquarterPipe:filterHeadquarters\">\r\n            <td> {{headquarter.name}}</td>\r\n            <td> {{headquarter.country}}</td>\r\n            <td> {{headquarter.city}}</td>\r\n            <td>\r\n              <button (click)=\" dataHeadquarterFormEdit(headquarter)\" class=\"btn-edit btn btn-block btn-outline-primary\"\r\n                id=\"\" data-toggle=\"modal\" data-target=\"#editHeadquarter\"><strong><i class=\"fas fa-angle-double-right\"></i>EDIT</strong></button>\r\n              <button (click)=\"deleteHeadquarter(headquarter.id_headquarter)\"\r\n                class=\"btn-delete btn btn-block btn-outline-danger\"><strong><i class=\"fas fa-trash-alt\"></i>DELETE</strong></button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <br>\r\n    <div class=\"my-3\"></div>\r\n  </div>\r\n\r\n  <!--Modal edit headquarter-->\r\n  <div class=\"modal fade\" id=\"editHeadquarter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editHeadquarter\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title \">EDIT HEADQUARTER</h5>\r\n          <button type=\"button\" id=\"closeModal\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <form #editHeadquarterForm=ngForm (ngSubmit)=\"editHeadquarter()\" class=\"form-row justify-content-sm-center\">\r\n            <div class=\"form-group col-md-12\">\r\n              <label>NAME</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"editFormHeadquarter.name\"  maxlength=\"40\"  required>\r\n            </div>\r\n            <div class=\"form-group col-md-12\">\r\n              <label>COUNTRY</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"country\" [(ngModel)]=\"editFormHeadquarter.country\"  maxlength=\"20\"  required>\r\n            </div>\r\n            <div class=\"form-group col-md-12\">\r\n              <label>CITY</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"city\" [(ngModel)]=\"editFormHeadquarter.city\"  maxlength=\"20\"  required>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <button type=\"submit\" class=\"btnModalAdd btn btn-block btn-outline-secondary\"\r\n                [disabled]=\"!editHeadquarterForm.valid\"> EDIT</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--Modal add headquarter-->\r\n  <div class=\"modal fade\" id=\"addHeadquarter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addHeadquarter\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title justify-content-center\"><strong>ADD HEADQUARTER</strong></h5>\r\n          <button type=\"button\" id=\"closeModal1\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <form #addHeadquarterForm=ngForm (ngSubmit)=\"addHeadquarter()\" class=\"form-row justify-content-sm-center\">\r\n            <div class=\"form-group col-md-12\">\r\n              <label>Name</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"addFormHeadquarter.name\"  maxlength=\"40\"  required>\r\n            </div>\r\n            <div class=\"form-group col-md-12\">\r\n              <label>COUNTRY</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"country\" [(ngModel)]=\"addFormHeadquarter.country\"  maxlength=\"20\"  required>\r\n            </div>\r\n            <div class=\"form-group col-md-12\">\r\n              <label>CITY</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"city\" [(ngModel)]=\"addFormHeadquarter.city\"  maxlength=\"20\"  required>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <button type=\"submit\" class=\"btnModalAdd btn btn-block btn-outline-secondary\"\r\n                [disabled]=\"!addHeadquarterForm.valid\"><i class=\"fas fa-plus-square\"></i> ADD</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/administration/parking-lot/parking-lot.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/administration/parking-lot/parking-lot.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdministrationParkingLotParkingLotComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button class=\"botonF1\" routerLink=\"\">\r\n  <span><i class=\"fas fa-arrow-left    \"></i></span>\r\n</button>\r\n<div class=\"container\">\r\n  <br>\r\n  <section class=\"jumbotronHeader col-md-12 mb-4 jumbotron  justify-content-center text-center\">\r\n    <h3 class=\"font-weight-bold\"> PARKING LOT ADMINISTRATION</h3>\r\n  </section>\r\n  <div class=\"row justify-content-end\">\r\n    <div class=\"col-sm-4 col-md-6 mt-3\">\r\n      <input type=\"text\" class=\"form-control\" name=\"filterParkingLot\" placeholder=\"Search...\"  maxlength=\"40\" \r\n        [(ngModel)]=\"filterParkingLot\">\r\n    </div>\r\n    <div class=\"col-sm-8 col-md-6 mt-3 \">\r\n      <button type=\"button\" class=\"btnAdd btn btn-primary btn-block\" data-toggle=\"modal\" data-target=\"#addParkingLot\">\r\n        <strong><i class=\"fas fa-plus-square\"></i> NEW PARKING LOT</strong>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <div>\r\n    <div class=\"table-responsive mt-5 mb-5\">\r\n      <table class=\"table table-bordered table-hover \">\r\n        <thead class=\"tableThead thead\">\r\n          <tr>\r\n            <th scope=\"col\"><strong>NAME</strong></th>\r\n            <th scope=\"col\"><strong>HEADQUARTER</strong></th>\r\n            <th scope=\"col\"><strong>ACTION</strong></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let parking of parkings | parkingLotPipe:filterParkingLot\">\r\n            <td>{{parking.name}}</td>\r\n            <td>{{parking.headquarter.name}}</td>\r\n            <td>\r\n              <button (click)=\"dataParkingLotFormEdit(parking)\" class=\"btn-edit btn btn-block btn-outline-primary\" id=\"\"\r\n                data-toggle=\"modal\" data-target=\"#editParkingLot\"><strong><i class=\"fas fa-angle-double-right\"></i>EDIT</strong></button>\r\n              <button (click)=\"deleteParkingLot(parking.id_parking_lot)\"\r\n                class=\"btn-delete btn btn-block btn-outline-danger\" id=\"\" data-toggle=\"modal\"\r\n                data-target=\"#deleteParkingLot\"><strong><i class=\"fas fa-trash-alt\"></i>DELETE</strong></button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <!--Modal de add parking-->\r\n  <div class=\"modal fade\" id=\"addParkingLot\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addParkingLot\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title justify-content-center\"><strong>ADD PARKING LOT</strong></h5>\r\n          <button type=\"button\" id=\"closeModal2\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <form #addParkingLotForm=ngForm (ngSubmit)=\"addParkingLot()\" class=\"form-row justify-content-sm-center\">\r\n            <div class=\"form-group col-md-12\">\r\n              <label>NAME</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"addFormParkingLot.name\"  maxlength=\"40\"  required>\r\n            </div>\r\n            <div class=\"form-group col-md-12\">\r\n              <label>HEADQUARTER</label>\r\n              <select class=\"custom-select\" name=\"headquarter\" [(ngModel)]=\"addFormParkingLot.headquarter.id_headquarter\"\r\n                required>\r\n                <option selected>Choose...</option>\r\n                <option value=\"{{headquarter.id_headquarter}}\" *ngFor=\"let headquarter of headquarters\"> {{headquarter.name}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <button type=\"submit\" class=\"btnModalAdd btn btn-block btn-outline-secondary\"\r\n                [disabled]=\"!addParkingLotForm.valid\"><i class=\"fas fa-plus-square\"></i> ADD</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--Modal edit parkingLot-->\r\n  <div class=\"modal fade\" id=\"editParkingLot\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editParkingLot\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title justify-content-center\"><strong>EDIT PARKING LOT</strong></h5>\r\n          <button type=\"button\" id=\"closeModal3\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <form #editParkingLotForm=ngForm (ngSubmit)=\"editParkingLot()\" class=\"form-row justify-content-sm-center\">\r\n            <div class=\"form-group col-md-12\">\r\n              <label>NAME</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"editFormParkingLot.name\"  maxlength=\"40\"  required>\r\n            </div>\r\n            <div class=\"form-group col-md-12\">\r\n              <label>HEADQUARTER</label>\r\n              <select class=\"custom-select\" name=\"headquarter\" [(ngModel)]=\"editFormParkingLot.headquarter.id_headquarter\"\r\n                required>\r\n                <option selected>Choose...</option>\r\n                <option value=\"{{headquarter.id_headquarter}}\" *ngFor=\"let headquarter of headquarters\">{{headquarter.id_headquarter}} {{headquarter.name}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <button type=\"submit\" class=\"btnModalAdd btn btn-block btn-outline-secondary\"\r\n                [disabled]=\"!editParkingLotForm.valid\"><i class=\"fas fa-plus-square\"></i> EDIT</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/administration/report/report.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/administration/report/report.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdministrationReportReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button class=\"botonF1\" routerLink=\"\">\r\n  <span><i class=\"fas fa-arrow-left    \"></i></span>\r\n</button>\r\n<div class=\"container\">\r\n  <br>\r\n  <section class=\"jumbotronHeader col-md-12 mb-4 jumbotron  justify-content-center text-center\">\r\n    <h3 class=\"font-weight-bold\"> REPORTS</h3>\r\n  </section>\r\n\r\n  <div id=\"wrapper\">\r\n    <div id=\"content-wrapper\" class=\"d-flex flex-column\">\r\n      <div id=\"content\">\r\n        <div class=\"container-fluid\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-xl-3 col-md-6 mb-4\">\r\n              <div class=\"card border-left-primary shadow h-100 py-2\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                      <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\">Headquarter</div>\r\n                      <div class=\"h5 mb-0 font-weight-bold text-gray-800\">{{countHeadquarter}}</div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                      <i class=\"fas fa-home fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-xl-3 col-md-6 mb-4\">\r\n              <div class=\"card border-left-success shadow h-100 py-2\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                      <div class=\"text-xs font-weight-bold text-warning  text-uppercase mb-1\">Parking</div>\r\n                      <div class=\"h5 mb-0 font-weight-bold text-gray-800\">{{countParking}}</div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                      <i class=\"fas fa-parking fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-xl-3 col-md-6 mb-4\">\r\n              <div class=\"card border-left-success shadow h-100 py-2\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                      <div class=\"text-xs font-weight-bold text-success text-uppercase mb-1\">Zones</div>\r\n                      <div class=\"h5 mb-0 font-weight-bold text-gray-800\">{{countZone}}</div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                      <i class=\"fas fa-map-marker fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-xl-3 col-md-6 mb-4\">\r\n              <div class=\"card border-left-warning shadow h-100 py-2\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                      <div class=\"text-xs font-weight-bold text-warning text-uppercase mb-1\">Spaces</div>\r\n                      <div class=\"h5 mb-0 font-weight-bold text-gray-800\">{{countSpaces}}</div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                      <i class=\"fas fa-map-pin fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-xl-6 col-md-6 mb-4\">\r\n              <div class=\"card border-left-primary shadow h-100 py-2\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                      <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\">Users</div>\r\n                      <div class=\"h5 mb-0 font-weight-bold text-gray-800\">{{countUsers}}</div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                      <i class=\"fas fa-users fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-xl-6 col-md-6 mb-4\">\r\n              <div class=\"card border-left-primary shadow h-100 py-2\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                      <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\">Reservations</div>\r\n                      <div class=\"h5 mb-0 font-weight-bold text-gray-800\">{{countReservations}}</div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                      <i class=\"fas fa-bookmark fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <br>\r\n  <p class=\"text-center\">\r\n    Generate a report by dates, this report will include the data of each place,\r\n    which will break down relevant information on the use of parking spaces, in addition to all active reservations\r\n    and those that are no longer active, with the respective username.\r\n    <br>\r\n    In addition, we will give you the possibility to search for an element that\r\n    you want to find in the result of the report, with the possibility of downloading it in an Excel sheet.\r\n  </p>\r\n  <br>\r\n  <div class=\"row  justify-content-center\">\r\n    <div class=\"col-md-4 col-sm-6\">\r\n      <label>Initial date</label>\r\n      <form class=\"form-inline\">\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group\">\r\n            <input class=\"form-control\" placeholder=\"dd/mm/yyyy\" name=\"d1\" #c2=\"ngModel\" [minDate]=\"minDate\" readonly\r\n              [maxDate]=\"maxDate\" [(ngModel)]=\"initDate\" (click)=\"d1.toggle()\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\"></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"col-md-4 col-sm-6\">\r\n      <label>Final date</label>\r\n      <form class=\"form-inline\">\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group\">\r\n            <input class=\"form-control\" placeholder=\"dd/mm/yyyy\" name=\"d2\" #c2=\"ngModel\" [minDate]=\"minDate\" readonly\r\n              [maxDate]=\"maxDate\" [(ngModel)]=\"finalDate\" (click)=\"d2.toggle()\" ngbDatepicker #d2=\"ngbDatepicker\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" type=\"button\"></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n      <br>\r\n      <button class=\"btn btn-delete btn-block mt-2 btn-outline-danger\" (click)=\"generateReport()\">\r\n        <strong>Generate report</strong>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container\" *ngIf=\"reportComplete.length>0\">\r\n  <div class=\"text-center\">\r\n    <h1><STRONG>REPORT</STRONG> </h1>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4 col-md-6 mt-3\">\r\n      <input type=\"text\" class=\"form-control\" name=\"filterReport\" placeholder=\"Search...\" maxlength=\"40\"\r\n        [(ngModel)]=\"filter\">\r\n    </div>\r\n    <div class=\"col-sm-8 col-md-6 mt-3\">\r\n      <div class=\"d-sm-flex align-items-center text-white justify-content-between mb-4\">\r\n        <h1 class=\"h3 mb-0 text-gray-800\"></h1>\r\n        <a (click)=\"sendEmail()\" class=\"d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm\"><i\r\n            class=\"fas fa-download fa-sm text-white\"></i>Send report to email</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"report\">\r\n    <div class=\"table-responsive justify-content-center\" hidden>\r\n      <table class=\"table table-bordered table-hover\">\r\n        <thead class=\"tableThead thead\">\r\n          <tr>\r\n            <th class=\"text-center\" COLSPAN=\"3\" scope=\"col\"><strong>ACTIVE USERS</strong></th>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"col\"><strong>ID</strong></th>\r\n            <th scope=\"col\"><strong>NAME</strong></th>\r\n            <th scope=\"col\"><strong>EMAIL</strong></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let i of activeUser\">\r\n            <td class=\"text-center\">{{i.id}}</td>\r\n            <td class=\"text-center\">{{i.name}}</td>\r\n            <td class=\"text-center\">{{i.email}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-bordered table-hover\">\r\n        <thead class=\"tableThead thead\">\r\n          <tr>\r\n            <th class=\"text-center\" COLSPAN=\"10\" scope=\"col\"><strong>RESERVES</strong></th>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"col\"><strong>USER EMAIL</strong></th>\r\n            <th scope=\"col\"><strong>DATE</strong></th>\r\n            <th scope=\"col\"><strong>START TIME</strong></th>\r\n            <th scope=\"col\"><strong>END TIME</strong></th>\r\n            <th scope=\"col\"><strong>EXTEND DATE</strong></th>\r\n            <th scope=\"col\"><strong>VEHICLE</strong></th>\r\n            <th scope=\"col\"><strong>HEADQUARTER</strong></th>\r\n            <th scope=\"col\"><strong>PARKING LOT</strong></th>\r\n            <th scope=\"col\"><strong>ZONE</strong></th>\r\n            <th scope=\"col\"><strong>SPACE</strong></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let i of reportComplete  | ReportPipe:filter\">\r\n            <td class=\"text-center\">{{i.reserve.user.email}}</td>\r\n            <td class=\"text-center\">{{i.date}}</td>\r\n            <td class=\"text-center\">{{i.start_time}}</td>\r\n            <td class=\"text-center\">{{i.end_time}}</td>\r\n            <td class=\"text-center\">{{i.end_date_extend}}</td>\r\n            <td class=\"text-center\" *ngIf=\"i.reserve.vehicle!=null\">{{i.reserve.vehicle.license_plate}}</td>\r\n            <td class=\"text-center\" *ngIf=\"i.reserve.vehicle==null\"></td>\r\n            <td class=\"text-center\">{{i.space.zone.parking_lot.headquarter.name}}</td>\r\n            <td class=\"text-center\">{{i.space.zone.parking_lot.name}}</td>\r\n            <td class=\"text-center\">{{i.space.zone.name}}</td>\r\n            <td class=\"text-center\">{{i.space.name}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/administration/space/space.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/administration/space/space.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdministrationSpaceSpaceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button class=\"botonF1\" routerLink=\"/administration/zone\">\r\n        <span><i class=\"fas fa-arrow-left    \"></i></span>\r\n</button>\r\n<div class=\"container\">\r\n        <br>\r\n        <section class=\"jumbotronHeader col-md-12 mb-4 jumbotron  justify-content-center text-center\">\r\n                <h3 class=\"font-weight-bold\"> SPACE ADMINISTRATION</h3>\r\n        </section>\r\n        <div class=\"row \">\r\n                <div class=\"col-sm-4 col-md-4 mt-3\">\r\n                        <input class=\"form-control\" name=\"filterSpace\" placeholder=\"Search...\" maxlength=\"40\"\r\n                                [(ngModel)]=\"filterSpace\">\r\n                </div>\r\n                <div class=\"col-sm-8 col-md-4 mt-3\">\r\n                        <div>\r\n                                <!--Modal button of add space-->\r\n                                <button class=\"btnAdd btn btn-block btn-outline-secondary text-uppercase\"\r\n                                        data-toggle=\"modal\" data-target=\"#addSpace\">\r\n                                        <i class=\"fas fa-plus-square\"></i> Add Space\r\n                                </button>\r\n                        </div>\r\n                </div>\r\n                <div class=\"col-sm-8 col-md-4 mt-3\">\r\n                        <div>\r\n                                <button class=\"btn btn-delete btn-block btn-outline-danger\" (click)=\"deleteAll()\">\r\n                                        <strong><i class=\"fas fa-trash-alt\"></i>DELETE ALL</strong>\r\n                                </button>\r\n                        </div>\r\n                </div>\r\n                <div class=\"table-responsive\">\r\n                        <table class=\"table table-bordered table-hover mt-5 mb-5\">\r\n                                <thead class=\"tableThead thead\">\r\n                                        <tr>\r\n                                                <th scope=\"col\">Space Name</th>\r\n                                                <th scope=\"col\">Type</th>\r\n                                                <th scope=\"col\">State</th>\r\n                                                <th scope=\"col\">User</th>\r\n                                                <th scope=\"col\">Zone</th>\r\n                                                <th scope=\"col\">Actions</th>\r\n                                        </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                        <tr *ngFor=\"let space of spaces | spacePipe:filterSpace\">\r\n                                                <td>{{space.name}}</td>\r\n                                                <td>{{space.type}}</td>\r\n                                                <td *ngIf=\"space.state === false\">Available</td>\r\n                                                <td *ngIf=\"space.state === true\">Occupied</td>\r\n                                                <td>\r\n                                                        <select class=\"custom-select\" name=\"user\" value=\"{{space.user}}\"\r\n                                                                disabled>\r\n                                                                <option value=\"\">NONE</option>\r\n                                                                <option value=\"{{u.id}}\"\r\n                                                                        *ngFor=\"let u of users | userPipe:filterUser\">\r\n                                                                        {{u.email}}\r\n                                                                </option>\r\n                                                        </select>\r\n\r\n                                                </td>\r\n                                                <td>{{space.zone.name}}</td>\r\n                                                <td>\r\n                                                        <button (click)=\"dataSpaceFormEdit(space)\"\r\n                                                                class=\"btn  btn-edit btn-block btn-outline-primary\"\r\n                                                                data-toggle=\"modal\" data-target=\"#editSpace\">\r\n                                                                <strong><i\r\n                                                                                class=\"fas fa-angle-double-right\"></i>EDIT</strong>\r\n                                                        </button>\r\n                                                        <button class=\"btn btn-delete btn-block btn-outline-danger\"\r\n                                                                (click)=\"deleteSpace(space.id_space)\">\r\n                                                                <strong><i class=\"fas fa-trash-alt\"></i>DELETE</strong>\r\n                                                        </button>\r\n                                                </td>\r\n                                        </tr>\r\n\r\n                                </tbody>\r\n                        </table>\r\n                </div>\r\n\r\n                <!--Modal Add Space-->\r\n                <div class=\"modal fade\" id=\"addSpace\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addSpace\"\r\n                        aria-hidden=\"true\">\r\n                        <div class=\"modal-dialog\" role=\"document\">\r\n                                <div class=\"modal-content\">\r\n                                        <div class=\"modal-header\">\r\n                                                <h5 class=\"modal-title justify-content-center\"><strong>ADD\r\n                                                                SPACE</strong></h5>\r\n                                                <button type=\"button\" id=\"closeModal6\" class=\"close\"\r\n                                                        data-dismiss=\"modal\" aria-label=\"Close\">\r\n                                                        <span aria-hidden=\"true\">&times;</span>\r\n                                                </button>\r\n                                        </div>\r\n                                        <div class=\"modal-body\">\r\n                                                <form #addSpaceForm=ngForm (ngSubmit)=\"onSubmit()\"\r\n                                                        class=\"form-row justify-content-sm-center\">\r\n\r\n                                                        <div class=\"form-group col-md-12\">\r\n                                                                <label>Space Name</label>\r\n                                                                <input type=\"text\" name=\"name\" class=\"form-control\"\r\n                                                                        maxlength=\"10\" [(ngModel)]=\"addFormSpace.name\"\r\n                                                                        required>\r\n                                                        </div>\r\n\r\n                                                        <div class=\"form-group col-md-12\">\r\n                                                                <label>State</label>\r\n                                                                <select class=\"custom-select\" name=\"state\"\r\n                                                                        [(ngModel)]=\"addFormSpace.state\" required>\r\n\r\n                                                                        <option>Available</option>\r\n                                                                        <option>Occupied</option>\r\n                                                                </select>\r\n                                                        </div>\r\n                                                        <div class=\"form-group col-md-12\">\r\n                                                                <label>Type</label>\r\n                                                                <select class=\"custom-select\" name=\"type\"\r\n                                                                        [(ngModel)]=\"addFormSpace.type\" required>\r\n\r\n                                                                        <option>Regular</option>\r\n                                                                        <option>Special</option>\r\n                                                                </select>\r\n                                                        </div>\r\n                                                        <div class=\"form-group col-md-12\">\r\n                                                                <label>User</label>\r\n                                                                <div class=\"input-group\">\r\n                                                                        <select class=\"custom-select\" name=\"user\"\r\n                                                                                [(ngModel)]=\"addFormSpace.user\">\r\n                                                                                <option selected disabled>\r\n                                                                                        Choose...</option>\r\n                                                                                        <option value=\"\">\r\n                                                                                                NONE</option>\r\n                                                                                <option selected value=\"{{u.id}}\"\r\n                                                                                        *ngFor=\"let u of users | userPipe:filterUser\">\r\n                                                                                        {{u.email}}\r\n                                                                                </option>\r\n                                                                        </select>\r\n                                                                </div>\r\n\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6\">\r\n                                                                <button type=\"submit\"\r\n                                                                        class=\"btnAddSpace btn btn-block btn-outline-secondary\"\r\n                                                                        [disabled]=\"!addSpaceForm.valid\"><i\r\n                                                                                class=\"fas fa-plus-square\"></i>\r\n                                                                        Add</button>\r\n                                                        </div>\r\n                                                </form>\r\n                                        </div>\r\n                                </div>\r\n                        </div>\r\n                </div>\r\n                <!--Modal Edit Space-->\r\n                <div class=\"modal fade\" id=\"editSpace\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editSpace\"\r\n                        aria-hidden=\"true\">\r\n                        <div class=\"modal-dialog\" role=\"document\">\r\n                                <div class=\"modal-content\">\r\n                                        <div class=\"modal-header\">\r\n                                                <h5 class=\"modal-title justify-content-center\"><strong>EDIT\r\n                                                                SPACE</strong></h5>\r\n                                                <button type=\"button\" id=\"closeModal7\" class=\"close\"\r\n                                                        data-dismiss=\"modal\" aria-label=\"Close\">\r\n                                                        <span aria-hidden=\"true\">&times;</span>\r\n                                                </button>\r\n                                        </div>\r\n                                        <div class=\"modal-body\">\r\n                                                <form (ngSubmit)=\"editSpaceForm()\"\r\n                                                        class=\"form-row justify-content-sm-center\">\r\n                                                        <div class=\"form-group col-md-12\">\r\n                                                                <label>Space ID</label>\r\n                                                                <input type=\"text\" class=\"form-control\" name=\"id\"\r\n                                                                        maxlength=\"10\" [(ngModel)]=\"editFormSpace.id_space\"\r\n                                                                        disabled>\r\n                                                        </div>\r\n                                                        <div class=\"form-group col-md-12\">\r\n                                                                <label>Space Name</label>\r\n                                                                <input type=\"text\" class=\"form-control\" name=\"name\"\r\n                                                                        maxlength=\"10\" [(ngModel)]=\"editFormSpace.name\"\r\n                                                                        required>\r\n                                                        </div>\r\n                                                        <div class=\"form-group col-md-12\">\r\n                                                                <label>Type</label>\r\n                                                                <select class=\"custom-select\" name=\"type\"\r\n                                                                        [(ngModel)]=\"editFormSpace.type\">\r\n\r\n                                                                        <option>Regular</option>\r\n                                                                        <option>Special</option>\r\n                                                                </select>\r\n                                                        </div>\r\n                                                        <div class=\"form-group col-md-12\">\r\n                                                                <label>State</label>\r\n                                                                <select class=\"custom-select\" name=\"state\"\r\n                                                                        [(ngModel)]=\"editFormSpace.state\">\r\n\r\n                                                                        <option>Available</option>\r\n                                                                        <option>Occupied</option>\r\n\r\n                                                                </select>\r\n                                                        </div>\r\n                                                        <div class=\"form-group col-md-12\">\r\n                                                                <label>User</label>\r\n                                                                <select class=\"custom-select\" name=\"user\"\r\n                                                                        [(ngModel)]=\"editFormSpace.user\">\r\n                                                                        <option selected disabled>\r\n                                                                                Choose...</option>\r\n                                                                                <option value=\"\">\r\n                                                                                        NONE</option>\r\n                                                                        <option selected value=\"{{u.id}}\"\r\n                                                                                *ngFor=\"let u of users | userPipe:filterUser\">\r\n                                                                                {{u.email}}\r\n                                                                        </option>\r\n                                                                </select>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6 col-sm-2\">\r\n                                                                <button type=\"submit\"\r\n                                                                        class=\"btnEditSpace btn btn-block btn-outline-secondary\"><i\r\n                                                                                class=\"fas fa-plus-square\"></i>\r\n                                                                        Edit</button>\r\n                                                        </div>\r\n                                                </form>\r\n                                        </div>\r\n                                </div>\r\n                        </div>\r\n                </div>\r\n\r\n        </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/administration/users/users.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/administration/users/users.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdministrationUsersUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <br>\r\n    <section class=\"jumbotronHeader col-md-12 mb-4 jumbotron  justify-content-center text-center\">\r\n        <h3 class=\"font-weight-bold\"> USER ADMINISTRATION</h3>\r\n    </section>\r\n    <div class=\"row\">\r\n        <div class=\"col-12 mt-3\">\r\n            <input type=\"text\" class=\"form-control\" name=\"filterUser\" placeholder=\"Search...\" [(ngModel)]=\"filterUser\">\r\n        </div>\r\n    </div>\r\n    <div>\r\n        <div class=\"table-responsive mt-5 ml-2 mr-2\">\r\n            <table class=\"table table-bordered table-hover\">\r\n                <thead class=\"tableThead thead\">\r\n                    <tr>\r\n                        <th scope=\"col\"><strong>NAME</strong></th>\r\n                        <th scope=\"col\"><strong>EMAIL</strong></th>\r\n                        <th scope=\"col\"><strong>ROLE</strong></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let u of users | userPipe:filterUser\">\r\n                        <td>\r\n                            <label>{{u.name}}</label>\r\n                        </td>\r\n                        <td>\r\n                            <label>{{u.email}}</label>\r\n                        </td>\r\n                        <td>\r\n                            <button type=\"button\" (click)=\"admin(u)\" class=\"btn btn-success\"\r\n                                *ngIf=\"u.role != true\">ADMIN</button>\r\n                            <button type=\"button\" (click)=\"regular(u)\" class=\"btn btn-danger\"\r\n                                *ngIf=\"u.role\">REGULAR</button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <br>\r\n        <div class=\"my-3\"></div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/administration/zone/zone.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/administration/zone/zone.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdministrationZoneZoneComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button class=\"botonF1\" routerLink=\"\">\r\n        <span><i class=\"fas fa-arrow-left    \"></i></span>\r\n</button>\r\n<div class=\"container\">\r\n        <br>\r\n        <section class=\"jumbotronHeader col-md-12 mb-4 jumbotron  justify-content-center text-center\">\r\n                <h3 class=\"font-weight-bold\"> ZONE ADMINISTRATION</h3>\r\n        </section>\r\n        <div class=\"row justify-content-end\">\r\n                <div class=\"col-sm-4 col-md-6 mt-3\">\r\n                        <input class=\"form-control\" name=\"filterZone\" placeholder=\"Search...\"  maxlength=\"40\" \r\n                                [(ngModel)]=\"filterZone\">\r\n                </div>\r\n                <div class=\"col-sm-8 col-md-6 mt-3\">\r\n                        <!--Modal button of add space-->\r\n                        <button type=\"button\" class=\"btnAdd btn btn-block btn-outline-secondary text-uppercase\" data-toggle=\"modal\"\r\n                                data-target=\"#addZone\">\r\n                                 <strong><i class=\"fas fa-plus-square\"></i> Add Zone</strong> \r\n                        </button>\r\n                </div>\r\n        </div>\r\n\r\n        <div class=\"table-responsive\">\r\n                <table class=\"table table-bordered table-hover mt-5 mb-5\">\r\n                        <thead class=\"tableThead thead\">\r\n                                <tr>\r\n                                        <th scope=\"col\">Zone Name</th>\r\n                                        <th scope=\"col\">Parking Lot</th>\r\n                                        <th scope=\"col\">Spaces</th>\r\n                                        <th scope=\"col\">Actions</th>\r\n                                </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                                <tr *ngFor=\"let zone of zones | zonePipe:filterZone \">\r\n                                        <td>{{zone.name}}</td>\r\n                                        <td>\r\n                                                {{zone.parking_lot.name}}\r\n                                        </td>\r\n                                        <td valign=\"middle\" style=\"vertical-align:middle;\"\r\n                                                class=\"m-auto p-auto justify-content-center\">\r\n                                                <button class=\"m-auto p-auto btn btn-block text-primary\"\r\n                                                        (click)=\"spaces(zone)\" routerLink=\"/administration/space\">\r\n                                                        <i class=\"fas fa-eye fa-lg\" style=\"width:12; height:12;\"></i>\r\n                                                </button>\r\n                                        </td>\r\n                                        <td>\r\n                                                <button (click)=\"dataZoneFormEdit(zone)\"\r\n                                                        class=\"btn btn-edit btn-block btn-outline-primary\"\r\n                                                        data-toggle=\"modal\" data-target=\"#editZone\">\r\n                                                        <strong><i class=\"fas fa-angle-double-right\"></i>EDIT</strong>\r\n                                                </button>\r\n                                                <button class=\"btn btn-delete btn-block btn-outline-danger\"\r\n                                                        (click)=\"delete(zone.id_zone)\">\r\n                                                        <strong><i class=\"fas fa-trash-alt\"></i>DELETE</strong>\r\n                                                </button>\r\n                                        </td>\r\n                                </tr>\r\n\r\n\r\n                        </tbody>\r\n                </table>\r\n        </div>\r\n\r\n        <!--Modal de add zone-->\r\n        <div class=\"modal fade\" id=\"addZone\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addZone\" aria-hidden=\"true\">\r\n                <div class=\"modal-dialog\" role=\"document\">\r\n                        <div class=\"modal-content\">\r\n                                <div class=\"modal-header\">\r\n                                        <h5 class=\"modal-title justify-content-center\"><strong>ADD ZONE</strong></h5>\r\n                                        <button type=\"button\" id=\"closeModal5\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                                                <span aria-hidden=\"true\">&times;</span>\r\n                                        </button>\r\n                                </div>\r\n                                <div class=\"modal-body\">\r\n                                        <form #addZoneForm=ngForm (ngSubmit)=\"onSubmit()\"\r\n                                                class=\"form-row justify-content-sm-center\">\r\n                                                <div class=\"form-group col-md-12\">\r\n                                                        <label>Zone Name</label>\r\n                                                        <input type=\"text\" class=\"form-control\" name=\"name\"  maxlength=\"10\" \r\n                                                                [(ngModel)]=\"addFormZone.name\" required>\r\n                                                </div>\r\n                                                <div class=\"form-group col-md-12\">\r\n                                                        <label>Quantity</label>\r\n                                                        <input type=\"number\" maxlength=\"3\"   min=\"0\" max=\"100\" class=\"form-control\"\r\n                                                                name=\"quality\" [(ngModel)]=\"addFormZone.quantity\"\r\n                                                                required />\r\n                                                </div>\r\n                                                <div class=\"form-group col-md-12\">\r\n                                                        <label>Start with...</label>\r\n                                                        <input type=\"number\"  maxlength=\"3\"  class=\"form-control\"\r\n                                                                name=\"start\" [(ngModel)]=\"addFormZone.start\" required />\r\n                                                </div>\r\n                                                <div class=\"form-group col-md-12\">\r\n                                                        <label>Parking Lot</label>\r\n                                                        <select class=\"custom-select\" name=\"parking_lot\"\r\n                                                                [(ngModel)]=\"addFormZone.parking_lot.id_parking_lot\"\r\n                                                                required>\r\n                                                               \r\n                                                                <option value=\"{{parking_lot.id_parking_lot}}\"\r\n                                                                        *ngFor=\"let parking_lot of parkings\">\r\n                                                                      \r\n                                                                        {{parking_lot.name}} \r\n                                                                        {{parking_lot.headquarter.country}}</option>\r\n                                                        </select>\r\n                                                </div>\r\n\r\n                                                <div class=\"col-md-6\">\r\n                                                        <button type=\"submit\"\r\n                                                                class=\"btnAddZone btn btn-block btn-outline-secondary\"\r\n                                                                [disabled]=\"!addZoneForm.valid\"><i\r\n                                                                        class=\"fas fa-plus-square\"></i> Add</button>\r\n                                                </div>\r\n                                        </form>\r\n                                </div>\r\n                        </div>\r\n                </div>\r\n        </div>\r\n        <!--Modal edit zone-->\r\n        <div class=\"modal fade\" id=\"editZone\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editZone\" aria-hidden=\"true\">\r\n                <div class=\"modal-dialog\" role=\"document\">\r\n                        <div class=\"modal-content\">\r\n                                <div class=\"modal-header\">\r\n                                        <h5 class=\"modal-title justify-content-center\"><strong>EDIT ZONE</strong></h5>\r\n                                        <button type=\"button\" id=\"closeModal4\" (click)=\"ngOnInit()\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                                                <span aria-hidden=\"true\">&times;</span>\r\n                                        </button>\r\n                                </div>\r\n                                <div class=\"modal-body\">\r\n                                        <form #editZoneForm=ngForm (ngSubmit)=\"editZone()\"\r\n                                                class=\"form-row justify-content-sm-center\">\r\n                                                <div class=\"form-group col-md-12\">\r\n                                                        <label>Zone Name</label>\r\n                                                        <input type=\"text\" class=\"form-control\"  maxlength=\"10\"  name=\"name\"\r\n                                                                [(ngModel)]=\"editFormZone.name\" required>\r\n                                                </div>\r\n                                                <div class=\"form-group col-md-12\">\r\n                                                        <label>Parking Lot</label>\r\n                                                        <select class=\"custom-select\" name=\"parking_lot\"\r\n                                                                [(ngModel)]=\"editFormZone.parking_lot.id_parking_lot\"\r\n                                                                required>\r\n                                                                <option selected>Choose...</option>\r\n                                                                <option value=\"{{parking_lot.id_parking_lot}}\" *ngFor=\"let parking_lot of parkings\">\r\n                                                                                {{parking_lot.id_parking_lot}}  {{parking_lot.name}} </option>\r\n                                                        </select>\r\n                                                </div>\r\n\r\n                                                <div class=\"col-md-6\">\r\n                                                        <button type=\"submit\"\r\n                                                                class=\"btnEditZone btn btn-block btn-outline-secondary\"\r\n                                                                [disabled]=\"!editZoneForm.valid\" ><i\r\n                                                                        class=\"fas fa-plus-square\"></i><Strong>Edit</Strong></button>\r\n                                                </div>\r\n                                        </form>\r\n                                </div>\r\n                        </div>\r\n                </div>\r\n        </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button class=\"botonF1\" routerLink=\"/\">\r\n  <span><i class=\"fas fa-arrow-left    \"></i></span>\r\n</button>\r\n<div class=\"container\">\r\n  <br> <br> <br>\r\n  <div class=\"row  justify-content-center\">\r\n    <div class=\"col-md-3\">\r\n      <label>DATE</label>\r\n      <form class=\"form-inline\">\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group \">\r\n            <input class=\"form-control\" placeholder=\"yyyy/mm/dd\" name=\"d2\" #c2=\"ngModel\"  [minDate]=\"minDate\" [maxDate]=\"maxDate\"  readonly\r\n             [(ngModel)]=\"dashboardForm.reserveDate\" (click)=\"d2.toggle()\" ngbDatepicker #d2=\"ngbDatepicker\" required>\r\n            <div class=\"input-group-append\">\r\n              <button class=\"btn btn-outline-secondary calendar\"  (click)=\"d2.toggle()\" type=\"button\"></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n    <div class=\"col-md-2\">\r\n      <label>CURRENT LOCATION</label>\r\n      <select class=\"custom-select\" id=\"inputGroupSelect04\" name=\"headquarter\" required \r\n      [(ngModel)]=\"hqModel\" (change)=\" listParkings(hqModel,$event.target.value)\" aria-label=\"\">\r\n        <option *ngFor=\"let headquarter of headquarters\" [ngValue]=\"headquarter\">{{headquarter.name}}\r\n          {{headquarter.city}}\r\n          {{headquarter.country}}</option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"col-md-2\">\r\n      <label>PARKING LOT</label>\r\n      <select class=\"custom-select\" name=\"parking lot\" required [(ngModel)]=\"parkingLotModel\" (change)=\" listZones(parkingLotModel,$event.target.value)\">\r\n        <!--<option selected>Choose...</option>-->\r\n        <option *ngFor=\"let parking of parkings\" [ngValue]=\"parking\"  >\r\n          {{parking.name}}</option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"col-md-2\">\r\n      <label>ZONE</label>\r\n      <select class=\"custom-select\" name=\"zone\" required [(ngModel)]=\"zoneModel\" (change)=\" dataReserve(zoneModel,$event.target.value)\" >\r\n        <!--<option selected>Choose...</option>-->\r\n        <option *ngFor=\"let zone of zones\" [ngValue]=\"zone\" > {{zone.name}}</option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"col-md-2\">\r\n      <br>\r\n      <button class=\"btn btn-delete btn-block btn-outline-danger\" (click)=\"loadAvailableTimes()\">\r\n        <strong>VIEW DASHBOARD</strong>\r\n      </button><br><br>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-10 \">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered table-hover rounded \">\r\n          <thead class=\"tableThead thead\">\r\n            <tr>\r\n              <th scope=\"col\"><strong>SPACE</strong></th>\r\n              <th scope=\"col\"><strong>AVAILABLE</strong></th>\r\n              <th scope=\"col\"><strong>RESERVE</strong></th>\r\n              \r\n            </tr>\r\n          </thead>\r\n          <tbody >\r\n            <tr *ngFor=\" let space of spacesContainer\">\r\n              <td >{{space.name}}</td>\r\n              <td>\r\n                <table>\r\n                    <tr>\r\n                      <td *ngFor=\" let range of space.range\"> {{range[0][0]}}:00 - {{range[0][1]}}:00</td>\r\n                    </tr>\r\n                </table>\r\n              </td>\r\n              <td> <button class=\"btn btn-delete btn-block btn-outline-danger\" data-toggle=\"modal\" data-target=\"#reserve\" (click)=\"dataSpace(space)\" (click)=\"dataCalendar()\">\r\n                  <strong>RESERVE</strong></button>\r\n              </td>\r\n           \r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <h5 *ngIf=\"!hide\" class=\"text-center\">Please select a date and make sure to choose a zone!</h5>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"reserve\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"reserve\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-xl\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" >Reserve</h5>\r\n        <button type=\"button\" id=\"closeReserveModal\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title text-center font-weight-bold\">Reserve a space</h5>\r\n          <!--Inicia formulario-->\r\n          <form>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-lg-2 col-form-label\">Vehiculos</label>\r\n              <div class=\"col-sm-8 col-lg-10\">\r\n                <select class=\"custom-select\" name=\"vehicle\" [(ngModel)]=\"formAddReserve.vehicle.increment\">\r\n                  <option selected>Choose...</option>\r\n                  <option value=\"{{vehicle.increment}}\" *ngFor=\"let vehicle of vehicles\">{{vehicle.license_plate}}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-lg-2 col-form-label\">Start time</label>\r\n              <div class=\"col-sm-8 col-lg-10\">\r\n                <select class=\"form-control\" name=\"start_time\" required [(ngModel)]=\"start_time\" (change)=\" setStartTime(start_time,$event.target.value)\">\r\n                  <option selected>Choose...</option>\r\n                  <option *ngFor=\"let range of spaceRange\" [ngValue]=\"range\" >{{range.begin}}:00</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-lg-2 col-form-label\">End time</label>\r\n              <div class=\"col-sm-8 col-lg-10\">\r\n                <select class=\"form-control\" name=\"end_time\" required [(ngModel)]=\"end_time\" (change)=\" setEndTime(end_time,$event.target.value)\">\r\n                  <option selected>Choose...</option>\r\n                  <option *ngFor=\"let opt of selectableRange\" [ngValue]=\"opt\" >{{opt}}:00</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-lg-2 col-form-label\">Date</label>\r\n              <div class=\"col-sm-8 col-lg-10\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"calendarModel\"  name=\"calendarModel\"  disabled >\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-lg-2 col-form-label\" >End for extended bookings <i class=\"far fa-question-circle\" data-toggle=\"tooltip\" title=\"Book the same day of the week for long periods of time.\"></i> </label>\r\n              <div class=\"col-sm-8 col-lg-10\">\r\n                    <div class=\"input-group\">\r\n                      <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                             name=\"dp\"  [minDate]=\"minDate2\" [maxDate]=\"maxDate2\" [markDisabled]=\"isDisabled\" [(ngModel)]=\"extendReserveForm.extendReserveDate\" ngbDatepicker #d=\"ngbDatepicker\" readonly>\r\n                      <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\"></button>\r\n                      </div>\r\n                      \r\n                    </div>\r\n                    <small>Is optional</small>\r\n              </div>\r\n              \r\n            </div>\r\n            <div class=\"form-group row\" hidden>\r\n              <label class=\"col-sm-4 col-lg-2 col-form-label\" >Headquarter</label>\r\n              <div class=\"col-sm-8 col-lg-10\">\r\n                <input [(ngModel)]=\"hqModel.name\" name=\"headquarter\" type=\"text\" class=\"form-control\"   disabled>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-lg-2 col-form-label\" >Parking</label>\r\n              <div class=\"col-sm-8 col-lg-10\">\r\n                <input [(ngModel)]=\"parkingLotModel.name\" name=\"parking\" type=\"text\" class=\"form-control\"  disabled required>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-lg-2 col-form-label\">Zone</label>\r\n              <div class=\"col-sm-8 col-lg-10\">\r\n                <input [(ngModel)]=\"zoneModel.name\" name=\"zone\" type=\"text\" class=\"form-control\" disabled>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-lg-2 col-form-label\">Space number</label>\r\n              <div class=\"col-sm-8 col-lg-10\">\r\n                <input [(ngModel)]=\"spaceModel.name\" name=\"space\" type=\"text\" class=\"form-control\"  disabled>\r\n              </div>\r\n            </div>\r\n            <!--Botones-->\r\n            <div class=\"row text-center\">\r\n\r\n              <div class=\"col-sm-6 col-md-12\">\r\n                <button type=\"submit\" class=\"py-2 mt-2 mb-2 btn btnAdd btn-block btn-outline-secondary\" (click)=\"dataCalendarExtend()\" (click)=\"addReserve()\" >Reserve</button>\r\n              </div>\r\n\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/error/error.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/error/error.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsErrorErrorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<br>\r\n<div class=\"container \">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class =\"text-center\"> \r\n            <h1>Oops!</h1>\r\n            <h1>The page you're trying to view isn't here.</h1>\r\n            <button class=\"btn btn-delete btn-outline-danger\" routerLink=\"/\">\r\n                GO TO HOME PAGE\r\n            </button>\r\n          </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Footer -->\r\n<footer class=\"page-footer font-small blue pt-4 footerColor\">\r\n\r\n  <!-- Footer Links -->\r\n  <div class=\"container-fluid text-center text-md-left\">\r\n\r\n    <!-- Grid row -->\r\n    <div class=\"row justify-content-center\">\r\n\r\n      <div class=\"col-md-4 mt-md-0 mt-3 text-center\">\r\n        <a class=\"navbar-brand\" routerLink=\"/\">\r\n          <img src=\"https://www.avantica.net/hubfs/Logos%20Update%20Fusion%20Dec19/ENG/logo-eng-Blanco.png\" width=\"210\"\r\n            id=\"logo\">\r\n        </a>\r\n        <h2 class=\"mt-5 mb-5 letraFooter\">Avantica Technologies</h2>\r\n      </div>\r\n\r\n      <hr class=\"clearfix w-100 d-md-none pb-3\">\r\n\r\n      <div class=\"col-md-4 mb-md-0 mb-3\">\r\n\r\n        <!-- Links -->\r\n        <h5 class=\"text-uppercase letraFooter\">Contact us</h5>\r\n\r\n        <ul class=\"list-unstyled letraFooter\">\r\n          <li>\r\n            <p>info@avantica.net+1 650-641-31-34.</p>\r\n          </li>\r\n        </ul>\r\n\r\n      </div>\r\n      <!-- Grid column -->\r\n\r\n      <!-- Grid column -->\r\n      <div class=\"col-md-4 mb-md-0 mb-3\">\r\n\r\n        <!-- Links -->\r\n        <h5 class=\"text-uppercase letraFooter\">Social networks</h5>\r\n\r\n        <ul class=\"list-unstyled\">\r\n          <li>\r\n            <div class=\"socialMedia \">\r\n              <a class=\"btn-floating btn-large waves-effect waves-light\" target=\"_blank\"\r\n                href=\"https://www.facebook.com/AvanticaTechnologies?__hstc=59161970.fdfdf03d778926c960c49fc83534edba.1460006850503.1460014360609.1460100448262.3&amp;__hssc=59161970.1.1460100448262&amp;__hsfp=1609217652\"\r\n                aria-label=\"Facebook (opens New Window)\">\r\n                <i class=\"fab fa-facebook fa-lg fa-2x\" style=\"color:#FFFFFF; margin: 5px; height:6 !important;\"\r\n                  aria-hidden=\"true\"></i>\r\n              </a>\r\n              <a class=\"btn-floating btn-large waves-effect waves-light\" target=\"_blank\"\r\n                href=\"https://www.linkedin.com/company/avantica-technologies?__hstc=59161970.fdfdf03d778926c960c49fc83534edba.1460006850503.1460014360609.1460100448262.3&amp;__hssc=59161970.1.1460100448262&amp;__hsfp=1609217652\"\r\n                aria-label=\"Linkedin (opens New Window)\">\r\n                <i class=\"fab fa-linkedin fa-lg fa-2x\" style=\"color:#FFFFFF; margin: 5px; height:6 !important;\"\r\n                  aria-hidden=\"true\"></i>\r\n              </a>\r\n              <a class=\"btn-floating btn-large waves-effect waves-light\" target=\"_blank\"\r\n                href=\"https://twitter.com/avantica?__hstc=59161970.fdfdf03d778926c960c49fc83534edba.1460006850503.1460014360609.1460100448262.3&amp;__hssc=59161970.1.1460100448262&amp;__hsfp=1609217652\"\r\n                aria-label=\"Twitter (opens New Window)\">\r\n                <i class=\"fab fa-twitter-square fa-lg fa-2x\"\r\n                  style=\"color:#FFFFFF; margin: 5px; height:6 !important;\"></i>\r\n              </a>\r\n              <a class=\"btn-floating btn-large waves-effect waves-light\" target=\"_blank\"\r\n                href=\"https://www.instagram.com/avanticatech/\" aria-label=\"Instagram (opens New Window)\">\r\n                <i class=\"fab fa-instagram fa-lg fa-2x\" style=\"color:#FFFFFF; margin: 5px; height:6 !important;\"></i>\r\n              </a>\r\n              <a class=\"btn-floating btn-large waves-effect waves-light\" target=\"_blank\"\r\n                href=\"https://www.avantica.net/blog?hsLang=en-us\" data-href=\"https://www.avantica.net/es/blog\"\r\n                aria-label=\"Blog (opens New Window)\">\r\n                <i class=\"fas fa-wifi fa-lg fa-2x\" style=\"color:#FFFFFF; margin: 5px; height:6 !important;\"></i>\r\n              </a>\r\n              <a class=\"btn-floating btn-large waves-effect waves-light\" target=\"_blank\"\r\n                href=\"https://www.youtube.com/user/avanticatec\" data-href=\"https://www.youtube.com/user/avanticatec\"\r\n                aria-label=\"Youtube (opens New Window)\">\r\n                <i class=\"fab fa-youtube-square fa-lg fa-2x\"\r\n                  style=\"color:#FFFFFF; margin: 5px; height:6 !important;\"></i>\r\n              </a>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n\r\n      </div>\r\n      <!-- Grid column -->\r\n\r\n    </div>\r\n    <!-- Grid row -->\r\n\r\n  </div>\r\n  <div class=\"footer-copyright text-center py-3 letraFooter\">\r\n    <small class=\"text-center\" id=\"text\">Group Avantica, Inc. All Rights Reserved.</small>\r\n    <i routerLink=\"/handbook\" class=\"mr-auto far fa-question-circle\">\r\n\r\n    </i>\r\n  </div>\r\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/handbook/handbook.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/handbook/handbook.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHandbookHandbookComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button class=\"botonF1\" routerLink=\"\">\r\n    <span><i class=\"fas fa-arrow-left    \"></i></span>\r\n</button>\r\n<div class=\"container\" >\r\n    <br>\r\n    <section class=\"jumbotronHeader col-md-12 mb-4 jumbotron  justify-content-center text-center\">\r\n      <h3 class=\"font-weight-bold\">HANDBOOK</h3>\r\n    </section>\r\n    \r\n    <!--HandBook Users -->\r\n    <div class=\"accordion\" id=\"accordionExample\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\" id=\"\">\r\n                <h2 class=\"mb-0\">\r\n                    <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#register\"\r\n                        aria-expanded=\"false\" aria-controls=\"register\">\r\n                        How do we register with AvantiParking?\r\n                    </button>\r\n                </h2>\r\n            </div>\r\n\r\n            <div id=\"register\" class=\"collapse\" aria-labelledby=\"register\" data-parent=\"#accordionExample\">\r\n                <img src=\"assets/Login/1.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #1-To register on the avantica parking platform, all you have to do is log in once on the AvantiParkig page.\r\n                    <br>\r\n                    <a class=\"btn btn-primary\" style=\"color:aliceblue\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\"\r\n                    aria-expanded=\"false\" aria-controls=\"collapseOne\">Go, how to login</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-header\" id=\"headingOne\">\r\n                <h2 class=\"mb-0\">\r\n                    <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\"\r\n                        aria-expanded=\"false\" aria-controls=\"collapseOne\">\r\n                        How to login?\r\n                    </button>\r\n                </h2>\r\n            </div>\r\n\r\n            <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\r\n                <img src=\"assets/Login/1.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #1-We must click on the button that says \"LOGIN\", this will load the following screen.\r\n                </div>\r\n                <img src=\"assets/Login/2.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #2-One on this screen, we choose the google account, with which we would like to log in.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-header\" id=\"headingTwo\">\r\n                <h2 class=\"mb-0\">\r\n                    <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n                        Add a vehicle\r\n                    </button>\r\n                </h2>\r\n            </div>\r\n            <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\r\n                <img src=\"assets/Vehicle/1.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #1-The first thing we must do is go to the navbar and touch the \"Vehicle\" button.\r\n                </div>\r\n                <img src=\"assets/Vehicle/2.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #2-Once, on this screen, all we have to do is touch the \"New Vechicle\" button, which will display the following form.\r\n                </div>\r\n                <img src=\"assets/Vehicle/3.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #3-In this form, we fill in the respective data of your vehicle, once all the data is in, we touch the \"Add\" button.\r\n                </div>\r\n                <img src=\"assets/Vehicle/4.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #4-In addition to adding vehicles, we can intuitively edit and delete them.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-header\" id=\"headingThree\">\r\n                <h2 class=\"mb-0\">\r\n                    <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n                        Assign a default site\r\n                    </button>\r\n                </h2>\r\n            </div>\r\n            <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\r\n                <img src=\"assets/LocationUser/1.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #1-We must touch our image, in the upper right corner, which will show the menu, which is seen on the screen, once there, we just have to touch the \"Settings\" button.\r\n                </div>\r\n                <img src=\"assets/LocationUser/2.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #2-On the next screen, we just have to select the default venue, where we will be. Once selected, we only have to touch the Allocate button.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-header\" id=\"heading4\">\r\n                <h2 class=\"mb-0\">\r\n                    <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapse4\" aria-expanded=\"false\" aria-controls=\"collapse4\">\r\n                        Where can I see my notifications\r\n                    </button>\r\n                </h2>\r\n            </div>\r\n            <div id=\"collapse4\" class=\"collapse\" aria-labelledby=\"heading4\" data-parent=\"#accordionExample\">\r\n                <img src=\"assets/Notifications/1.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #1-The first thing we can notice is that when we have notifications, we can see in the upper right corner, the number of notifications, when we click on our profile image, we can see a \"Notifications\" button, in which we can also see the number of notifications, by clicking on this button, we can see notifications from our application.\r\n                </div>\r\n                <img src=\"assets/Notifications/2.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #2-These would be the notifications, once we open them, the number of messages will stop coming out, in the upper right corner, in addition, we have the possibility to click on the \"X\" of each message, to delete it, simply the we can leave there.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-header\" id=\"heading5\">\r\n                <h2 class=\"mb-0\">\r\n                    <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapse5\" aria-expanded=\"false\" aria-controls=\"collapse5\">\r\n                        Where can I reserve a parking space?\r\n                    </button>\r\n                </h2>\r\n            </div>\r\n            <div id=\"collapse5\" class=\"collapse\" aria-labelledby=\"heading5\" data-parent=\"#accordionExample\">\r\n                <img src=\"assets/Dashboard/1.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #1-The first thing we must do is go to the navbar and touch the \"Dashboard\" button, then fill in all the fields and then press the button \"View Dashboard\".\r\n                </div>\r\n                <img src=\"assets/Dashboard/2.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #2-We choose the field that we want to reserve and press the button, , which will display the following form.\r\n                </div>\r\n                <img src=\"assets/Dashboard/3.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #3-In this form, we fill in the respective data of your vehicle, choose the start time and the end time, once all the data is in, we touch the \"Reserve\" button.\r\n                </div>\r\n                <img src=\"assets/Dashboard/4.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #4-If we want to add an extended reservation then in the \"end for extended\" field, we choose a final date for this reservation.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-header\" id=\"heading6\">\r\n                <h2 class=\"mb-0\">\r\n                    <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapse6\" aria-expanded=\"false\" aria-controls=\"collapse6\">\r\n                        Where can I see all my reservations?\r\n                    </button>\r\n                </h2>\r\n            </div>\r\n            <div id=\"collapse6\" class=\"collapse\" aria-labelledby=\"heading6\" data-parent=\"#accordionExample\">\r\n                <img src=\"assets/Reserves/1.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #1-We must to go to the navbar and touch the \"My Reserves\" button, here you will see a list of all our reservations made.\r\n                </div>\r\n            </div>\r\n        </div>\r\n           <!--HandBook Users Administrator-->\r\n        <div class=\"card\" *ngIf=\"loggedIn && type\">\r\n            <div class=\"card-header\" id=\"heading7\">\r\n                <h2 class=\"mb-0\">\r\n                    <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapse7\" aria-expanded=\"false\" aria-controls=\"collapse7\">\r\n                        Add a headquarter\r\n                    </button>\r\n                </h2>\r\n            </div>\r\n            <div id=\"collapse7\" class=\"collapse\" aria-labelledby=\"heading7\" data-parent=\"#accordionExample\">\r\n                <img src=\"assets/Headquarter/1.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #1-Access to each window will appear in the administrator user menu, choose the \"headqarter\" option.\r\n                </div>\r\n                <img src=\"assets/Headquarter/2.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #2-Once, on this screen, all we have to do is touch the \"New Headquarter\" button, which will display the following form.\r\n                </div>\r\n                <img src=\"assets/Headquarter/3.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #3-In this form, we fill in the respective data of headquarter, once all the data is in, we touch the \"Add\" button.\r\n                </div>\r\n                <img src=\"assets/Headquarter/4.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #4-In addition to adding headquarters, we can intuitively edit and delete them.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\" *ngIf=\"loggedIn && type\">\r\n            <div class=\"card-header\" id=\"heading8\">\r\n                <h2 class=\"mb-0\">\r\n                    <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapse8\" aria-expanded=\"false\" aria-controls=\"collapse8\">\r\n                        Add a parking\r\n                    </button>\r\n                </h2>\r\n            </div>\r\n            <div id=\"collapse8\" class=\"collapse\" aria-labelledby=\"heading8\" data-parent=\"#accordionExample\">\r\n                <img src=\"assets/Parking/1.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #1-There is also an access in the setting button, which opens a window with different accesses, we choose \"parking-lot\"\r\n                </div>\r\n                <img src=\"assets/Parking/2.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #2-Once, on this screen, all we have to do is touch the \"New Parking Lot\" button, which will display the following form.\r\n                </div>\r\n                <img src=\"assets/Parking/3.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #3-In this form, we fill in the respective data of parking lot, once all the data is in, we touch the \"Add\" button.\r\n                </div>\r\n                <img src=\"assets/Parking/4.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #4-In addition to adding oarkings, we can intuitively edit and delete them.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\"  *ngIf=\"loggedIn && type\">\r\n            <div class=\"card-header\" id=\"heading9\">\r\n                <h2 class=\"mb-0\">\r\n                    <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapse9\" aria-expanded=\"false\" aria-controls=\"collapse9\">\r\n                        Add a zone\r\n                    </button>\r\n                </h2>\r\n            </div>\r\n            <div id=\"collapse9\" class=\"collapse\" aria-labelledby=\"heading9\" data-parent=\"#accordionExample\">\r\n                <img src=\"assets/Zone/1.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #1-Access to each window will appear in the administrator user menu, choose the \"Zone\" option.\r\n                </div>\r\n                <img src=\"assets/Zone/2.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #2-Once, on this screen, all we have to do is touch the \"New Zone\" button, which will display the following form.\r\n                </div>\r\n                <img src=\"assets/Zone/3.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #3-In this form, we fill in the respective data of the zone, once all the data is in, we touch the \"Add\" button.\r\n                </div>\r\n                <img src=\"assets/Zone/4.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #4-In the table we must press the eye icon to see the spaces in that zone.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\"  *ngIf=\"loggedIn && type\">\r\n            <div class=\"card-header\" id=\"heading10\">\r\n                <h2 class=\"mb-0\">\r\n                    <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapse10\" aria-expanded=\"false\" aria-controls=\"collapse10\">\r\n                        Add spaces\r\n                    </button>\r\n                </h2>\r\n            </div>\r\n            <div id=\"collapse10\" class=\"collapse\" aria-labelledby=\"heading10\" data-parent=\"#accordionExample\">\r\n                <img src=\"assets/Spaces/1.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #1-Once in the window of spaces, we can also add other spaces by pressing the button \"Add Space\", which will display the following form.\r\n                </div>\r\n                <img src=\"assets/Spaces/2.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #2-In this form, we fill in the respective data of your vehicle, once all the data is in, we touch the \"Add\" button\r\n                </div>\r\n                <img src=\"assets/Spaces/3.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #3-.By clicking on the edit button, a form will be displayed with the information of the chosen space, here you can modify your data\r\n                </div>\r\n                <img src=\"assets/Spaces/4.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #4-When you want to delete a space a warning will be issued, if you want to continue press \"yes, delete it!\"\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\"  *ngIf=\"loggedIn && type\">\r\n            <div class=\"card-header\" id=\"heading11\">\r\n                <h2 class=\"mb-0\">\r\n                    <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapse11\" aria-expanded=\"false\" aria-controls=\"collapse11\">\r\n                        Change user´s roll\r\n                    </button>\r\n                </h2>\r\n            </div>\r\n            <div id=\"collapse11\" class=\"collapse\" aria-labelledby=\"heading11\" data-parent=\"#accordionExample\">\r\n                <img src=\"assets/User_roll/1.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #1-Access to each window will appear in the administrator user menu, choose the \"Assign or modify roles\" option.\r\n                </div>\r\n                <img src=\"assets/User_roll/2.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #2-Once, on this screen, all we have to do is touch the \"Admin\" button if we want to grant administrator permissions, or press \"Regular\" button if we want to remove administrator permissions\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\"  *ngIf=\"loggedIn && type\">\r\n            <div class=\"card-header\" id=\"heading12\">\r\n                <h2 class=\"mb-0\">\r\n                    <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                        data-target=\"#collapse12\" aria-expanded=\"false\" aria-controls=\"collapse12\">\r\n                        Make a report\r\n                    </button>\r\n                </h2>\r\n            </div>\r\n            <div id=\"collapse12\" class=\"collapse\" aria-labelledby=\"heading12\" data-parent=\"#accordionExample\">\r\n                <img src=\"assets/Report/1.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #1-Access to each window will appear in the administrator user menu, choose the \"Report\" option.\r\n                </div>\r\n                <img src=\"assets/Report/2.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #3-To make a report, you must choose a start date and an end date, then press the \"Generate Report\" button\r\n                </div>\r\n                <img src=\"assets/Report/3.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <div class=\"card-body\">\r\n                    #4-A table will appear with the information of the report, finally press the \"generate report\" button.\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"login\" *ngIf=\"!loggedIn\">\r\n    <div class=\"row justify-content-center mb-5\">\r\n      <div class=\"col-sm-8 col-xs-8 col-md-8 col-lg-4\">\r\n        <div class=\"card mt-5\">\r\n          <div class=\"card-body\">\r\n            <form #loginForm=ngForm (ngSubmit)=\"onSubmit()\" >\r\n              <h3 class=\"text text-center text-white\"><strong>WELCOME TO AVANTIPARKING</strong></h3><br>\r\n              <p class=\"tabindex-script white-text\">It is a parking manager for the company Avantica. <br>\r\n                So you can reserve the parking of your vehicle.</p>\r\n              <div class=\"form-group\">\r\n                <div class=\"col-12\">\r\n                  <a class=\"btnLogin btn btn-primary btn-block\" href=\"{{GOOGLE_AUTH_URL}}\">\r\n                    <strong>LOG IN</strong>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div *ngIf=\"loggedIn && type\">\r\n    <div class=\"row menu login justify-content-center\">\r\n      <div class=\"col-md-10 container\">\r\n        <div class=\"box\" routerLink=\"/vehicle\">\r\n          <div class=\"content\" >\r\n            <img src=\"assets/car.png\" width=\"100\" alt=\"\">\r\n            <p>Check all the actions of your vehicles. </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"box\" routerLink=\"/dashboard\">\r\n          <div class=\"content\" >\r\n            <img  src=\"assets/month.png\" width=\"100\" alt=\"\">\r\n            <p>Check out the dashboard and current reserves!. </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"box\" routerLink=\"/administration/parking-lot\">\r\n          <div class=\"content\" >\r\n            <img src=\"assets/parking.png\" width=\"100\" alt=\"\">\r\n            <p>Interact with parking. </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"box\" routerLink=\"/administration/headquarter\">\r\n          <div class=\"content\" >\r\n            <img src=\"assets/placeholder.png\" width=\"100\" alt=\"\">\r\n            <p>View and configure all headquarters. </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"box\" routerLink=\"/administration/report\">\r\n          <div class=\"content\" >\r\n            <img src=\"assets/reports.png\" width=\"100\" alt=\"\">\r\n            <p>Have all the reports at hand. </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"box\" routerLink=\"/administration/zone\">\r\n          <div class=\"content\" >\r\n            <img src=\"assets/zone.png\" width=\"100\" alt=\"\">\r\n            <p>View and configure all zone. </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"box\" routerLink=\"/administration/user\">\r\n          <div class=\"content\" >\r\n            <img src=\"assets/employee.png\" width=\"100\" alt=\"\">\r\n            <p>Assign or modify roles. </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"login\" *ngIf=\"loggedIn && !type\">\r\n      <div class=\"row justify-content-center mb-5\">\r\n        <div class=\"col-sm-8 col-xs-8 col-md-8 col-lg-4\">\r\n          <div class=\"card mt-5\">\r\n            <div class=\"card-body\">\r\n              <form #loginForm=ngForm (ngSubmit)=\"onSubmit()\" >\r\n                <h3 class=\"text text-center text-white\"><strong>WELCOME TO AVANTIPARKING</strong></h3><br>\r\n                <p class=\"tabindex-script white-text\">It is a parking manager for the company Avantica. <br>\r\n                  So you can reserve the parking of your vehicle.</p>\r\n  \r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-reserves/my-reserves.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-reserves/my-reserves.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMyReservesMyReservesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button class=\"botonF1\" routerLink=\"/\">\r\n  <span><i class=\"fas fa-arrow-left    \"></i></span>\r\n</button>\r\n<div class=\"container\">\r\n    <br>\r\n    <section class=\"jumbotronHeader col-md-12 mb-4 jumbotron  justify-content-center text-center\">\r\n      <h3 class=\"font-weight-bold\">MY RESERVES</h3>\r\n    </section>\r\n    <div *ngIf=\"emply\" class=\"row justify-content-center\">\r\n      <div class=\"col-10 text-center\">\r\n        <i class=\"fas fa-poll-h fa-10x mx-auto \" style=\"color:#2F2D46\"></i>\r\n        <p>You have no reservation</p>\r\n        <a routerLink=\"/dashboard\">Do you want to make a reservation?</a>\r\n      </div>\r\n    </div>\r\n   <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-10 \">    \r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-bordered table-hover \">\r\n                <thead class=\"tableThead thead\">\r\n                  <tr >\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td *ngFor=\"let detail of validDetail\">\r\n                      <div class=\"card text-center \" style=\"width: 18rem;\">\r\n                        <div class=\"card-header text-white rounded pb-5 text-center\">\r\n                            <h3 class=\"card-header-title pt-3\"><strong>{{detail.date}} </strong></h3>\r\n                        </div>\r\n                        <div class=\"card-body\" >\r\n                          <p class=\"card-text\"><strong>SPACE: </strong> {{detail.space.name}} </p>\r\n                          <p class=\"card-text\"><strong>TIME: </strong> {{detail.start_time}} - {{detail.end_time}} </p>\r\n                          <p *ngIf=\"detail.reserve.vehicle != null; else elseBlock\" class=\"card-text\"><strong>VEHICLE: </strong>{{detail.reserve.vehicle.license_plate}} </p>\r\n                          <ng-template #elseBlock><p class=\"card-text\"><strong>VEHICLE: </strong>Not selected</p></ng-template>\r\n                          <p class=\"card-text\"><strong>CREATED: </strong>{{detail.reserve.created_at}} </p>  \r\n                          <button class=\"btn btn-delete btn-block btn-outline-danger\" (click)=\"cancelReserve(detail.id_reserve_detail)\">\r\n                              <i class=\"fas fa-trash-alt\"></i>\r\n                            <strong>CANCEL</strong></button>\r\n                        </div>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n            </table>\r\n       </div>\r\n   </div>\r\n</div>\r\n    \r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-dark navbarcolor\">\r\n    <a class=\"navbar-brand\" routerLink=\"/\">\r\n        <img src=\"https://www.avantica.net/hubfs/Logos%20Update%20Fusion%20Dec19/ENG/logo-eng-Blanco.png\" id=\"logo\">\r\n    </a>\r\n    <button class=\"navbar-toggler\" id=\"togglee\" type=\"button\" (click)=\"toggleNavbar()\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\" [ngClass]=\"{'show': navbarOpen}\">\r\n        <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/dashboard\" data-toggle=\"tooltip\" data-placement=\"left\"\r\n                    title=\"Make parking lot reservations\" *ngIf=\"loggedIn\" (click)=\"toggleNavbar()\">\r\n                    <strong id=\"link\">DASHBOARD</strong>\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/vehicle\" data-toggle=\"tooltip\" data-placement=\"left\"\r\n                    title=\"See your vehicles.\" *ngIf=\"loggedIn\" (click)=\"toggleNavbar()\">\r\n                    <strong id=\"link\">VEHICLE</strong>\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/my-reserves\" data-toggle=\"tooltip\" data-placement=\"left\"\r\n                    title=\"Heal\" *ngIf=\"loggedIn\" (click)=\"toggleNavbar()\">\r\n                    <strong id=\"link\">MY RESERVES</strong>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"navbar-nav ml-auto mt-2 mt-lg-o\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/handbook\" data-toggle=\"tooltip\" data-placement=\"left\"\r\n                    title=\"\" *ngIf=\"!loggedIn\" (click)=\"toggleNavbar()\">\r\n                    <strong id=\"link\"><i class=\"far fa-question-circle\"></i>HELP</strong>\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item dropdownbtn-group dropleft\">\r\n                <a class=\"nav-link dropdown-toggle notification\" id=\"navbarDropdown\" role=\"button\" *ngIf=\"loggedIn\"\r\n                    data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <img src=\"{{userInf.imageUrl}}\" class=\"rounded-circle\" width=\"40px\">\r\n                    <span class=\"badgeProfile\" *ngIf=\"notifications>0\">{{notifications}}</span>\r\n                </a>\r\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\" *ngIf=\"loggedIn\">\r\n                    <a class=\"dropdown-item disabled\" *ngIf=\"loggedIn\">\r\n                        <i class=\"far fa-user-circle\"></i>{{userInf.name}}</a>\r\n                    <div class=\"dropdown-divider\"></div>\r\n                    <div class=\"dropdown-item btn\" *ngIf=\"loggedIn\" (click)=\"toggleNavbar()\" data-toggle=\"modal\"\r\n                        data-target=\"#Notifications\">\r\n                        <a class=\"notification\" (click)=\"notificationViewed(userInf.id)\">\r\n                            <i class=\"fas fa-bell\"></i><span>Notifications</span>\r\n                            <span class=\"badge\" *ngIf=\"notifications>0\">{{notifications}}</span>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"dropdown-divider\"></div>\r\n                    <div class=\"dropdown-item btn\" *ngIf=\"loggedIn\" (click)=\"toggleNavbar()\" data-toggle=\"modal\"\r\n                        data-target=\"#Settings\">\r\n                        <i class=\"fas fa-cog\"></i> Settings\r\n                    </div>\r\n                    <div class=\"dropdown-divider\"></div>\r\n                    <a class=\"dropdown-item\" routerLink=\"/handbook\" data-toggle=\"tooltip\" (click)=\"toggleNavbar()\">\r\n                        <i class=\"far fa-question-circle\"></i>HELP\r\n                    </a>\r\n                    <div class=\"dropdown-divider\"></div>\r\n                    <a class=\"dropdown-item\" data-toggle=\"tooltip\" routerLink=\"/\" (click)=\"logout($event)\">\r\n                        <i class=\"fas fa-sign-out-alt\"></i>LOGOUT\r\n                    </a>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n<div class=\"margin\"></div>\r\n\r\n<div class=\"modal fade\" id=\"Settings\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Settings\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title text-center\" id=\"exampleModalLabel\"><strong>SETTINGS</strong></h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <app-user-panel *ngIf=\"loggedIn\"></app-user-panel>\r\n                <app-admin-panel *ngIf=\"admin\"></app-admin-panel>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"Notifications\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Notifications\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title text-center\" id=\"exampleModalLabel\"><strong>NOTIFICATIONS</strong></h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"my-3 p-3 bg-white rounded shadow-sm\">\r\n                    <h6 class=\"border-bottom border-gray pb-2 mb-0\">Recent Notifications</h6>\r\n                    <div *ngFor=\"let n of notificationsArray\">\r\n                        <div class=\"toast-header\">\r\n                            <strong class=\"mr-auto\">{{n.subject}}</strong>\r\n                            <small>{{n.date}}</small>\r\n                            <button (click)=\"deleteNotifications(n)\" type=\"button\" class=\"ml-2 mb-1 close\"\r\n                                data-dismiss=\"toast\" aria-label=\"Close\">\r\n                                <span aria-hidden=\"true\">&times;</span>\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"toast-body\">\r\n                            {{n.text}}\r\n                        </div>\r\n                        <hr>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/oauth2/oauth2/oauth2.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/oauth2/oauth2/oauth2.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsOauth2Oauth2Oauth2ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"loader\"></div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-panel/user-panel.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-panel/user-panel.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUserPanelUserPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n    <div class=\"my-3 p-3 bg-white rounded shadow-sm\">\r\n        <h6 class=\"border-bottom border-gray pb-2 mb-0\">USER</h6>\r\n        <div class=\"media text-muted pt-3\">\r\n            <img src=\"{{userInf.imageUrl}}\" class=\"bd-placeholder-img mr-2 rounded\" width=\"32\" height=\"32\">\r\n            <div class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\">\r\n                <div class=\"d-flex justify-content-between align-items-center w-100\">\r\n                        <strong class=\"text-gray-dark\" *ngIf=\"current !=null\" >Current location: {{current}}</strong>\r\n                    <strong class=\"text-gray-dark\" *ngIf=\"current ==null\" >Assign or change the user's location</strong>\r\n                </div>\r\n                <br>\r\n                <div class=\"input-group\">\r\n                    <select class=\"custom-select\" id=\"inputGroupSelect04\" name=\"h\"\r\n                        [(ngModel)]=\"userInf.headquarter\" aria-label=\"\">\r\n                        <option selected=\"true\" *ngIf=\"current !=null\" disabled value=\"{{h.id_headquarter}}\">Current\r\n                            {{current}}\r\n                        </option>\r\n                        <option value=\"{{h.id_headquarter}}\" *ngFor=\"let h of headquarters\">{{h.name}} {{h.city}}\r\n                            {{h.country}}</option>\r\n                    </select>\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-outline-secondary\" (click)=\"allocateHeadquarters()\"\r\n                            type=\"button\">Allocate</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicle/vehicle.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicle/vehicle.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsVehicleVehicleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button class=\"botonF1\" routerLink=\"\">\r\n  <span><i class=\"fas fa-arrow-left    \"></i></span>\r\n</button>\r\n<div class=\"container\">\r\n    <br>\r\n    <section class=\"jumbotronHeader col-md-12 mb-4 jumbotron  justify-content-center text-center\">\r\n      <h3 class=\"font-weight-bold\"> MY VEHICLES</h3>\r\n    </section>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4 col-md-6 mt-3\">\r\n        <input type=\"text\" class=\"form-control\" name=\"filterVehicles\" placeholder=\"Search...\"  maxlength=\"40\" \r\n          [(ngModel)]=\"filterVehicles\">\r\n      </div>\r\n      <div class=\"col-sm-8 col-md-6 mt-3\">\r\n        <button type=\"button\" class=\"btnAdd btn btn-primary btn-block\" data-toggle=\"modal\" data-target=\"#addVehicle\">\r\n          <strong><i class=\"fas fa-plus-square\"></i> NEW VEHICLE</strong>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div>\r\n      <div class=\"table-responsive mt-5 ml-2 mr-2\">\r\n        <table class=\"table table-bordered table-hover\">\r\n          <thead class=\"tableThead thead\">\r\n            <tr>\r\n              <th scope=\"col\"><strong>LICENCE PLATE</strong></th>\r\n              <th scope=\"col\"><strong>BRAND</strong></th>\r\n              <th scope=\"col\"><strong>MODEL</strong></th>\r\n              <th scope=\"col\"><strong>ACTION</strong></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let vehicle of vehicles | vehiclePipe:filterVehicles\">\r\n              <td> {{vehicle.license_plate}}</td>\r\n              <td> {{vehicle.brand}}</td>\r\n              <td> {{vehicle.model}}</td>\r\n              <td>\r\n                <button (click)=\" dataVehicleFormEdit(vehicle)\" class=\"btn-edit btn btn-block btn-outline-primary\"\r\n                id=\"\" data-toggle=\"modal\" data-target=\"#editVehicle\"><strong><i class=\"fas fa-angle-double-right\"></i>EDIT</strong></button>\r\n                <button (click)=\"deleteVehicle(vehicle.license_plate)\"\r\n                class=\"btn-delete btn btn-block btn-outline-danger\"><strong><i class=\"fas fa-trash-alt\"></i>DELETE</strong></button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <br>\r\n      <div class=\"my-3\"></div>\r\n    </div>\r\n\r\n    \r\n  <!--Modal add vehicle-->\r\n  <div class=\"modal fade\" id=\"addVehicle\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addVehicle\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title justify-content-center\"><strong>ADD VEHICLE</strong></h5>\r\n        <button type=\"button\" id=\"closeModal1\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form #addVehicleForm=ngForm (ngSubmit)=\"addVehicle()\" class=\"form-row justify-content-sm-center\">\r\n          <div class=\"form-group col-md-12\">\r\n            <label>LICENCE PLATE</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"licence_plate\" [(ngModel)]=\"addFormVehicle.license_plate\"  maxlength=\"20\"  required>\r\n          </div>\r\n          <div class=\"form-group col-md-12\">\r\n            <label>BRAND</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"brand\" [(ngModel)]=\"addFormVehicle.brand\"  maxlength=\"20\"  required>\r\n          </div>\r\n          <div class=\"form-group col-md-12\">\r\n            <label>MODEL</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"model\" [(ngModel)]=\"addFormVehicle.model\"  maxlength=\"20\"  required>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <button type=\"submit\" class=\"btnModalAdd btn btn-block btn-outline-secondary\"\r\n              [disabled]=\"!addVehicleForm.valid\"><i class=\"fas fa-plus-square\"></i> ADD</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n  <!--Modal edit Vehicle-->\r\n  <div class=\"modal fade\" id=\"editVehicle\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editVehicle\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title \">EDIT VEHICLE</h5>\r\n          <button type=\"button\" id=\"closeModal\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <form #editVehicleForm=ngForm (ngSubmit)=\"editVehicle()\" class=\"form-row justify-content-sm-center\">\r\n            <div class=\"form-group col-md-12\">\r\n              <label>LICENSE PLATE</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"license_plate\" [(ngModel)]=\"editFormVehicle.license_plate\"  maxlength=\"20\"  required>\r\n            </div>\r\n            <div class=\"form-group col-md-12\">\r\n              <label>BRAND</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"brand\" [(ngModel)]=\"editFormVehicle.brand\"  maxlength=\"20\"  required>\r\n            </div>\r\n            <div class=\"form-group col-md-12\">\r\n              <label>MODEL</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"model\" [(ngModel)]=\"editFormVehicle.model\"  maxlength=\"20\"  required>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <button type=\"submit\" class=\"btnModalAdd btn btn-block btn-outline-secondary\"\r\n                [disabled]=\"!editVehicleForm.valid\"> EDIT</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_administration_headquarter_headquarter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/administration/headquarter/headquarter.component */
    "./src/app/components/administration/headquarter/headquarter.component.ts");
    /* harmony import */


    var _components_administration_parking_lot_parking_lot_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/administration/parking-lot/parking-lot.component */
    "./src/app/components/administration/parking-lot/parking-lot.component.ts");
    /* harmony import */


    var _components_administration_space_space_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/administration/space/space.component */
    "./src/app/components/administration/space/space.component.ts");
    /* harmony import */


    var _components_administration_zone_zone_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/administration/zone/zone.component */
    "./src/app/components/administration/zone/zone.component.ts");
    /* harmony import */


    var _components_administration_users_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/administration/users/users.component */
    "./src/app/components/administration/users/users.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/vehicle/vehicle.component */
    "./src/app/components/vehicle/vehicle.component.ts");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_error_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/error/error.component */
    "./src/app/components/error/error.component.ts");
    /* harmony import */


    var _components_oauth2_oauth2_oauth2_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/oauth2/oauth2/oauth2.component */
    "./src/app/components/oauth2/oauth2/oauth2.component.ts");
    /* harmony import */


    var _services_after_login_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/after-login.service */
    "./src/app/services/after-login.service.ts");
    /* harmony import */


    var _services_before_login_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/before-login.service */
    "./src/app/services/before-login.service.ts");
    /* harmony import */


    var _services_admin_after_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./services/admin-after.service */
    "./src/app/services/admin-after.service.ts");
    /* harmony import */


    var _components_administration_report_report_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/administration/report/report.component */
    "./src/app/components/administration/report/report.component.ts");
    /* harmony import */


    var _components_my_reserves_my_reserves_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/my-reserves/my-reserves.component */
    "./src/app/components/my-reserves/my-reserves.component.ts");
    /* harmony import */


    var _components_handbook_handbook_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/handbook/handbook.component */
    "./src/app/components/handbook/handbook.component.ts");

    var routes = [{
      path: '',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
    }, {
      path: 'administration/headquarter',
      component: _components_administration_headquarter_headquarter_component__WEBPACK_IMPORTED_MODULE_3__["HeadquarterComponent"],
      canActivate: [_services_admin_after_service__WEBPACK_IMPORTED_MODULE_15__["AdminAfterService"]]
    }, {
      path: 'administration/parking-lot',
      component: _components_administration_parking_lot_parking_lot_component__WEBPACK_IMPORTED_MODULE_4__["ParkingLotComponent"],
      canActivate: [_services_admin_after_service__WEBPACK_IMPORTED_MODULE_15__["AdminAfterService"]]
    }, {
      path: 'administration/user',
      component: _components_administration_users_users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"],
      canActivate: [_services_admin_after_service__WEBPACK_IMPORTED_MODULE_15__["AdminAfterService"]]
    }, {
      path: 'administration/space',
      component: _components_administration_space_space_component__WEBPACK_IMPORTED_MODULE_5__["SpaceComponent"],
      canActivate: [_services_admin_after_service__WEBPACK_IMPORTED_MODULE_15__["AdminAfterService"]]
    }, {
      path: 'administration/zone',
      component: _components_administration_zone_zone_component__WEBPACK_IMPORTED_MODULE_6__["ZoneComponent"],
      canActivate: [_services_admin_after_service__WEBPACK_IMPORTED_MODULE_15__["AdminAfterService"]]
    }, {
      path: 'administration/report',
      component: _components_administration_report_report_component__WEBPACK_IMPORTED_MODULE_16__["ReportComponent"],
      canActivate: [_services_admin_after_service__WEBPACK_IMPORTED_MODULE_15__["AdminAfterService"]]
    }, {
      path: 'vehicle',
      component: _components_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_9__["VehicleComponent"],
      canActivate: [_services_after_login_service__WEBPACK_IMPORTED_MODULE_13__["AfterLoginService"]]
    }, {
      path: 'dashboard',
      component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
      canActivate: [_services_after_login_service__WEBPACK_IMPORTED_MODULE_13__["AfterLoginService"]]
    }, {
      path: 'my-reserves',
      component: _components_my_reserves_my_reserves_component__WEBPACK_IMPORTED_MODULE_17__["MyReservesComponent"],
      canActivate: [_services_after_login_service__WEBPACK_IMPORTED_MODULE_13__["AfterLoginService"]]
    }, {
      path: 'oauth2/redirect',
      component: _components_oauth2_oauth2_oauth2_component__WEBPACK_IMPORTED_MODULE_12__["Oauth2Component"],
      canActivate: [_services_before_login_service__WEBPACK_IMPORTED_MODULE_14__["BeforeLoginService"]]
    }, {
      path: 'handbook',
      component: _components_handbook_handbook_component__WEBPACK_IMPORTED_MODULE_18__["HandbookComponent"]
    }, {
      path: '**',
      component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_11__["ErrorComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'AvantiParking';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _components_administration_headquarter_headquarter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/administration/headquarter/headquarter.component */
    "./src/app/components/administration/headquarter/headquarter.component.ts");
    /* harmony import */


    var _components_administration_parking_lot_parking_lot_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/administration/parking-lot/parking-lot.component */
    "./src/app/components/administration/parking-lot/parking-lot.component.ts");
    /* harmony import */


    var _components_administration_zone_zone_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/administration/zone/zone.component */
    "./src/app/components/administration/zone/zone.component.ts");
    /* harmony import */


    var _components_administration_space_space_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/administration/space/space.component */
    "./src/app/components/administration/space/space.component.ts");
    /* harmony import */


    var _components_error_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/error/error.component */
    "./src/app/components/error/error.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var angular_font_awesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! angular-font-awesome */
    "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
    /* harmony import */


    var _pipes_headquarter_pipe_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pipes/headquarter-pipe.pipe */
    "./src/app/pipes/headquarter-pipe.pipe.ts");
    /* harmony import */


    var _pipes_parking_lot_pipe_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pipes/parking-lot-pipe.pipe */
    "./src/app/pipes/parking-lot-pipe.pipe.ts");
    /* harmony import */


    var _components_administration_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/administration/admin-panel/admin-panel.component */
    "./src/app/components/administration/admin-panel/admin-panel.component.ts");
    /* harmony import */


    var _pipes_zone_pipe_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pipes/zone-pipe.pipe */
    "./src/app/pipes/zone-pipe.pipe.ts");
    /* harmony import */


    var _pipes_space_pipe_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./pipes/space-pipe.pipe */
    "./src/app/pipes/space-pipe.pipe.ts");
    /* harmony import */


    var _pipes_user_pipe_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./pipes/user-pipe.pipe */
    "./src/app/pipes/user-pipe.pipe.ts");
    /* harmony import */


    var _pipes_report_pipe_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./pipes/report-pipe.pipe */
    "./src/app/pipes/report-pipe.pipe.ts");
    /* harmony import */


    var _components_oauth2_oauth2_oauth2_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/oauth2/oauth2/oauth2.component */
    "./src/app/components/oauth2/oauth2/oauth2.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_administration_users_users_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/administration/users/users.component */
    "./src/app/components/administration/users/users.component.ts");
    /* harmony import */


    var _components_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/user-panel/user-panel.component */
    "./src/app/components/user-panel/user-panel.component.ts");
    /* harmony import */


    var _components_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/vehicle/vehicle.component */
    "./src/app/components/vehicle/vehicle.component.ts");
    /* harmony import */


    var _pipes_vehicle_pipe_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./pipes/vehicle-pipe.pipe */
    "./src/app/pipes/vehicle-pipe.pipe.ts");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_administration_report_report_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/administration/report/report.component */
    "./src/app/components/administration/report/report.component.ts");
    /* harmony import */


    var _components_my_reserves_my_reserves_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/my-reserves/my-reserves.component */
    "./src/app/components/my-reserves/my-reserves.component.ts");
    /* harmony import */


    var _components_handbook_handbook_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/handbook/handbook.component */
    "./src/app/components/handbook/handbook.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_administration_headquarter_headquarter_component__WEBPACK_IMPORTED_MODULE_8__["HeadquarterComponent"], _components_administration_parking_lot_parking_lot_component__WEBPACK_IMPORTED_MODULE_9__["ParkingLotComponent"], _components_administration_zone_zone_component__WEBPACK_IMPORTED_MODULE_10__["ZoneComponent"], _components_administration_space_space_component__WEBPACK_IMPORTED_MODULE_11__["SpaceComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _components_error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"], _pipes_headquarter_pipe_pipe__WEBPACK_IMPORTED_MODULE_16__["HeadquarterPipePipe"], _pipes_parking_lot_pipe_pipe__WEBPACK_IMPORTED_MODULE_17__["ParkingLotPipePipe"], _components_administration_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_18__["AdminPanelComponent"], _pipes_zone_pipe_pipe__WEBPACK_IMPORTED_MODULE_19__["ZonePipePipe"], _pipes_space_pipe_pipe__WEBPACK_IMPORTED_MODULE_20__["SpacePipePipe"], _pipes_report_pipe_pipe__WEBPACK_IMPORTED_MODULE_22__["ReportPipePipe"], _components_oauth2_oauth2_oauth2_component__WEBPACK_IMPORTED_MODULE_23__["Oauth2Component"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"], _components_administration_users_users_component__WEBPACK_IMPORTED_MODULE_25__["UsersComponent"], _pipes_user_pipe_pipe__WEBPACK_IMPORTED_MODULE_21__["UserPipePipe"], _components_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_26__["UserPanelComponent"], _components_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_27__["VehicleComponent"], _pipes_vehicle_pipe_pipe__WEBPACK_IMPORTED_MODULE_28__["VehiclePipePipe"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_29__["DashboardComponent"], _components_administration_report_report_component__WEBPACK_IMPORTED_MODULE_30__["ReportComponent"], _components_my_reserves_my_reserves_component__WEBPACK_IMPORTED_MODULE_31__["MyReservesComponent"], _components_handbook_handbook_component__WEBPACK_IMPORTED_MODULE_32__["HandbookComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_15__["AngularFontAwesomeModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/administration/admin-panel/admin-panel.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/administration/admin-panel/admin-panel.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdministrationAdminPanelAdminPanelComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5pc3RyYXRpb24vYWRtaW4tcGFuZWwvYWRtaW4tcGFuZWwuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/administration/admin-panel/admin-panel.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/components/administration/admin-panel/admin-panel.component.ts ***!
    \********************************************************************************/

  /*! exports provided: AdminPanelComponent */

  /***/
  function srcAppComponentsAdministrationAdminPanelAdminPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminPanelComponent", function () {
      return AdminPanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminPanelComponent = /*#__PURE__*/function () {
      function AdminPanelComponent() {
        _classCallCheck(this, AdminPanelComponent);
      }

      _createClass(AdminPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminPanelComponent;
    }();

    AdminPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/administration/admin-panel/admin-panel.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-panel.component.css */
      "./src/app/components/administration/admin-panel/admin-panel.component.css"))["default"]]
    })], AdminPanelComponent);
    /***/
  },

  /***/
  "./src/app/components/administration/headquarter/headquarter.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/administration/headquarter/headquarter.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdministrationHeadquarterHeadquarterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".botonF1{\r\n    width:60px;\r\n    height:60px;\r\n    border-radius:100%;\r\n    background:#2F2D46;\r\n    left:0;\r\n    bottom:20;\r\n    position: absolute;\r\n    margin-left: 16px;\r\n    margin-top: 40px;\r\n    border:none;\r\n    outline:none;\r\n    color:#FFF;\r\n    font-size:36px;\r\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n    transition:.3s;  \r\n  }\r\n  span{\r\n    transition:.5s;  \r\n  }\r\n  .botonF1:hover span{\r\n    transform:rotate(360deg);\r\n  }\r\n  .botonF1:active{\r\n    transform:scale(1.1);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbmlzdHJhdGlvbi9oZWFkcXVhcnRlci9oZWFkcXVhcnRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsY0FBYztJQUNkLGtFQUFrRTtJQUNsRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5pc3RyYXRpb24vaGVhZHF1YXJ0ZXIvaGVhZHF1YXJ0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3RvbkYxe1xyXG4gICAgd2lkdGg6NjBweDtcclxuICAgIGhlaWdodDo2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMDAlO1xyXG4gICAgYmFja2dyb3VuZDojMkYyRDQ2O1xyXG4gICAgbGVmdDowO1xyXG4gICAgYm90dG9tOjIwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICBjb2xvcjojRkZGO1xyXG4gICAgZm9udC1zaXplOjM2cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XHJcbiAgICB0cmFuc2l0aW9uOi4zczsgIFxyXG4gIH1cclxuICBzcGFue1xyXG4gICAgdHJhbnNpdGlvbjouNXM7ICBcclxuICB9XHJcbiAgLmJvdG9uRjE6aG92ZXIgc3BhbntcclxuICAgIHRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbiAgLmJvdG9uRjE6YWN0aXZle1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMSk7XHJcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/administration/headquarter/headquarter.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/components/administration/headquarter/headquarter.component.ts ***!
    \********************************************************************************/

  /*! exports provided: HeadquarterComponent */

  /***/
  function srcAppComponentsAdministrationHeadquarterHeadquarterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeadquarterComponent", function () {
      return HeadquarterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_service_headquarter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/service-headquarter.service */
    "./src/app/services/service-headquarter.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);

    var HeadquarterComponent = /*#__PURE__*/function () {
      function HeadquarterComponent(headquarter) {
        _classCallCheck(this, HeadquarterComponent);

        this.headquarter = headquarter;
        this.filterHeadquarters = "";
        this.addFormHeadquarter = {
          id_headquarter: null,
          name: null,
          country: null,
          city: null
        };
        this.editFormHeadquarter = {
          id_headquarter: null,
          name: null,
          country: null,
          city: null
        };
        this.nullHeadquarter = {
          id_headquarter: null,
          name: null,
          country: null,
          city: null
        };
      }

      _createClass(HeadquarterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.listHeadquarter();
        }
      }, {
        key: "listHeadquarter",
        value: function listHeadquarter() {
          var _this = this;

          this.headquarter.listHeadquarter().subscribe(function (data) {
            _this.headquarters = data;
          }, function (error) {});
        }
      }, {
        key: "addHeadquarter",
        value: function addHeadquarter() {
          var _this2 = this;

          this.headquarter.addHeadquarter(this.addFormHeadquarter).subscribe(function (data) {
            _this2.nullHeadquarter = data;

            _this2.responseSuccess(data);

            if (_this2.nullHeadquarter.name == null) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'A headquarter with the name ' + _this2.addFormHeadquarter.name + ' has already been registered!',
                confirmButtonColor: '#EF4023'
              });
            } else {
              _this2.addFormHeadquarter.name = null;
              _this2.addFormHeadquarter.country = null;
              _this2.addFormHeadquarter.city = null;
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                type: 'success',
                title: 'The headquarter has been saved',
                showConfirmButton: false,
                timer: 1500
              });
              jquery__WEBPACK_IMPORTED_MODULE_4__("#closeModal1").click();

              _this2.ngOnInit();
            }
          }, function (error) {
            return _this2.responseError(error);
          });
        }
      }, {
        key: "deleteHeadquarter",
        value: function deleteHeadquarter(_formHeadquarter) {
          var _this3 = this;

          var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
            customClass: {
              cancelButton: 'btn btn-secondary'
            },
            buttonsStyling: false
          });
          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Are you sure?',
            text: "You will not be able to reverse this. Parking and areas housed in this headquarters are deleted!!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#EF4023',
            confirmButtonText: 'Yes, delete it!',
            reverseButtons: true
          }).then(function (result) {
            if (result.value) {
              _this3.headquarter.deleteHeadquarter(_formHeadquarter).subscribe(function (data) {
                _this3.ngOnInit();

                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Deleted!', 'Your file has been deleted.', 'success');
              });
            }
          });
        }
      }, {
        key: "editHeadquarter",
        value: function editHeadquarter() {
          var _this4 = this;

          this.headquarter.editHeadquarter(this.editFormHeadquarter.id_headquarter, this.editFormHeadquarter).subscribe(function (data) {
            jquery__WEBPACK_IMPORTED_MODULE_4__("#closeModal1").click();
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
              type: 'success',
              title: 'The headquarter has been updated',
              showConfirmButton: false,
              timer: 1500
            });

            _this4.ngOnInit();
          }, function (error) {});
        }
      }, {
        key: "dataHeadquarterFormEdit",
        value: function dataHeadquarterFormEdit(_headquarter) {
          this.editFormHeadquarter.id_headquarter = _headquarter.id_headquarter;
          this.editFormHeadquarter.name = _headquarter.name;
          this.editFormHeadquarter.city = _headquarter.city;
          this.editFormHeadquarter.country = _headquarter.country;
        }
      }, {
        key: "responseSuccess",
        value: function responseSuccess(data) {
          this.success = data.data;
          this.status = "success";
        }
      }, {
        key: "responseError",
        value: function responseError(error) {
          this.error = error.error.error;
          this.status = "error";
        }
      }]);

      return HeadquarterComponent;
    }();

    HeadquarterComponent.ctorParameters = function () {
      return [{
        type: src_app_services_service_headquarter_service__WEBPACK_IMPORTED_MODULE_2__["ServiceHeadquarterService"]
      }];
    };

    HeadquarterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-headquarter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./headquarter.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/administration/headquarter/headquarter.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./headquarter.component.css */
      "./src/app/components/administration/headquarter/headquarter.component.css"))["default"]]
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], HeadquarterComponent);
    /***/
  },

  /***/
  "./src/app/components/administration/parking-lot/parking-lot.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/administration/parking-lot/parking-lot.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdministrationParkingLotParkingLotComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".botonF1{\r\n    width:60px;\r\n    height:60px;\r\n    border-radius:100%;\r\n    background:#2F2D46;\r\n    left:0;\r\n    bottom:20;\r\n    position: absolute;\r\n    margin-left: 16px;\r\n    margin-top: 40px;\r\n    border:none;\r\n    outline:none;\r\n    color:#FFF;\r\n    font-size:36px;\r\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n    transition:.3s;  \r\n  }\r\n  span{\r\n    transition:.5s;  \r\n  }\r\n  .botonF1:hover span{\r\n    transform:rotate(360deg);\r\n  }\r\n  .botonF1:active{\r\n    transform:scale(1.1);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbmlzdHJhdGlvbi9wYXJraW5nLWxvdC9wYXJraW5nLWxvdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsY0FBYztJQUNkLGtFQUFrRTtJQUNsRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5pc3RyYXRpb24vcGFya2luZy1sb3QvcGFya2luZy1sb3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3RvbkYxe1xyXG4gICAgd2lkdGg6NjBweDtcclxuICAgIGhlaWdodDo2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMDAlO1xyXG4gICAgYmFja2dyb3VuZDojMkYyRDQ2O1xyXG4gICAgbGVmdDowO1xyXG4gICAgYm90dG9tOjIwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICBjb2xvcjojRkZGO1xyXG4gICAgZm9udC1zaXplOjM2cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XHJcbiAgICB0cmFuc2l0aW9uOi4zczsgIFxyXG4gIH1cclxuICBzcGFue1xyXG4gICAgdHJhbnNpdGlvbjouNXM7ICBcclxuICB9XHJcbiAgLmJvdG9uRjE6aG92ZXIgc3BhbntcclxuICAgIHRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbiAgLmJvdG9uRjE6YWN0aXZle1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMSk7XHJcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/administration/parking-lot/parking-lot.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/components/administration/parking-lot/parking-lot.component.ts ***!
    \********************************************************************************/

  /*! exports provided: ParkingLotComponent */

  /***/
  function srcAppComponentsAdministrationParkingLotParkingLotComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParkingLotComponent", function () {
      return ParkingLotComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_service_parking_lot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/service-parking-lot.service */
    "./src/app/services/service-parking-lot.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var src_app_services_service_headquarter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/service-headquarter.service */
    "./src/app/services/service-headquarter.service.ts");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);

    var ParkingLotComponent = /*#__PURE__*/function () {
      function ParkingLotComponent(_parking, _headquarter) {
        _classCallCheck(this, ParkingLotComponent);

        this._parking = _parking;
        this._headquarter = _headquarter;
        this.formHeadquarter = {
          id_headquarter: null,
          name: null,
          country: null,
          city: null
        };
        this.filterParkingLot = "";
        this.addFormParkingLot = {
          id_parking_lot: null,
          name: null,
          headquarter: this.formHeadquarter
        };
        this.editFormParkingLot = {
          id_parking_lot: null,
          name: null,
          headquarter: this.formHeadquarter
        };
        this.nullParkingLot = {
          id_parking_lot: null,
          name: null,
          headquarter: this.formHeadquarter
        };
      }

      _createClass(ParkingLotComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ListParkingLot();
          this.ListHeadquarters();
        }
      }, {
        key: "ListParkingLot",
        value: function ListParkingLot() {
          var _this5 = this;

          this._parking.listParkingLot().subscribe(function (data) {
            _this5.parkings = data;
          });
        }
      }, {
        key: "ListHeadquarters",
        value: function ListHeadquarters() {
          var _this6 = this;

          this._headquarter.listHeadquarter().subscribe(function (data) {
            _this6.headquarters = data;
          });
        }
      }, {
        key: "addParkingLot",
        value: function addParkingLot() {
          var _this7 = this;

          this._parking.addParkingLot(this.addFormParkingLot).subscribe(function (data) {
            _this7.nullParkingLot = data;

            if (_this7.nullParkingLot.name == null) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'A parking lot with the name ' + _this7.addFormParkingLot.name + ' has already been registered for the selected headquarter!',
                confirmButtonColor: '#EF4023'
              });
            } else {
              _this7.responseSuccess(data);

              _this7.addFormParkingLot.name = null;
              _this7.addFormParkingLot.headquarter.id_headquarter = null;
              jquery__WEBPACK_IMPORTED_MODULE_5__("#closeModal2").click();
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                type: 'success',
                title: 'The Parking has been saved',
                showConfirmButton: false,
                timer: 1500
              });

              _this7.ngOnInit();
            }
          }, function (error) {
            return _this7.responseError(error);
          });
        }
      }, {
        key: "deleteParkingLot",
        value: function deleteParkingLot(_formParkingLot) {
          var _this8 = this;

          var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
            customClass: {
              cancelButton: 'btn btn-secondary'
            },
            buttonsStyling: false
          });
          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Are you sure?',
            text: "You will not be able to reverse this! If you eliminate this parking, areas and parking areas will be permanently deleted!!!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#EF4023',
            confirmButtonText: 'Yes, delete it!',
            reverseButtons: true
          }).then(function (result) {
            if (result.value) {
              _this8._parking.deleteParkingLot(_formParkingLot).subscribe(function (data) {
                _this8.ngOnInit();

                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Deleted!', 'Your file has been deleted.', 'success');
              });
            }
          });
        }
      }, {
        key: "editParkingLot",
        value: function editParkingLot() {
          var _this9 = this;

          this._parking.editParkingLot(this.editFormParkingLot.id_parking_lot, this.editFormParkingLot).subscribe(function (data) {
            jquery__WEBPACK_IMPORTED_MODULE_5__("#closeModal3").click();
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
              type: 'success',
              title: 'The parking lot has been updated',
              showConfirmButton: false,
              timer: 1500
            });

            _this9.ngOnInit();
          }, function (error) {});
        }
      }, {
        key: "dataParkingLotFormEdit",
        value: function dataParkingLotFormEdit(_parkingLot) {
          this.editFormParkingLot.id_parking_lot = _parkingLot.id_parking_lot;
          this.editFormParkingLot.name = _parkingLot.name;
          this.editFormParkingLot.headquarter = _parkingLot.headquarter;
        }
      }, {
        key: "responseSuccess",
        value: function responseSuccess(data) {
          this.success = data.data;
          this.status = "success";
        }
      }, {
        key: "responseError",
        value: function responseError(error) {
          this.error = error.error.error;
          this.status = "error";
        }
      }]);

      return ParkingLotComponent;
    }();

    ParkingLotComponent.ctorParameters = function () {
      return [{
        type: src_app_services_service_parking_lot_service__WEBPACK_IMPORTED_MODULE_2__["ServiceParkingLotService"]
      }, {
        type: src_app_services_service_headquarter_service__WEBPACK_IMPORTED_MODULE_4__["ServiceHeadquarterService"]
      }];
    };

    ParkingLotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-parking-lot',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./parking-lot.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/administration/parking-lot/parking-lot.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./parking-lot.component.css */
      "./src/app/components/administration/parking-lot/parking-lot.component.css"))["default"]]
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ParkingLotComponent);
    /***/
  },

  /***/
  "./src/app/components/administration/report/report.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/components/administration/report/report.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdministrationReportReportComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".botonF1{\r\n    width:60px;\r\n    height:60px;\r\n    border-radius:100%;\r\n    background:#2F2D46;\r\n    left:0;\r\n    bottom:20;\r\n    position: absolute;\r\n    margin-left: 16px;\r\n    margin-top: 40px;\r\n    border:none;\r\n    outline:none;\r\n    color:#FFF;\r\n    font-size:36px;\r\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n    transition:.3s;  \r\n  }\r\n  span{\r\n    transition:.5s;  \r\n  }\r\n  .botonF1:hover span{\r\n    transform:rotate(360deg);\r\n  }\r\n  .botonF1:active{\r\n    transform:scale(1.1);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbmlzdHJhdGlvbi9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7SUFDVixjQUFjO0lBQ2Qsa0VBQWtFO0lBQ2xFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbmlzdHJhdGlvbi9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90b25GMXtcclxuICAgIHdpZHRoOjYwcHg7XHJcbiAgICBoZWlnaHQ6NjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6MTAwJTtcclxuICAgIGJhY2tncm91bmQ6IzJGMkQ0NjtcclxuICAgIGxlZnQ6MDtcclxuICAgIGJvdHRvbToyMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgb3V0bGluZTpub25lO1xyXG4gICAgY29sb3I6I0ZGRjtcclxuICAgIGZvbnQtc2l6ZTozNnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xyXG4gICAgdHJhbnNpdGlvbjouM3M7ICBcclxuICB9XHJcbiAgc3BhbntcclxuICAgIHRyYW5zaXRpb246LjVzOyAgXHJcbiAgfVxyXG4gIC5ib3RvbkYxOmhvdmVyIHNwYW57XHJcbiAgICB0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG4gIC5ib3RvbkYxOmFjdGl2ZXtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjEpO1xyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/administration/report/report.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/administration/report/report.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ReportComponent */

  /***/
  function srcAppComponentsAdministrationReportReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportComponent", function () {
      return ReportComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_service_headquarter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/service-headquarter.service */
    "./src/app/services/service-headquarter.service.ts");
    /* harmony import */


    var src_app_services_service_parking_lot_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/service-parking-lot.service */
    "./src/app/services/service-parking-lot.service.ts");
    /* harmony import */


    var src_app_services_service_zone_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/service-zone.service */
    "./src/app/services/service-zone.service.ts");
    /* harmony import */


    var src_app_services_service_space_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/service-space.service */
    "./src/app/services/service-space.service.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var src_app_services_my_reserves_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/my-reserves-service.service */
    "./src/app/services/my-reserves-service.service.ts");
    /* harmony import */


    var src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/reports.service */
    "./src/app/services/reports.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/services/notifications.service */
    "./src/app/services/notifications.service.ts");

    var ReportComponent = /*#__PURE__*/function () {
      function ReportComponent(headquarter, parking, zone, space, user, reseve, report, emails) {
        _classCallCheck(this, ReportComponent);

        this.headquarter = headquarter;
        this.parking = parking;
        this.zone = zone;
        this.space = space;
        this.user = user;
        this.reseve = reseve;
        this.report = report;
        this.emails = emails;
        this.countHeadquarter = 0;
        this.countParking = 0;
        this.countZone = 0;
        this.countSpaces = 0;
        this.countUsers = 0;
        this.countReservations = 0;
        this.activeUser = [];
        this.reportComplete = [];
        this.minDate = undefined;
        this.maxDate = undefined;
        this.initDate = null;
        this.finalDate = null;
        this.userInf = null;
        this.filter = "";
      }

      _createClass(ReportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.loadDashboard();
          this.user.loadImg().subscribe(function (data) {
            _this10.loadUser(data);
          });
        }
      }, {
        key: "loadUser",
        value: function loadUser(data) {
          this.userInf = data;
        }
      }, {
        key: "loadDashboard",
        value: function loadDashboard() {
          var _this11 = this;

          this.headquarter.listHeadquarter().subscribe(function (data) {
            _this11.loadCountHeadquarter(data);
          });
          this.parking.listParkingLot().subscribe(function (data) {
            _this11.loadCountParking(data);
          });
          this.zone.listZone().subscribe(function (data) {
            _this11.loadCountZones(data);
          });
          this.space.listSpace().subscribe(function (data) {
            _this11.loadCountSpaces(data);
          });
          this.user.getAll().subscribe(function (data) {
            _this11.loadCountUsers(data);
          });
          this.report.listReservation().subscribe(function (data) {
            _this11.loadCountReservations(data);
          });
        }
      }, {
        key: "loadCountHeadquarter",
        value: function loadCountHeadquarter(data) {
          var _this12 = this;

          data.forEach(function (element) {
            setTimeout(function () {
              _this12.countHeadquarter++;
            }, 700);
          });
        }
      }, {
        key: "loadCountParking",
        value: function loadCountParking(data) {
          var _this13 = this;

          data.forEach(function (element) {
            setTimeout(function () {
              _this13.countParking++;
            }, 700);
          });
        }
      }, {
        key: "loadCountZones",
        value: function loadCountZones(data) {
          var _this14 = this;

          data.forEach(function (element) {
            setTimeout(function () {
              _this14.countZone++;
            }, 700);
          });
        }
      }, {
        key: "loadCountSpaces",
        value: function loadCountSpaces(data) {
          var _this15 = this;

          data.forEach(function (element) {
            setTimeout(function () {
              _this15.countSpaces++;
            }, 700);
          });
        }
      }, {
        key: "loadCountUsers",
        value: function loadCountUsers(data) {
          var _this16 = this;

          data.forEach(function (element) {
            setTimeout(function () {
              _this16.countUsers++;
            }, 700);
          });
        }
      }, {
        key: "loadCountReservations",
        value: function loadCountReservations(data) {
          var _this17 = this;

          data.forEach(function (element) {
            setTimeout(function () {
              _this17.countReservations++;
            }, 700);
          });
        }
      }, {
        key: "generateReport",
        value: function generateReport() {
          var _this18 = this;

          if (this.initDate != null && this.finalDate != null) {
            var d1 = this.initDate.year + "-" + this.initDate.month + "-" + this.initDate.day;
            var d2 = this.finalDate.year + "-" + this.finalDate.month + "-" + this.finalDate.day;
            this.d1 = d1;
            this.d2 = d2;
            this.report.generateReport(d1, d2).subscribe(function (data) {
              _this18.loadReport(data);
            }, function (error) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                type: 'error',
                title: 'An error occurred while generating the report, please try again later, if the problem persists, contact the page administrator',
                showConfirmButton: true,
                timer: 15000
              });
            });
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
              type: 'error',
              title: 'The init date or final date value is invalid',
              showConfirmButton: true,
              timer: 15000
            });
          }
        }
      }, {
        key: "loadReport",
        value: function loadReport(data) {
          var _this19 = this;

          this.activeUser = [];
          var myObj = [];

          if (data != null) {
            this.reportComplete = data;
            this.reportComplete.forEach(function (element) {
              if (!(element.reserve.user.email in myObj)) {
                myObj[element.reserve.user.email] = true;

                _this19.activeUser.push(element.reserve.user);
              }
            });

            if (this.reportComplete.length == 0) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                type: 'error',
                title: 'No data to report',
                showConfirmButton: true,
                timer: 15000
              });
            }
          }
        }
      }, {
        key: "sendEmail",
        value: function sendEmail() {
          var report = document.getElementById("report");
          var email = {
            id: null,
            to: this.userInf.email,
            subject: "REPORT " + this.d1 + " " + this.d2,
            text: "The report has been sent to your email",
            html: report.innerHTML,
            viewed: false,
            user_id: {
              id: this.userInf.id
            }
          };
          this.emails.sendEmail(email).subscribe(function (data) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
              type: 'success',
              title: 'The report has been sent to your email',
              showConfirmButton: true,
              timer: 15000
            });
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return ReportComponent;
    }();

    ReportComponent.ctorParameters = function () {
      return [{
        type: src_app_services_service_headquarter_service__WEBPACK_IMPORTED_MODULE_2__["ServiceHeadquarterService"]
      }, {
        type: src_app_services_service_parking_lot_service__WEBPACK_IMPORTED_MODULE_3__["ServiceParkingLotService"]
      }, {
        type: src_app_services_service_zone_service__WEBPACK_IMPORTED_MODULE_4__["ServiceZoneService"]
      }, {
        type: src_app_services_service_space_service__WEBPACK_IMPORTED_MODULE_5__["ServiceSpaceService"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: src_app_services_my_reserves_service_service__WEBPACK_IMPORTED_MODULE_7__["MyReservesServiceService"]
      }, {
        type: src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_8__["ReportsService"]
      }, {
        type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_10__["NotificationsService"]
      }];
    };

    ReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-report',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./report.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/administration/report/report.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./report.component.css */
      "./src/app/components/administration/report/report.component.css"))["default"]]
    })], ReportComponent);
    /***/
  },

  /***/
  "./src/app/components/administration/space/space.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/components/administration/space/space.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdministrationSpaceSpaceComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btnAddSpace{\r\n    background-color: #fff;\r\n    color: #89CA8E;\r\n    border-color: #89CA8E;\r\n    \r\n}\r\n.btnEditSpace{\r\n\tbackground-color: #fff;\r\n    color: #00ACCF;\r\n    border-color: #00ACCF;\r\n}\r\n.btnAddSpace:hover{\r\n    color: white;\r\n    background-color: #89CA8E;\r\n}\r\n.btnEditSpace:hover{\r\n    color: white;\r\n\tbackground-color: #00ACCF; \r\n}\r\n.botonF1{\r\n    width:60px;\r\n    height:60px;\r\n    border-radius:100%;\r\n    background:#2F2D46;\r\n    left:0;\r\n    bottom:20;\r\n    position: absolute;\r\n    margin-left: 16px;\r\n    margin-top: 40px;\r\n    border:none;\r\n    outline:none;\r\n    color:#FFF;\r\n    font-size:36px;\r\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n    transition:.3s;  \r\n  }\r\nspan{\r\n    transition:.5s;  \r\n  }\r\n.botonF1:hover span{\r\n    transform:rotate(360deg);\r\n  }\r\n.botonF1:active{\r\n    transform:scale(1.1);\r\n  }\r\n.custom-select:disabled {\r\n    color: #000910 !important;\r\n    background-color: #ffffff !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbmlzdHJhdGlvbi9zcGFjZS9zcGFjZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxxQkFBcUI7O0FBRXpCO0FBQ0E7Q0FDQyxzQkFBc0I7SUFDbkIsY0FBYztJQUNkLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksWUFBWTtDQUNmLHlCQUF5QjtBQUMxQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsY0FBYztJQUNkLGtFQUFrRTtJQUNsRSxjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxjQUFjO0VBQ2hCO0FBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7QUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLG9DQUFvQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5pc3RyYXRpb24vc3BhY2Uvc3BhY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5BZGRTcGFjZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBjb2xvcjogIzg5Q0E4RTtcclxuICAgIGJvcmRlci1jb2xvcjogIzg5Q0E4RTtcclxuICAgIFxyXG59XHJcbi5idG5FZGl0U3BhY2V7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGNvbG9yOiAjMDBBQ0NGO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDBBQ0NGO1xyXG59XHJcblxyXG4uYnRuQWRkU3BhY2U6aG92ZXJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODlDQThFO1xyXG59XHJcbi5idG5FZGl0U3BhY2U6aG92ZXJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwQUNDRjsgXHJcbn1cclxuXHJcbi5ib3RvbkYxe1xyXG4gICAgd2lkdGg6NjBweDtcclxuICAgIGhlaWdodDo2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMDAlO1xyXG4gICAgYmFja2dyb3VuZDojMkYyRDQ2O1xyXG4gICAgbGVmdDowO1xyXG4gICAgYm90dG9tOjIwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICBjb2xvcjojRkZGO1xyXG4gICAgZm9udC1zaXplOjM2cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XHJcbiAgICB0cmFuc2l0aW9uOi4zczsgIFxyXG4gIH1cclxuICBzcGFue1xyXG4gICAgdHJhbnNpdGlvbjouNXM7ICBcclxuICB9XHJcbiAgLmJvdG9uRjE6aG92ZXIgc3BhbntcclxuICAgIHRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbiAgLmJvdG9uRjE6YWN0aXZle1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMSk7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLXNlbGVjdDpkaXNhYmxlZCB7XHJcbiAgICBjb2xvcjogIzAwMDkxMCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/administration/space/space.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/administration/space/space.component.ts ***!
    \********************************************************************/

  /*! exports provided: SpaceComponent */

  /***/
  function srcAppComponentsAdministrationSpaceSpaceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpaceComponent", function () {
      return SpaceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_service_space_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/service-space.service */
    "./src/app/services/service-space.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var src_app_services_service_zone_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/service-zone.service */
    "./src/app/services/service-zone.service.ts");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");

    var SpaceComponent = /*#__PURE__*/function () {
      function SpaceComponent(user, space, _zone) {
        _classCallCheck(this, SpaceComponent);

        this.user = user;
        this.space = space;
        this._zone = _zone; //modelo zona

        this.formZone = {
          id_zone: null,
          name: null,
          paking_lot: null
        }; //modelo espacio

        this.addFormSpace = {
          id_space: null,
          name: null,
          type: null,
          state: null,
          user: null,
          zone: this.formZone
        }; //modelo espacio

        this.editFormSpace = {
          id_space: null,
          name: null,
          type: null,
          state: null,
          user: null,
          zone: this.formZone
        };
        this.nullSpace = {
          id_space: null,
          name: null,
          type: null,
          state: null,
          user: null,
          zone: this.formZone
        };
        this.filterSpace = '';
        this.spaces = [];
        this.users = [];
        this.filterUser = "";
      }

      _createClass(SpaceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          this.user.getAll().subscribe(function (data) {
            _this20.users = data;
          });
          this.listSpace();
          this.ListZone();
        }
      }, {
        key: "searchUser",
        value: function searchUser() {}
      }, {
        key: "listSpace",
        value: function listSpace() {
          var _this21 = this;

          this.zoneToken = JSON.parse(localStorage.getItem('zone'));
          this.addFormSpace.zone.id_zone = this.zoneToken.id_zone;
          this.space.listSpaces(this.zoneToken.id_zone).subscribe(function (data) {
            _this21.spaces = data;
          }, function (error) {});
        }
      }, {
        key: "ListSpaceInZone",
        value: function ListSpaceInZone(spaces) {
          //this.spaces = spaces;
          var i = localStorage.getItem('zone');
          var o = JSON.parse(i);
          this.addFormSpace.zone.id_zone = o.id_zone;

          for (var n = 0; n < spaces.length; n++) {
            if (spaces[n].zone.id_zone == o.id_zone) {
              this.spaces.push(spaces[n]);
            }
          }
        }
      }, {
        key: "ListZone",
        value: function ListZone() {
          var _this22 = this;

          this._zone.listZone().subscribe(function (data) {
            _this22.zones = data;
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this23 = this;

          if (this.addFormSpace.state == 'Available') {
            this.addFormSpace.state = 0;
          } else if (this.addFormSpace.state == 'Occupied') {
            this.addFormSpace.state = 1;
          }

          if (this.addFormSpace.user == "") {
            this.addFormSpace.user = null;
          }

          console.log(this.addFormSpace);
          this.space.addSpace(this.addFormSpace).subscribe(function (data) {
            _this23.nullSpace = data;

            if (_this23.nullSpace.name == null) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'A space with the name ' + _this23.addFormSpace.name + ' has already been registered for this zone!',
                confirmButtonColor: '#EF4023'
              });
            } else {
              _this23.responseSuccess(data);

              jquery__WEBPACK_IMPORTED_MODULE_5__("#closeModal6").click();
              _this23.addFormSpace.name = null, _this23.addFormSpace.type = null, _this23.addFormSpace.state = null, _this23.addFormSpace.user = null, _this23.addFormSpace.zone.id_zone = null;
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                type: 'success',
                title: 'The Space has been saved',
                showConfirmButton: false,
                timer: 1500
              });

              _this23.ngOnInit();
            }
          }, function (error) {
            return _this23.responseError(error);
          });
        }
      }, {
        key: "deleteSpace",
        value: function deleteSpace(_formSpace) {
          var _this24 = this;

          var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
            customClass: {
              cancelButton: 'btn btn-secondary'
            },
            buttonsStyling: false
          });
          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Are you sure delete?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#EF4023',
            confirmButtonText: 'Yes, delete it!',
            reverseButtons: true
          }).then(function (result) {
            if (result.value) {
              _this24.space.deleteSpace(_formSpace).subscribe(function (data) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Deleted!', 'The Space has been deleted.', 'success');

                _this24.ngOnInit();
              });
            }
          });
        }
      }, {
        key: "deleteAll",
        value: function deleteAll() {
          var _this25 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Are you sure to delete all?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#EF4023',
            confirmButtonText: 'Yes, delete it!',
            reverseButtons: true
          }).then(function (result) {
            if (result.value) {
              _this25.space.deleteAllZoneSpaces(_this25.zoneToken.id_zone).subscribe(function (data) {}, function (error) {});

              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Deleted!', 'All spaces have been removed.', 'success');

              _this25.ngOnInit();
            }
          });
        }
      }, {
        key: "editSpaceForm",
        value: function editSpaceForm() {
          var _this26 = this;

          if (this.editFormSpace.state === 'Occupied') {
            this.editFormSpace.state = true;
          } else {
            this.editFormSpace.state = false;
          }

          var i = localStorage.getItem('zone');
          var o = JSON.parse(i);
          this.editFormSpace.zone.id_zone = o.id_zone;

          if (this.editFormSpace.user == "") {
            this.editFormSpace.user = null;
          }

          this.space.editSpace(this.editFormSpace.id_space, this.editFormSpace).subscribe(function (data) {
            jquery__WEBPACK_IMPORTED_MODULE_5__("#closeModal7").click();
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
              type: 'success',
              title: 'The parking lot has been updated',
              showConfirmButton: false,
              timer: 1500
            });

            _this26.listSpace();
          }, function (error) {});
        }
      }, {
        key: "reloadTable",
        value: function reloadTable(data) {
          this.ngOnInit();
        }
      }, {
        key: "dataSpaceFormEdit",
        value: function dataSpaceFormEdit(_spaceAux) {
          if (_spaceAux.state) {
            this.editFormSpace.state = 'Occupied';
          } else {
            this.editFormSpace.state = 'Available';
          }

          this.editFormSpace.id_space = _spaceAux.id_space;
          this.editFormSpace.name = _spaceAux.name;
          this.editFormSpace.type = _spaceAux.type;
          this.editFormSpace.user = _spaceAux.user;
          this.editFormSpace.zone = _spaceAux.zone;
        }
      }, {
        key: "responseSuccess",
        value: function responseSuccess(data) {
          this.success = data.data;
          this.status = "success";
        }
      }, {
        key: "responseError",
        value: function responseError(error) {
          this.error = error.error.error;
          this.status = "error";
        }
      }]);

      return SpaceComponent;
    }();

    SpaceComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: src_app_services_service_space_service__WEBPACK_IMPORTED_MODULE_2__["ServiceSpaceService"]
      }, {
        type: src_app_services_service_zone_service__WEBPACK_IMPORTED_MODULE_4__["ServiceZoneService"]
      }];
    };

    SpaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-space',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./space.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/administration/space/space.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./space.component.css */
      "./src/app/components/administration/space/space.component.css"))["default"]]
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SpaceComponent);
    /***/
  },

  /***/
  "./src/app/components/administration/users/users.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/components/administration/users/users.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdministrationUsersUsersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5pc3RyYXRpb24vdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/administration/users/users.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/administration/users/users.component.ts ***!
    \********************************************************************/

  /*! exports provided: UsersComponent */

  /***/
  function srcAppComponentsAdministrationUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);

    var UsersComponent = /*#__PURE__*/function () {
      function UsersComponent(user) {
        _classCallCheck(this, UsersComponent);

        this.user = user;
        this.filterUser = "";
        this.users = [];
      }

      _createClass(UsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this27 = this;

          this.user.getAll().subscribe(function (data) {
            _this27.users = data;
          });
        }
      }, {
        key: "admin",
        value: function admin(u) {
          var _this28 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Are you sure?',
            text: "You will grant administrator privileges to this user !!!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#EF4023',
            confirmButtonText: 'Yes, grant privileges!',
            reverseButtons: true
          }).then(function (result) {
            if (result.value) {
              u.role = !u.role;

              _this28.user.modify(u).subscribe(function (data) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Success!', 'Privileges were granted', 'success');
              }, function (error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Error!', 'No privileges were granted - Contact application administrator', 'error');
              });
            }
          });
        }
      }, {
        key: "regular",
        value: function regular(u) {
          var _this29 = this;

          this.user.loadImg().subscribe(function (data) {
            _this29.filter(u, data);
          }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Error!', 'Error: Contact application administrator', 'error');
          });
        }
      }, {
        key: "filter",
        value: function filter(u, data) {
          var _this30 = this;

          if (data.email == u.email) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Error!', 'To make sure there is always an administrator, you cannot delete yourself, ask a fellow administrator to eliminate your privileges', 'error');
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
              title: 'Are you sure?',
              text: "You will remove administrator privileges from this user !!",
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#EF4023',
              confirmButtonText: 'Yes, remove privileges!',
              reverseButtons: true
            }).then(function (result) {
              if (result.value) {
                u.role = !u.role;

                _this30.user.modify(u).subscribe(function (data) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Success!', 'Privileges removed', 'success');
                }, function (error) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Error!', 'Could not remove privileges, contact application administrator', 'error');
                });
              }
            });
          }
        }
      }]);

      return UsersComponent;
    }();

    UsersComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-users',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/administration/users/users.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./users.component.css */
      "./src/app/components/administration/users/users.component.css"))["default"]]
    })], UsersComponent);
    /***/
  },

  /***/
  "./src/app/components/administration/zone/zone.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/components/administration/zone/zone.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdministrationZoneZoneComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btnAddZone{\r\n    background-color: #fff;\r\n    color: #89CA8E;\r\n    border-color: #89CA8E;\r\n    \r\n}\r\n.btnEditZone{\r\n\tbackground-color: #fff;\r\n    color: #00ACCF;\r\n    border-color: #00ACCF;\r\n}\r\n.btnAddZone:hover{\r\n    color: white;\r\n    background-color: #89CA8E;\r\n}\r\n.btnEditZone:hover{\r\n    color: white;\r\n\tbackground-color: #00ACCF; \r\n}\r\n.botonF1{\r\n    width:60px;\r\n    height:60px;\r\n    border-radius:100%;\r\n    background:#2F2D46;\r\n    left:0;\r\n    bottom:20;\r\n    position: absolute;\r\n    margin-left: 16px;\r\n    margin-top: 40px;\r\n    border:none;\r\n    outline:none;\r\n    color:#FFF;\r\n    font-size:36px;\r\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n    transition:.3s;  \r\n  }\r\nspan{\r\n    transition:.5s;  \r\n  }\r\n.botonF1:hover span{\r\n    transform:rotate(360deg);\r\n  }\r\n.botonF1:active{\r\n    transform:scale(1.1);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbmlzdHJhdGlvbi96b25lL3pvbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QscUJBQXFCOztBQUV6QjtBQUNBO0NBQ0Msc0JBQXNCO0lBQ25CLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFlBQVk7Q0FDZix5QkFBeUI7QUFDMUI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLGNBQWM7SUFDZCxrRUFBa0U7SUFDbEUsY0FBYztFQUNoQjtBQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0E7SUFDRSxvQkFBb0I7RUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluaXN0cmF0aW9uL3pvbmUvem9uZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bkFkZFpvbmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6ICM4OUNBOEU7XHJcbiAgICBib3JkZXItY29sb3I6ICM4OUNBOEU7XHJcbiAgICBcclxufVxyXG4uYnRuRWRpdFpvbmV7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGNvbG9yOiAjMDBBQ0NGO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDBBQ0NGO1xyXG59XHJcblxyXG4uYnRuQWRkWm9uZTpob3ZlcntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4OUNBOEU7XHJcbn1cclxuLmJ0bkVkaXRab25lOmhvdmVye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMEFDQ0Y7IFxyXG59XHJcbi5ib3RvbkYxe1xyXG4gICAgd2lkdGg6NjBweDtcclxuICAgIGhlaWdodDo2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMDAlO1xyXG4gICAgYmFja2dyb3VuZDojMkYyRDQ2O1xyXG4gICAgbGVmdDowO1xyXG4gICAgYm90dG9tOjIwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICBjb2xvcjojRkZGO1xyXG4gICAgZm9udC1zaXplOjM2cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XHJcbiAgICB0cmFuc2l0aW9uOi4zczsgIFxyXG4gIH1cclxuICBzcGFue1xyXG4gICAgdHJhbnNpdGlvbjouNXM7ICBcclxuICB9XHJcbiAgLmJvdG9uRjE6aG92ZXIgc3BhbntcclxuICAgIHRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbiAgLmJvdG9uRjE6YWN0aXZle1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMSk7XHJcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/administration/zone/zone.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/administration/zone/zone.component.ts ***!
    \******************************************************************/

  /*! exports provided: ZoneComponent */

  /***/
  function srcAppComponentsAdministrationZoneZoneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZoneComponent", function () {
      return ZoneComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_service_zone_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/service-zone.service */
    "./src/app/services/service-zone.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var src_app_services_service_parking_lot_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/service-parking-lot.service */
    "./src/app/services/service-parking-lot.service.ts");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _space_space_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../space/space.component */
    "./src/app/components/administration/space/space.component.ts");

    var ZoneComponent = /*#__PURE__*/function () {
      function ZoneComponent(_zone, parking_lot, space) {
        _classCallCheck(this, ZoneComponent);

        this._zone = _zone;
        this.parking_lot = parking_lot;
        this.space = space;
        this.formParkingLot = {
          id_parking_lot: null,
          name: null,
          headquarter: null
        };
        this.addFormZone = {
          id_zone: null,
          name: null,
          parking_lot: this.formParkingLot,
          quantity: null,
          start: null
        };
        this.editFormZone = {
          id_zone: null,
          name: null,
          parking_lot: this.formParkingLot,
          quantity: null,
          start: null
        };
        this.nullZone = {
          id_zone: null,
          name: null,
          parking_lot: this.formParkingLot,
          quantity: null,
          start: null
        };
        this.filterZone = "";
      }

      _createClass(ZoneComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.addFormZone.name = null;
          this.addFormZone.parking_lot.id_parking_lot = null;
          this.addFormZone.quantity = null;
          this.addFormZone.start = null;
          this.ListZone();
          this.ListParkingLot();
        }
      }, {
        key: "ListZone",
        value: function ListZone() {
          var _this31 = this;

          this._zone.listZone().subscribe(function (data) {
            _this31.zones = data;
          });
        }
      }, {
        key: "ListParkingLot",
        value: function ListParkingLot() {
          var _this32 = this;

          this.parking_lot.listParkingLot().subscribe(function (data) {
            _this32.parkings = data;
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this33 = this;

          if (this.addFormZone.quantity <= 100 && this.addFormZone.start <= 999) {
            this._zone.addZone(this.addFormZone).subscribe(function (data) {
              _this33.nullZone = data;

              if (_this33.nullZone.name == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                  type: 'error',
                  title: 'Oops...',
                  text: 'A zone with the name "' + _this33.addFormZone.name + '" has already been registered for the selected parking lot!',
                  confirmButtonColor: '#EF4023'
                });
              } else {
                _this33.responseSuccess(data);

                _this33.addFormZone.name = null;
                _this33.addFormZone.parking_lot.id_parking_lot = null;
                _this33.addFormZone.quantity = null;
                _this33.addFormZone.start = null;
                jquery__WEBPACK_IMPORTED_MODULE_5__("#closeModal5").click();
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                  type: 'success',
                  title: 'The Zone has been saved',
                  showConfirmButton: false,
                  timer: 1500
                });

                _this33.ngOnInit();
              }
            }, function (error) {
              return _this33.responseError(error);
            });
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
              type: 'error',
              title: 'The quality cannot exceed 100 or the start space cannot exceed 999',
              showConfirmButton: false,
              timer: 1500
            });
          }
        }
      }, {
        key: "delete",
        value: function _delete(_formZone) {
          var _this34 = this;

          var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
            customClass: {
              cancelButton: 'btn btn-secondary'
            },
            buttonsStyling: false
          });
          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Are you sure?',
            text: "You will not be able to reverse this! It permanently removes all parking associated with the parking area!!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#EF4023',
            confirmButtonText: 'Yes, delete it!',
            reverseButtons: true
          }).then(function (result) {
            if (result.value) {
              _this34._zone.deleteZone(_formZone).subscribe(function (data) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Deleted!', 'Your zone has been deleted.', 'success');

                _this34.ngOnInit();
              });
            }
          });
        }
      }, {
        key: "editZone",
        value: function editZone() {
          var _this35 = this;

          this._zone.editZone(this.editFormZone.id_zone, this.editFormZone).subscribe(function (data) {
            jquery__WEBPACK_IMPORTED_MODULE_5__("#closeModal4").click();
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
              type: 'success',
              title: 'The zone has been updated',
              showConfirmButton: false,
              timer: 1500
            });

            _this35.ngOnInit();
          }, function (error) {});
        }
      }, {
        key: "dataZoneFormEdit",
        value: function dataZoneFormEdit(_zoneAux) {
          this.editFormZone.id_zone = _zoneAux.id_zone;
          this.editFormZone.name = _zoneAux.name;
          this.editFormZone.parking_lot = _zoneAux.parking_lot;
          this.editFormZone.quantity = _zoneAux.quantity;
          this.editFormZone.start = _zoneAux.start;
        }
      }, {
        key: "responseSuccess",
        value: function responseSuccess(data) {
          this.success = data.data;
          this.status = "success";
        }
      }, {
        key: "responseError",
        value: function responseError(error) {
          this.error = error.error.error;
          this.status = "error";
        }
      }, {
        key: "spaces",
        value: function spaces(zone) {
          localStorage.setItem('zone', JSON.stringify(zone));
        }
      }]);

      return ZoneComponent;
    }();

    ZoneComponent.ctorParameters = function () {
      return [{
        type: src_app_services_service_zone_service__WEBPACK_IMPORTED_MODULE_2__["ServiceZoneService"]
      }, {
        type: src_app_services_service_parking_lot_service__WEBPACK_IMPORTED_MODULE_4__["ServiceParkingLotService"]
      }, {
        type: _space_space_component__WEBPACK_IMPORTED_MODULE_6__["SpaceComponent"]
      }];
    };

    ZoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-zone',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./zone.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/administration/zone/zone.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./zone.component.css */
      "./src/app/components/administration/zone/zone.component.css"))["default"]]
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ZoneComponent);
    /***/
  },

  /***/
  "./src/app/components/dashboard/dashboard.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/components/dashboard/dashboard.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".botonF1{\r\n    width:60px;\r\n    height:60px;\r\n    border-radius:100%;\r\n    background:#2F2D46;\r\n    left:0;\r\n    bottom:20;\r\n    position: absolute;\r\n    margin-left: 16px;\r\n    margin-top: 40px;\r\n    border:none;\r\n    outline:none;\r\n    color:#FFF;\r\n    font-size:36px;\r\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n    transition:.3s;  \r\n  }\r\n  span{\r\n    transition:.5s;  \r\n  }\r\n  .botonF1:hover span{\r\n    transform:rotate(360deg);\r\n  }\r\n  .botonF1:active{\r\n    transform:scale(1.1);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7SUFDVixjQUFjO0lBQ2Qsa0VBQWtFO0lBQ2xFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90b25GMXtcclxuICAgIHdpZHRoOjYwcHg7XHJcbiAgICBoZWlnaHQ6NjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6MTAwJTtcclxuICAgIGJhY2tncm91bmQ6IzJGMkQ0NjtcclxuICAgIGxlZnQ6MDtcclxuICAgIGJvdHRvbToyMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgb3V0bGluZTpub25lO1xyXG4gICAgY29sb3I6I0ZGRjtcclxuICAgIGZvbnQtc2l6ZTozNnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xyXG4gICAgdHJhbnNpdGlvbjouM3M7ICBcclxuICB9XHJcbiAgc3BhbntcclxuICAgIHRyYW5zaXRpb246LjVzOyAgXHJcbiAgfVxyXG4gIC5ib3RvbkYxOmhvdmVyIHNwYW57XHJcbiAgICB0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG4gIC5ib3RvbkYxOmFjdGl2ZXtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjEpO1xyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/dashboard/dashboard.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/dashboard/dashboard.component.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppComponentsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_service_parking_lot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/service-parking-lot.service */
    "./src/app/services/service-parking-lot.service.ts");
    /* harmony import */


    var src_app_services_service_headquarter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/service-headquarter.service */
    "./src/app/services/service-headquarter.service.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var src_app_services_service_zone_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/service-zone.service */
    "./src/app/services/service-zone.service.ts");
    /* harmony import */


    var src_app_services_vehicle_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/vehicle-service.service */
    "./src/app/services/vehicle-service.service.ts");
    /* harmony import */


    var src_app_services_dashboard_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/services/dashboard-service.service */
    "./src/app/services/dashboard-service.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var moment_recur_ts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! moment-recur-ts */
    "./node_modules/moment-recur-ts/dist/moment-recur-ts.js");
    /* harmony import */


    var moment_recur_ts__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment_recur_ts__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */


    var src_app_services_service_space_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/app/services/service-space.service */
    "./src/app/services/service-space.service.ts");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */


    var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! src/app/services/notifications.service */
    "./src/app/services/notifications.service.ts");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(user, router, auth, _parking, _headquarter, _zone, config, _vehicle, datepipe, _dashboard, space, emails, calendarService) {
        _classCallCheck(this, DashboardComponent);

        this.user = user;
        this.router = router;
        this.auth = auth;
        this._parking = _parking;
        this._headquarter = _headquarter;
        this._zone = _zone;
        this.config = config;
        this._vehicle = _vehicle;
        this.datepipe = datepipe;
        this._dashboard = _dashboard;
        this.space = space;
        this.emails = emails;
        this.calendarService = calendarService;
        this.headquarters = [];
        this.dashboards = [];
        this.formAddReserve = {
          id_reservation: null,
          created_at: null,
          user: {
            id: null
          },
          vehicle: {
            increment: null
          }
        };
        this.formAddDetail = {
          id_reserve_detail: null,
          date: null,
          start_time: null,
          end_time: null,
          reserve_state: null,
          end_date_extend: null,
          space: null,
          reserve: this.formAddReserve
        };
        this.formReserve = {
          parking_lot_id: null,
          parking: null,
          zone: null
        };
        this.dashboardForm = {
          reserveDate: null
        };
        this.extendReserveForm = {
          extendReserveDate: null
        };
        this.spaceModel = {
          id_space: null,
          name: null,
          type: null,
          user: null,
          state: null,
          zone: null
        };
        this.hqModel = {
          id_headquarter: null,
          name: null,
          country: null,
          city: null
        };
        this.userInf = {
          id: null,
          name: null,
          imageUrl: null,
          headquarter: this.hqModel
        };
        this.parkingLotModel = {
          id_parking_lot: null,
          name: null,
          headquarter: this.hqModel
        };
        this.zoneModel = {
          id_zone: null,
          name: null,
          parking_lot: this.parkingLotModel,
          quantity: null,
          start: null
        };
        this.spacesContainer = [];
        this.spaceRange = [];
        this.selectableRange = [];
        this.displayRangeModel = {
          begin: null,
          options: []
        };
        this.minDate2 = null;
        this.maxDate2 = null;
        this.hide = false;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this36 = this;

          this.user.loadImg().subscribe(function (data) {
            _this36.loadUser(data);

            _this36.listVehicles();
          }); //this.listHeadquarters();
          //this.listParkings();
          //this.listZones();

          this.dashboardCalendarDates();
        }
      }, {
        key: "dashboardCalendarDates",
        value: function dashboardCalendarDates() {
          var now = new Date();
          var since = moment__WEBPACK_IMPORTED_MODULE_13__().add(30, 'd').toDate();
          this.minDate = {
            year: now.getFullYear(),
            month: now.getMonth() + 1,
            day: now.getDate()
          };
          console.log(this.minDate);
          this.maxDate = {
            year: since.getFullYear(),
            month: since.getMonth() + 1,
            day: since.getDate()
          };
        }
      }, {
        key: "calendarDates",
        value: function calendarDates() {
          var _this37 = this;

          var since2 = moment__WEBPACK_IMPORTED_MODULE_13__().add(2, 'd').recur().every(7).days(); //console.log(this.dashboardForm.reserveDate)

          var fecha = this.dashboardForm.reserveDate.month + '/' + this.dashboardForm.reserveDate.day + '/' + this.dashboardForm.reserveDate.year; //let fecha3 = this.dashboardForm.reserveDate.month + 1 + '/' + this.dashboardForm.reserveDate.day + 28 + '/' + this.dashboardForm.reserveDate.year;
          //console.log(fecha3)
          // let fecha2= "06/04/2020";
          // let since3 = moment().recur(fecha,fecha2).every(7).days();
          // let allDates = since3.all("L");
          // console.log(allDates)

          var since = moment__WEBPACK_IMPORTED_MODULE_13__().add(30, 'd').toDate();
          var now = moment__WEBPACK_IMPORTED_MODULE_13__().toDate();
          var number = this.dashboardForm.reserveDate.day; //console.log(number)

          this.minDate2 = {
            year: now.getFullYear(),
            month: now.getMonth() + 1,
            day: number
          };
          this.maxDate2 = {
            year: since.getFullYear(),
            month: since.getMonth() + 1,
            day: since.getDate()
          };
          var selectedDate = new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDate"](this.arrayAux[0], this.arrayAux[1], this.arrayAux[2]); //console.log("jinx",this.arrayAux);
          //console.log("jajaj",this.dashboardForm.reserveDate);
          //console.log("aquiii",selectedDate);

          this.isDisabled = function (date, current) {
            return _this37.calendarService.getWeekday(selectedDate) != _this37.calendarService.getWeekday(date);
          };
        }
      }, {
        key: "listSpaces",
        value: function listSpaces() {
          var _this38 = this;

          this.space.listSpaces(this.zoneModel.id_zone).subscribe(function (data) {
            _this38.spaces = data;
          }, function (error) {});
        }
      }, {
        key: "listHeadquarters",
        value: function listHeadquarters() {
          var _this39 = this;

          this.headquarters = [];

          this._headquarter.listHeadquarter().subscribe(function (data) {
            var hqs = data;

            if (_this39.userInf.headquarter != null) {
              //console.log("jiji");
              _this39.headquarters.push(_this39.userInf.headquarter);

              var _iterator = _createForOfIteratorHelper(hqs),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var hq = _step.value;

                  if (hq.id_headquarter != _this39.userInf.headquarter.id_headquarter) {
                    _this39.headquarters.push(hq);
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            } else {
              _this39.headquarters = hqs;
            }

            _this39.hqModel = _this39.headquarters[0];

            _this39.listParkings(_this39.hqModel); //console.log(this.headquarters);        

          }, function (error) {//console.log(error);
          });
        }
      }, {
        key: "listParkings",
        value: function listParkings(headquarter) {
          var _this40 = this;

          this._parking.listParkingLotHQ(headquarter.id_headquarter).subscribe(function (data) {
            console.log(data);
            _this40.parkings = data;
            _this40.parkingLotModel = _this40.parkings[0];

            _this40.listZones(_this40.parkingLotModel);
          }, function (error) {//console.log(error);
          });
        }
      }, {
        key: "listZones",
        value: function listZones(parking_lot) {
          var _this41 = this;

          this._zone.listZoneByPKLot(parking_lot.id_parking_lot).subscribe(function (data) {
            //console.log("data",data);
            _this41.zones = data;
            _this41.zoneModel = _this41.zones[0];
          }, function (error) {//console.log("error",error);
          });
        }
      }, {
        key: "listVehicles",
        value: function listVehicles() {
          var _this42 = this;

          this._vehicle.listVehicle(this.userInf.id).subscribe(function (data) {
            _this42.vehicles = data;
          }, function (error) {});
        }
      }, {
        key: "loadUser",
        value: function loadUser(data) {
          this.userInf = data;
          this.userNotifications = data;
          this.userInf.id = data.id;
          this.u = data;
          this.img = data.imageUrl;

          if (data.headquarter == null) {
            this.userInf.headquarter = null;
          } else {
            this.userInf.headquarter = data.headquarter; //this.current = data.headquarter.name;
          }

          this.listHeadquarters();
        }
      }, {
        key: "dataSpace",
        value: function dataSpace(space) {
          this.end_time = null;
          this.start_time = null;
          this.spaceRange = [];
          this.spaceModel.id_space = space.id_space;
          this.spaceModel.name = space.name;
          this.spaceModel.type = space.type;
          this.spaceModel.user = space.user;
          this.spaceModel.state = space.state;
          this.spaceModel.zone = space.zone;

          var _iterator2 = _createForOfIteratorHelper(space.range),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var range = _step2.value;

              for (var i = range[0][0]; i < range[0][1]; i++) {
                var displayRange = {
                  begin: null,
                  options: []
                };
                displayRange.begin = i;

                for (var j = i + 1; j <= range[0][1]; j++) {
                  displayRange.options.push(j);
                }

                this.spaceRange.push(displayRange);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          this.formAddDetail.space = this.spaceModel;
        }
      }, {
        key: "setStartTime",
        value: function setStartTime(spaceRange) {
          // this.formAddDetail.start_time = spaceRange.begin + ":00:00";
          if (spaceRange.begin < 10) {
            this.formAddDetail.start_time = "0" + spaceRange.begin + ":00:00";
          } else {
            this.formAddDetail.start_time = spaceRange.begin + ":00:00";
          }

          this.selectableRange = spaceRange.options;
        }
      }, {
        key: "setEndTime",
        value: function setEndTime(endTime) {
          if (endTime < 10) {
            this.formAddDetail.end_time = "0" + endTime + ":00:00";
          } else {
            this.formAddDetail.end_time = endTime + ":00:00";
          }
        }
      }, {
        key: "responseSuccess",
        value: function responseSuccess(data) {
          this.success = data.data;
          this.status = "success";
        }
      }, {
        key: "responseError",
        value: function responseError(error) {
          this.error = error.error.error;
          this.status = "error";
        }
      }, {
        key: "dataReserve",
        value: function dataReserve(object, value) {
          if (object == this.hqModel) {} else if (object == this.parkingLotModel) {} else if (object == this.zoneModel) {}
        }
      }, {
        key: "dataCalendar",
        value: function dataCalendar() {
          //console.log("dataCalendar",this.dashboardForm.reserveDate)
          if (this.dashboardForm.reserveDate != null) {
            this.arrayAux = [this.dashboardForm.reserveDate.year, parseInt(this.dashboardForm.reserveDate.month), this.dashboardForm.reserveDate.day]; //fecha inicial para calcular extendida

            var monthWithoutCero = this.dashboardForm.reserveDate.month; // mes sin el 0(mes: 4,5,6)

            var monthWithCero = '0' + this.dashboardForm.reserveDate.month; // mes con el 0(mes: 04,05,06)

            var dayWithoutCero = this.dashboardForm.reserveDate.day; // mes sin el 0(mes: 4,5,6)

            var dayWithCero = '0' + this.dashboardForm.reserveDate.day; // mes con el 0(mes: 04,05,06)

            this.calendarModel = this.dashboardForm.reserveDate.year + '-';

            if (monthWithoutCero[0] != monthWithCero[1] && this.dashboardForm.reserveDate.month < 10) {
              //this.dashboardForm.reserveDate.month = '0' + this.dashboardForm.reserveDate.month;
              this.calendarModel = this.calendarModel + '0' + this.dashboardForm.reserveDate.month + '-';
            } else {
              this.calendarModel = this.calendarModel + this.dashboardForm.reserveDate.month + '-';
            }

            if (dayWithoutCero[0] != dayWithCero[1] && this.dashboardForm.reserveDate.day < 10) {
              //this.dashboardForm.reserveDate.day = '0' + this.dashboardForm.reserveDate.day;
              this.calendarModel = this.calendarModel + '0' + this.dashboardForm.reserveDate.day;
            } else {
              this.calendarModel = this.calendarModel + this.dashboardForm.reserveDate.day;
            } //this.calendarModel = this.dashboardForm.reserveDate.year + '-' + this.dashboardForm.reserveDate.month + '-' + this.dashboardForm.reserveDate.day; // al modelo del calendario para el formulario le asignamos la fecha del dashboard
            //console.log(this.calendarModel)

          }

          this.calendarDates(); //limitar calendario de extendida
        }
      }, {
        key: "dataCalendarExtend",
        value: function dataCalendarExtend() {
          //console.log(this.extendReserveForm.extendReserveDate)
          if (this.extendReserveForm.extendReserveDate != null) {
            var monthWithoutCero = this.extendReserveForm.extendReserveDate.month; // mes sin el 0(mes: 4,5,6)

            var monthWithCero = '0' + this.extendReserveForm.extendReserveDate.month; // mes con el 0(mes: 04,05,06)

            var dayWithoutCero = this.extendReserveForm.extendReserveDate.day; // mes sin el 0(mes: 4,5,6)

            var dayWithCero = '0' + this.extendReserveForm.extendReserveDate.day; // mes con el 0(mes: 04,05,06)

            if (monthWithoutCero[0] != monthWithCero[1] && this.extendReserveForm.extendReserveDate.month < 10) {
              this.extendReserveForm.extendReserveDate.month = '0' + this.extendReserveForm.extendReserveDate.month;
            }

            if (dayWithoutCero[0] != dayWithCero[1] && this.extendReserveForm.extendReserveDate.day < 10) {
              this.extendReserveForm.extendReserveDate.day = '0' + this.extendReserveForm.extendReserveDate.day;
            }

            this.calendarModelExtend = this.extendReserveForm.extendReserveDate.year + '-' + this.extendReserveForm.extendReserveDate.month + '-' + this.extendReserveForm.extendReserveDate.day; // al modelo del calendario para el formulario le asignamos la fecha del dashboard

            console.log(this.calendarModelExtend);
          }
        }
      }, {
        key: "loadAvailableTimes",
        value: function loadAvailableTimes() {
          var _this43 = this;

          var zone = this.zoneModel.id_zone;

          if (zone != null && this.dashboardForm.reserveDate != null) {
            this.hide = true;
            this.dataCalendar();
            this.listSpaces();

            this._dashboard.listTimes(zone, this.calendarModel).subscribe(function (data) {
              _this43.spacesContainer = [];
              var keysArray = Object.keys(data);

              var _loop = function _loop() {
                var space = _keysArray[_i];

                var tempSpace = _this43.spaces.find(function (element) {
                  return element.id_space == space;
                });

                var contenedor = [];
                var espacio = {
                  id_space: null,
                  name: tempSpace.name,
                  state: tempSpace.state,
                  type: tempSpace.type,
                  user: tempSpace.user,
                  zone: tempSpace.zone,
                  range: null
                };
                espacio.id_space = space;
                var ranges = data[space];

                var _iterator3 = _createForOfIteratorHelper(ranges),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var range = _step3.value;
                    var rangeS = {
                      begin: null,
                      end: null
                    };
                    rangeS.begin = range[0][0];
                    rangeS.end = range[0][1];
                    contenedor.push(range);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }

                espacio.range = contenedor;

                _this43.spacesContainer.push(espacio);
              };

              for (var _i = 0, _keysArray = keysArray; _i < _keysArray.length; _i++) {
                _loop();
              }
              /*for(let cc of this.spacesContainer){
               
              }  */

            }, function (error) {});
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
              type: 'error',
              title: 'Oops...',
              text: 'No reservation will be shown until you filter the fields to show',
              confirmButtonColor: '#EF4023'
            });
          }
        }
      }, {
        key: "addReserve",
        value: function addReserve() {
          var _this44 = this;

          if (this.formAddDetail.start_time == null || this.formAddDetail.end_time == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
              type: 'error',
              title: 'Oops...',
              text: 'Start time and end time are required!',
              confirmButtonColor: '#EF4023'
            });
          } else {
            var date = new Date();
            var month;
            month = date.getMonth() + 1; //agarra un mes menos? 

            var formattedDate;

            if (month < 10) {
              if (date.getDate() < 10) {
                formattedDate = date.getFullYear() + "-0" + month + "-0" + date.getDate();
              } else {
                formattedDate = date.getFullYear() + "-0" + month + "-" + date.getDate();
              }
            } else {
              if (date.getDate() < 10) {
                formattedDate = date.getFullYear() + "-" + month + "-0" + date.getDate();
              } else {
                formattedDate = date.getFullYear() + "-" + month + "-" + date.getDate();
              }
            }

            this.formAddDetail.date = this.calendarModel;
            this.formAddDetail.reserve_state = 0;
            this.formAddReserve.user.id = this.userInf.id;
            this.formAddReserve.created_at = formattedDate;
            this.formAddDetail.end_date_extend = this.calendarModelExtend;
            console.log("aqui--", this.formAddDetail.start_time);

            if (this.formAddDetail.end_date_extend == null) {
              this._dashboard.createReserve(this.formAddReserve.created_at, this.formAddReserve.user.id, this.formAddReserve.vehicle.increment, this.formAddDetail).subscribe(function (data) {
                var response = data;

                if (response.id_reserve_detail != null) {
                  jquery__WEBPACK_IMPORTED_MODULE_16__("#closeReserveModal").click();
                  sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    type: 'success',
                    title: 'Your reservation has been saved!',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  var email = {
                    id: null,
                    to: _this44.userNotifications.email,
                    subject: "RESERVE " + _this44.formAddDetail.date,
                    text: "Your reservation has been saved!",
                    viewed: false,
                    user_id: {
                      id: _this44.userNotifications.id
                    }
                  };

                  _this44.emails.sendEmail(email).subscribe(function (data) {});
                } else {
                  jquery__WEBPACK_IMPORTED_MODULE_16__("#closeReserveModal").click();
                  sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    type: 'error',
                    title: 'Somebody might have taken your space! Please reload.',
                    showConfirmButton: true
                  });
                }

                _this44.ngOnInit();

                _this44.loadAvailableTimes();
              }, function (error) {
                console.log(error);
              });
            } else {
              this._dashboard.createReserve2(this.formAddDetail).subscribe(function (data) {
                var response = data;
                console.log(response);
                var keys = Object.keys(response);
                console.log(keys);
                var flag = false;
                var message = "Dates";

                for (var _i2 = 0, _keys = keys; _i2 < _keys.length; _i2++) {
                  var key = _keys[_i2];

                  //response.get(key);
                  if (response[key] == false) {
                    flag = true;
                    message = message + " " + key + ",";
                  }

                  console.log(key, response[key]);
                }

                message = message + " couldn't be reserved. ";

                if (!flag) {
                  jquery__WEBPACK_IMPORTED_MODULE_16__("#closeReserveModal").click();
                  sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    type: 'success',
                    title: 'Your reservation has been saved!',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  var email = {
                    id: null,
                    to: _this44.userNotifications.email,
                    subject: "RESERVE " + _this44.formAddDetail.date,
                    text: "Your reservation has been saved!",
                    viewed: false,
                    user_id: {
                      id: _this44.userNotifications.id
                    }
                  };

                  _this44.emails.sendEmail(email).subscribe(function (data) {});
                } else {
                  jquery__WEBPACK_IMPORTED_MODULE_16__("#closeReserveModal").click();
                  sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    type: 'error',
                    title: message + 'Somebody might have taken your space! Please reload.',
                    showConfirmButton: true
                  });
                }

                _this44.extendReserveForm.extendReserveDate = null;

                _this44.ngOnInit();

                _this44.loadAvailableTimes();
              }, function (error) {
                console.log(error);
              });
            }
          }
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: src_app_services_service_parking_lot_service__WEBPACK_IMPORTED_MODULE_2__["ServiceParkingLotService"]
      }, {
        type: src_app_services_service_headquarter_service__WEBPACK_IMPORTED_MODULE_3__["ServiceHeadquarterService"]
      }, {
        type: src_app_services_service_zone_service__WEBPACK_IMPORTED_MODULE_8__["ServiceZoneService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDatepickerConfig"]
      }, {
        type: src_app_services_vehicle_service_service__WEBPACK_IMPORTED_MODULE_9__["VehicleServiceService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]
      }, {
        type: src_app_services_dashboard_service_service__WEBPACK_IMPORTED_MODULE_10__["DashboardServiceService"]
      }, {
        type: src_app_services_service_space_service__WEBPACK_IMPORTED_MODULE_15__["ServiceSpaceService"]
      }, {
        type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_17__["NotificationsService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbCalendar"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html"))["default"],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/components/dashboard/dashboard.component.css"))["default"]]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/components/error/error.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/error/error.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsErrorErrorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/error/error.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/error/error.component.ts ***!
    \*****************************************************/

  /*! exports provided: ErrorComponent */

  /***/
  function srcAppComponentsErrorErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
      return ErrorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ErrorComponent = /*#__PURE__*/function () {
      function ErrorComponent() {
        _classCallCheck(this, ErrorComponent);
      }

      _createClass(ErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorComponent;
    }();

    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-error',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./error.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/error/error.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./error.component.css */
      "./src/app/components/error/error.component.css"))["default"]]
    })], ErrorComponent);
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/footer/footer.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "._bottom {\r\n    background-color: #2F2D46;\r\n    height: 80px;\r\n}\r\n.text-center {\r\n    color: white !important;\r\n}\r\n.footer{\r\n    padding-top: 20px;\r\n}\r\n#text{\r\n    font-family: \"Open Sans\"; \r\n    font-style: normal; \r\n    font-weight: 800; \r\n}\r\n.footerColor{\r\n    background-color: #2F2D46;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5fYm90dG9tIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRjJENDY7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuLnRleHQtY2VudGVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5mb290ZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG4jdGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiOyBcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgXHJcbiAgICBmb250LXdlaWdodDogODAwOyBcclxufVxyXG5cclxuLmZvb3RlckNvbG9ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJGMkQ0NjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/components/footer/footer.component.css"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/handbook/handbook.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/handbook/handbook.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHandbookHandbookComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".botonF1{\r\n    width:60px;\r\n    height:60px;\r\n    border-radius:100%;\r\n    background:#2F2D46;\r\n    left:0;\r\n    bottom:20;\r\n    position: absolute;\r\n    margin-left: 16px;\r\n    margin-top: 40px;\r\n    border:none;\r\n    outline:none;\r\n    color:#FFF;\r\n    font-size:36px;\r\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n    transition:.3s;  \r\n  }\r\n  span{\r\n    transition:.5s;  \r\n  }\r\n  .botonF1:hover span{\r\n    transform:rotate(360deg);\r\n  }\r\n  .botonF1:active{\r\n    transform:scale(1.1);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oYW5kYm9vay9oYW5kYm9vay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsY0FBYztJQUNkLGtFQUFrRTtJQUNsRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGFuZGJvb2svaGFuZGJvb2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3RvbkYxe1xyXG4gICAgd2lkdGg6NjBweDtcclxuICAgIGhlaWdodDo2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMDAlO1xyXG4gICAgYmFja2dyb3VuZDojMkYyRDQ2O1xyXG4gICAgbGVmdDowO1xyXG4gICAgYm90dG9tOjIwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICBjb2xvcjojRkZGO1xyXG4gICAgZm9udC1zaXplOjM2cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XHJcbiAgICB0cmFuc2l0aW9uOi4zczsgIFxyXG4gIH1cclxuICBzcGFue1xyXG4gICAgdHJhbnNpdGlvbjouNXM7ICBcclxuICB9XHJcbiAgLmJvdG9uRjE6aG92ZXIgc3BhbntcclxuICAgIHRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbiAgLmJvdG9uRjE6YWN0aXZle1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMSk7XHJcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/handbook/handbook.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/handbook/handbook.component.ts ***!
    \***********************************************************/

  /*! exports provided: HandbookComponent */

  /***/
  function srcAppComponentsHandbookHandbookComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HandbookComponent", function () {
      return HandbookComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var HandbookComponent = /*#__PURE__*/function () {
      function HandbookComponent(user, auth) {
        _classCallCheck(this, HandbookComponent);

        this.user = user;
        this.auth = auth;
        this.GOOGLE_AUTH_URL = this.user.GOOGLE_AUTH_URL;
      }

      _createClass(HandbookComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this45 = this;

          jquery__WEBPACK_IMPORTED_MODULE_2__('html, body').animate({
            scrollTop: 0
          }, '300');
          this.auth.authStatus.subscribe(function (value) {
            return _this45.loggedIn = value;
          });
          this.auth.adminStatus.subscribe(function (value) {
            return _this45.type = value;
          });
        }
      }]);

      return HandbookComponent;
    }();

    HandbookComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    HandbookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-handbook',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./handbook.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/handbook/handbook.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./handbook.component.css */
      "./src/app/components/handbook/handbook.component.css"))["default"]]
    })], HandbookComponent);
    /***/
  },

  /***/
  "./src/app/components/login/login.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/login/login.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login{\r\n  background-image: url('/assets/avantica.jpg');\r\n  width: 100%;\r\n  height: 100%;\r\n  background-size: 100% 100%;\r\n  background-repeat: no-repeat;\r\n  overflow: hidden;\r\n  position: relative;\r\n  right: 0; \r\n  top: 10;\r\n  \r\n}\r\n.card{\r\n    color: white;\r\n    background: rgba(0,0,0,.8);\r\n    padding: 40px;\r\n    border-radius: 10px;\r\n    box-shadow: 0px 0px 10px 0px #000;\r\n  }\r\n.white-text{\r\n     color: white;\r\n }\r\n.btnLogin{\r\n    background-color: #fff;\r\n    color:#454685;\r\n    border-color: #454685;\r\n}\r\n.btnLogin:hover{\r\n\tcolor: white;\r\n\tbackground-color: #454685;\r\n}\r\n.menu{\r\n  \r\n  background-image: url('/assets/avantica.jpg');\r\n  background-size: 100% 100%;\r\n  background-repeat: no-repeat;\r\n  width: 101%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  position: relative;\r\n  right: 0; \r\n  top: 10;\r\n\r\n}\r\n.container\r\n{\r\n  position: relative;\r\n  max-width: 100%;\r\n  display: grid;\r\n  grid-template-columns: repeat( auto-fill , minmax(300px, 1fr) );\r\n  grid-template-rows: minmax(100px, auto);\r\n  margin: 40px;\r\n  grid-auto-flow: dense;\r\n  grid-gap: 10px;\r\n}\r\n.container .box{\r\n  background: rgba(0,0,0,.8);\r\n  padding: 20px;\r\n  display: grid;\r\n  font-size: 20px;\r\n  place-items: center;\r\n  text-align: center;\r\n  color: #fff;\r\n  transition: 0.5s;\r\n  box-shadow: 0px 0px 10px 0px #000;\r\n \r\n\r\n}\r\n.container .box:hover \r\n{\r\n  background: #2F2D46;\r\n  \r\n}\r\n.container .box img\r\n{\r\n  position: relative;\r\n  max-width: 100px;\r\n  margin-bottom: 10px;\r\n  transition: transform .5s;\r\n}\r\n.container .box:hover img\r\n{\r\n  transform: scale(1.5);\r\n}\r\n.container .box:nth-child(1)\r\n{\r\n  grid-column: span 2;\r\n  grid-row: span 1;\r\n}\r\n.container .box:nth-child(2)\r\n{\r\n  grid-column: span 1;\r\n  grid-row: span 2;\r\n}\r\n.container .box:nth-child(4)\r\n{\r\n  grid-column: span 1;\r\n  grid-row: span 2;\r\n\r\n\r\n}\r\n.container .box:nth-child(5)\r\n{\r\n  grid-column: span 3;\r\n  grid-row: span 1;\r\n\r\n}\r\n@media (max-width: 991px)\r\n{\r\n  .container\r\n  {\r\n      grid-template-columns: repeat( auto-fill , minmax(50%, 1fr) );\r\n      grid-template-rows: minmax(auto, auto);\r\n  }\r\n  .container .box\r\n  {\r\n      grid-column: unset !important;\r\n      grid-row: unset !important;\r\n  }\r\n  .row{\r\n  \r\n    background-image: url('/assets/avantica.jpg');\r\n    width: 104%;\r\n  \r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkNBQTZDO0VBQzdDLFdBQVc7RUFDWCxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixPQUFPOztBQUVUO0FBQ0E7SUFDSSxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUNBQWlDO0VBQ25DO0FBQ0Q7S0FDSSxZQUFZO0NBQ2hCO0FBQ0E7SUFDRyxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHFCQUFxQjtBQUN6QjtBQUNBO0NBQ0MsWUFBWTtDQUNaLHlCQUF5QjtBQUMxQjtBQUVBOztFQUVFLDZDQUE2QztFQUM3QywwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsT0FBTzs7QUFFVDtBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLCtEQUErRDtFQUMvRCx1Q0FBdUM7RUFDdkMsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlDQUFpQzs7O0FBR25DO0FBQ0E7O0VBRUUsbUJBQW1COztBQUVyQjtBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjtBQUNBOztFQUVFLHFCQUFxQjtBQUN2QjtBQUNBOztFQUVFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsbUJBQW1CO0VBQ25CLGdCQUFnQjs7O0FBR2xCO0FBQ0E7O0VBRUUsbUJBQW1CO0VBQ25CLGdCQUFnQjs7QUFFbEI7QUFFQTs7RUFFRTs7TUFFSSw2REFBNkQ7TUFDN0Qsc0NBQXNDO0VBQzFDO0VBQ0E7O01BRUksNkJBQTZCO01BQzdCLDBCQUEwQjtFQUM5QjtFQUNBOztJQUVFLDZDQUE2QztJQUM3QyxXQUFXOztFQUViO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW57XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2F2YW50aWNhLmpwZycpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHJpZ2h0OiAwOyBcclxuICB0b3A6IDEwO1xyXG4gIFxyXG59XHJcbi5jYXJke1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuOCk7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggIzAwMDtcclxuICB9XHJcbiAud2hpdGUtdGV4dHtcclxuICAgICBjb2xvcjogd2hpdGU7XHJcbiB9XHJcbiAuYnRuTG9naW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6IzQ1NDY4NTtcclxuICAgIGJvcmRlci1jb2xvcjogIzQ1NDY4NTtcclxufVxyXG4uYnRuTG9naW46aG92ZXJ7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM0NTQ2ODU7XHJcbn1cclxuXHJcbi5tZW51e1xyXG4gIFxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9hdmFudGljYS5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHdpZHRoOiAxMDElO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICByaWdodDogMDsgXHJcbiAgdG9wOiAxMDtcclxuXHJcbn1cclxuLmNvbnRhaW5lclxyXG57XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCBhdXRvLWZpbGwgLCBtaW5tYXgoMzAwcHgsIDFmcikgKTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heCgxMDBweCwgYXV0byk7XHJcbiAgbWFyZ2luOiA0MHB4O1xyXG4gIGdyaWQtYXV0by1mbG93OiBkZW5zZTtcclxuICBncmlkLWdhcDogMTBweDtcclxufVxyXG4uY29udGFpbmVyIC5ib3h7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuOCk7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggIzAwMDtcclxuIFxyXG5cclxufVxyXG4uY29udGFpbmVyIC5ib3g6aG92ZXIgXHJcbntcclxuICBiYWNrZ3JvdW5kOiAjMkYyRDQ2O1xyXG4gIFxyXG59XHJcbi5jb250YWluZXIgLmJveCBpbWdcclxue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cztcclxufVxyXG4uY29udGFpbmVyIC5ib3g6aG92ZXIgaW1nXHJcbntcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbn1cclxuLmNvbnRhaW5lciAuYm94Om50aC1jaGlsZCgxKVxyXG57XHJcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcclxuICBncmlkLXJvdzogc3BhbiAxO1xyXG59XHJcbi5jb250YWluZXIgLmJveDpudGgtY2hpbGQoMilcclxue1xyXG4gIGdyaWQtY29sdW1uOiBzcGFuIDE7XHJcbiAgZ3JpZC1yb3c6IHNwYW4gMjtcclxufVxyXG4uY29udGFpbmVyIC5ib3g6bnRoLWNoaWxkKDQpXHJcbntcclxuICBncmlkLWNvbHVtbjogc3BhbiAxO1xyXG4gIGdyaWQtcm93OiBzcGFuIDI7XHJcblxyXG5cclxufVxyXG4uY29udGFpbmVyIC5ib3g6bnRoLWNoaWxkKDUpXHJcbntcclxuICBncmlkLWNvbHVtbjogc3BhbiAzO1xyXG4gIGdyaWQtcm93OiBzcGFuIDE7XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpXHJcbntcclxuICAuY29udGFpbmVyXHJcbiAge1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCggYXV0by1maWxsICwgbWlubWF4KDUwJSwgMWZyKSApO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heChhdXRvLCBhdXRvKTtcclxuICB9XHJcbiAgLmNvbnRhaW5lciAuYm94XHJcbiAge1xyXG4gICAgICBncmlkLWNvbHVtbjogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgZ3JpZC1yb3c6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5yb3d7XHJcbiAgXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvYXZhbnRpY2EuanBnJyk7XHJcbiAgICB3aWR0aDogMTA0JTtcclxuICBcclxuICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(user, auth) {
        _classCallCheck(this, LoginComponent);

        this.user = user;
        this.auth = auth;
        this.GOOGLE_AUTH_URL = this.user.GOOGLE_AUTH_URL;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this46 = this;

          this.auth.authStatus.subscribe(function (value) {
            return _this46.loggedIn = value;
          });
          this.auth.adminStatus.subscribe(function (value) {
            return _this46.type = value;
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/components/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/my-reserves/my-reserves.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/components/my-reserves/my-reserves.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMyReservesMyReservesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-header{\r\n    margin-top: -30px;\r\n    height: 100px;\r\n    background: linear-gradient(-90deg, rgb(49, 12, 82),#2F2D46);\r\n    box-shadow: 1px 5px 15px #a2a2a2;\r\n}\r\n\r\n.botonF1{\r\n    width:60px;\r\n    height:60px;\r\n    border-radius:100%;\r\n    background:#2F2D46;\r\n    left:0;\r\n    bottom:20;\r\n    position: absolute;\r\n    margin-left: 16px;\r\n    margin-top: 40px;\r\n    border:none;\r\n    outline:none;\r\n    color:#FFF;\r\n    font-size:36px;\r\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n    transition:.3s;  \r\n  }\r\n\r\nspan{\r\n    transition:.5s;  \r\n  }\r\n\r\n.botonF1:hover span{\r\n    transform:rotate(360deg);\r\n  }\r\n\r\n.botonF1:active{\r\n    transform:scale(1.1);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9teS1yZXNlcnZlcy9teS1yZXNlcnZlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYiw0REFBNEQ7SUFDNUQsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsY0FBYztJQUNkLGtFQUFrRTtJQUNsRSxjQUFjO0VBQ2hCOztBQUNBO0lBQ0UsY0FBYztFQUNoQjs7QUFDQTtJQUNFLHdCQUF3QjtFQUMxQjs7QUFDQTtJQUNFLG9CQUFvQjtFQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXktcmVzZXJ2ZXMvbXktcmVzZXJ2ZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWhlYWRlcntcclxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtOTBkZWcsIHJnYig0OSwgMTIsIDgyKSwjMkYyRDQ2KTtcclxuICAgIGJveC1zaGFkb3c6IDFweCA1cHggMTVweCAjYTJhMmEyO1xyXG59XHJcblxyXG4uYm90b25GMXtcclxuICAgIHdpZHRoOjYwcHg7XHJcbiAgICBoZWlnaHQ6NjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6MTAwJTtcclxuICAgIGJhY2tncm91bmQ6IzJGMkQ0NjtcclxuICAgIGxlZnQ6MDtcclxuICAgIGJvdHRvbToyMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgb3V0bGluZTpub25lO1xyXG4gICAgY29sb3I6I0ZGRjtcclxuICAgIGZvbnQtc2l6ZTozNnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xyXG4gICAgdHJhbnNpdGlvbjouM3M7ICBcclxuICB9XHJcbiAgc3BhbntcclxuICAgIHRyYW5zaXRpb246LjVzOyAgXHJcbiAgfVxyXG4gIC5ib3RvbkYxOmhvdmVyIHNwYW57XHJcbiAgICB0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG4gIC5ib3RvbkYxOmFjdGl2ZXtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjEpO1xyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/my-reserves/my-reserves.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/my-reserves/my-reserves.component.ts ***!
    \*****************************************************************/

  /*! exports provided: MyReservesComponent */

  /***/
  function srcAppComponentsMyReservesMyReservesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyReservesComponent", function () {
      return MyReservesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_service_parking_lot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/service-parking-lot.service */
    "./src/app/services/service-parking-lot.service.ts");
    /* harmony import */


    var src_app_services_my_reserves_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/my-reserves-service.service */
    "./src/app/services/my-reserves-service.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var src_app_services_vehicle_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/vehicle-service.service */
    "./src/app/services/vehicle-service.service.ts");
    /* harmony import */


    var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/notifications.service */
    "./src/app/services/notifications.service.ts");

    var MyReservesComponent = /*#__PURE__*/function () {
      function MyReservesComponent(user, _parking, _vehicle, _myReserves, emails) {
        _classCallCheck(this, MyReservesComponent);

        this.user = user;
        this._parking = _parking;
        this._vehicle = _vehicle;
        this._myReserves = _myReserves;
        this.emails = emails;
        this.emply = true;
        this.vehicleModel = {
          id: null,
          increment: null
        };
        this.formUser = {
          id: null
        };
        this.userModel = {
          id: null,
          name: null,
          vehicule: this.vehicleModel
        };
        this.reserveModel = {
          id_reservation: null,
          created_at: null,
          user: this.userModel,
          vehicle: this.vehicleModel
        };
        this.userInf = {
          id: null,
          name: null,
          imageUrl: null,
          headquarter: ''
        };
        this.reserves = [];
        this.validDetail = [];
      }

      _createClass(MyReservesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData();
        }
      }, {
        key: "loadUser",
        value: function loadUser(data) {
          this.formUser.id = data.id;
          this.userNotifications = data;
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this47 = this;

          this.user.loadImg().subscribe(function (data) {
            _this47.loadUser(data);

            _this47.listarReservas();

            _this47.listVehicles();
          }, function (error) {});
        }
      }, {
        key: "listVehicles",
        value: function listVehicles() {
          var _this48 = this;

          this._vehicle.listVehicle("vehiculo").subscribe(function (data) {
            _this48.vehicles = data;
          }, function (error) {});
        }
      }, {
        key: "deleteReserve",
        value: function deleteReserve(_formReserve) {
          var _this49 = this;

          var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.mixin({
            customClass: {
              cancelButton: 'btn btn-secondary'
            },
            buttonsStyling: false
          });
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Are you sure?',
            text: "You will not be able to reverse this! If you cancel this reserve, it will be permanently deleted!!!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#EF4023',
            confirmButtonText: 'Yes, cancel it!',
            reverseButtons: true
          }).then(function (result) {
            if (result.value) {
              _this49._parking.deleteParkingLot(_formReserve).subscribe(function (data) {
                _this49.ngOnInit();

                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Deleted!', 'Your file has been deleted.', 'success');
              });
            }
          });
        }
      }, {
        key: "listarReservas",
        value: function listarReservas() {
          var _this50 = this;

          var us = this.formUser.id; //?

          this._myReserves.listUserReserves(this.formUser.id).subscribe(function (data) {
            _this50.validDetail = [];
            _this50.reserves = data; //console.log(this.reserves.created_at)

            var _iterator4 = _createForOfIteratorHelper(_this50.reserves),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var reserve = _step4.value;
                _this50.emply = false;

                _this50.listValidDetails(reserve.id_reservation); //console.log(reserve.created_at)   

              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }, function (error) {});
        }
      }, {
        key: "listValidDetails",
        value: function listValidDetails(reserve_id) {
          var _this51 = this;

          this._myReserves.listUserValidReservesDetails(reserve_id).subscribe(function (data) {
            var detail = [];
            detail = data;

            if (detail.length > 0) {
              var _iterator5 = _createForOfIteratorHelper(detail),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var item = _step5.value;
                  var dateAux = item.date.substring(0, 7) + '-' + (parseInt(item.date.substring(8)) + 1);
                  item.date = dateAux;
                  item.reserve.created_at = item.reserve.created_at.substring(0, 10);

                  _this51.validDetail.push(item);
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }

            console.log(_this51.validDetail);
          }, function (error) {});
        } //si fuera necesaria

        /*listValidUnvalidDetails(reserve_id){
          this._myReserves.listUserUnValidReservesDetails(reserve_id).subscribe(
            data=>{
              let detail:any = [];
              detail = data;
              if(detail.length > 0){ ;
                for(let item of detail){
                  this.unvalidDetail.push(item);
                }
              }
            },
            error=>{
            }
          );
        } */

      }, {
        key: "cancelReserve",
        value: function cancelReserve(reserve_detail) {
          var _this52 = this;

          var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.mixin({
            customClass: {
              cancelButton: 'btn btn-secondary'
            },
            buttonsStyling: false
          });
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Are you sure?',
            text: "No podrás revertir esto. ¡Tu reserva será cancelada!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#EF4023',
            confirmButtonText: 'Yes, delete it!',
            reverseButtons: true
          }).then(function (result) {
            if (result.value) {
              _this52._myReserves.cancelReserve(reserve_detail).subscribe(function (data) {
                _this52.ngOnInit();

                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Deleted!', 'Your reservation has been successfully canceled', 'success');
                var email = {
                  id: null,
                  to: _this52.userNotifications.email,
                  subject: "RESERVE CANCELE",
                  text: "Your reservation has been successfully canceled!",
                  viewed: false,
                  user_id: {
                    id: _this52.userNotifications.id
                  }
                };

                _this52.emails.sendEmail(email).subscribe(function (data) {});
              }, function (error) {});
            }
          });
        }
      }]);

      return MyReservesComponent;
    }();

    MyReservesComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: src_app_services_service_parking_lot_service__WEBPACK_IMPORTED_MODULE_2__["ServiceParkingLotService"]
      }, {
        type: src_app_services_vehicle_service_service__WEBPACK_IMPORTED_MODULE_6__["VehicleServiceService"]
      }, {
        type: src_app_services_my_reserves_service_service__WEBPACK_IMPORTED_MODULE_3__["MyReservesServiceService"]
      }, {
        type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"]
      }];
    };

    MyReservesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-reserves',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./my-reserves.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-reserves/my-reserves.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./my-reserves.component.css */
      "./src/app/components/my-reserves/my-reserves.component.css"))["default"]]
    })], MyReservesComponent);
    /***/
  },

  /***/
  "./src/app/components/navbar/navbar.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#logo {\r\n    width: 95px;\r\n    height: auto;\r\n    margin-top: auto;\r\n    float: left;\r\n}\r\n.navbarcolor {\r\n    background-color: #2F2D46;\r\n    \r\n}\r\n.margin {\r\n    margin-bottom: 50px;\r\n}\r\n#link{\r\n    color: #fff;\r\n    font-family: \"Open Sans\"; \r\n    font-size: 14px; \r\n    font-style: normal; \r\n    font-variant: normal; \r\n    font-weight: 800; \r\n    line-height: 20px; \r\n}\r\n.notification {\r\n    color: black;\r\n    text-decoration: none;\r\n    position: relative;\r\n    display: inline-block;\r\n    border-radius: 2px;\r\n  }\r\n.notification .badge {\r\n    position: absolute;\r\n    top: -10px;\r\n    right: -23px;\r\n    padding: 5px 10px;\r\n    border-radius: 50%;                                                           \r\n    background: rgb(5, 0, 71);\r\n    color: white;\r\n  }\r\n.notification .badgeProfile {\r\n    position: absolute;\r\n    top: -2px;\r\n    right: -9px;\r\n    padding: 0px 7px;\r\n    border-radius: 100%;\r\n    background: rgb(255, 255, 255);\r\n    color: rgb(0, 0, 0);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHlCQUF5Qjs7QUFFN0I7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztJQUNYLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ28ge1xyXG4gICAgd2lkdGg6IDk1cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLm5hdmJhcmNvbG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRjJENDY7XHJcbiAgICBcclxufVxyXG4ubWFyZ2luIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuI2xpbmt7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiOyBcclxuICAgIGZvbnQtc2l6ZTogMTRweDsgXHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IFxyXG4gICAgZm9udC12YXJpYW50OiBub3JtYWw7IFxyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDsgXHJcbiAgICBsaW5lLWhlaWdodDogMjBweDsgXHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24ge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIH1cclxuICBcclxuICAubm90aWZpY2F0aW9uIC5iYWRnZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xMHB4O1xyXG4gICAgcmlnaHQ6IC0yM3B4O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIGJhY2tncm91bmQ6IHJnYig1LCAwLCA3MSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAubm90aWZpY2F0aW9uIC5iYWRnZVByb2ZpbGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMnB4O1xyXG4gICAgcmlnaHQ6IC05cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/notifications.service */
    "./src/app/services/notifications.service.ts");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(user, router, auth, notificationsService) {
        _classCallCheck(this, NavbarComponent);

        this.user = user;
        this.router = router;
        this.auth = auth;
        this.notificationsService = notificationsService;
        this.navbarOpen = false;
        this.notifications = 0;
      }

      _createClass(NavbarComponent, [{
        key: "toggleNavbar",
        value: function toggleNavbar() {
          this.navbarOpen = !this.navbarOpen;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this53 = this;

          this.auth.authStatus.subscribe(function (value) {
            return _this53.loggedIn = value;
          });
          this.auth.adminStatus.subscribe(function (value) {
            return _this53.admin = value;
          });
          this.getAsyncData();
        }
      }, {
        key: "notificationsUser",
        value: function notificationsUser(data) {
          var _this54 = this;

          this.notifications = 0;
          data.forEach(function (element) {
            if (!element.viewed) {
              _this54.notifications++;
            }
          });
          this.notificationsArray = data;
        }
      }, {
        key: "notificationViewed",
        value: function notificationViewed(id) {
          var _this55 = this;

          this.notificationsService.changeViewed(id).subscribe(function (data) {
            _this55.notifications = 0;
          });
        }
      }, {
        key: "loadUser",
        value: function loadUser(data) {
          var _this56 = this;

          this.userInf = data;

          if (data.role) {
            this.auth.changeAdminStatus(true);
          } else {
            this.auth.changeAdminStatus(false);
          }

          if (data.email == null) {
            this.auth.changeAdminStatus(false);
            this.auth.changeAuthStatus(false);
            localStorage.removeItem('accessToken');
            this.router.navigateByUrl('');
          } else {
            this.auth.changeAuthStatus(true);
          }

          this.img = data.imageUrl;
          this.notificationsService.userNotifications(data.id).subscribe(function (data) {
            _this56.notificationsUser(data);
          });
        }
      }, {
        key: "deleteNotifications",
        value: function deleteNotifications(n) {
          var _this57 = this;

          this.notificationsService.deleteNotification(n.id).subscribe(function (data) {
            _this57.getAsyncData();
          });
        }
      }, {
        key: "logout",
        value: function logout(event) {
          event.preventDefault();
          localStorage.removeItem('accessToken');
          this.auth.changeAdminStatus(false);
          this.auth.changeAuthStatus(false);
          this.router.navigateByUrl('');
        }
      }, {
        key: "getAsyncData",
        value: function getAsyncData() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this58 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (localStorage.getItem('accessToken') == null) {
                      this.auth.changeAdminStatus(false);
                      this.auth.changeAuthStatus(false);
                    } else {
                      this.user.loadImg().subscribe(function (data) {
                        _this58.loadUser(data);
                      }, function (error) {
                        _this58.auth.changeAdminStatus(false);

                        _this58.auth.changeAuthStatus(false);

                        localStorage.removeItem('accessToken');

                        _this58.router.navigateByUrl('');
                      });
                    }

                    setTimeout(function () {
                      _this58.getAsyncData();
                    }, 60000);

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"]
      }];
    };

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/components/navbar/navbar.component.css"))["default"]]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/components/oauth2/oauth2/oauth2.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/components/oauth2/oauth2/oauth2.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsOauth2Oauth2Oauth2ComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n.loader {\r\n    font-size: 20px;\r\n    margin: 35% auto;\r\n    width: 1em;\r\n    height: 1em;\r\n    border-radius: 50%;\r\n    position: relative;\r\n    text-indent: -9999em;\r\n    -webkit-animation: load4 1.3s infinite linear;\r\n    animation: load4 1.3s infinite linear;\r\n  }\r\n  @-webkit-keyframes load4 {\r\n    0%,\r\n    100% {\r\n      box-shadow: 0em -3em 0em 0.2em #460ce6, 2em -2em 0 0em #460ce6, 3em 0em 0 -0.5em #460ce6, 2em 2em 0 -0.5em #460ce6, 0em 3em 0 -0.5em #460ce6, -2em 2em 0 -0.5em #460ce6, -3em 0em 0 -0.5em #460ce6, -2em -2em 0 0em #460ce6;\r\n    }\r\n    12.5% {\r\n      box-shadow: 0em -3em 0em 0em #460ce6, 2em -2em 0 0.2em #460ce6, 3em 0em 0 0em #460ce6, 2em 2em 0 -0.5em #460ce6, 0em 3em 0 -0.5em #460ce6, -2em 2em 0 -0.5em #460ce6, -3em 0em 0 -0.5em #460ce6, -2em -2em 0 -0.5em #460ce6;\r\n    }\r\n    25% {\r\n      box-shadow: 0em -3em 0em -0.5em #460ce6, 2em -2em 0 0em #460ce6, 3em 0em 0 0.2em #460ce6, 2em 2em 0 0em #460ce6, 0em 3em 0 -0.5em #460ce6, -2em 2em 0 -0.5em #460ce6, -3em 0em 0 -0.5em #460ce6, -2em -2em 0 -0.5em #460ce6;\r\n    }\r\n    37.5% {\r\n      box-shadow: 0em -3em 0em -0.5em #460ce6, 2em -2em 0 -0.5em #460ce6, 3em 0em 0 0em #460ce6, 2em 2em 0 0.2em #460ce6, 0em 3em 0 0em #460ce6, -2em 2em 0 -0.5em #460ce6, -3em 0em 0 -0.5em #460ce6, -2em -2em 0 -0.5em #460ce6;\r\n    }\r\n    50% {\r\n      box-shadow: 0em -3em 0em -0.5em #460ce6, 2em -2em 0 -0.5em #460ce6, 3em 0em 0 -0.5em #460ce6, 2em 2em 0 0em #460ce6, 0em 3em 0 0.2em #460ce6, -2em 2em 0 0em #460ce6, -3em 0em 0 -0.5em #460ce6, -2em -2em 0 -0.5em #460ce6;\r\n    }\r\n    62.5% {\r\n      box-shadow: 0em -3em 0em -0.5em #460ce6, 2em -2em 0 -0.5em #460ce6, 3em 0em 0 -0.5em #460ce6, 2em 2em 0 -0.5em #460ce6, 0em 3em 0 0em #460ce6, -2em 2em 0 0.2em #460ce6, -3em 0em 0 0em #460ce6, -2em -2em 0 -0.5em #460ce6;\r\n    }\r\n    75% {\r\n      box-shadow: 0em -3em 0em -0.5em #460ce6, 2em -2em 0 -0.5em #460ce6, 3em 0em 0 -0.5em #460ce6, 2em 2em 0 -0.5em #460ce6, 0em 3em 0 -0.5em #460ce6, -2em 2em 0 0em #460ce6, -3em 0em 0 0.2em #460ce6, -2em -2em 0 0em #460ce6;\r\n    }\r\n    87.5% {\r\n      box-shadow: 0em -3em 0em 0em #460ce6, 2em -2em 0 -0.5em #460ce6, 3em 0em 0 -0.5em #460ce6, 2em 2em 0 -0.5em #460ce6, 0em 3em 0 -0.5em #460ce6, -2em 2em 0 0em #460ce6, -3em 0em 0 0em #460ce6, -2em -2em 0 0.2em #460ce6;\r\n    }\r\n  }\r\n  @keyframes load4 {\r\n    0%,\r\n    100% {\r\n      box-shadow: 0em -3em 0em 0.2em #460ce6, 2em -2em 0 0em #460ce6, 3em 0em 0 -0.5em #460ce6, 2em 2em 0 -0.5em #460ce6, 0em 3em 0 -0.5em #460ce6, -2em 2em 0 -0.5em #460ce6, -3em 0em 0 -0.5em #460ce6, -2em -2em 0 0em #460ce6;\r\n    }\r\n    12.5% {\r\n      box-shadow: 0em -3em 0em 0em #460ce6, 2em -2em 0 0.2em #460ce6, 3em 0em 0 0em #460ce6, 2em 2em 0 -0.5em #460ce6, 0em 3em 0 -0.5em #460ce6, -2em 2em 0 -0.5em #460ce6, -3em 0em 0 -0.5em #460ce6, -2em -2em 0 -0.5em #460ce6;\r\n    }\r\n    25% {\r\n      box-shadow: 0em -3em 0em -0.5em #460ce6, 2em -2em 0 0em #460ce6, 3em 0em 0 0.2em #460ce6, 2em 2em 0 0em #460ce6, 0em 3em 0 -0.5em #460ce6, -2em 2em 0 -0.5em #460ce6, -3em 0em 0 -0.5em #460ce6, -2em -2em 0 -0.5em #460ce6;\r\n    }\r\n    37.5% {\r\n      box-shadow: 0em -3em 0em -0.5em #460ce6, 2em -2em 0 -0.5em #460ce6, 3em 0em 0 0em #460ce6, 2em 2em 0 0.2em #460ce6, 0em 3em 0 0em #460ce6, -2em 2em 0 -0.5em #460ce6, -3em 0em 0 -0.5em #460ce6, -2em -2em 0 -0.5em #460ce6;\r\n    }\r\n    50% {\r\n      box-shadow: 0em -3em 0em -0.5em #460ce6, 2em -2em 0 -0.5em #460ce6, 3em 0em 0 -0.5em #460ce6, 2em 2em 0 0em #460ce6, 0em 3em 0 0.2em #460ce6, -2em 2em 0 0em #460ce6, -3em 0em 0 -0.5em #460ce6, -2em -2em 0 -0.5em #460ce6;\r\n    }\r\n    62.5% {\r\n      box-shadow: 0em -3em 0em -0.5em #460ce6, 2em -2em 0 -0.5em #460ce6, 3em 0em 0 -0.5em #460ce6, 2em 2em 0 -0.5em #460ce6, 0em 3em 0 0em #460ce6, -2em 2em 0 0.2em #460ce6, -3em 0em 0 0em #460ce6, -2em -2em 0 -0.5em #460ce6;\r\n    }\r\n    75% {\r\n      box-shadow: 0em -3em 0em -0.5em #460ce6, 2em -2em 0 -0.5em #460ce6, 3em 0em 0 -0.5em #460ce6, 2em 2em 0 -0.5em #460ce6, 0em 3em 0 -0.5em #460ce6, -2em 2em 0 0em #460ce6, -3em 0em 0 0.2em #460ce6, -2em -2em 0 0em #460ce6;\r\n    }\r\n    87.5% {\r\n      box-shadow: 0em -3em 0em 0em #460ce6, 2em -2em 0 -0.5em #460ce6, 3em 0em 0 -0.5em #460ce6, 2em 2em 0 -0.5em #460ce6, 0em 3em 0 -0.5em #460ce6, -2em 2em 0 0em #460ce6, -3em 0em 0 0em #460ce6, -2em -2em 0 0.2em #460ce6;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vYXV0aDIvb2F1dGgyL29hdXRoMi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQiw2Q0FBNkM7SUFDN0MscUNBQXFDO0VBQ3ZDO0VBQ0E7SUFDRTs7TUFFRSwyTkFBMk47SUFDN047SUFDQTtNQUNFLDJOQUEyTjtJQUM3TjtJQUNBO01BQ0UsMk5BQTJOO0lBQzdOO0lBQ0E7TUFDRSwyTkFBMk47SUFDN047SUFDQTtNQUNFLDJOQUEyTjtJQUM3TjtJQUNBO01BQ0UsMk5BQTJOO0lBQzdOO0lBQ0E7TUFDRSwyTkFBMk47SUFDN047SUFDQTtNQUNFLHdOQUF3TjtJQUMxTjtFQUNGO0VBQ0E7SUFDRTs7TUFFRSwyTkFBMk47SUFDN047SUFDQTtNQUNFLDJOQUEyTjtJQUM3TjtJQUNBO01BQ0UsMk5BQTJOO0lBQzdOO0lBQ0E7TUFDRSwyTkFBMk47SUFDN047SUFDQTtNQUNFLDJOQUEyTjtJQUM3TjtJQUNBO01BQ0UsMk5BQTJOO0lBQzdOO0lBQ0E7TUFDRSwyTkFBMk47SUFDN047SUFDQTtNQUNFLHdOQUF3TjtJQUMxTjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vYXV0aDIvb2F1dGgyL29hdXRoMi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5sb2FkZXIge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAzNSUgYXV0bztcclxuICAgIHdpZHRoOiAxZW07XHJcbiAgICBoZWlnaHQ6IDFlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtaW5kZW50OiAtOTk5OWVtO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQ0IDEuM3MgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgYW5pbWF0aW9uOiBsb2FkNCAxLjNzIGluZmluaXRlIGxpbmVhcjtcclxuICB9XHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQ0IHtcclxuICAgIDAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDBlbSAwLjJlbSAjNDYwY2U2LCAyZW0gLTJlbSAwIDBlbSAjNDYwY2U2LCAzZW0gMGVtIDAgLTAuNWVtICM0NjBjZTYsIDJlbSAyZW0gMCAtMC41ZW0gIzQ2MGNlNiwgMGVtIDNlbSAwIC0wLjVlbSAjNDYwY2U2LCAtMmVtIDJlbSAwIC0wLjVlbSAjNDYwY2U2LCAtM2VtIDBlbSAwIC0wLjVlbSAjNDYwY2U2LCAtMmVtIC0yZW0gMCAwZW0gIzQ2MGNlNjtcclxuICAgIH1cclxuICAgIDEyLjUlIHtcclxuICAgICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMGVtIDBlbSAjNDYwY2U2LCAyZW0gLTJlbSAwIDAuMmVtICM0NjBjZTYsIDNlbSAwZW0gMCAwZW0gIzQ2MGNlNiwgMmVtIDJlbSAwIC0wLjVlbSAjNDYwY2U2LCAwZW0gM2VtIDAgLTAuNWVtICM0NjBjZTYsIC0yZW0gMmVtIDAgLTAuNWVtICM0NjBjZTYsIC0zZW0gMGVtIDAgLTAuNWVtICM0NjBjZTYsIC0yZW0gLTJlbSAwIC0wLjVlbSAjNDYwY2U2O1xyXG4gICAgfVxyXG4gICAgMjUlIHtcclxuICAgICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMGVtIC0wLjVlbSAjNDYwY2U2LCAyZW0gLTJlbSAwIDBlbSAjNDYwY2U2LCAzZW0gMGVtIDAgMC4yZW0gIzQ2MGNlNiwgMmVtIDJlbSAwIDBlbSAjNDYwY2U2LCAwZW0gM2VtIDAgLTAuNWVtICM0NjBjZTYsIC0yZW0gMmVtIDAgLTAuNWVtICM0NjBjZTYsIC0zZW0gMGVtIDAgLTAuNWVtICM0NjBjZTYsIC0yZW0gLTJlbSAwIC0wLjVlbSAjNDYwY2U2O1xyXG4gICAgfVxyXG4gICAgMzcuNSUge1xyXG4gICAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwZW0gLTAuNWVtICM0NjBjZTYsIDJlbSAtMmVtIDAgLTAuNWVtICM0NjBjZTYsIDNlbSAwZW0gMCAwZW0gIzQ2MGNlNiwgMmVtIDJlbSAwIDAuMmVtICM0NjBjZTYsIDBlbSAzZW0gMCAwZW0gIzQ2MGNlNiwgLTJlbSAyZW0gMCAtMC41ZW0gIzQ2MGNlNiwgLTNlbSAwZW0gMCAtMC41ZW0gIzQ2MGNlNiwgLTJlbSAtMmVtIDAgLTAuNWVtICM0NjBjZTY7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwZW0gLTAuNWVtICM0NjBjZTYsIDJlbSAtMmVtIDAgLTAuNWVtICM0NjBjZTYsIDNlbSAwZW0gMCAtMC41ZW0gIzQ2MGNlNiwgMmVtIDJlbSAwIDBlbSAjNDYwY2U2LCAwZW0gM2VtIDAgMC4yZW0gIzQ2MGNlNiwgLTJlbSAyZW0gMCAwZW0gIzQ2MGNlNiwgLTNlbSAwZW0gMCAtMC41ZW0gIzQ2MGNlNiwgLTJlbSAtMmVtIDAgLTAuNWVtICM0NjBjZTY7XHJcbiAgICB9XHJcbiAgICA2Mi41JSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDBlbSAtMC41ZW0gIzQ2MGNlNiwgMmVtIC0yZW0gMCAtMC41ZW0gIzQ2MGNlNiwgM2VtIDBlbSAwIC0wLjVlbSAjNDYwY2U2LCAyZW0gMmVtIDAgLTAuNWVtICM0NjBjZTYsIDBlbSAzZW0gMCAwZW0gIzQ2MGNlNiwgLTJlbSAyZW0gMCAwLjJlbSAjNDYwY2U2LCAtM2VtIDBlbSAwIDBlbSAjNDYwY2U2LCAtMmVtIC0yZW0gMCAtMC41ZW0gIzQ2MGNlNjtcclxuICAgIH1cclxuICAgIDc1JSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDBlbSAtMC41ZW0gIzQ2MGNlNiwgMmVtIC0yZW0gMCAtMC41ZW0gIzQ2MGNlNiwgM2VtIDBlbSAwIC0wLjVlbSAjNDYwY2U2LCAyZW0gMmVtIDAgLTAuNWVtICM0NjBjZTYsIDBlbSAzZW0gMCAtMC41ZW0gIzQ2MGNlNiwgLTJlbSAyZW0gMCAwZW0gIzQ2MGNlNiwgLTNlbSAwZW0gMCAwLjJlbSAjNDYwY2U2LCAtMmVtIC0yZW0gMCAwZW0gIzQ2MGNlNjtcclxuICAgIH1cclxuICAgIDg3LjUlIHtcclxuICAgICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMGVtIDBlbSAjNDYwY2U2LCAyZW0gLTJlbSAwIC0wLjVlbSAjNDYwY2U2LCAzZW0gMGVtIDAgLTAuNWVtICM0NjBjZTYsIDJlbSAyZW0gMCAtMC41ZW0gIzQ2MGNlNiwgMGVtIDNlbSAwIC0wLjVlbSAjNDYwY2U2LCAtMmVtIDJlbSAwIDBlbSAjNDYwY2U2LCAtM2VtIDBlbSAwIDBlbSAjNDYwY2U2LCAtMmVtIC0yZW0gMCAwLjJlbSAjNDYwY2U2O1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGxvYWQ0IHtcclxuICAgIDAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDBlbSAwLjJlbSAjNDYwY2U2LCAyZW0gLTJlbSAwIDBlbSAjNDYwY2U2LCAzZW0gMGVtIDAgLTAuNWVtICM0NjBjZTYsIDJlbSAyZW0gMCAtMC41ZW0gIzQ2MGNlNiwgMGVtIDNlbSAwIC0wLjVlbSAjNDYwY2U2LCAtMmVtIDJlbSAwIC0wLjVlbSAjNDYwY2U2LCAtM2VtIDBlbSAwIC0wLjVlbSAjNDYwY2U2LCAtMmVtIC0yZW0gMCAwZW0gIzQ2MGNlNjtcclxuICAgIH1cclxuICAgIDEyLjUlIHtcclxuICAgICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMGVtIDBlbSAjNDYwY2U2LCAyZW0gLTJlbSAwIDAuMmVtICM0NjBjZTYsIDNlbSAwZW0gMCAwZW0gIzQ2MGNlNiwgMmVtIDJlbSAwIC0wLjVlbSAjNDYwY2U2LCAwZW0gM2VtIDAgLTAuNWVtICM0NjBjZTYsIC0yZW0gMmVtIDAgLTAuNWVtICM0NjBjZTYsIC0zZW0gMGVtIDAgLTAuNWVtICM0NjBjZTYsIC0yZW0gLTJlbSAwIC0wLjVlbSAjNDYwY2U2O1xyXG4gICAgfVxyXG4gICAgMjUlIHtcclxuICAgICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMGVtIC0wLjVlbSAjNDYwY2U2LCAyZW0gLTJlbSAwIDBlbSAjNDYwY2U2LCAzZW0gMGVtIDAgMC4yZW0gIzQ2MGNlNiwgMmVtIDJlbSAwIDBlbSAjNDYwY2U2LCAwZW0gM2VtIDAgLTAuNWVtICM0NjBjZTYsIC0yZW0gMmVtIDAgLTAuNWVtICM0NjBjZTYsIC0zZW0gMGVtIDAgLTAuNWVtICM0NjBjZTYsIC0yZW0gLTJlbSAwIC0wLjVlbSAjNDYwY2U2O1xyXG4gICAgfVxyXG4gICAgMzcuNSUge1xyXG4gICAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwZW0gLTAuNWVtICM0NjBjZTYsIDJlbSAtMmVtIDAgLTAuNWVtICM0NjBjZTYsIDNlbSAwZW0gMCAwZW0gIzQ2MGNlNiwgMmVtIDJlbSAwIDAuMmVtICM0NjBjZTYsIDBlbSAzZW0gMCAwZW0gIzQ2MGNlNiwgLTJlbSAyZW0gMCAtMC41ZW0gIzQ2MGNlNiwgLTNlbSAwZW0gMCAtMC41ZW0gIzQ2MGNlNiwgLTJlbSAtMmVtIDAgLTAuNWVtICM0NjBjZTY7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwZW0gLTAuNWVtICM0NjBjZTYsIDJlbSAtMmVtIDAgLTAuNWVtICM0NjBjZTYsIDNlbSAwZW0gMCAtMC41ZW0gIzQ2MGNlNiwgMmVtIDJlbSAwIDBlbSAjNDYwY2U2LCAwZW0gM2VtIDAgMC4yZW0gIzQ2MGNlNiwgLTJlbSAyZW0gMCAwZW0gIzQ2MGNlNiwgLTNlbSAwZW0gMCAtMC41ZW0gIzQ2MGNlNiwgLTJlbSAtMmVtIDAgLTAuNWVtICM0NjBjZTY7XHJcbiAgICB9XHJcbiAgICA2Mi41JSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDBlbSAtMC41ZW0gIzQ2MGNlNiwgMmVtIC0yZW0gMCAtMC41ZW0gIzQ2MGNlNiwgM2VtIDBlbSAwIC0wLjVlbSAjNDYwY2U2LCAyZW0gMmVtIDAgLTAuNWVtICM0NjBjZTYsIDBlbSAzZW0gMCAwZW0gIzQ2MGNlNiwgLTJlbSAyZW0gMCAwLjJlbSAjNDYwY2U2LCAtM2VtIDBlbSAwIDBlbSAjNDYwY2U2LCAtMmVtIC0yZW0gMCAtMC41ZW0gIzQ2MGNlNjtcclxuICAgIH1cclxuICAgIDc1JSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDBlbSAtMC41ZW0gIzQ2MGNlNiwgMmVtIC0yZW0gMCAtMC41ZW0gIzQ2MGNlNiwgM2VtIDBlbSAwIC0wLjVlbSAjNDYwY2U2LCAyZW0gMmVtIDAgLTAuNWVtICM0NjBjZTYsIDBlbSAzZW0gMCAtMC41ZW0gIzQ2MGNlNiwgLTJlbSAyZW0gMCAwZW0gIzQ2MGNlNiwgLTNlbSAwZW0gMCAwLjJlbSAjNDYwY2U2LCAtMmVtIC0yZW0gMCAwZW0gIzQ2MGNlNjtcclxuICAgIH1cclxuICAgIDg3LjUlIHtcclxuICAgICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMGVtIDBlbSAjNDYwY2U2LCAyZW0gLTJlbSAwIC0wLjVlbSAjNDYwY2U2LCAzZW0gMGVtIDAgLTAuNWVtICM0NjBjZTYsIDJlbSAyZW0gMCAtMC41ZW0gIzQ2MGNlNiwgMGVtIDNlbSAwIC0wLjVlbSAjNDYwY2U2LCAtMmVtIDJlbSAwIDBlbSAjNDYwY2U2LCAtM2VtIDBlbSAwIDBlbSAjNDYwY2U2LCAtMmVtIC0yZW0gMCAwLjJlbSAjNDYwY2U2O1xyXG4gICAgfVxyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/oauth2/oauth2/oauth2.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/oauth2/oauth2/oauth2.component.ts ***!
    \**************************************************************/

  /*! exports provided: Oauth2Component */

  /***/
  function srcAppComponentsOauth2Oauth2Oauth2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Oauth2Component", function () {
      return Oauth2Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var Oauth2Component = /*#__PURE__*/function () {
      function Oauth2Component(router, user, auth) {
        var _this59 = this;

        _classCallCheck(this, Oauth2Component);

        this.router = router;
        this.user = user;
        this.auth = auth;
        this.urlTree = this.router.parseUrl(this.router.url);
        this.token = this.urlTree.queryParams['token'];
        this.error = this.urlTree.queryParams['error'];

        if (this.token) {
          localStorage.setItem('accessToken', this.token);
          this.auth.authStatus.subscribe(function (value) {
            return _this59.loggedIn = value;
          });

          if (!this.loggedIn) {
            setTimeout(function () {
              _this59.router.navigateByUrl('');
            }, 2004);
            setTimeout(function () {
              location.reload();
            }, 2005);
          }
        } else {
          this.router.navigateByUrl('');
        }
      }

      _createClass(Oauth2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Oauth2Component;
    }();

    Oauth2Component.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    Oauth2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-oauth2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./oauth2.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/oauth2/oauth2/oauth2.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./oauth2.component.css */
      "./src/app/components/oauth2/oauth2/oauth2.component.css"))["default"]]
    })], Oauth2Component);
    /***/
  },

  /***/
  "./src/app/components/user-panel/user-panel.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/components/user-panel/user-panel.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsUserPanelUserPanelComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1wYW5lbC91c2VyLXBhbmVsLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/user-panel/user-panel.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/user-panel/user-panel.component.ts ***!
    \***************************************************************/

  /*! exports provided: UserPanelComponent */

  /***/
  function srcAppComponentsUserPanelUserPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPanelComponent", function () {
      return UserPanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var src_app_services_service_headquarter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/service-headquarter.service */
    "./src/app/services/service-headquarter.service.ts");

    var UserPanelComponent = /*#__PURE__*/function () {
      function UserPanelComponent(user, router, auth, h) {
        _classCallCheck(this, UserPanelComponent);

        this.user = user;
        this.router = router;
        this.auth = auth;
        this.h = h;
        this.headquarters = [];
        this.userInf = {
          name: null,
          imageUrl: null,
          headquarter: ''
        };
      }

      _createClass(UserPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this60 = this;

          this.h.listHeadquarter().subscribe(function (data) {
            _this60.headquarters = data;
          });
          this.user.loadImg().subscribe(function (data) {
            _this60.loadUser(data);
          });
        }
      }, {
        key: "loadUser",
        value: function loadUser(data) {
          this.userInf = data;
          this.u = data;
          this.img = data.imageUrl;

          if (data.headquarter == null) {
            this.userInf.headquarter = '';
          } else {
            this.userInf.headquarter = data.headquarter;
            this.current = data.headquarter.name;
          }
        }
      }, {
        key: "allocateHeadquarters",
        value: function allocateHeadquarters() {
          var _this61 = this;

          var headquarter = {
            id_headquarter: this.u.headquarter,
            name: null,
            country: null,
            city: null
          };
          this.auth.adminStatus.subscribe(function (value) {
            return _this61.u.role = value;
          });
          this.u.headquarter = headquarter;
          this.user.modify(this.u).subscribe(function (data) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
              type: 'success',
              title: 'The user was correctly assigned the headquarters, now on the dasboard and in the reservations, they will appear by default the selected headquarters',
              showConfirmButton: false,
              timer: 4500
            });

            _this61.ngOnInit();
          }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
              type: 'error',
              title: 'Failed to assign headquarters, try again or contact the application administrator',
              showConfirmButton: false,
              timer: 4500
            });
          });
        }
      }, {
        key: "headquarterUser",
        value: function headquarterUser(data) {
          this.userInf.headquarter = data.name;
        }
      }]);

      return UserPanelComponent;
    }();

    UserPanelComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: src_app_services_service_headquarter_service__WEBPACK_IMPORTED_MODULE_6__["ServiceHeadquarterService"]
      }];
    };

    UserPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-panel/user-panel.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-panel.component.css */
      "./src/app/components/user-panel/user-panel.component.css"))["default"]]
    })], UserPanelComponent);
    /***/
  },

  /***/
  "./src/app/components/vehicle/vehicle.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/vehicle/vehicle.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsVehicleVehicleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".botonF1{\r\n    width:60px;\r\n    height:60px;\r\n    border-radius:100%;\r\n    background:#2F2D46;\r\n    left:0;\r\n    bottom:20;\r\n    position: absolute;\r\n    margin-left: 16px;\r\n    margin-top: 40px;\r\n    border:none;\r\n    outline:none;\r\n    color:#FFF;\r\n    font-size:36px;\r\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n    transition:.3s;  \r\n  }\r\n  span{\r\n    transition:.5s;  \r\n  }\r\n  .botonF1:hover span{\r\n    transform:rotate(360deg);\r\n  }\r\n  .botonF1:active{\r\n    transform:scale(1.1);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92ZWhpY2xlL3ZlaGljbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLGNBQWM7SUFDZCxrRUFBa0U7SUFDbEUsY0FBYztFQUNoQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZlaGljbGUvdmVoaWNsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvdG9uRjF7XHJcbiAgICB3aWR0aDo2MHB4O1xyXG4gICAgaGVpZ2h0OjYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiMyRjJENDY7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICBib3R0b206MjA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIG91dGxpbmU6bm9uZTtcclxuICAgIGNvbG9yOiNGRkY7XHJcbiAgICBmb250LXNpemU6MzZweDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxuICAgIHRyYW5zaXRpb246LjNzOyAgXHJcbiAgfVxyXG4gIHNwYW57XHJcbiAgICB0cmFuc2l0aW9uOi41czsgIFxyXG4gIH1cclxuICAuYm90b25GMTpob3ZlciBzcGFue1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxuICAuYm90b25GMTphY3RpdmV7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xKTtcclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/components/vehicle/vehicle.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/vehicle/vehicle.component.ts ***!
    \*********************************************************/

  /*! exports provided: VehicleComponent */

  /***/
  function srcAppComponentsVehicleVehicleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VehicleComponent", function () {
      return VehicleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_vehicle_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/vehicle-service.service */
    "./src/app/services/vehicle-service.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");

    var VehicleComponent = /*#__PURE__*/function () {
      function VehicleComponent(user, vehicle) {
        _classCallCheck(this, VehicleComponent);

        this.user = user;
        this.vehicle = vehicle;
        this.filterVehicles = "";
        this.formUser = {
          id: null
        };
        this.addFormVehicle = {
          license_plate: null,
          brand: null,
          model: null,
          user: this.formUser
        };
        this.nullVehicle = {
          license_plate: null,
          brand: null,
          model: null,
          user: null
        };
        this.editFormVehicle = {
          license_plate: null,
          brand: null,
          model: null,
          user: null
        };
      }

      _createClass(VehicleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData();
        }
      }, {
        key: "loadUser",
        value: function loadUser(data) {
          this.formUser.id = data.id;
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this62 = this;

          this.user.loadImg().subscribe(function (data) {
            _this62.loadUser(data);

            _this62.listVehicles();
          }, function (error) {});
        }
      }, {
        key: "listVehicles",
        value: function listVehicles() {
          var _this63 = this;

          this.vehicle.listVehicle(this.formUser.id).subscribe(function (data) {
            _this63.vehicles = data;
          }, function (error) {});
        }
      }, {
        key: "addVehicle",
        value: function addVehicle() {
          var _this64 = this;

          this.addFormVehicle.user.id = this.formUser.id;
          this.vehicle.addVehicle(this.addFormVehicle).subscribe(function (data) {
            _this64.nullVehicle = data;

            if (_this64.nullVehicle.license_plate === null) {
              //si viene vacio el vehiculo ya esta registrado
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'A vehicle with the license plate ' + _this64.addFormVehicle.license_plate + ' has already been registered!',
                confirmButtonColor: '#EF4023'
              });
            } else {
              _this64.responseSuccess(data);

              _this64.addFormVehicle.license_plate = null;
              _this64.addFormVehicle.brand = null;
              _this64.addFormVehicle.model = null;
              _this64.addFormVehicle.user.id = null;
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                type: 'success',
                title: 'The vehicle has been saved',
                showConfirmButton: false,
                timer: 1500
              });
              jquery__WEBPACK_IMPORTED_MODULE_4__("#closeModal1").click();

              _this64.ngOnInit();
            }
          }, function (error) {});
        }
      }, {
        key: "deleteVehicle",
        value: function deleteVehicle(_formVehicle) {
          var _this65 = this;

          var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
            customClass: {
              cancelButton: 'btn btn-secondary'
            },
            buttonsStyling: false
          });
          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Are you sure?',
            text: "You will not be able to reverse this. Your vehicle will be deleted!!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#EF4023',
            confirmButtonText: 'Yes, delete it!',
            reverseButtons: true
          }).then(function (result) {
            if (result.value) {
              _this65.vehicle.deleteVehicle(_formVehicle).subscribe(function (data) {
                _this65.ngOnInit();

                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Deleted!', 'Your file has been deleted.', 'success');
              }, function (error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                  type: 'error',
                  title: 'Oops...',
                  text: 'The vehicle cannot be eliminated, since it is in a reservation',
                  confirmButtonColor: '#EF4023'
                });
              });
            }
          });
        }
      }, {
        key: "editVehicle",
        value: function editVehicle() {
          var _this66 = this;

          this.vehicle.editVehicle(this.oldLicensePlate, this.editFormVehicle).subscribe(function (data) {
            jquery__WEBPACK_IMPORTED_MODULE_4__("#closeModal1").click();
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
              type: 'success',
              title: 'The Vehicle has been updated',
              showConfirmButton: false,
              timer: 1500
            });
            jquery__WEBPACK_IMPORTED_MODULE_4__("#closeModal").click();

            _this66.ngOnInit();
          }, function (error) {});
        }
      }, {
        key: "dataVehicleFormEdit",
        value: function dataVehicleFormEdit(_vehicle) {
          this.oldLicensePlate = _vehicle.license_plate;
          this.editFormVehicle.license_plate = _vehicle.license_plate;
          this.editFormVehicle.brand = _vehicle.brand;
          this.editFormVehicle.model = _vehicle.model;
          this.editFormVehicle.user = this.formUser;
        }
      }, {
        key: "responseSuccess",
        value: function responseSuccess(data) {
          this.success = data.data;
          this.status = "success";
        }
      }, {
        key: "responseError",
        value: function responseError(error) {
          this.error = error.error.error;
          this.status = "error";
        }
      }]);

      return VehicleComponent;
    }();

    VehicleComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: src_app_services_vehicle_service_service__WEBPACK_IMPORTED_MODULE_2__["VehicleServiceService"]
      }];
    };

    VehicleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-vehicle',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./vehicle.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicle/vehicle.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./vehicle.component.css */
      "./src/app/components/vehicle/vehicle.component.css"))["default"]]
    })], VehicleComponent);
    /***/
  },

  /***/
  "./src/app/pipes/headquarter-pipe.pipe.ts":
  /*!************************************************!*\
    !*** ./src/app/pipes/headquarter-pipe.pipe.ts ***!
    \************************************************/

  /*! exports provided: HeadquarterPipePipe */

  /***/
  function srcAppPipesHeadquarterPipePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeadquarterPipePipe", function () {
      return HeadquarterPipePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeadquarterPipePipe = /*#__PURE__*/function () {
      function HeadquarterPipePipe() {
        _classCallCheck(this, HeadquarterPipePipe);
      }

      _createClass(HeadquarterPipePipe, [{
        key: "transform",
        value: function transform(value, arg) {
          if (arg === '' || arg.length < 1) return value;
          var headquarters = [];

          var _iterator6 = _createForOfIteratorHelper(value),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var u = _step6.value;
              var id = u.id_hearquarter + "";

              if (u.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 || u.country.toLowerCase().indexOf(arg.toLowerCase()) > -1 || id.toLowerCase().indexOf(arg.toLowerCase()) > -1 || u.city.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
                headquarters.push(u);
              }

              ;
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }

          ;
          return headquarters;
        }
      }]);

      return HeadquarterPipePipe;
    }();

    HeadquarterPipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'headquarterPipe'
    })], HeadquarterPipePipe);
    /***/
  },

  /***/
  "./src/app/pipes/parking-lot-pipe.pipe.ts":
  /*!************************************************!*\
    !*** ./src/app/pipes/parking-lot-pipe.pipe.ts ***!
    \************************************************/

  /*! exports provided: ParkingLotPipePipe */

  /***/
  function srcAppPipesParkingLotPipePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParkingLotPipePipe", function () {
      return ParkingLotPipePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ParkingLotPipePipe = /*#__PURE__*/function () {
      function ParkingLotPipePipe() {
        _classCallCheck(this, ParkingLotPipePipe);
      }

      _createClass(ParkingLotPipePipe, [{
        key: "transform",
        value: function transform(value, arg) {
          if (arg === '' || arg.length < 1) return value;
          var parkings = [];

          var _iterator7 = _createForOfIteratorHelper(value),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var u = _step7.value;
              var id = u.id_parking_lot + "";

              if (u.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 || u.headquarter.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 || id.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
                parkings.push(u);
              }

              ;
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }

          ;
          return parkings;
        }
      }]);

      return ParkingLotPipePipe;
    }();

    ParkingLotPipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'parkingLotPipe'
    })], ParkingLotPipePipe);
    /***/
  },

  /***/
  "./src/app/pipes/report-pipe.pipe.ts":
  /*!*******************************************!*\
    !*** ./src/app/pipes/report-pipe.pipe.ts ***!
    \*******************************************/

  /*! exports provided: ReportPipePipe */

  /***/
  function srcAppPipesReportPipePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportPipePipe", function () {
      return ReportPipePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ReportPipePipe = /*#__PURE__*/function () {
      function ReportPipePipe() {
        _classCallCheck(this, ReportPipePipe);
      }

      _createClass(ReportPipePipe, [{
        key: "transform",
        value: function transform(value, arg) {
          if (arg === '' || arg.length < 1) return value;
          var report = [];

          var _iterator8 = _createForOfIteratorHelper(value),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var u = _step8.value;

              if (u.end_date_extend == null) {
                u.end_date_extend = "";
              }

              var user = u.reserve.user.email + "";

              if (u.date.toLowerCase().indexOf(arg.toLowerCase()) > -1 || u.end_date_extend.toLowerCase().indexOf(arg.toLowerCase()) > -1 || u.end_time.toLowerCase().indexOf(arg.toLowerCase()) > -1 || u.start_time.toLowerCase().indexOf(arg.toLowerCase()) > -1 || user.toLowerCase().indexOf(arg.toLowerCase()) > -1 || u.space.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 || u.space.zone.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 || u.space.zone.parking_lot.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 || u.space.zone.parking_lot.headquarter.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
                report.push(u);
              }

              ;

              if (u.reserve.vehicle != null) {
                if (u.reserve.vehicle.license_plate.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
                  report.push(u);
                }

                ;
              }
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }

          ;
          return report;
        }
      }]);

      return ReportPipePipe;
    }();

    ReportPipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'ReportPipe'
    })], ReportPipePipe);
    /***/
  },

  /***/
  "./src/app/pipes/space-pipe.pipe.ts":
  /*!******************************************!*\
    !*** ./src/app/pipes/space-pipe.pipe.ts ***!
    \******************************************/

  /*! exports provided: Space, SpacePipePipe */

  /***/
  function srcAppPipesSpacePipePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Space", function () {
      return Space;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpacePipePipe", function () {
      return SpacePipePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Space = function Space() {
      _classCallCheck(this, Space);
    };

    Space = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], Space);

    var SpacePipePipe = /*#__PURE__*/function () {
      function SpacePipePipe() {
        _classCallCheck(this, SpacePipePipe);
      }

      _createClass(SpacePipePipe, [{
        key: "transform",
        value: function transform(value, arg) {
          if (arg === '' || arg.length < 1) return value;
          var space = [];

          var _iterator9 = _createForOfIteratorHelper(value),
              _step9;

          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var u = _step9.value;

              if (u.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 || u.type.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
                space.push(u);
              }

              ;
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }

          ;
          return space;
        }
      }]);

      return SpacePipePipe;
    }();

    SpacePipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'spacePipe'
    })], SpacePipePipe);
    /***/
  },

  /***/
  "./src/app/pipes/user-pipe.pipe.ts":
  /*!*****************************************!*\
    !*** ./src/app/pipes/user-pipe.pipe.ts ***!
    \*****************************************/

  /*! exports provided: UserPipePipe */

  /***/
  function srcAppPipesUserPipePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPipePipe", function () {
      return UserPipePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UserPipePipe = /*#__PURE__*/function () {
      function UserPipePipe() {
        _classCallCheck(this, UserPipePipe);
      }

      _createClass(UserPipePipe, [{
        key: "transform",
        value: function transform(value, arg) {
          if (arg === '' || arg.length < 1) return value;
          var user = [];

          var _iterator10 = _createForOfIteratorHelper(value),
              _step10;

          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var u = _step10.value;

              if (u.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 || u.email.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
                user.push(u);
              }

              ;
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }

          ;
          return user;
        }
      }]);

      return UserPipePipe;
    }();

    UserPipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'userPipe'
    })], UserPipePipe);
    /***/
  },

  /***/
  "./src/app/pipes/vehicle-pipe.pipe.ts":
  /*!********************************************!*\
    !*** ./src/app/pipes/vehicle-pipe.pipe.ts ***!
    \********************************************/

  /*! exports provided: VehiclePipePipe */

  /***/
  function srcAppPipesVehiclePipePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VehiclePipePipe", function () {
      return VehiclePipePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var VehiclePipePipe = /*#__PURE__*/function () {
      function VehiclePipePipe() {
        _classCallCheck(this, VehiclePipePipe);
      }

      _createClass(VehiclePipePipe, [{
        key: "transform",
        value: function transform(value, arg) {
          if (arg === '' || arg.length < 1) return value;
          var vehicles = [];

          var _iterator11 = _createForOfIteratorHelper(value),
              _step11;

          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              var v = _step11.value;
              var id = v.licence_plate + "";

              if (v.brand.toLowerCase().indexOf(arg.toLowerCase()) > -1 || v.model.toLowerCase().indexOf(arg.toLowerCase()) > -1 || id.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
                vehicles.push(v);
              }

              ;
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }

          ;
          return vehicles;
        }
      }]);

      return VehiclePipePipe;
    }();

    VehiclePipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'vehiclePipe'
    })], VehiclePipePipe);
    /***/
  },

  /***/
  "./src/app/pipes/zone-pipe.pipe.ts":
  /*!*****************************************!*\
    !*** ./src/app/pipes/zone-pipe.pipe.ts ***!
    \*****************************************/

  /*! exports provided: ZonePipePipe */

  /***/
  function srcAppPipesZonePipePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZonePipePipe", function () {
      return ZonePipePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ZonePipePipe = /*#__PURE__*/function () {
      function ZonePipePipe() {
        _classCallCheck(this, ZonePipePipe);
      }

      _createClass(ZonePipePipe, [{
        key: "transform",
        value: function transform(value, arg) {
          if (arg === '' || arg.length < 1) return value;
          var zone = [];

          var _iterator12 = _createForOfIteratorHelper(value),
              _step12;

          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var u = _step12.value;

              if (u.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 || u.parking_lot.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
                zone.push(u);
              }

              ;
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }

          ;
          return zone;
        }
      }]);

      return ZonePipePipe;
    }();

    ZonePipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'zonePipe'
    })], ZonePipePipe);
    /***/
  },

  /***/
  "./src/app/services/admin-after.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/admin-after.service.ts ***!
    \*************************************************/

  /*! exports provided: AdminAfterService */

  /***/
  function srcAppServicesAdminAfterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminAfterService", function () {
      return AdminAfterService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");

    var AdminAfterService = /*#__PURE__*/function () {
      function AdminAfterService(auth, router) {
        var _this67 = this;

        _classCallCheck(this, AdminAfterService);

        this.auth = auth;
        this.router = router;
        this.auth.adminStatus.subscribe(function (value) {
          return _this67.admin = value;
        });
      }

      _createClass(AdminAfterService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (!this.admin) {
            this.router.navigateByUrl('');
          }

          return this.admin;
        }
      }]);

      return AdminAfterService;
    }();

    AdminAfterService.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AdminAfterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AdminAfterService);
    /***/
  },

  /***/
  "./src/app/services/after-login.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/after-login.service.ts ***!
    \*************************************************/

  /*! exports provided: AfterLoginService */

  /***/
  function srcAppServicesAfterLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AfterLoginService", function () {
      return AfterLoginService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");

    var AfterLoginService = /*#__PURE__*/function () {
      function AfterLoginService(auth, router) {
        var _this68 = this;

        _classCallCheck(this, AfterLoginService);

        this.auth = auth;
        this.router = router;
        this.auth.authStatus.subscribe(function (value) {
          return _this68.login = value;
        });
      }

      _createClass(AfterLoginService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (!this.login) {
            this.router.navigateByUrl('');
          }

          return this.login;
        }
      }]);

      return AfterLoginService;
    }();

    AfterLoginService.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AfterLoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AfterLoginService);
    /***/
  },

  /***/
  "./src/app/services/api.modules.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/api.modules.ts ***!
    \*****************************************/

  /*! exports provided: domain */

  /***/
  function srcAppServicesApiModulesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "domain", function () {
      return domain;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var domain = "https://avantiparking-1590019036260.azurewebsites.net"; //export const domain: string="http://localhost:8080";

    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService() {
        _classCallCheck(this, AuthService);

        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.authStatus = this.loggedIn.asObservable();
        this.admin = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.adminStatus = this.admin.asObservable();
      }

      _createClass(AuthService, [{
        key: "changeAuthStatus",
        value: function changeAuthStatus(value) {
          this.loggedIn.next(value);
        }
      }, {
        key: "changeAdminStatus",
        value: function changeAdminStatus(value) {
          this.admin.next(value);
        }
      }]);

      return AuthService;
    }();

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/before-login.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/before-login.service.ts ***!
    \**************************************************/

  /*! exports provided: BeforeLoginService */

  /***/
  function srcAppServicesBeforeLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BeforeLoginService", function () {
      return BeforeLoginService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");

    var BeforeLoginService = /*#__PURE__*/function () {
      function BeforeLoginService(auth, router) {
        var _this69 = this;

        _classCallCheck(this, BeforeLoginService);

        this.auth = auth;
        this.router = router;
        this.auth.authStatus.subscribe(function (value) {
          return _this69.loggedIn = value;
        });
      }

      _createClass(BeforeLoginService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (this.loggedIn) {
            this.router.navigateByUrl('');
          }

          return !this.loggedIn;
        }
      }]);

      return BeforeLoginService;
    }();

    BeforeLoginService.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    BeforeLoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BeforeLoginService);
    /***/
  },

  /***/
  "./src/app/services/dashboard-service.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/dashboard-service.service.ts ***!
    \*******************************************************/

  /*! exports provided: DashboardServiceService */

  /***/
  function srcAppServicesDashboardServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardServiceService", function () {
      return DashboardServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _api_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api.modules */
    "./src/app/services/api.modules.ts");

    var DashboardServiceService = /*#__PURE__*/function () {
      function DashboardServiceService(http) {
        _classCallCheck(this, DashboardServiceService);

        this.http = http;
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
        });
        this.url = _api_modules__WEBPACK_IMPORTED_MODULE_3__["domain"];
      } //recibe id de zona y fecha


      _createClass(DashboardServiceService, [{
        key: "listTimes",
        value: function listTimes(id, date) {
          return this.http.get("".concat(this.url, "/api/dashboard/") + id + "/" + date, {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "createReserve",
        value: function createReserve(created_at, user, vehicle, detail) {
          return this.http.post("".concat(this.url, "/api/reserves"), detail, {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "createReserve2",
        value: function createReserve2(detail) {
          return this.http.post("".concat(this.url, "/api/reserves/extended"), detail, {
            headers: this.httpHeaders
          });
        }
      }]);

      return DashboardServiceService;
    }();

    DashboardServiceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    DashboardServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DashboardServiceService);
    /***/
  },

  /***/
  "./src/app/services/my-reserves-service.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/my-reserves-service.service.ts ***!
    \*********************************************************/

  /*! exports provided: MyReservesServiceService */

  /***/
  function srcAppServicesMyReservesServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyReservesServiceService", function () {
      return MyReservesServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _api_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api.modules */
    "./src/app/services/api.modules.ts");

    var MyReservesServiceService = /*#__PURE__*/function () {
      function MyReservesServiceService(http) {
        _classCallCheck(this, MyReservesServiceService);

        this.http = http;
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
        });
        this.url = _api_modules__WEBPACK_IMPORTED_MODULE_3__["domain"];
      }

      _createClass(MyReservesServiceService, [{
        key: "listUserReserves",
        value: function listUserReserves(user_id) {
          return this.http.get("".concat(this.url, "/api/reserves/user/").concat(user_id), {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "listUserValidReservesDetails",
        value: function listUserValidReservesDetails(reserve_id) {
          return this.http.get("".concat(this.url, "/api/reserves/valid/").concat(reserve_id), {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "listUserUnValidReservesDetails",
        value: function listUserUnValidReservesDetails(reserve_id) {
          return this.http.get("".concat(this.url, "/api/reserves/unvalid/").concat(reserve_id), {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "cancelReserve",
        value: function cancelReserve(detail_id) {
          return this.http["delete"]("".concat(this.url, "/api/reserves/").concat(detail_id), {
            headers: this.httpHeaders
          });
        }
      }]);

      return MyReservesServiceService;
    }();

    MyReservesServiceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    MyReservesServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MyReservesServiceService);
    /***/
  },

  /***/
  "./src/app/services/notifications.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/notifications.service.ts ***!
    \***************************************************/

  /*! exports provided: NotificationsService */

  /***/
  function srcAppServicesNotificationsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsService", function () {
      return NotificationsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _api_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api.modules */
    "./src/app/services/api.modules.ts");

    var NotificationsService = /*#__PURE__*/function () {
      function NotificationsService(http) {
        _classCallCheck(this, NotificationsService);

        this.http = http;
        this.baseUrl = "http://localhost:8080/api/email";
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
        });
        this.url = _api_modules__WEBPACK_IMPORTED_MODULE_3__["domain"];
      }

      _createClass(NotificationsService, [{
        key: "sendEmail",
        value: function sendEmail(data) {
          return this.http.post("".concat(this.url, "/api/email"), data, {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "userNotifications",
        value: function userNotifications(id) {
          return this.http.get("".concat(this.url, "/api/email/") + id, {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "changeViewed",
        value: function changeViewed(id) {
          return this.http.put("".concat(this.url, "/api/email/") + id, id, {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "deleteNotification",
        value: function deleteNotification(id) {
          return this.http["delete"]("".concat(this.url, "/api/email/") + id, {
            headers: this.httpHeaders
          });
        }
      }]);

      return NotificationsService;
    }();

    NotificationsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    NotificationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NotificationsService);
    /***/
  },

  /***/
  "./src/app/services/reports.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/reports.service.ts ***!
    \*********************************************/

  /*! exports provided: ReportsService */

  /***/
  function srcAppServicesReportsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportsService", function () {
      return ReportsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _api_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api.modules */
    "./src/app/services/api.modules.ts");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! xlsx */
    "./node_modules/xlsx/xlsx.js");
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_5__);

    var ReportsService = /*#__PURE__*/function () {
      function ReportsService(http) {
        _classCallCheck(this, ReportsService);

        this.http = http;
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
        });
        this.fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        this.fileExtension = '.xlsx';
        this.url = _api_modules__WEBPACK_IMPORTED_MODULE_3__["domain"];
      }

      _createClass(ReportsService, [{
        key: "exportExcel",
        value: function exportExcel(jsonData, fileName) {
          var ws = xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].json_to_sheet(jsonData);
          var wb = {
            Sheets: {
              'data': ws
            },
            SheetNames: ['data']
          };
          var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_5__["write"](wb, {
            bookType: 'xlsx',
            type: 'array'
          });
          this.saveExcelFile(excelBuffer, fileName);
        }
      }, {
        key: "saveExcelFile",
        value: function saveExcelFile(buffer, fileName) {
          var data = new Blob([buffer], {
            type: this.fileType
          });
          file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"](data, fileName + this.fileExtension);
        }
      }, {
        key: "listReservation",
        value: function listReservation() {
          return this.http.get("".concat(this.url, "/api/reservations"), {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "generateReport",
        value: function generateReport(date1, date2) {
          return this.http.get("".concat(this.url, "/api/generate/report/").concat(date1, "/").concat(date2), {
            headers: this.httpHeaders
          });
        }
      }]);

      return ReportsService;
    }();

    ReportsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ReportsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ReportsService);
    /***/
  },

  /***/
  "./src/app/services/service-headquarter.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/service-headquarter.service.ts ***!
    \*********************************************************/

  /*! exports provided: ServiceHeadquarterService */

  /***/
  function srcAppServicesServiceHeadquarterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceHeadquarterService", function () {
      return ServiceHeadquarterService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _api_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api.modules */
    "./src/app/services/api.modules.ts");

    var ServiceHeadquarterService = /*#__PURE__*/function () {
      function ServiceHeadquarterService(http) {
        _classCallCheck(this, ServiceHeadquarterService);

        this.http = http;
        this.baseUrl = "http://localhost:8080/api/headquarter";
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
        });
        this.url = _api_modules__WEBPACK_IMPORTED_MODULE_3__["domain"]; // se asigna el valor de la url
      }

      _createClass(ServiceHeadquarterService, [{
        key: "getByID",
        value: function getByID(id) {
          return this.http.get("".concat(this.url, "/api/headquarter/").concat(id), {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "addHeadquarter",
        value: function addHeadquarter(data) {
          return this.http.post("".concat(this.url, "/api/headquarter"), data, {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "listHeadquarter",
        value: function listHeadquarter() {
          return this.http.get("".concat(this.url, "/api/headquarter"), {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "editHeadquarter",
        value: function editHeadquarter(id, data) {
          return this.http.put("".concat(this.url, "/api/headquarter/") + id, data, {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "deleteHeadquarter",
        value: function deleteHeadquarter(data) {
          return this.http["delete"]("".concat(this.url, "/api/headquarter/") + data, {
            headers: this.httpHeaders
          });
        }
      }]);

      return ServiceHeadquarterService;
    }();

    ServiceHeadquarterService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ServiceHeadquarterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ServiceHeadquarterService);
    /***/
  },

  /***/
  "./src/app/services/service-parking-lot.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/service-parking-lot.service.ts ***!
    \*********************************************************/

  /*! exports provided: ServiceParkingLotService */

  /***/
  function srcAppServicesServiceParkingLotServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceParkingLotService", function () {
      return ServiceParkingLotService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _api_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api.modules */
    "./src/app/services/api.modules.ts");

    var ServiceParkingLotService = /*#__PURE__*/function () {
      function ServiceParkingLotService(http) {
        _classCallCheck(this, ServiceParkingLotService);

        this.http = http;
        this.baseUrl = "http://localhost:8080/api/parking_lot";
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
        });
        this.url = _api_modules__WEBPACK_IMPORTED_MODULE_3__["domain"];
      }

      _createClass(ServiceParkingLotService, [{
        key: "addParkingLot",
        value: function addParkingLot(data) {
          return this.http.post("".concat(this.url, "/api/parking_lot"), data, {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "listParkingLot",
        value: function listParkingLot() {
          return this.http.get("".concat(this.url, "/api/parking_lot"), {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "listParkingLotHQ",
        value: function listParkingLotHQ(id) {
          return this.http.get("".concat(this.url, "/api/parking_lot/hq/") + id, {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "editParkingLot",
        value: function editParkingLot(id, data) {
          return this.http.put("".concat(this.url, "/api/parking_lot/") + id, data, {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "deleteParkingLot",
        value: function deleteParkingLot(data) {
          return this.http["delete"]("".concat(this.url, "/api/parking_lot/") + data, {
            headers: this.httpHeaders
          });
        }
      }]);

      return ServiceParkingLotService;
    }();

    ServiceParkingLotService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ServiceParkingLotService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ServiceParkingLotService);
    /***/
  },

  /***/
  "./src/app/services/service-space.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/service-space.service.ts ***!
    \***************************************************/

  /*! exports provided: ServiceSpaceService */

  /***/
  function srcAppServicesServiceSpaceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceSpaceService", function () {
      return ServiceSpaceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _api_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api.modules */
    "./src/app/services/api.modules.ts");

    var ServiceSpaceService = /*#__PURE__*/function () {
      function ServiceSpaceService(http) {
        _classCallCheck(this, ServiceSpaceService);

        this.http = http;
        this.baseUrl = "http://localhost:8080/api/space";
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
        });
        this.url = _api_modules__WEBPACK_IMPORTED_MODULE_3__["domain"];
      }

      _createClass(ServiceSpaceService, [{
        key: "addSpace",
        value: function addSpace(data) {
          return this.http.post("".concat(this.url, "/api/space"), data, {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "listSpace",
        value: function listSpace() {
          return this.http.get("".concat(this.url, "/api/space"), {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "listSpaces",
        value: function listSpaces(data) {
          return this.http.get("".concat(this.url, "/api/space/zone/") + data, {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "editSpace",
        value: function editSpace(id, data) {
          return this.http.put("".concat(this.url, "/api/space/") + id, data, {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "deleteSpace",
        value: function deleteSpace(data) {
          return this.http["delete"]("".concat(this.url, "/api/space/") + data, {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "deleteAllZoneSpaces",
        value: function deleteAllZoneSpaces(data) {
          return this.http["delete"]("".concat(this.url, "/api/space/") + data + "/all", {
            headers: this.httpHeaders
          });
        }
      }]);

      return ServiceSpaceService;
    }();

    ServiceSpaceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ServiceSpaceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ServiceSpaceService);
    /***/
  },

  /***/
  "./src/app/services/service-zone.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/service-zone.service.ts ***!
    \**************************************************/

  /*! exports provided: ServiceZoneService */

  /***/
  function srcAppServicesServiceZoneServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceZoneService", function () {
      return ServiceZoneService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _api_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api.modules */
    "./src/app/services/api.modules.ts");

    var ServiceZoneService = /*#__PURE__*/function () {
      function ServiceZoneService(http) {
        _classCallCheck(this, ServiceZoneService);

        this.http = http;
        this.baseUrl = "http://localhost:8080/api/zone";
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
        });
        this.url = _api_modules__WEBPACK_IMPORTED_MODULE_3__["domain"];
      }

      _createClass(ServiceZoneService, [{
        key: "addZone",
        value: function addZone(data) {
          return this.http.post("".concat(this.url, "/api/zone"), data, {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "listZone",
        value: function listZone() {
          return this.http.get("".concat(this.url, "/api/zone"), {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "listZoneByPKLot",
        value: function listZoneByPKLot(id) {
          return this.http.get("".concat(this.url, "/api/zone/lot/") + id, {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "editZone",
        value: function editZone(id, data) {
          return this.http.put("".concat(this.url, "/api/zone/") + id, data, {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "deleteZone",
        value: function deleteZone(data) {
          return this.http["delete"]("".concat(this.url, "/api/zone/") + data, {
            headers: this.httpHeaders
          });
        }
      }]);

      return ServiceZoneService;
    }();

    ServiceZoneService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ServiceZoneService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ServiceZoneService);
    /***/
  },

  /***/
  "./src/app/services/token.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/token.service.ts ***!
    \*******************************************/

  /*! exports provided: TokenService */

  /***/
  function srcAppServicesTokenServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenService", function () {
      return TokenService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TokenService = /*#__PURE__*/function () {
      function TokenService() {
        _classCallCheck(this, TokenService);
      }

      _createClass(TokenService, [{
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem("accessToken");
        }
      }]);

      return TokenService;
    }();

    TokenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TokenService);
    /***/
  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./token.service */
    "./src/app/services/token.service.ts");
    /* harmony import */


    var _api_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./api.modules */
    "./src/app/services/api.modules.ts");

    var UserService = /*#__PURE__*/function () {
      function UserService(http, token) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.token = token;
        this.baseUrl = _api_modules__WEBPACK_IMPORTED_MODULE_4__["domain"]; //public oauth2UrlRedirect = 'http://localhost:4200/oauth2/redirect';                                                   
        //public GOOGLE_AUTH_URL = this.baseUrl + '/oauth2/authorize/google?redirect_uri=' + this.oauth2UrlRedirect;                

        this.oauth2UrlRedirect = 'https://test-avantiparking.web.app/oauth2/redirect'; //Cuando lo prueben local, ponel el que esta arriba comentado

        this.GOOGLE_AUTH_URL = this.baseUrl + '/oauth2/authorize/google?redirect_uri=' + this.oauth2UrlRedirect;
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Authorization': 'Bearer ' + this.token.getToken()
        });
        this.url = _api_modules__WEBPACK_IMPORTED_MODULE_4__["domain"];
      }

      _createClass(UserService, [{
        key: "loadImg",
        value: function loadImg() {
          return this.http.get("".concat(this.url, "/api/user"), {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "getAll",
        value: function getAll() {
          return this.http.get("".concat(this.url, "/api/users"), {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "modify",
        value: function modify(data) {
          return this.http.put("".concat(this.url, "/api/user/").concat(data.id), data, {
            headers: this.httpHeaders
          });
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/app/services/vehicle-service.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/vehicle-service.service.ts ***!
    \*****************************************************/

  /*! exports provided: VehicleServiceService */

  /***/
  function srcAppServicesVehicleServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VehicleServiceService", function () {
      return VehicleServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _api_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api.modules */
    "./src/app/services/api.modules.ts");

    var VehicleServiceService = /*#__PURE__*/function () {
      function VehicleServiceService(http) {
        _classCallCheck(this, VehicleServiceService);

        this.http = http;
        this.baseUrl = "http://localhost:8080/api/vehicle";
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
        });
        this.url = _api_modules__WEBPACK_IMPORTED_MODULE_3__["domain"];
      }

      _createClass(VehicleServiceService, [{
        key: "getByPlate",
        value: function getByPlate(plate) {
          return this.http.get("".concat(this.url, "/api/vehicle/").concat(plate), {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "addVehicle",
        value: function addVehicle(data) {
          return this.http.post("".concat(this.url, "/api/vehicle"), data, {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "listVehicle",
        value: function listVehicle(plate) {
          return this.http.get("".concat(this.url, "/api/vehicle/u/").concat(plate), {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "editVehicle",
        value: function editVehicle(plate, data) {
          return this.http.put("".concat(this.url, "/api/vehicle/") + plate, data, {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "deleteVehicle",
        value: function deleteVehicle(data) {
          return this.http["delete"]("".concat(this.url, "/api/vehicle/") + data, {
            headers: this.httpHeaders
          });
        }
      }]);

      return VehicleServiceService;
    }();

    VehicleServiceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    VehicleServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], VehicleServiceService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Thony\Desktop\AvantiParking\FrondEndAvantiParking\AvantiParking\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** fs (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  2:
  /*!************************!*\
    !*** crypto (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  3:
  /*!************************!*\
    !*** stream (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map