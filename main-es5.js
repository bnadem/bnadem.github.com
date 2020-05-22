function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
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
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/dashboard/dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var _pages_country_country_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/country/country.component */
    "./src/app/pages/country/country.component.ts");
    /* harmony import */


    var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/not-found/not-found.component */
    "./src/app/pages/not-found/not-found.component.ts");

    var routes = [{
      path: '',
      component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    }, {
      path: 'country/:name',
      component: _pages_country_country_component__WEBPACK_IMPORTED_MODULE_3__["CountryComponent"]
    }, {
      path: '**',
      component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]
        }]
      }], null, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _layouts_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./layouts/layout.component */
    "./src/app/layouts/layout.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-layout");
        }
      },
      directives: [_layouts_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"]],
      styles: [".card[_ngcontent-%COMP%] {\n  border: none !important;\n  background-color: rgba(15, 156, 230, 0.05) !important;\n  border: 1px solid rgba(15, 156, 230, 0.35) !important;\n  box-shadow: inset 0 0 25px rgba(15, 156, 230, 0.25) !important;\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _layouts_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./layouts/layout.component */
    "./src/app/layouts/layout.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
    /* harmony import */


    var _layouts_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./layouts/topbar/topbar.component */
    "./src/app/layouts/topbar/topbar.component.ts");
    /* harmony import */


    var _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./layouts/navbar/navbar.component */
    "./src/app/layouts/navbar/navbar.component.ts");
    /* harmony import */


    var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./layouts/footer/footer.component */
    "./src/app/layouts/footer/footer.component.ts");
    /* harmony import */


    var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/dashboard/dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var _pages_country_country_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/country/country.component */
    "./src/app/pages/country/country.component.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/not-found/not-found.component */
    "./src/app/pages/not-found/not-found.component.ts");
    /* harmony import */


    var _shared_countup_countup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./shared/countup/countup.component */
    "./src/app/shared/countup/countup.component.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _layouts_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./layouts/sidebar/sidebar.component */
    "./src/app/layouts/sidebar/sidebar.component.ts");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
    /* harmony import */


    var primeng_chart__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! primeng/chart */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-chart.js");
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! primeng/dropdown */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");
    /* harmony import */


    var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! primeng/scrollpanel */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-scrollpanel.js");
    /* harmony import */


    var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! primeng/virtualscroller */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-virtualscroller.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _directives_lazy_for_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./directives/lazy-for.directive */
    "./src/app/directives/lazy-for.directive.ts");

    var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {};

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PERFECT_SCROLLBAR_CONFIG"],
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_19__["ModalModule"].forRoot(), _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].production,
        registrationStrategy: 'registerImmediately'
      }), _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"], primeng_table__WEBPACK_IMPORTED_MODULE_21__["TableModule"], primeng_chart__WEBPACK_IMPORTED_MODULE_22__["ChartModule"], primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_24__["ScrollPanelModule"], primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_25__["VirtualScrollerModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_23__["DropdownModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _layouts_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"], _layouts_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_10__["TopbarComponent"], _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"], _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"], _pages_country_country_component__WEBPACK_IMPORTED_MODULE_14__["CountryComponent"], _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__["NotFoundComponent"], _shared_countup_countup_component__WEBPACK_IMPORTED_MODULE_18__["CountupComponent"], _layouts_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_20__["SidebarComponent"], _directives_lazy_for_directive__WEBPACK_IMPORTED_MODULE_27__["LazyForDirective"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_19__["ModalModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__["ServiceWorkerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"], primeng_table__WEBPACK_IMPORTED_MODULE_21__["TableModule"], primeng_chart__WEBPACK_IMPORTED_MODULE_22__["ChartModule"], primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_24__["ScrollPanelModule"], primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_25__["VirtualScrollerModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_23__["DropdownModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _layouts_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"], _layouts_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_10__["TopbarComponent"], _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"], _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"], _pages_country_country_component__WEBPACK_IMPORTED_MODULE_14__["CountryComponent"], _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__["NotFoundComponent"], _shared_countup_countup_component__WEBPACK_IMPORTED_MODULE_18__["CountupComponent"], _layouts_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_20__["SidebarComponent"], _directives_lazy_for_directive__WEBPACK_IMPORTED_MODULE_27__["LazyForDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_19__["ModalModule"].forRoot(), _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__["ServiceWorkerModule"].register('ngsw-worker.js', {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].production,
            registrationStrategy: 'registerImmediately'
          }), _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"], primeng_table__WEBPACK_IMPORTED_MODULE_21__["TableModule"], primeng_chart__WEBPACK_IMPORTED_MODULE_22__["ChartModule"], primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_24__["ScrollPanelModule"], primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_25__["VirtualScrollerModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_23__["DropdownModule"]],
          providers: [{
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/services/getdata.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/core/services/getdata.service.ts ***!
    \**************************************************/

  /*! exports provided: GetdataService */

  /***/
  function srcAppCoreServicesGetdataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetdataService", function () {
      return GetdataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* Array(200) */

    /* [0 … 99] */

    /* 0: */

    /* active: 49844 */

    /* cases: 64059 */

    /* casesPerOneMillion: 1370 */

    /* country: "Spain" */

    /* critical: 4165 */

    /* deaths: 4858 */

    /* deathsPerOneMillion: 104 */

    /* recovered: 9357 */

    /* todayCases: 6273 */

    /* todayDeaths: 493 */


    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"];

    var GetdataService = /*#__PURE__*/function () {
      function GetdataService(_http) {
        _classCallCheck(this, GetdataService);

        this._http = _http;
        /* private host = "https://api.coronastatistics.live" */

        this.hostTimeLine = "https://pomber.github.io/covid19/timeseries.json";
        this.host = "https://api.thevirustracker.com/free-api?countryTotals=ALL";
      }
      /* private host = "assets/data.json"; */

      /* private host = "https://www.bing.com/covid/data" */


      _createClass(GetdataService, [{
        key: "getAll",
        value: function getAll(type) {
          /* return this._http.get<Country>(`${this.host}/countries?sort=${type}`).pipe( */
          return this._http.get("".concat(this.host)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "getAllData",
        value: function getAllData(type) {
          /* return this._http.get<Country>(`${this.host}/countries?sort=${type}`).pipe( */
          return this._http.get("".concat(this.host)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(5), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "getCountry",
        value: function getCountry(name) {
          return this._http.get("".concat(this.host, "/countries/").concat(name)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "getTimeline",
        value: function getTimeline() {
          /* return this._http.get(`${this.host}/timeline`).pipe( */
          return this._http.get("".concat(this.hostTimeLine)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "getTimelineCountry",
        value: function getTimelineCountry(country) {
          return this._http.get("".concat(this.host, "/timeline/").concat(country)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "getTimelineGlobal",
        value: function getTimelineGlobal() {
          /* return this._http.get(`${this.host}/timeline/global`).pipe( */

          /* const http$ = this._http.get(`${this.host}`); */
          var http$ = this._http.get("".concat(this.hostTimeLine));

          http$.subscribe(
          /* res => console.log('HTTP response', res), */
          function (res) {
            return console.log('HTTP response');
          }, function (err) {
            return console.log('HTTP Error', err);
          }, function () {
            return console.log('HTTP request completed.');
          });
          return http$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError)
          /* catchError(res=> {console.log(res);}) */
          );
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          var errorMessage = '';

          if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
          } else {
            // Get server-side error
            errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
          }

          window.alert("Please check your internet connection!.");
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
        }
      }]);

      return GetdataService;
    }();

    GetdataService.ɵfac = function GetdataService_Factory(t) {
      return new (t || GetdataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    GetdataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GetdataService,
      factory: GetdataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetdataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/directives/lazy-for.directive.ts":
  /*!**************************************************!*\
    !*** ./src/app/directives/lazy-for.directive.ts ***!
    \**************************************************/

  /*! exports provided: LazyForDirective */

  /***/
  function srcAppDirectivesLazyForDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LazyForDirective", function () {
      return LazyForDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LazyForDirective = /*#__PURE__*/function () {
      function LazyForDirective(vcr, tpl, iterableDiffers) {
        _classCallCheck(this, LazyForDirective);

        this.vcr = vcr;
        this.tpl = tpl;
        this.iterableDiffers = iterableDiffers;
        this.list = [];
        this.initialized = false;
        this.firstUpdate = true;
        this.lastChangeTriggeredByScroll = false;
      }

      _createClass(LazyForDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.templateElem = this.vcr.element.nativeElement;
          this.lazyForContainer = this.templateElem.parentElement; //Adding an event listener will trigger ngDoCheck whenever the event fires so we don't actually need to call
          //update here.

          this.lazyForContainer.addEventListener('scroll', function () {
            _this.lastChangeTriggeredByScroll = true;
          });
          this.initialized = true;
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this.differ && Array.isArray(this.list)) {
            if (this.lastChangeTriggeredByScroll) {
              this.update();
              this.lastChangeTriggeredByScroll = false;
            } else {
              var changes = this.differ.diff(this.list);

              if (changes !== null) {
                this.update();
              }
            }
          }
        }
        /**
         * List update
         *
         * @returns {void}
         */

      }, {
        key: "update",
        value: function update() {
          //Can't run the first update unless there is an element in the list
          if (this.list.length === 0) {
            this.vcr.clear();

            if (!this.firstUpdate) {
              this.beforeListElem.style.height = '0';
              this.afterListElem.style.height = '0';
            }

            return;
          }

          if (this.firstUpdate) {
            this.onFirstUpdate();
          }

          var listHeight = this.lazyForContainer.clientHeight;
          var scrollTop = this.lazyForContainer.scrollTop; //The height of anything inside the container but above the lazyFor content

          var fixedHeaderHeight = this.beforeListElem.getBoundingClientRect().top - this.beforeListElem.scrollTop - (this.lazyForContainer.getBoundingClientRect().top - this.lazyForContainer.scrollTop); //This needs to run after the scrollTop is retrieved.

          this.vcr.clear();
          var listStartI = Math.floor((scrollTop - fixedHeaderHeight) / this.itemHeight);
          listStartI = this.limitToRange(listStartI, 0, this.list.length);
          var listEndI = Math.ceil((scrollTop - fixedHeaderHeight + listHeight) / this.itemHeight);
          listEndI = this.limitToRange(listEndI, -1, this.list.length - 1);

          for (var i = listStartI; i <= listEndI; i++) {
            this.vcr.createEmbeddedView(this.tpl, {
              $implicit: this.list[i],
              index: i
            });
          }

          this.beforeListElem.style.height = "".concat(listStartI * this.itemHeight, "px");
          this.afterListElem.style.height = "".concat((this.list.length - listEndI - 1) * this.itemHeight, "px");
        }
        /**
         * First update.
         *
         * @returns {void}
         */

      }, {
        key: "onFirstUpdate",
        value: function onFirstUpdate() {
          var sampleItemElem;

          if (this.itemHeight === undefined || this.itemTagName === undefined) {
            this.vcr.createEmbeddedView(this.tpl, {
              $implicit: this.list[0],
              index: 0
            });
            sampleItemElem = this.templateElem.nextSibling;
          }

          if (this.itemHeight === undefined) {
            this.itemHeight = sampleItemElem.clientHeight;
          }

          if (this.itemTagName === undefined) {
            this.itemTagName = sampleItemElem.tagName;
          }

          this.beforeListElem = document.createElement(this.itemTagName);
          this.templateElem.parentElement.insertBefore(this.beforeListElem, this.templateElem);
          this.afterListElem = document.createElement(this.itemTagName);
          this.templateElem.parentElement.insertBefore(this.afterListElem, this.templateElem.nextSibling); // If you want to use <li> elements

          if (this.itemTagName.toLowerCase() === 'li') {
            this.beforeListElem.style.listStyleType = 'none';
            this.afterListElem.style.listStyleType = 'none';
          }

          this.firstUpdate = false;
        }
        /**
         * Limit To Range
         *
         * @param {number} num - Element number.
         * @param {number} min - Min element number.
         * @param {number} max - Max element number.
         *
         * @returns {number}
         */

      }, {
        key: "limitToRange",
        value: function limitToRange(num, min, max) {
          return Math.max(Math.min(num, max), min);
        }
      }, {
        key: "lazyForOf",
        set: function set(list) {
          this.list = list;

          if (list) {
            this.differ = this.iterableDiffers.find(list).create();

            if (this.initialized) {
              this.update();
            }
          }
        }
      }]);

      return LazyForDirective;
    }();

    LazyForDirective.ɵfac = function LazyForDirective_Factory(t) {
      return new (t || LazyForDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]));
    };

    LazyForDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: LazyForDirective,
      selectors: [["", "lazyFor", ""]],
      inputs: {
        lazyForOf: "lazyForOf"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LazyForDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[lazyFor]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]
        }];
      }, {
        lazyForOf: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/layouts/footer/footer.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/layouts/footer/footer.component.ts ***!
    \****************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppLayoutsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

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

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 20,
      vars: 0,
      consts: [[1, "footer"], [1, "container-fluid"], [1, "row"], [1, "col-md-6"], [1, "text-danger"], [1, "fas", "fa-heart"], ["href", "https://google.com"], [1, "text-md-right", "footer-links", "d-none", "d-sm-block"], ["href", "https://github.com/bnadem"], [1, "text-blue"], [1, "fab", "fa-osi"], ["href", "https://ko-fi.com/abdelillahfarka"], [1, "text-warning"], [1, "fas", "fa-mug-hot"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " 2020 \xA9 Crafted with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Abdel Illah Farka");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Proudly Open Source");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Buy me a Coffee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".custom-navbar[_ngcontent-%COMP%] {\n  height: 50px;\n  padding: 0.25rem 0.5rem;\n  border: 0;\n  background-color: #161e25;\n  box-shadow: 0 0 1rem rgba(22, 30, 37, 0.5), 0 0 0.25rem rgba(22, 30, 37, 0.5);\n  padding: 0.25rem 0.5rem;\n  border: 0;\n  background-color: #161e25;\n  box-shadow: 0 0 1rem rgba(22, 30, 37, 0.5), 0 0 0.25rem rgba(22, 30, 37, 0.5);\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layouts/layout.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/layouts/layout.component.ts ***!
    \*********************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppLayoutsLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./topbar/topbar.component */
    "./src/app/layouts/topbar/topbar.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/layouts/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/layouts/sidebar/sidebar.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/layouts/footer/footer.component.ts");

    var LayoutComponent = /*#__PURE__*/function () {
      function LayoutComponent() {
        _classCallCheck(this, LayoutComponent);

        this.showMobileMenu = false;
      }

      _createClass(LayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }]);

      return LayoutComponent;
    }();

    LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
      return new (t || LayoutComponent)();
    };

    LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      decls: 7,
      vars: 0,
      consts: [["id", "topnav", 2, "background-color", "red"], [1, "wrapper"], [2, "float", "left"]],
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-topbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-sidebar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
        }
      },
      directives: [_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_1__["TopbarComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-layout',
          templateUrl: './layout.component.html',
          styleUrls: ['./layout.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layouts/navbar/navbar.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/layouts/navbar/navbar.component.ts ***!
    \****************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppLayoutsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.showMobileMenu = false;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          // activate menu item based on location
          var links = document.getElementsByClassName('side-nav-link-ref');
          var matchingMenuItem = null; // tslint:disable-next-line: prefer-for-of

          for (var i = 0; i < links.length; i++) {
            // tslint:disable-next-line: no-string-literal
            if (location.pathname === links[i]['pathname']) {
              matchingMenuItem = links[i];
              break;
            }
          }

          if (matchingMenuItem) {
            matchingMenuItem.classList.add('active');
            var parent = matchingMenuItem.parentElement;
            /**
             * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
             * We should come up with non hard coded approach
             */

            if (parent) {
              parent.classList.add('active');
              var parent2 = parent.parentElement;

              if (parent2) {
                parent2.classList.add('in');
              }

              var parent3 = parent2.parentElement;

              if (parent3) {
                parent3.classList.add('active');
                var childAnchor = parent3.querySelector('.has-dropdown');

                if (childAnchor) {
                  childAnchor.classList.add('active');
                }
              }

              var parent4 = parent3.parentElement;

              if (parent4) {
                parent4.classList.add('in');
              }

              var parent5 = parent4.parentElement;

              if (parent5) {
                parent5.classList.add('active');
              }
            }
          }
        }
        /**
         * On menu click
         */

      }, {
        key: "onMenuClick",
        value: function onMenuClick(event) {
          var nextEl = event.target.nextSibling;

          if (nextEl && !nextEl.classList.contains('open')) {
            var parentEl = event.target.parentNode;

            if (parentEl) {
              parentEl.classList.remove('open');
            }

            nextEl.classList.add('open');
          } else if (nextEl) {
            nextEl.classList.remove('open');
          }

          return false;
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      inputs: {
        showMobileMenu: "showMobileMenu"
      },
      decls: 3,
      vars: 0,
      consts: [[1, "topbar-menu"], [1, "container-fluid"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " testkksdfajbasdlfksjdk FARKAJJ ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.scss']
        }]
      }], function () {
        return [];
      }, {
        showMobileMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/layouts/sidebar/sidebar.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/layouts/sidebar/sidebar.component.ts ***!
    \******************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppLayoutsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent() {
        _classCallCheck(this, SidebarComponent);
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)();
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      decls: 0,
      vars: 0,
      template: function SidebarComponent_Template(rf, ctx) {},
      styles: [".sidebar-offcanvas[_ngcontent-%COMP%] {\n  width: 220px;\n  background-color: rgba(15, 156, 230, 0.25);\n  float: left;\n  height: 100%;\n  position: relative;\n  overflow-y: auto;\n  overflow-x: hidden;\n  will-change: width;\n  transition: width 0.25s ease-out;\n  box-shadow: inset 0 0 2rem rgba(15, 156, 230, 0.25), inset 0 0 0 1px rgba(15, 156, 230, 0.15);\n  z-index: 5;\n}\n\n.nav-sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  font-size: 1.15rem;\n  line-height: 2rem;\n  vertical-align: middle;\n  color: #0f9ce6;\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar',
          templateUrl: './sidebar.component.html',
          styleUrls: ['./sidebar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layouts/topbar/topbar.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/layouts/topbar/topbar.component.ts ***!
    \****************************************************/

  /*! exports provided: TopbarComponent */

  /***/
  function srcAppLayoutsTopbarTopbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopbarComponent", function () {
      return TopbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TopbarComponent = /*#__PURE__*/function () {
      function TopbarComponent() {
        _classCallCheck(this, TopbarComponent);

        this.showButton = false;
      }

      _createClass(TopbarComponent, [{
        key: "onbeforeinstallprompt",
        value: function onbeforeinstallprompt(e) {
          console.log(e); // Prevent Chrome 67 and earlier from automatically showing the prompt

          e.preventDefault(); // Stash the event so it can be triggered later.

          this.deferredPrompt = e;
          this.showButton = true;
        }
      }, {
        key: "addToHomeScreen",
        value: function addToHomeScreen() {
          var _this2 = this;

          // hide our user interface that shows our A2HS button
          this.showButton = false; // Show the prompt

          this.deferredPrompt.prompt(); // Wait for the user to respond to the prompt

          this.deferredPrompt.userChoice.then(function (choiceResult) {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt');
            } else {
              console.log('User dismissed the A2HS prompt');
            }

            _this2.deferredPrompt = null;
          });
        }
      }]);

      return TopbarComponent;
    }();

    TopbarComponent.ɵfac = function TopbarComponent_Factory(t) {
      return new (t || TopbarComponent)();
    };

    TopbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopbarComponent,
      selectors: [["app-topbar"]],
      hostBindings: function TopbarComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeinstallprompt", function TopbarComponent_beforeinstallprompt_HostBindingHandler($event) {
            return ctx.onbeforeinstallprompt($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 16,
      vars: 0,
      consts: [[1, "navbar-custom", "mycustom"], [1, "container-fluid", "mycustom"], [1, "fixed-top", "mycustom", "text-center"], [1, "row"], [1, "col"], ["href", "index.html#", 1, "text-center", "navbar-brand", "px-lg-3", "px-1", "mr-0", "h2", "headText"], [1, "nameRegistry", "pr-1"], [1, "text-danger"], [1, "fas", "fa-heart"], ["href", "https://google.com", 1, "myName"]],
      template: function TopbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Live coronavirus Tracker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "2020 \xA9 Crafted with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Abdel illah Farka");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".mycustom[_ngcontent-%COMP%] {\n  background-color: #ffb107;\n  border-top: 6px solid #884c0a;\n}\n\n.headText[_ngcontent-%COMP%] {\n  color: #450001;\n  font-family: serif;\n  box-shadow: 0 10px 15px -3px #fcfeff, 0 4px 6px -2px #b26804;\n}\n\n@media screen and (min-width: 601px) {\n  .nameRegistry[_ngcontent-%COMP%] {\n    font-family: initial;\n    color: #884c0a;\n    font-size: 1vw;\n    text-align: right !important;\n  }\n}\n\n@media screen and (max-width: 601px) {\n  .nameRegistry[_ngcontent-%COMP%] {\n    font-family: initial;\n    color: #884c0a;\n    font-size: 1.8vw;\n    text-align: right !important;\n  }\n}\n\n.myName[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #450001;\n}\n\n.flexbox-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-topbar',
          templateUrl: './topbar.component.html',
          styleUrls: ['./topbar.component.scss']
        }]
      }], function () {
        return [];
      }, {
        onbeforeinstallprompt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:beforeinstallprompt', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/country/country.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/country/country.component.ts ***!
    \****************************************************/

  /*! exports provided: CountryComponent */

  /***/
  function srcAppPagesCountryCountryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryComponent", function () {
      return CountryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @amcharts/amcharts4/core */
    "./node_modules/@amcharts/amcharts4/core.js");
    /* harmony import */


    var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @amcharts/amcharts4/charts */
    "./node_modules/@amcharts/amcharts4/charts.js");
    /* harmony import */


    var _core_services_getdata_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../core/services/getdata.service */
    "./src/app/core/services/getdata.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_countup_countup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/countup/countup.component */
    "./src/app/shared/countup/countup.component.ts");

    function CountryComponent_h2_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/flags/", ctx_r74.countryCodes[ctx_r74.country.country].toLowerCase(), ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", ctx_r74.country.country);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r74.country.country, "'s Statistics");
      }
    }

    function CountryComponent_h4_99_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n", ctx_r75.country.country, "'s Cases Distribution\n");
      }
    }

    function CountryComponent_span_117_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r76.totalRecoveries / ctx_r76.finishedCases * 100, ".1-2"), "%");
      }
    }

    function CountryComponent_ng_template_118_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "N/A");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CountryComponent_span_128_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r79.totalDeaths / ctx_r79.finishedCases * 100, ".1-2"), "%");
      }
    }

    function CountryComponent_ng_template_129_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "N/A");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var CountryComponent = /*#__PURE__*/function () {
      function CountryComponent(route, _getDataService, zone) {
        _classCallCheck(this, CountryComponent);

        this.route = route;
        this._getDataService = _getDataService;
        this.zone = zone;
        this.isLoading = true;
        this.totalCases = 0;
        this.totalDeaths = 0;
        this.totalCritical = 0;
        this.todayCases = 0;
        this.todayDeaths = 0;
        this.activeCases = 0;
        this.casesPer1M = 0;
        this.finishedCases = 0;
        this.countryCodes = {
          'Afghanistan': 'AF',
          'Aland Islands': 'AX',
          'Albania': 'AL',
          'Algeria': 'DZ',
          'American Samoa': 'AS',
          'Andorra': 'AD',
          'Angola': 'AO',
          'Anguilla': 'AI',
          'Antarctica': 'AQ',
          'Antigua And Barbuda': 'AG',
          'Argentina': 'AR',
          'Armenia': 'AM',
          'Aruba': 'AW',
          'Australia': 'AU',
          'Austria': 'AT',
          'Azerbaijan': 'AZ',
          'Bahamas': 'BS',
          'Bahrain': 'BH',
          'Bangladesh': 'BD',
          'Barbados': 'BB',
          'Belarus': 'BY',
          'Belgium': 'BE',
          'Belize': 'BZ',
          'Benin': 'BJ',
          'Bermuda': 'BM',
          'Bhutan': 'BT',
          'Bolivia': 'BO',
          'Bosnia and Herzegovina': 'BA',
          'Botswana': 'BW',
          'Bouvet Island': 'BV',
          'Brazil': 'BR',
          'British Indian Ocean Territory': 'IO',
          'Brunei': 'BN',
          'Bulgaria': 'BG',
          'Burkina Faso': 'BF',
          'Burundi': 'BI',
          'Cambodia': 'KH',
          'Cameroon': 'CM',
          'Canada': 'CA',
          'Cape Verde': 'CV',
          'Cayman Islands': 'KY',
          'Central African Republic': 'CF',
          'Chad': 'TD',
          'Chile': 'CL',
          'China': 'CN',
          'Christmas Island': 'CX',
          'Cocos (Keeling) Islands': 'CC',
          'Colombia': 'CO',
          'Comoros': 'KM',
          'Congo': 'CG',
          'DRC': 'CD',
          'Cook Islands': 'CK',
          'Costa Rica': 'CR',
          'Ivory Coast': 'CI',
          'Croatia': 'HR',
          'Cuba': 'CU',
          'Cyprus': 'CY',
          'Czechia': 'CZ',
          'Denmark': 'DK',
          'Djibouti': 'DJ',
          'Dominica': 'DM',
          'Dominican Republic': 'DO',
          'Ecuador': 'EC',
          'Egypt': 'EG',
          'El Salvador': 'SV',
          'Equatorial Guinea': 'GQ',
          'Eritrea': 'ER',
          'Estonia': 'EE',
          'Ethiopia': 'ET',
          'Falkland Islands': 'FK',
          'Faeroe Islands': 'FO',
          'Fiji': 'FJ',
          'Finland': 'FI',
          'France': 'FR',
          'French Guiana': 'GF',
          'French Polynesia': 'PF',
          'French Southern Territories': 'TF',
          'Gabon': 'GA',
          'Gambia': 'GM',
          'Georgia': 'GE',
          'Germany': 'DE',
          'Ghana': 'GH',
          'Gibraltar': 'GI',
          'Greece': 'GR',
          'Greenland': 'GL',
          'Grenada': 'GD',
          'Guadeloupe': 'GP',
          'Guam': 'GU',
          'Guatemala': 'GT',
          'Guernsey': 'GG',
          'Guinea': 'GN',
          'Guinea-Bissau': 'GW',
          'Guyana': 'GY',
          'Haiti': 'HT',
          'Heard Island & Mcdonald Islands': 'HM',
          'Holy See (Vatican City State)': 'VA',
          'Honduras': 'HN',
          'Hong Kong': 'HK',
          'Hungary': 'HU',
          'Iceland': 'IS',
          'India': 'IN',
          'Indonesia': 'ID',
          'Iran': 'IR',
          'Iraq': 'IQ',
          'Ireland': 'IE',
          'Isle Of Man': 'IM',
          'Israel': 'IL',
          'Italy': 'IT',
          'Jamaica': 'JM',
          'Japan': 'JP',
          'Channel Islands': 'JE',
          'Jordan': 'JO',
          'Kazakhstan': 'KZ',
          'Kenya': 'KE',
          'Kiribati': 'KI',
          'Korea': 'KR',
          'S. Korea': 'KR',
          'Kuwait': 'KW',
          'Kyrgyzstan': 'KG',
          'Lao People\'s Democratic Republic': 'LA',
          'Latvia': 'LV',
          'Lebanon': 'LB',
          'Lesotho': 'LS',
          'Liberia': 'LR',
          'Libyan Arab Jamahiriya': 'LY',
          'Liechtenstein': 'LI',
          'Lithuania': 'LT',
          'Luxembourg': 'LU',
          'Macao': 'MO',
          'Macedonia': 'MK',
          'Madagascar': 'MG',
          'Malawi': 'MW',
          'Malaysia': 'MY',
          'Maldives': 'MV',
          'Mali': 'ML',
          'Malta': 'MT',
          'Marshall Islands': 'MH',
          'Martinique': 'MQ',
          'Mauritania': 'MR',
          'Mauritius': 'MU',
          'Mayotte': 'YT',
          'Mexico': 'MX',
          'Micronesia, Federated States Of': 'FM',
          'Moldova': 'MD',
          'Monaco': 'MC',
          'Mongolia': 'MN',
          'Montenegro': 'ME',
          'Montserrat': 'MS',
          'Morocco': 'MA',
          'Mozambique': 'MZ',
          'Myanmar': 'MM',
          'Namibia': 'NA',
          'Nauru': 'NR',
          'Nepal': 'NP',
          'Netherlands': 'NL',
          'Netherlands Antilles': 'AN',
          'New Caledonia': 'NC',
          'New Zealand': 'NZ',
          'Nicaragua': 'NI',
          'Niger': 'NE',
          'Nigeria': 'NG',
          'Niue': 'NU',
          'Norfolk Island': 'NF',
          'North Macedonia': 'MP',
          'Norway': 'NO',
          'Oman': 'OM',
          'Pakistan': 'PK',
          'Palau': 'PW',
          'Palestine': 'PS',
          'Panama': 'PA',
          'Papua New Guinea': 'PG',
          'Paraguay': 'PY',
          'Peru': 'PE',
          'Philippines': 'PH',
          'Pitcairn': 'PN',
          'Poland': 'PL',
          'Portugal': 'PT',
          'Puerto Rico': 'PR',
          'Qatar': 'QA',
          'Réunion': 'RE',
          'Romania': 'RO',
          'Russia': 'RU',
          'Rwanda': 'RW',
          'Saint Barthelemy': 'BL',
          'St. Barth': 'BL',
          'Saint Helena': 'SH',
          'Saint Kitts And Nevis': 'KN',
          'Saint Lucia': 'LC',
          'Saint Martin': 'MF',
          'Saint Pierre And Miquelon': 'PM',
          'St. Vincent Grenadines': 'VC',
          'Samoa': 'WS',
          'San Marino': 'SM',
          'Sao Tome And Principe': 'ST',
          'Saudi Arabia': 'SA',
          'Senegal': 'SN',
          'Serbia': 'RS',
          'Seychelles': 'SC',
          'Sierra Leone': 'SL',
          'Singapore': 'SG',
          'Slovakia': 'SK',
          'Slovenia': 'SI',
          'Solomon Islands': 'SB',
          'Somalia': 'SO',
          'South Africa': 'ZA',
          'South Georgia And Sandwich Isl.': 'GS',
          'Spain': 'ES',
          'Sri Lanka': 'LK',
          'Sudan': 'SD',
          'Suriname': 'SR',
          'Svalbard And Jan Mayen': 'SJ',
          'Swaziland': 'SZ',
          'Sweden': 'SE',
          'Switzerland': 'CH',
          'Syrian Arab Republic': 'SY',
          'Taiwan': 'TW',
          'Tajikistan': 'TJ',
          'Tanzania': 'TZ',
          'Thailand': 'TH',
          'Timor-Leste': 'TL',
          'Togo': 'TG',
          'Tokelau': 'TK',
          'Tonga': 'TO',
          'Trinidad and Tobago': 'TT',
          'Tunisia': 'TN',
          'Turkey': 'TR',
          'Turkmenistan': 'TM',
          'Turks And Caicos Islands': 'TC',
          'Tuvalu': 'TV',
          'Uganda': 'UG',
          'Ukraine': 'UA',
          'UAE': 'AE',
          'UK': 'GB',
          'USA': 'US',
          'United States Outlying Islands': 'UM',
          'Uruguay': 'UY',
          'Uzbekistan': 'UZ',
          'Vanuatu': 'VU',
          'Venezuela': 'VE',
          'Vietnam': 'VN',
          'Virgin Islands, British': 'VG',
          'U.S. Virgin Islands': 'VI',
          'Wallis And Futuna': 'WF',
          'Western Sahara': 'EH',
          'Yemen': 'YE',
          'Zambia': 'ZM',
          'Zimbabwe': 'ZW',
          'Curaçao': 'CW'
        };
      }

      _createClass(CountryComponent, [{
        key: "loadPieChart",
        value: function loadPieChart() {
          var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("pieChart", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["PieChart"]);

          chart.data.push({
            type: 'Recoveries',
            number: this.totalRecoveries,
            "color": _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#10c469")
          });
          chart.data.push({
            type: 'Deaths',
            number: this.totalDeaths,
            "color": _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#ff5b5b")
          });
          chart.data.push({
            type: 'Critical',
            number: this.totalCritical,
            "color": _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#f9c851")
          });
          var pieSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["PieSeries"]());
          pieSeries.dataFields.value = "number";
          pieSeries.dataFields.category = "type";
          pieSeries.labels.template.disabled = true;
          pieSeries.ticks.template.disabled = true;
          pieSeries.slices.template.propertyFields.fill = "color";
          pieSeries.slices.template.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#313a46");
          pieSeries.slices.template.strokeWidth = 1;
          pieSeries.slices.template.strokeOpacity = 1;
          this.pieChart = chart;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this3 = this;

          this.zone.runOutsideAngular(function () {
            if (_this3.pieChart) {
              _this3.pieChart.dispose();
            }

            if (_this3.lineChart) {
              _this3.lineChart.dispose();
            }

            if (_this3.radarChart) {
              _this3.radarChart.dispose();
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          var nameTimeline = this.route.snapshot.paramMap.get("name").toLowerCase();

          if (nameTimeline == "usa") {
            nameTimeline = "us";
          } else if (nameTimeline == "taiwan") {
            nameTimeline = "taiwan*";
          } else if (nameTimeline == "isle of man") {
            nameTimeline = "united kingdom";
          } else if (nameTimeline == "aruba") {
            nameTimeline = "netherlands";
          } else if (nameTimeline == "sint maarten") {
            nameTimeline = "netherlands";
          } else if (nameTimeline == "st. vincent grenadines") {
            nameTimeline = "saint vincent and the grenadines";
          } else if (nameTimeline == "timor-leste") {
            nameTimeline = "East Timor";
          } else if (nameTimeline == "montserrat") {
            nameTimeline = "united kingdom";
          } else if (nameTimeline == "gambia") {
            nameTimeline = "gambia, the";
          } else if (nameTimeline == "cayman islands") {
            nameTimeline = "united kingdom";
          } else if (nameTimeline == "bermuda") {
            nameTimeline = "united kingdom";
          } else if (nameTimeline == "greenland") {
            nameTimeline = "denmark";
          } else if (nameTimeline == "st. barth") {
            nameTimeline = "saint barthelemy";
          } else if (nameTimeline == "congo") {
            nameTimeline = "congo (brazzaville)";
          } else if (nameTimeline == "saint martin") {
            nameTimeline = "france";
          } else if (nameTimeline == "gibraltar") {
            nameTimeline = "united kingdom";
          } else if (nameTimeline == "mayotte") {
            nameTimeline = "france";
          } else if (nameTimeline == "bahamas") {
            nameTimeline = "bahamas, the";
          } else if (nameTimeline == "french guiana") {
            nameTimeline = "france";
          } else if (nameTimeline == "u.s. virgin islands") {
            nameTimeline = "us";
          } else if (nameTimeline == "curaçao") {
            nameTimeline = "netherlands";
          } else if (nameTimeline == "puerto rico") {
            nameTimeline = "us";
          } else if (nameTimeline == "french polynesia") {
            nameTimeline = "france";
          } else if (nameTimeline == "ivory coast") {
            nameTimeline = "Cote d'Ivoire";
          } else if (nameTimeline == "macao") {
            nameTimeline = "china";
          } else if (nameTimeline == "drc") {
            nameTimeline = "congo (kinshasa)";
          } else if (nameTimeline == "channel islands") {
            nameTimeline = "united kingdom";
          } else if (nameTimeline == "réunion") {
            nameTimeline = "france";
          } else if (nameTimeline == "guadeloupe") {
            nameTimeline = "france";
          } else if (nameTimeline == "faeroe islands") {
            nameTimeline = "Denmark";
          } else if (nameTimeline == "uae") {
            nameTimeline = "United Arab Emirates";
          } else if (nameTimeline == "diamond princess") {
            nameTimeline = "australia";
          } else if (nameTimeline == "hong kong") {
            nameTimeline = "china";
          } else if (nameTimeline == "uk") {
            nameTimeline = "united kingdom";
          } else if (nameTimeline == "car") {
            nameTimeline = "central african republic";
          }

          this.zone.runOutsideAngular(function () {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])(_this4._getDataService.getCountry(_this4.route.snapshot.paramMap.get("name")), _this4._getDataService.getTimelineCountry(nameTimeline)).subscribe(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  getAllData = _ref2[0],
                  getTimelineData = _ref2[1];

              _this4.isLoading = false;
              _this4.country = getAllData;
              _this4.totalCases = getAllData["cases"];
              _this4.totalDeaths = getAllData["deaths"];
              _this4.totalRecoveries = getAllData["recovered"];
              _this4.totalCritical = getAllData["critical"];
              _this4.todayCases = getAllData["todayCases"];
              _this4.todayDeaths = getAllData["todayDeaths"];
              _this4.activeCases = getAllData["active"];
              _this4.casesPer1M = getAllData["casesPerOneMillion"];
              _this4.finishedCases = _this4.totalDeaths + _this4.totalRecoveries;
              _this4.timeLine = getTimelineData;

              _this4.loadPieChart();

              _this4.loadLineChart();

              _this4.loadRadar();
            });
          });
        }
      }, {
        key: "loadLineChart",
        value: function loadLineChart() {
          var _this5 = this;

          var caseData = [];

          if (!this.timeLine.multiple) {
            caseData = this.timeLine.data.timeline;
          } else {
            var data = {};
            this.timeLine.data.forEach(function (element) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _this6 = this;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        element.timeline.forEach(function (o) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    if (!data.hasOwnProperty(o.date)) {
                                      data[o.date] = {};
                                      data[o.date]["cases"] = 0;
                                      data[o.date]["deaths"] = 0;
                                      data[o.date]["recovered"] = 0;
                                    }

                                    data[o.date].cases += parseInt(o.cases);
                                    data[o.date].deaths += parseInt(o.deaths);
                                    data[o.date].recovered += parseInt(o.recovered);

                                  case 4:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee);
                          }));
                        });

                      case 1:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));
            });
            Object.keys(data).forEach(function (key) {
              caseData.push({
                date: new Date(key),
                cases: data[key].cases,
                recovered: data[key].recovered,
                deaths: data[key].deaths
              });
            });
          }

          caseData.push({
            date: new Date().getTime(),
            cases: this.totalCases,
            recovered: this.totalRecoveries,
            deaths: this.totalDeaths
          });

          var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("lineChart", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYChart"]);

          chart.numberFormatter.numberFormat = "#a";
          chart.numberFormatter.bigNumberPrefixes = [{
            "number": 1e+3,
            "suffix": "K"
          }, {
            "number": 1e+6,
            "suffix": "M"
          }, {
            "number": 1e+9,
            "suffix": "B"
          }]; // Create axes

          var dateAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["DateAxis"]());
          dateAxis.renderer.minGridDistance = 50;
          var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["ValueAxis"]());
          valueAxis.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#adb5bd");
          dateAxis.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#adb5bd");
          chart = this.createSeriesLine(chart, "#21AFDD", "cases");
          chart = this.createSeriesLine(chart, "#10c469", "recovered");
          chart = this.createSeriesLine(chart, "#ff5b5b", "deaths");
          chart.data = caseData;
          chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["Legend"]();
          chart.legend.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#adb5bd");
          chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYCursor"]();
          this.lineChart = chart;
        }
      }, {
        key: "loadRadar",
        value: function loadRadar() {
          var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("radarChart", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["RadarChart"]); // Add data


          chart.data = [{
            "category": "Critical",
            "value": this.totalCritical / this.activeCases * 100,
            "full": 100
          }, {
            "category": "Death",
            "value": this.totalDeaths / this.finishedCases * 100,
            "full": 100
          }, {
            "category": "Recovered",
            "value": this.totalRecoveries / this.finishedCases * 100,
            "full": 100
          }, {
            "category": "Active",
            "value": 100 - this.totalCritical / this.activeCases * 100,
            "full": 100
          }]; // Make chart not full circle

          chart.startAngle = -90;
          chart.endAngle = 180;
          chart.innerRadius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["percent"](20); // Set number format

          chart.numberFormatter.numberFormat = "#.#'%'"; // Create axes

          var categoryAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["CategoryAxis"]());
          categoryAxis.dataFields.category = "category";
          categoryAxis.renderer.grid.template.location = 0;
          categoryAxis.renderer.grid.template.strokeOpacity = 0;
          categoryAxis.renderer.labels.template.horizontalCenter = "right";
          categoryAxis.renderer.labels.template.adapter.add("fill", function (fill, target) {
            if (target.dataItem.index == 0) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#f9c851");
            }

            if (target.dataItem.index == 1) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#ff5b5b");
            }

            if (target.dataItem.index == 2) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#10c469");
            }

            return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#21AFDD");
          });
          categoryAxis.renderer.minGridDistance = 10;
          var valueAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["ValueAxis"]());
          valueAxis.renderer.grid.template.strokeOpacity = 0;
          valueAxis.min = 0;
          valueAxis.max = 100;
          valueAxis.strictMinMax = true;
          valueAxis.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#adb5bd"); // Create series

          var series1 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["RadarColumnSeries"]());
          series1.dataFields.valueX = "full";
          series1.dataFields.categoryY = "category";
          series1.clustered = false;
          series1.columns.template.fill = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["InterfaceColorSet"]().getFor("alternativeBackground");
          series1.columns.template.fillOpacity = 0.08;
          series1.columns.template["cornerRadiusTopLeft"] = 20;
          series1.columns.template.strokeWidth = 0;
          series1.columns.template.radarColumn.cornerRadius = 20;
          var series2 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["RadarColumnSeries"]());
          series2.dataFields.valueX = "value";
          series2.dataFields.categoryY = "category";
          series2.clustered = false;
          series2.columns.template.strokeWidth = 0;
          series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
          series2.columns.template.radarColumn.cornerRadius = 20;
          series2.columns.template.adapter.add("fill", function (fill, target) {
            //return chart.colors.getIndex(target.dataItem.index);
            if (target.dataItem.index == 0) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#f9c851");
            }

            if (target.dataItem.index == 1) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#ff5b5b");
            }

            if (target.dataItem.index == 2) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#10c469");
            }

            return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#21AFDD");
          }); // Add cursor

          chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["RadarCursor"]();
          chart.cursor.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#282e38");
          chart.tooltip.label.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#282e38");
          this.radarChart = chart;
        }
      }, {
        key: "createSeriesLine",
        value: function createSeriesLine(chart, color, type) {
          var name = type.charAt(0).toUpperCase() + type.slice(1);
          var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["LineSeries"]());
          series.dataFields.valueY = type;
          series.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"](color);
          series.dataFields.dateX = "date";
          series.strokeWidth = 2;
          series.minBulletDistance = 10;
          series.tooltipText = "{valueY} " + name;
          series.tooltip.pointerOrientation = "vertical";
          series.tooltip.background.cornerRadius = 20;
          series.tooltip.background.fillOpacity = 0.5;
          series.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"](color);
          series.legendSettings.labelText = name;
          series.tooltip.autoTextColor = false;
          series.tooltip.label.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#282e38");
          return chart;
        }
      }]);

      return CountryComponent;
    }();

    CountryComponent.ɵfac = function CountryComponent_Factory(t) {
      return new (t || CountryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_getdata_service__WEBPACK_IMPORTED_MODULE_5__["GetdataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    CountryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CountryComponent,
      selectors: [["app-country"]],
      decls: 174,
      vars: 90,
      consts: [[1, "container-fluid"], ["class", "text-center mt-3 mb-3", 4, "ngIf"], [1, "row"], [1, "col-xl-3", "col-md-6", "col-6"], [1, "card-box"], [1, "header-title", "m-0", "text-md-left", "text-center"], [1, "topBoxes"], [1, "fa-3x", "text-center"], [1, "fas", "fa-circle-notch", "fa-spin", "m-2"], [1, "topBoxesDetails", "text-md-right", "text-center"], [1, "badge", "badge-blue", "badge-pill", "float-md-left", "m-md-3", "mt-2"], [1, "mdi", "mdi-trending-up"], [1, "font-weight-normal"], [1, "text-muted"], [1, "progress", "progress-bar-alt-blue", "progress-sm", "m-0"], ["role", "progressbar", "aria-valuenow", "77", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-blue", 2, "width", "100%"], [1, "badge", "badge-danger", "badge-pill", "float-md-left", "m-md-3", "mt-2"], [1, "progress", "progress-bar-alt-danger", "progress-sm", "m-0"], ["role", "progressbar", "aria-valuenow", "77", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger", 2, "width", "100%"], [1, "badge", "badge-success", "badge-pill", "float-md-left", "m-md-3", "mt-2"], [1, "progress", "progress-bar-alt-success", "progress-sm", "m-0"], ["role", "progressbar", "aria-valuenow", "77", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "100%"], [1, "badge", "badge-warning", "badge-pill", "float-md-left", "m-md-3", "mt-2"], [1, "progress", "progress-bar-alt-warning", "progress-sm", "m-0"], ["role", "progressbar", "aria-valuenow", "77", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", 2, "width", "100%"], [1, "col-xl-4"], [1, "header-title", "mb-3"], [1, "inbox-widget"], ["id", "radarChart", 2, "width", "100%", "height", "400px"], [1, "col-xl-8"], [1, "header-title", "mt-0", "mb-3", "mt-md-0"], [1, "table-responsive"], ["id", "lineChart", 2, "width", "100%", "height", "400px", "overflow", "hidden"], ["class", "header-title mb-3", 4, "ngIf"], ["id", "pieChart", 2, "width", "100%", "height", "300px"], [1, "col-xl-5"], [1, "header-title", "mt-0", "mb-3"], [1, "col-12"], [1, "col-xl-6", "col-md-6"], [1, "card-box", "widget-user", "bg-d"], [1, "text-center"], [1, "fas", "fa-circle-notch", "fa-spin", "m-2", "text-blue"], [1, "font-weight-normal", "text-success"], [4, "ngIf", "ngIfElse"], ["naRecovery", ""], [1, "fas", "fa-circle-notch", "fa-spin", "m-2", "text-danger"], [1, "font-weight-normal", "text-danger"], ["naDeath", ""], [1, "fas", "fa-circle-notch", "fa-spin", "m-2", "text-warning"], [1, "font-weight-normal", "text-warning"], [1, "fas", "fa-circle-notch", "fa-spin", "m-2", "text-info"], [1, "font-weight-normal", "text-info"], [1, "col-xl-3"], [1, "card-box", "text-center"], ["target", "_blank", "href", "https://www.facebook.com/sharer/sharer.php?u=https://coronastatistics.live", 1, "btn", "btn-icon", "waves-effect", "btn-blue", "mr-1"], [1, "fab", "fa-facebook"], ["target", "_blank", "href", "https://twitter.com/intent/tweet?url=https://coronastatistics.live&hashtags=Covid_19,CoronavirusPandemic,coronastatistics,corona&text=Stay%20Updated%20with%20Live%20Coronavirus%20Tracker", 1, "btn", "btn-icon", "waves-effect", "btn-blue", "mr-1"], [1, "fab", "fa-twitter"], ["target", "_blank", "href", "https://vk.com/share.php?url=https://coronastatistics.live", 1, "btn", "btn-icon", "waves-effect", "btn-blue", "mr-1"], [1, "fab", "fa-vk"], ["href", "whatsapp://send?text=Coronavirus live statistics and tracker https://coronastatistics.live", "data-action", "share/whatsapp/share", 1, "btn", "btn-icon", "waves-effect", "btn-blue"], [1, "fab", "fa-whatsapp"], ["href", "https://ko-fi.com/abdelillahfarka", 1, "btn", "btn-", "waves-effect", "btn-danger", "d-block", "mt-2", "mx-auto"], [1, "fas", "fa-coffee"], [1, "text-center", "mt-3", "mb-3"], ["width", "100px", 3, "src", "alt"]],
      template: function CountryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CountryComponent_h2_1_Template, 3, 3, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Infections");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Deaths");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Recoveries");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](49, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](53, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](56, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Critical");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](69, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](73, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](76, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "h4", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Rate Distribution ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "h4", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Infections History");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, CountryComponent_h4_99_Template, 2, 1, "h4", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "h4", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Infection Rates");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "h2", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](117, CountryComponent_span_117_Template, 3, 4, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](118, CountryComponent_ng_template_118_Template, 2, 0, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Recovery Rate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "h2", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](128, CountryComponent_span_128_Template, 3, 4, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](129, CountryComponent_ng_template_129_Template, 2, 0, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Death Rate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "h2", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](140, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "Critical Rate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](147, "i", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "h2", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](150, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Mild Cases");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "Share with your friends, family or coworkers.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "Keep them up to date with the coronavirus outbreak.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](160, "i", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](162, "i", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "i", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "a", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](166, "i", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "a", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](168, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, " Buy me a coffee ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "Outbreak Started");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](173, "app-countup");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](119);

          var _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](130);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.country);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 63, ctx.totalCases), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.todayCases, " today");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](30, 65, ctx.totalDeaths / ctx.finishedCases * 100, ".1-2"), "% ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 68, ctx.totalDeaths), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.todayDeaths, " today");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](49, 70, ctx.totalRecoveries / ctx.finishedCases * 100, ".1-2"), "% ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](53, 73, ctx.totalRecoveries), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](56, 75, ctx.activeCases), " remaining");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](69, 77, ctx.totalCritical / ctx.activeCases * 100, ".1-2"), "% ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](73, 80, ctx.totalCritical), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](76, 82, ctx.casesPer1M), " per million");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.country);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.finishedCases > 0)("ngIfElse", _r77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.finishedCases > 0)("ngIfElse", _r80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](140, 84, ctx.totalCritical / ctx.activeCases * 100, ".1-2"), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](150, 87, 100 - ctx.totalCritical / ctx.activeCases * 100, ".1-2"), "%");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_countup_countup_component__WEBPACK_IMPORTED_MODULE_8__["CountupComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]],
      styles: [".bg-d[_ngcontent-%COMP%] {\n  background-color: #282d37;\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CountryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-country',
          templateUrl: './country.component.html',
          styleUrls: ['./country.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _core_services_getdata_service__WEBPACK_IMPORTED_MODULE_5__["GetdataService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/dashboard/dashboard.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
    \********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppPagesDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @amcharts/amcharts4/core */
    "./node_modules/@amcharts/amcharts4/core.js");
    /* harmony import */


    var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @amcharts/amcharts4/charts */
    "./node_modules/@amcharts/amcharts4/charts.js");
    /* harmony import */


    var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @amcharts/amcharts4/themes/animated */
    "./node_modules/@amcharts/amcharts4/themes/animated.js");
    /* harmony import */


    var _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @amcharts/amcharts4/maps */
    "./node_modules/@amcharts/amcharts4/maps.js");
    /* harmony import */


    var _amcharts_amcharts4_geodata_worldLow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @amcharts/amcharts4-geodata/worldLow */
    "./node_modules/@amcharts/amcharts4-geodata/worldLow.js");
    /* harmony import */


    var _core_services_getdata_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../../core/services/getdata.service */
    "./src/app/core/services/getdata.service.ts");
    /* harmony import */


    var fuse_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! fuse.js */
    "./node_modules/fuse.js/dist/fuse.js");
    /* harmony import */


    var fuse_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(fuse_js__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var primeng_chart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! primeng/chart */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-chart.js");
    /* harmony import */


    var _shared_countup_countup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../shared/countup/countup.component */
    "./src/app/shared/countup/countup.component.ts");
    /* harmony import */


    var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! primeng/virtualscroller */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-virtualscroller.js");
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! primeng/dropdown */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");

    var _c0 = ["autoShownModal"];

    function DashboardComponent_div_41_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 129);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 130);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 131);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "KNOW HOW IT ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 132);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "SPREADS");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h6", 133);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "There is currently No Vaccine to prevent ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "COVID-19");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "The virus is thought to spread mainly from person-to-person contact through respiratory droplets produced when an infected person coughs or sneezes.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutAnimation", undefined);
      }
    }

    function DashboardComponent_div_41_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 129);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 135);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 131);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "TAKE STEPS TO ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 132);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "PROTECT YOURSELF");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Frequently Wash your hands with soap and water for at least 20 seconds. Always Carry a hand sanitizer that contains at least 60% alcohol. Avoid touching your eyes, nose, and mouth with unwashed hands.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutAnimation", undefined);
      }
    }

    function DashboardComponent_div_41_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 129);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 136);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 131);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "AVOID ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 132);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "CLOSE CONTACT");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Avoid close contact with people who are sick. Put distance between yourself and other people if COVID-19/Coronavirus is spreading in your community.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutAnimation", undefined);
      }
    }

    function DashboardComponent_div_41_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 129);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 137);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 131);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "TAKE STEPS TO ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 132);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "PROTECT YOURSELF");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Cover your mouth and nose with a tissue when you cough or sneeze or use the inside of your elbow. Immediately wash your hands with soap and water for at least 20 seconds or clean your hands with a hand sanitizer that contains at least 60% alcohol. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutAnimation", undefined);
      }
    }

    function DashboardComponent_div_41_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 129);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 138);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 131);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "CLEAN & ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 132);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "DISINFECT");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Clean & disinfect frequently touched surfaces daily. This includes tables, doorknobs, light switches, countertops, handles, desks, phones, keyboards, toilets, faucets, and sinks. If surfaces are dirty, clean them: Use detergent or soap and water prior to disinfection. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutAnimation", undefined);
      }
    }

    function DashboardComponent_div_41_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 139);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 140);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_div_41_div_10_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r15.nextStep();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Next ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 141);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_div_41_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 139);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 142);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 143, 144);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 145);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Don't Show again");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 146);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_div_41_div_11_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r18.close(_r17.checked);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 147);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1() {
      return {
        show: true
      };
    };

    function DashboardComponent_div_41_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 122, 123);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onHidden", function DashboardComponent_div_41_Template_div_onHidden_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r20.onHidden();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 124);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 125);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 126);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DashboardComponent_div_41_div_5_Template, 12, 1, "div", 127);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DashboardComponent_div_41_div_6_Template, 8, 1, "div", 127);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DashboardComponent_div_41_div_7_Template, 8, 1, "div", 127);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DashboardComponent_div_41_div_8_Template, 8, 1, "div", 127);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, DashboardComponent_div_41_div_9_Template, 8, 1, "div", 127);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DashboardComponent_div_41_div_10_Template, 5, 0, "div", 128);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DashboardComponent_div_41_div_11_Template, 11, 0, "div", 128);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.modalStep == 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.modalStep == 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.modalStep == 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.modalStep == 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.modalStep == 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.modalStep != 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.modalStep == 5);
      }
    }

    function DashboardComponent_div_155_ng_template_31_img_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 174);
      }

      if (rf & 2) {
        var country_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/flags/", country_r26.code.toLowerCase(), ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", country_r26.title);
      }
    }

    function DashboardComponent_div_155_ng_template_31_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 175);
      }

      if (rf & 2) {
        var country_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", country_r26.title);
      }
    }

    function DashboardComponent_div_155_ng_template_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 166);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 167);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DashboardComponent_div_155_ng_template_31_img_3_Template, 1, 2, "img", 168);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DashboardComponent_div_155_ng_template_31_ng_template_4_Template, 1, 1, "ng-template", null, 169, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 170);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 171);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 132);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " & ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 172);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 173);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var country_r26 = ctx.$implicit;

        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", country_r26.code)("ngIfElse", _r29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](country_r26.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", country_r26.total_cases, " Cases");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", country_r26.total_deaths, " Deaths");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", country_r26.total_new_cases_today, " Cases");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", country_r26.total_new_deaths_today, " Deaths");
      }
    }

    function DashboardComponent_div_155_Template(rf, ctx) {
      if (rf & 1) {
        var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 148);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p-virtualScroller", 149, 150);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p-header", 151);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 152);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Affected Countries ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 153);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Today's Statistics");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 154);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 155, 156);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function DashboardComponent_div_155_Template_input_keyup_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);

          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r33.searchCountries(_r23.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 157);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "select", 158, 159);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DashboardComponent_div_155_Template_select_change_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);

          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);

          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r35.sortCountries(_r24.value, _r23.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Sort By");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option", 160);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Total Cases");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 161);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Today Cases");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 162);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Total Deaths");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 163);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Today Deaths");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "option", 164);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Total Recoveries");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, DashboardComponent_div_155_ng_template_31_Template, 18, 7, "ng-template", 165);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r2.countries);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", "Search ", ctx_r2.countries.length, " Affected Countries");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx_r2.isLoadingCountries);
      }
    }

    function DashboardComponent_div_161_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 180);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 181);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r38 = ctx.$implicit;

        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/flags/", ctx_r36.countryCodes[item_r38.label].toLowerCase(), ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r38.label);
      }
    }

    function DashboardComponent_div_161_ng_template_3_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 185);
      }

      if (rf & 2) {
        var car_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/flags/", ctx_r40.countryCodes[car_r39.label].toLowerCase(), ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", car_r39.title);
      }
    }

    function DashboardComponent_div_161_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 182);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DashboardComponent_div_161_ng_template_3_img_1_Template, 1, 2, "img", 183);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 184);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var car_r39 = ctx.$implicit;

        var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r37.countryCodes[car_r39.label])("ngIfElse", ctx_r37.unknown);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](car_r39.label);
      }
    }

    function DashboardComponent_div_161_Template(rf, ctx) {
      if (rf & 1) {
        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 176);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p-dropdown", 177);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_161_Template_p_dropdown_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r42.ChangeCountry($event);
        })("ngModelChange", function DashboardComponent_div_161_Template_p_dropdown_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r44.selectedCountry = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DashboardComponent_div_161_ng_template_2_Template, 3, 2, "ng-template", 178);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DashboardComponent_div_161_ng_template_3_Template, 4, 3, "ng-template", 179);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r3.countries)("filter", true)("ngModel", ctx_r3.selectedCountry);
      }
    }

    function DashboardComponent_p_table_206_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 191);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Affected Countries ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_p_table_206_ng_template_3_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 194);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "p-sortIcon", 195);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r51 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pSortableColumn", col_r51.field);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", col_r51.header, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("field", col_r51.field);
      }
    }

    function DashboardComponent_p_table_206_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 192);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DashboardComponent_p_table_206_ng_template_3_th_1_Template, 4, 3, "th", 193);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var columns_r49 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", columns_r49);
      }
    }

    function DashboardComponent_p_table_206_ng_template_4_td_1_span_4_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 203);
      }

      if (rf & 2) {
        var country_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;

        var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/flags/", ctx_r60.countryCodes[country_r52.title].toLowerCase(), ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", country_r52.title);
      }
    }

    function DashboardComponent_p_table_206_ng_template_4_td_1_span_4_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 204);
      }

      if (rf & 2) {
        var country_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", country_r52.title);
      }
    }

    function DashboardComponent_p_table_206_ng_template_4_td_1_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DashboardComponent_p_table_206_ng_template_4_td_1_span_4_img_1_Template, 1, 2, "img", 201);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DashboardComponent_p_table_206_ng_template_4_td_1_span_4_ng_template_2_Template, 1, 1, "ng-template", null, 169, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 202);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);

        var country_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r57.countryCodes[country_r52.title])("ngIfElse", _r61);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](country_r52.title);
      }
    }

    function DashboardComponent_p_table_206_ng_template_4_td_1_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 205);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "link");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var country_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", country_r52[col_r56.field], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function DashboardComponent_p_table_206_ng_template_4_td_1_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var country_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", country_r52[col_r56.field], " ");
      }
    }

    function DashboardComponent_p_table_206_ng_template_4_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 197);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](3, 198);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DashboardComponent_p_table_206_ng_template_4_td_1_span_4_Template, 6, 3, "span", 199);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DashboardComponent_p_table_206_ng_template_4_td_1_span_5_Template, 3, 1, "span", 199);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DashboardComponent_p_table_206_ng_template_4_td_1_span_6_Template, 2, 1, "span", 200);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r56 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](col_r56.header);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", col_r56.field);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "source");
      }
    }

    function DashboardComponent_p_table_206_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DashboardComponent_p_table_206_ng_template_4_td_1_Template, 7, 4, "td", 196);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var columns_r53 = ctx.columns;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", columns_r53);
      }
    }

    var _c2 = function _c2() {
      return [5, 10, 15];
    };

    function DashboardComponent_p_table_206_Template(rf, ctx) {
      if (rf & 1) {
        var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-table", 186, 187);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onRowSelect", function DashboardComponent_p_table_206_Template_p_table_onRowSelect_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r71);

          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r70.onRowSelect($event);
        })("onRowUnselect", function DashboardComponent_p_table_206_Template_p_table_onRowUnselect_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r71);

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r72.onRowUnselect($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DashboardComponent_p_table_206_ng_template_2_Template, 2, 0, "ng-template", 188);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DashboardComponent_p_table_206_ng_template_3_Template, 2, 1, "ng-template", 189);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DashboardComponent_p_table_206_ng_template_4_Template, 2, 1, "ng-template", 190);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowHover", true)("showCurrentPageReport", true)("rowHover", true)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c2))("paginator", true)("sortOrder", 0 - 1)("rows", ctx_r4.countRows)("columns", ctx_r4.cols)("value", ctx_r4.countries)("responsive", true);
      }
    }

    function DashboardComponent_h2_281_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 206);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx_r6.isLoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r6.fuse.list.length, "");
      }
    }

    var _c3 = function _c3(a0) {
      return {
        "height.px": a0
      };
    }; //am4core.useTheme(am4themes_dataviz);


    _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__["default"]);

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(zone, _getDataService, messageService) {
        _classCallCheck(this, DashboardComponent);

        this.zone = zone;
        this._getDataService = _getDataService;
        this.isModalShown = false;
        this.heightExp = 400;
        this.countRows = 5;
        this.modalStep = 1;
        this.newCasesMostInfectedCountry = {};
        this.MostInfectedCountry = {};
        this.labels = [];
        this.title = 'angular-amcharts-map-demo';
        this.caseData = [];
        this.recoveriesData = [];
        this.deathData = [];
        this.isLoading = true;
        this.isLoadingMap = true;
        this.isLoadingCountries = true;
        this.totalCases = 0;
        this.totalDeaths = 0;
        this.totalRecoveries = 0;
        this.totalCritical = 0;
        this.todayCases = 0;
        this.todayDeaths = 0;
        this.activeCases = 0;
        this.casesPer1M = 0;
        this.finishedCases = 0;
        this.BarChartFirstCountry = {};
        this.BarChartSecondCountry = {};
        this.BarChartThirdCountry = {};
        this.mapDataDeath = {};
        this.sortType = "total_cases";
        this.countryCodes = {
          'Afghanistan': 'AF',
          'Aland Islands': 'AX',
          'Albania': 'AL',
          'Algeria': 'DZ',
          'American Samoa': 'AS',
          'Andorra': 'AD',
          'Angola': 'AO',
          'Anguilla': 'AI',
          'Antarctica': 'AQ',
          'Antigua And Barbuda': 'AG',
          'Argentina': 'AR',
          'Armenia': 'AM',
          'Aruba': 'AW',
          'Australia': 'AU',
          'Austria': 'AT',
          'Azerbaijan': 'AZ',
          'Bahamas': 'BS',
          'Bahrain': 'BH',
          'Bangladesh': 'BD',
          'Barbados': 'BB',
          'Belarus': 'BY',
          'Belgium': 'BE',
          'Belize': 'BZ',
          'Benin': 'BJ',
          'Bermuda': 'BM',
          'Bhutan': 'BT',
          'Bolivia': 'BO',
          'Bosnia and Herzegovina': 'BA',
          'Botswana': 'BW',
          'Bouvet Island': 'BV',
          'Brazil': 'BR',
          'British Indian Ocean Territory': 'IO',
          'Brunei': 'BN',
          'Bulgaria': 'BG',
          'Burkina Faso': 'BF',
          'Burundi': 'BI',
          'Cambodia': 'KH',
          'Cameroon': 'CM',
          'Canada': 'CA',
          'Cape Verde': 'CV',
          'Cayman Islands': 'KY',
          'Central African Republic': 'CF',
          'Chad': 'TD',
          'Chile': 'CL',
          'China': 'CN',
          'Christmas Island': 'CX',
          'Cocos (Keeling) Islands': 'CC',
          'Colombia': 'CO',
          'Comoros': 'KM',
          'Congo': 'CG',
          'DRC': 'CD',
          'Cook Islands': 'CK',
          'Costa Rica': 'CR',
          'Ivory Coast': 'CI',
          'Croatia': 'HR',
          'Cuba': 'CU',
          'Cyprus': 'CY',
          'Czechia': 'CZ',
          'Denmark': 'DK',
          'Djibouti': 'DJ',
          'Dominica': 'DM',
          'Dominican Republic': 'DO',
          'Ecuador': 'EC',
          'Egypt': 'EG',
          'El Salvador': 'SV',
          'Equatorial Guinea': 'GQ',
          'Eritrea': 'ER',
          'Estonia': 'EE',
          'Ethiopia': 'ET',
          'Falkland Islands': 'FK',
          'Faeroe Islands': 'FO',
          'Fiji': 'FJ',
          'Finland': 'FI',
          'France': 'FR',
          'French Guiana': 'GF',
          'French Polynesia': 'PF',
          'French Southern Territories': 'TF',
          'Gabon': 'GA',
          'Gambia': 'GM',
          'Georgia': 'GE',
          'Germany': 'DE',
          'Ghana': 'GH',
          'Gibraltar': 'GI',
          'Greece': 'GR',
          'Greenland': 'GL',
          'Grenada': 'GD',
          'Guadeloupe': 'GP',
          'Guam': 'GU',
          'Guatemala': 'GT',
          'Guernsey': 'GG',
          'Guinea': 'GN',
          'Guinea-Bissau': 'GW',
          'Guyana': 'GY',
          'Haiti': 'HT',
          'Heard Island & Mcdonald Islands': 'HM',
          'Holy See (Vatican City State)': 'VA',
          'Honduras': 'HN',
          'Hong Kong': 'HK',
          'Hungary': 'HU',
          'Iceland': 'IS',
          'India': 'IN',
          'Indonesia': 'ID',
          'Iran': 'IR',
          'Iraq': 'IQ',
          'Ireland': 'IE',
          'Isle Of Man': 'IM',
          'Israel': 'IL',
          'Italy': 'IT',
          'Jamaica': 'JM',
          'Japan': 'JP',
          'Channel Islands': 'JE',
          'Jordan': 'JO',
          'Kazakhstan': 'KZ',
          'Kenya': 'KE',
          'Kiribati': 'KI',
          'Korea': 'KR',
          'S. Korea': 'KR',
          'Kuwait': 'KW',
          'Kyrgyzstan': 'KG',
          'Lao People\'s Democratic Republic': 'LA',
          'Latvia': 'LV',
          'Lebanon': 'LB',
          'Lesotho': 'LS',
          'Liberia': 'LR',
          'Libyan Arab Jamahiriya': 'LY',
          'Liechtenstein': 'LI',
          'Lithuania': 'LT',
          'Luxembourg': 'LU',
          'Macao': 'MO',
          'Macedonia': 'MK',
          'Madagascar': 'MG',
          'Malawi': 'MW',
          'Malaysia': 'MY',
          'Maldives': 'MV',
          'Mali': 'ML',
          'Malta': 'MT',
          'Marshall Islands': 'MH',
          'Martinique': 'MQ',
          'Mauritania': 'MR',
          'Mauritius': 'MU',
          'Mayotte': 'YT',
          'Mexico': 'MX',
          'Micronesia, Federated States Of': 'FM',
          'Moldova': 'MD',
          'Monaco': 'MC',
          'Mongolia': 'MN',
          'Montenegro': 'ME',
          'Montserrat': 'MS',
          'Morocco': 'MA',
          'Mozambique': 'MZ',
          'Myanmar': 'MM',
          'Namibia': 'NA',
          'Nauru': 'NR',
          'Nepal': 'NP',
          'Netherlands': 'NL',
          'Netherlands Antilles': 'AN',
          'New Caledonia': 'NC',
          'New Zealand': 'NZ',
          'Nicaragua': 'NI',
          'Niger': 'NE',
          'Nigeria': 'NG',
          'Niue': 'NU',
          'Norfolk Island': 'NF',
          'North Macedonia': 'MP',
          'Norway': 'NO',
          'Oman': 'OM',
          'Pakistan': 'PK',
          'Palau': 'PW',
          'Palestine': 'PS',
          'Panama': 'PA',
          'Papua New Guinea': 'PG',
          'Paraguay': 'PY',
          'Peru': 'PE',
          'Philippines': 'PH',
          'Pitcairn': 'PN',
          'Poland': 'PL',
          'Portugal': 'PT',
          'Puerto Rico': 'PR',
          'Qatar': 'QA',
          'Réunion': 'RE',
          'Romania': 'RO',
          'Russia': 'RU',
          'Rwanda': 'RW',
          'Saint Barthelemy': 'BL',
          'St. Barth': 'BL',
          'Saint Helena': 'SH',
          'Saint Kitts And Nevis': 'KN',
          'Saint Lucia': 'LC',
          'Saint Martin': 'MF',
          'Saint Pierre And Miquelon': 'PM',
          'St. Vincent Grenadines': 'VC',
          'Samoa': 'WS',
          'San Marino': 'SM',
          'Sao Tome And Principe': 'ST',
          'Saudi Arabia': 'SA',
          'Senegal': 'SN',
          'Serbia': 'RS',
          'Seychelles': 'SC',
          'Sierra Leone': 'SL',
          'Singapore': 'SG',
          'Slovakia': 'SK',
          'Slovenia': 'SI',
          'Solomon Islands': 'SB',
          'Somalia': 'SO',
          'South Africa': 'ZA',
          'South Georgia And Sandwich Isl.': 'GS',
          'Spain': 'ES',
          'Sri Lanka': 'LK',
          'Sudan': 'SD',
          'Suriname': 'SR',
          'Svalbard And Jan Mayen': 'SJ',
          'Swaziland': 'SZ',
          'Sweden': 'SE',
          'Switzerland': 'CH',
          'Syrian Arab Republic': 'SY',
          'Taiwan': 'TW',
          'Tajikistan': 'TJ',
          'Tanzania': 'TZ',
          'Thailand': 'TH',
          'Timor-Leste': 'TL',
          'Togo': 'TG',
          'Tokelau': 'TK',
          'Tonga': 'TO',
          'Trinidad and Tobago': 'TT',
          'Tunisia': 'TN',
          'Turkey': 'TR',
          'Turkmenistan': 'TM',
          'Turks And Caicos Islands': 'TC',
          'Tuvalu': 'TV',
          'Uganda': 'UG',
          'Ukraine': 'UA',
          'UAE': 'AE',
          'UK': 'GB',
          'United Kingdom': 'GB',
          'US': 'US',
          'USA': 'US',
          'United States Outlying Islands': 'UM',
          'Uruguay': 'UY',
          'Uzbekistan': 'UZ',
          'Vanuatu': 'VU',
          'Venezuela': 'VE',
          'Vietnam': 'VN',
          'Virgin Islands, British': 'VG',
          'U.S. Virgin Islands': 'VI',
          'Wallis And Futuna': 'WF',
          'Western Sahara': 'EH',
          'Yemen': 'YE',
          'Zambia': 'ZM',
          'Zimbabwe': 'ZW',
          'Curaçao': 'CW'
        };
        this.countries = [];
        this.countriesHistory = [];
        this.currentStateCountry = [];
        this.options4 = {};
        this.data4 = {};
        this.optns = {
          elements: {
            point: {
              radius: 0
            }
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                fontColor: '#c4e5f1'
              }
            }],
            xAxes: [{
              ticks: {
                fontColor: '#c4e5f1'
              }
            }]
          },
          legend: {
            labels: {
              fontColor: '#e7f3fa'
            }
          }
        };
        this.options1 = {
          elements: {
            point: {
              radius: 0
            }
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                fontColor: '#c4e5f1'
              }
            }],
            xAxes: [{
              ticks: {
                fontColor: '#c4e5f1'
              }
            }]
          },
          legend: {
            labels: {
              fontColor: '#e7f3fa'
            }
          }
        };
        this.options2 = {
          legend: {
            labels: {
              fontColor: '#e7f3fa'
            }
          }
        };
        this.options3 = {
          scales: {
            yAxes: [{
              ticks: {
                fontColor: '#c4e5f1'
              }
            }],
            xAxes: [{
              ticks: {
                fontColor: '#c4e5f1'
              }
            }]
          },
          legend: {
            labels: {
              fontColor: '#e7f3fa'
            }
          }
        };
        this.options = {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                fontColor: '#c4e5f1'
              }
            }],
            xAxes: [{
              ticks: {
                fontColor: '#c4e5f1'
              }
            }]
          },
          legend: {
            labels: {
              fontColor: '#e7f3fa'
            }
          }
        };
        this.countries_temp = [];
      }

      _createClass(DashboardComponent, [{
        key: "showModal",
        value: function showModal() {
          this.modalStep = 1;
          this.isModalShown = true;
        }
      }, {
        key: "hideModal",
        value: function hideModal() {
          this.autoShownModal.hide();
        }
      }, {
        key: "onHidden",
        value: function onHidden() {
          this.isModalShown = false;
        }
      }, {
        key: "nextStep",
        value: function nextStep() {
          this.modalStep += 1;
        }
      }, {
        key: "close",
        value: function close(dontShow) {
          if (dontShow) {
            localStorage.setItem("dontShow", "true");
          }

          this.hideModal();
        }
      }, {
        key: "GetlastEntry",
        value: function GetlastEntry(allElement) {
          for (var _i2 = 0, _Object$entries = Object.entries(allElement); _i2 < _Object$entries.length; _i2++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
                key = _Object$entries$_i[0],
                value = _Object$entries$_i[1];

            if (value.length) {
              this.currentStateCountry.push({
                active: value[value.length - 1].confirmed,
                cases: value[value.length - 1].confirmed,
                casesPerOneMillion: 0,
                country: key,
                critical: value[value.length - 1].confirmed,
                deaths: value[value.length - 1].confirmed,
                deathsPerOneMillion: true,
                recovered: value[value.length - 1].confirmed,
                todayCases: 0,
                todayDeaths: 0
              });
            }
          }
        }
      }, {
        key: "SetCountryData",
        value: function SetCountryData(allElement) {
          for (var _i3 = 0, _Object$entries2 = Object.entries(allElement); _i3 < _Object$entries2.length; _i3++) {
            var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i3], 2),
                key = _Object$entries2$_i[0],
                value = _Object$entries2$_i[1];

            var confirmed = 0;
            var deaths = 0;
            var recovered = 0;

            if (value.length) {
              this.countries_temp.push({
                active: value[value.length - 1].confirmed,
                cases: value[value.length - 1].confirmed,
                casesPerOneMillion: 0,
                country: key,
                critical: value[value.length - 1].confirmed,
                deaths: value[value.length - 1].deaths,
                deathsPerOneMillion: 0,
                recovered: value[value.length - 1].recovered,
                todayCases: value[value.length - 1].confirmed - value[value.length - 2].confirmed,
                todayDeaths: value[value.length - 1].deaths - value[value.length - 2].deaths
              });
            }
          }
        }
      }, {
        key: "calculateSum2",
        value: function calculateSum2(index) {
          var array = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.countries;
          var total = 0;
          var _len = Object.keys(array).length;

          for (var i in array) {
            if (array[i][index]) total += array[i][index];else total += 0;
          }

          return total;
        }
      }, {
        key: "calculateSum1",
        value: function calculateSum1(index) {
          var array = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.countries_temp;
          var total = 0;
          var _len = Object.keys(array).length;

          for (var i in array) {
            if (array[i][index]) total += array[i][index];else total += 0;
          }

          return total;
        }
      }, {
        key: "calculateSum",
        value: function calculateSum(index) {
          var array = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.countries;
          var total = 0;
          var THIS = this;

          for (var i = 0, _len = array.length; i < _len; i++) {
            if (array[i]["total_cases"]) this.totalCases += array[i]["total_cases"]; //this.calculateSum("total_cases");

            if (array[i]["total_deaths"]) this.totalDeaths += array[i]["total_deaths"]; //this.calculateSum("total_deaths");

            if (array[i]["total_recovered"]) this.totalRecoveries += array[i]["total_recovered"]; //this.calculateSum("total_recovered");

            if (array[i]["total_serious_cases"]) this.totalCritical += array[i]["total_serious_cases"]; //this.calculateSum("total_serious_cases");

            if (array[i]["total_new_cases_today"]) this.todayCases += array[i]["total_new_cases_today"]; //this.calculateSum("total_new_cases_today");

            if (array[i]["total_new_deaths_today"]) this.todayDeaths += array[i]["total_new_deaths_today"]; //this.calculateSum("total_new_deaths_today");

            if (array[i]["total_unresolved"]) this.unresolved += array[i]["total_unresolved"]; //this.calculateSum("total_unresolved");

            this.activeCases += array[i]["total_active_cases"]; //this.calculateSum("total_new_deaths_today")
          }

          this.activeCasesPerMillion = this.ToMillion(this.activeCases);
        }
      }, {
        key: "getDaily",
        value: function getDaily(index) {
          var array = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.countries_temp;
          var total = 0;
          var _len = Object.keys(array).length;

          for (var i in array) {
            this.firstKeyLength = array[i].length;
            total += array[i][array[i].length - 1][index]; //retry last element
          }

          return total;
        }
      }, {
        key: "sortData",
        value: function sortData(data, sortBy) {
          try {
            var sortProp = sortBy;
            data.sort(function (a, b) {
              if (a[sortProp] < b[sortProp]) {
                return -1;
              } else if (a[sortProp] > b[sortProp]) {
                return 1;
              }

              return 0;
            });
          } catch (e) {
            console.error("ERROR while sorting", e);
            return data;
          }

          return data;
        }
      }, {
        key: "SortStateByCountries",
        value: function SortStateByCountries(selectedState) {
          this.NewMapChartModel(selectedState);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "BuildLineChartHistory",
        value: function BuildLineChartHistory() {
          var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.timeLine;
          //from Backend githbub format
          var index = 0;

          for (var _i4 = 0, _Object$entries3 = Object.entries(this.timeLine); _i4 < _Object$entries3.length; _i4++) {
            var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i4], 2),
                key = _Object$entries3$_i[0],
                value = _Object$entries3$_i[1];

            var dataset1 = {};
            var dataset2 = {};
            var dataset3 = {};
            dataset1.label = key;
            dataset1.fill = true;
            dataset2.label = key;
            dataset2.fill = true;
            dataset3.label = key;
            dataset3.fill = true;
            var dataConfirmed = [];
            var dataDeath = [];
            var dataRecoverd = [];
            var j = 0;

            for (var _i5 = 0, _Object$entries4 = Object.entries(value); _i5 < _Object$entries4.length; _i5++) {
              var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i5], 2),
                  keyTwo = _Object$entries4$_i[0],
                  item = _Object$entries4$_i[1];

              if (!index) {
                // only firt time read data
                var parts = item.date.split('-');
                this.labels.push(parts[2] + "-" + parts[1]);
              }

              dataConfirmed.push(item.confirmed);
              dataDeath.push(item.deaths);
              dataRecoverd.push(item.recovered);
            }

            dataset1.data = dataConfirmed;
            dataset1.label = "confirmed";
            dataset1.borderColor = '#21AFDD';
            dataset1.backgroundColor = '#0697c7';
            dataset2.data = dataRecoverd;
            dataset2.label = "recovered";
            dataset2.borderColor = '#10c469';
            dataset2.backgroundColor = '#35cc7f';
            dataset3.data = dataDeath;
            dataset3.label = "deaths";
            dataset3.borderColor = '#c01515';
            dataset3.backgroundColor = '#ff7e7e';
            index++;
            if (key == "US") key = "USA";
            this.countriesHistory[key] = {
              labels: this.labels,
              datasets: [dataset1, dataset2, dataset3]
            };
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this7 = this;

          this.zone.runOutsideAngular(function () {
            if (_this7.pieChart) {
              _this7.pieChart.dispose();
            }

            if (_this7.mapChart) {
              _this7.mapChart.dispose();
            }

            if (_this7.lineChart) {
              _this7.lineChart.dispose();
            }

            if (_this7.radarChart) {
              _this7.radarChart.dispose();
            }

            if (_this7.myChart) {
              _this7.myChart.dispose();
            }
          });
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          this.innerWidth = window.innerWidth;

          if (this.innerWidth < 601) {
            this.heightExp = 500;
            this.countRows = 3;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this8 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.innerWidth = window.innerWidth;
                    this.innerWidth = window.innerWidth;

                    if (this.innerWidth < 601) {
                      this.heightExp = 500;
                      this.countRows = 3;
                    }

                    this.cols = [
                    /* { field:
                       code', header: 'Id' }, */
                    {
                      field: 'title',
                      header: 'Country',
                      index: 1
                    }, {
                      field: 'total_cases',
                      header: 'Cases',
                      index: 2
                    }, {
                      field: 'total_active_cases',
                      header: 'Active Cases',
                      index: 3
                    }, {
                      field: 'total_deaths',
                      header: 'Deaths',
                      index: 4
                    }, {
                      field: 'total_new_cases_today',
                      header: 'Cases Today',
                      index: 5
                    }, {
                      field: 'total_new_deaths_today',
                      header: 'Deaths Today',
                      index: 6
                    }, {
                      field: 'total_recovered',
                      header: 'Recovered',
                      index: 7
                    }, {
                      field: 'total_serious_cases',
                      header: 'Critical',
                      index: 8
                    }, {
                      field: 'total_unresolved',
                      header: 'Unresolved',
                      index: 9
                    }, {
                      field: 'source',
                      header: 'source',
                      index: 1
                    }];

                    if (false) {}

                    this.zone.runOutsideAngular(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        var _this9 = this;

                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this._getDataService.getAll(this.sortType), this._getDataService.getTimelineGlobal()).subscribe(function (_ref3) {
                                  var _ref4 = _slicedToArray(_ref3, 2),
                                      getAllData = _ref4[0],
                                      getTimeline = _ref4[1];

                                  _this9.isLoading = false;
                                  _this9.isLoadingCountries = false;
                                  _this9.isLoadingMap = false;
                                  _this9.timeLine = getTimeline;

                                  _this9.BuildLineChartHistory();

                                  var evilResponse = getAllData;
                                  evilResponse = evilResponse.countryitems[0]; // Step 1. Get all the object keys.

                                  var evilResponseProps = Object.keys(evilResponse); // Step 2. Create an empty array.
                                  // Step 3. Iterate throw all keys.

                                  var data = [];
                                  var index = 1;

                                  for (var _i6 = 0, _evilResponseProps = evilResponseProps; _i6 < _evilResponseProps.length; _i6++) {
                                    var prop = _evilResponseProps[_i6];
                                    if (index == evilResponseProps.length) break;
                                    index++;

                                    _this9.countries.push(evilResponse[prop]);
                                  } //infection History Data


                                  _this9.selectedCountry = _this9.countries[0];
                                  _this9.historyData = _this9.countriesHistory[_this9.selectedCountry.title]; //3 infected Countriy

                                  _this9.calculateSum("total_cases");

                                  _this9.finishedCases = _this9.totalDeaths + _this9.totalRecoveries;
                                  _this9.fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_9__(_this9.countries, {
                                    shouldSort: true,
                                    threshold: 0.6,
                                    location: 0,
                                    distance: 100,
                                    minMatchCharLength: 1,
                                    keys: ["title"]
                                  }); //delete alss ellement has ok state

                                  _this9.countries.slice(-1, 1);

                                  _this9.countries = _this9.sortData(_this9.countries, "total_cases");

                                  _this9.countries.reverse();

                                  _this9.loadLineChart(false);

                                  _this9.loadRadar();

                                  _this9.BuildBarChartMostInfectedCountry();

                                  _this9.loadPieChart();

                                  _this9.NewMapChartModel('total_cases');
                                });

                              case 1:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    });

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "BuildBarChartMostInfectedCountry",
        value: function BuildBarChartMostInfectedCountry() {
          var dataSt1 = {};
          var dataSt2 = {};
          var dataSt3 = {};
          var dataSt4 = {};
          var length = this.countriesHistory[this.countries[0].title].datasets[0].data.length;
          var newArray = this.countriesHistory[this.countries[0].title].datasets[0].data.map(function (elem, index, array) {
            if (index + 1 < array.length && index) {
              var daily_Case = elem - array[index - 1];
              return daily_Case > 0 ? daily_Case : 0;
            }
          });
          dataSt1.data = this.countriesHistory[this.countries[0].title].datasets[0].data.map(function (elem, index, array) {
            if (index + 1 < array.length && index) {
              var daily_Case = elem - array[index - 1];
              return daily_Case > 0 ? daily_Case : 0;
            }
          });
          dataSt1.label = this.countries[0].title;
          dataSt1.borderColor = '#36b1dd';
          dataSt1.borderWidth = 1;
          dataSt2.data = this.countriesHistory[this.countries[1].title].datasets[0].data.map(function (elem, index, array) {
            if (index + 1 < array.length && index) {
              var daily_Case = elem - array[index - 1];
              return daily_Case > 0 ? daily_Case : 0;
            }
          });
          dataSt2.label = this.countries[1].title;
          dataSt2.borderColor = '#36b1dd';
          dataSt2.borderWidth = 1;
          dataSt2.backgroundColor = '#337db8';
          dataSt3.data = this.countriesHistory[this.countries[2].title].datasets[0].data.map(function (elem, index, array) {
            if (index + 1 < array.length && index) {
              var daily_Case = elem - array[index - 1];
              return daily_Case > 0 ? daily_Case : 0;
            }
          });
          dataSt3.label = this.countries[2].title;
          dataSt3.borderColor = '#36b1dd';
          dataSt3.borderWidth = 1;
          dataSt3.backgroundColor = '#0466a3';
          dataSt4.data = this.countriesHistory[this.countries[3].title].datasets[0].data.map(function (elem, index, array) {
            if (index + 1 < array.length && index) {
              var daily_Case = elem - array[index - 1];
              return daily_Case > 0 ? daily_Case : 0;
            }
          });
          dataSt4.label = this.countries[3].title;
          dataSt4.fontColor = 'red';
          dataSt4.borderColor = '#36b1dd';
          dataSt4.borderWidth = 1;
          dataSt4.backgroundColor = '#88cae8';
          this.newCasesMostInfectedCountry = {
            labels: this.labels,
            datasets: [dataSt1, dataSt2, dataSt3, dataSt4]
          };
          this.BarChartFirstCountry = {
            labels: ['Infection', 'Death', 'Recovery'],
            datasets: [{
              label: this.countries[0].title,
              data: [this.countries[0].total_cases, this.countries[0].total_deaths, this.countries[0].total_recovered],
              hoverBackgroundColor: ['#037297', '#c01515', '#008140'],
              backgroundColor: ["#0697c7", "#ff7e7e", "#35cc7f"]
            }]
          };
          var country_0 = this.countries[0].total_active_cases ? (this.countries[0].total_deaths / this.countries[0].total_active_cases * 100).toFixed(2) : 0;
          var country_1 = this.countries[1].total_active_cases ? (this.countries[1].total_deaths / this.countries[1].total_active_cases * 100).toFixed(2) : 0;
          var country_2 = this.countries[2].total_active_cases ? (this.countries[2].total_deaths / this.countries[2].total_active_cases * 100).toFixed(2) : 0;
          var country_3 = this.countries[3].total_active_cases ? (this.countries[3].total_deaths / this.countries[3].total_active_cases * 100).toFixed(2) : 0;
          this.BarChartSecondCountry = {
            labels: [this.countries[0].title, this.countries[1].title, this.countries[2].title, this.countries[3].title],
            datasets: [{
              label: this.countries[0].title,
              data: [country_0, country_1, country_2, country_3],
              backgroundColor: ['#90d0cf', '#d19bab', '#ffcd56', '#b5d3b8'],
              borderColor: ['#36a2eb', '#ff6384', '#ffce56', '#4bc0a2']
            }]
          };
          this.data4 = {
            labels: [this.GetShortCountryName(this.countries[0].title), this.GetShortCountryName(this.countries[1].title), this.GetShortCountryName(this.countries[2].title), this.GetShortCountryName(this.countries[3].title)],
            datasets: [{
              label: "infections",
              data: [this.countries[0].total_cases, this.countries[1].total_cases, this.countries[2].total_cases, this.countries[3].total_cases],
              fill: false,
              backgroundColor: "rgba(181,211,184,1)"
            }, {
              label: "deaths",
              data: [this.countries[0].total_deaths, this.countries[1].total_deaths, this.countries[2].total_deaths, this.countries[3].total_deaths],
              fill: false,
              backgroundColor: "rgba(255,99,132,0.7)"
            }, {
              label: "critical",
              data: [this.countries[0].total_recovered, this.countries[1].total_recovered, this.countries[2].total_recovered, this.countries[3].total_recovered],
              fill: false,
              backgroundColor: "#90d0cf"
            }, {
              label: "active_case",
              data: [this.countries[0].total_active_cases, this.countries[1].total_active_cases, this.countries[2].total_active_cases, this.countries[3].total_active_cases],
              fill: false,
              backgroundColor: "#ffcd56"
            }]
          };
          this.BarChartThirdCountry = {
            labels: ['Infection', 'Death', 'Recovery'],
            datasets: [{
              label: this.countries[2].title,
              data: [this.countries[2].total_cases, this.countries[2].total_deaths, this.countries[2].total_recovered],
              hoverBackgroundColor: ['#037297', '#c01515', '#008140'],
              backgroundColor: ["#0697c7", "#ff7e7e", "#35cc7f"]
            }]
          };
        }
      }, {
        key: "getMyTimelineData",
        value: function getMyTimelineData(allElement) {
          for (var _i7 = 0, _Object$entries5 = Object.entries(allElement); _i7 < _Object$entries5.length; _i7++) {
            var _Object$entries5$_i = _slicedToArray(_Object$entries5[_i7], 2),
                key = _Object$entries5$_i[0],
                value = _Object$entries5$_i[1];

            if (value.length) {
              this.currentStateCountry.push({
                active: value[value.length - 1].confirmed,
                cases: value[value.length - 1].confirmed,
                casesPerOneMillion: 0,
                country: key,
                critical: value[value.length - 1].confirmed,
                deaths: value[value.length - 1].confirmed,
                deathsPerOneMillion: true,
                recovered: value[value.length - 1].confirmed,
                todayCases: 0,
                todayDeaths: 0
              });
            }
          }
        }
      }, {
        key: "searchCountries",
        value: function searchCountries(key) {
          if (key) {
            this.countries = this.fuse.search(key);
            return;
          }

          this.countries = this.fuse.list;
        }
      }, {
        key: "sortCountries",
        value: function sortCountries(key, skey) {
          this.isLoadingCountries = true;
          this.sortType = key;
          this.loadSorted();
        }
      }, {
        key: "loadSorted",
        value: function loadSorted() {
          var _this10 = this;

          this._getDataService.getAll(this.sortType).subscribe(function (data) {
            _this10.isLoadingCountries = false;
          });
        }
      }, {
        key: "loadPieChart",
        value: function loadPieChart() {
          var tempData = this.fuse.list.slice();

          var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("pieChart", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["PieChart"]);

          chart.data = tempData.slice(0, 10);
          var otherCases = tempData.slice(10, tempData.length);
          chart.data.push({
            country: 'Other',
            cases: this.calculateSum2("total_cases", otherCases)
          });
          var pieSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["PieSeries"]());
          pieSeries.dataFields.value = "total_cases";
          pieSeries.dataFields.category = "title";
          pieSeries.labels.template.disabled = true;
          pieSeries.ticks.template.disabled = true;
          pieSeries.slices.template.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#90d0cf");
          pieSeries.slices.template.strokeWidth = 1;
          pieSeries.slices.template.strokeOpacity = 1;
          this.pieChart = chart;
          /* this.loadMap("total_cases"); */
        }
      }, {
        key: "loadLineChart",
        value: function loadLineChart(chartType) {
          this.caseData = [];

          if (this.lineChart) {
            this.lineChart.dispose();
          }

          var date;
          var cases = 0;
          var recoveries = 0;
          var deaths = 0;
          var column = 0;
          this.firstKeyLength = this.timeLine[Object.keys(this.timeLine)[0]].length;

          for (column = 0; column < this.firstKeyLength - 1; column++) {
            for (var _i8 = 0, _Object$entries6 = Object.entries(this.timeLine); _i8 < _Object$entries6.length; _i8++) {
              var _Object$entries6$_i = _slicedToArray(_Object$entries6[_i8], 2),
                  key = _Object$entries6$_i[0],
                  value = _Object$entries6$_i[1];

              cases += value[column].confirmed;
              recoveries += value[column].recovered;
              deaths += value[column].deaths;
            }

            this.caseData.push({
              date: new Date(this.timeLine[Object.keys(this.timeLine)[0]][column].date),
              cases: cases,
              recoveries: recoveries,
              deaths: deaths
            });
          }

          var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("lineChart", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYChart"]);

          chart.numberFormatter.numberFormat = "#a";
          chart.numberFormatter.bigNumberPrefixes = [{
            "number": 1e+3,
            "suffix": "K"
          }, {
            "number": 1e+6,
            "suffix": "M"
          }, {
            "number": 1e+9,
            "suffix": "B"
          }]; // Create axes

          var dateAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["DateAxis"]());
          dateAxis.renderer.minGridDistance = 50;
          var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["ValueAxis"]());
          valueAxis.logarithmic = chartType;
          valueAxis.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#adb5bd");
          dateAxis.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#adb5bd");
          chart = this.createSeriesLine(chart, "#21AFDD", "cases");
          chart = this.createSeriesLine(chart, "#10c469", "recoveries");
          chart = this.createSeriesLine(chart, "#ff5b5b", "deaths");
          chart.data = this.caseData;
          chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["Legend"]();
          chart.legend.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#adb5bd");
          chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYCursor"]();
          this.lineChart = chart;
        }
      }, {
        key: "loadMap",
        value: function loadMap(option) {
          var _this11 = this;

          this.isLoadingMap = true;

          if (this.mapChart) {
            this.mapChart.dispose();
          }

          var color = "#21AFDD";

          if (option == "total_recovered") {
            color = "#10c469";
          } else if (option == "total_serious_cases") {
            color = "#f9c851";
          } else if (option == "total_deaths") {
            color = "#ff5b5b";
          }

          var mapData = [];
          this.fuse.list.forEach(function (element) {
            if (element[option] != 0) {
              mapData.push({
                id: _this11.countryCodes[element.title],
                name: element.title,
                value: element[option],
                color: _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"](color)
              });
            }
          });

          var chartMap = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("worldChart", _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_6__["MapChart"]); // Set map definition


          chartMap.geodata = _amcharts_amcharts4_geodata_worldLow__WEBPACK_IMPORTED_MODULE_7__["default"]; // Set projection

          chartMap.projection = new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_6__["projections"].Miller(); // Create map polygon series

          var polygonSeries = chartMap.series.push(new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_6__["MapPolygonSeries"]());
          polygonSeries.exclude = ["AQ"];
          polygonSeries.useGeodata = true;
          polygonSeries.nonScalingStroke = true;
          polygonSeries.strokeWidth = 0.5;
          polygonSeries.calculateVisualCenter = true;
          var imageSeries = chartMap.series.push(new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_6__["MapImageSeries"]());
          imageSeries.data = mapData;
          imageSeries.dataFields.value = "value";
          var imageTemplate = imageSeries.mapImages.template;
          imageTemplate.nonScaling = true;
          var circle = imageTemplate.createChild(_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["Circle"]);
          circle.fillOpacity = 0.7;
          circle.propertyFields.fill = "color";
          circle.tooltipText = "{name}: [bold]{value}[/]";
          chartMap.events.on("ready", function () {
            _this11.isLoadingMap = false;
          });
          imageSeries.heatRules.push({
            "target": circle,
            "property": "radius",
            "min": 4,
            "max": 30,
            "dataField": "value"
          });
          imageTemplate.adapter.add("latitude", function (latitude, target) {
            var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext["id"]);

            if (polygon) {
              return polygon.visualLatitude;
            }

            return latitude;
          });
          imageTemplate.adapter.add("longitude", function (longitude, target) {
            var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext["id"]);

            if (polygon) {
              return polygon.visualLongitude;
            }

            return longitude;
          });
          var polygonTemplate = polygonSeries.mapPolygons.template;
          polygonTemplate.tooltipText = "{name}";
          polygonTemplate.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#282d37");
          polygonTemplate.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#313a46");
          this.mapChart = chartMap;
        }
      }, {
        key: "loadRadar",
        value: function loadRadar() {
          var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("radarChart", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["RadarChart"]); // Add data


          chart.data = [{
            "category": "Critical",
            "value": this.totalCritical / this.activeCases * 100,
            "full": 100
          }, {
            "category": "Death",
            "value": this.totalDeaths / this.finishedCases * 100,
            "full": 100
          }, {
            "category": "Recovered",
            "value": this.totalRecoveries / this.finishedCases * 100,
            "full": 100
          }, {
            "category": "Active",
            "value": 100 - this.totalCritical / this.activeCases * 100,
            "full": 100
          }]; // Make chart not full circle

          chart.startAngle = -90;
          chart.endAngle = 180;
          chart.innerRadius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["percent"](20); // Set number format

          chart.numberFormatter.numberFormat = "#.#'%'"; // Create axes

          var categoryAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["CategoryAxis"]());
          categoryAxis.dataFields.category = "category";
          categoryAxis.renderer.grid.template.location = 0;
          categoryAxis.renderer.grid.template.strokeOpacity = 0;
          categoryAxis.renderer.labels.template.horizontalCenter = "right";
          categoryAxis.renderer.labels.template.adapter.add("fill", function (fill, target) {
            if (target.dataItem.index == 0) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#f9c851");
            }

            if (target.dataItem.index == 1) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#ff5b5b");
            }

            if (target.dataItem.index == 2) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#10c469");
            }

            return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#21AFDD");
          });
          categoryAxis.renderer.minGridDistance = 10;
          var valueAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["ValueAxis"]());
          valueAxis.renderer.grid.template.strokeOpacity = 0;
          valueAxis.min = 0;
          valueAxis.max = 100;
          valueAxis.strictMinMax = true;
          valueAxis.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#adb5bd"); // Create series

          var series1 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["RadarColumnSeries"]());
          series1.dataFields.valueX = "full";
          series1.dataFields.categoryY = "category";
          series1.clustered = false;
          series1.columns.template.fill = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["InterfaceColorSet"]().getFor("alternativeBackground");
          series1.columns.template.fillOpacity = 0.08;
          series1.columns.template["cornerRadiusTopLeft"] = 20;
          series1.columns.template.strokeWidth = 0;
          series1.columns.template.radarColumn.cornerRadius = 20;
          var series2 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["RadarColumnSeries"]());
          series2.dataFields.valueX = "value";
          series2.dataFields.categoryY = "category";
          series2.clustered = false;
          series2.columns.template.strokeWidth = 0;
          series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
          series2.columns.template.radarColumn.cornerRadius = 20;
          series2.columns.template.adapter.add("fill", function (fill, target) {
            //return chart.colors.getIndex(target.dataItem.index);
            if (target.dataItem.index == 0) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#f9c851");
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#f9c851");
            }

            if (target.dataItem.index == 1) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#ff5b5b");
            }

            if (target.dataItem.index == 2) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#10c469");
            }

            return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#21AFDD");
          }); // Add cursor

          chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["RadarCursor"]();
          chart.cursor.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#282e38");
          chart.tooltip.label.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#282e38");
          this.radarChart = chart;
        }
      }, {
        key: "createSeriesLine",
        value: function createSeriesLine(chart, color, type) {
          var name = type.charAt(0).toUpperCase() + type.slice(1);
          var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["LineSeries"]());
          series.dataFields.valueY = type;
          series.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"](color);
          series.dataFields.dateX = "date";
          series.strokeWidth = 2;
          series.minBulletDistance = 10;
          series.tooltipText = "{valueY} " + name;
          series.tooltip.pointerOrientation = "vertical";
          series.tooltip.background.cornerRadius = 20;
          series.tooltip.background.fillOpacity = 0.5;
          series.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"](color);
          series.legendSettings.labelText = name;
          series.tooltip.autoTextColor = false;
          series.tooltip.label.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#282e38");
          return chart;
        }
      }, {
        key: "ChangeCountry",
        value: function ChangeCountry(event) {
          this.historyData = this.countriesHistory[event.title];
        }
      }, {
        key: "selectData",
        value: function selectData(event) {}
      }, {
        key: "GetShortCountryName",
        value: function GetShortCountryName(country) {
          var shortName = country;
          if (country.length > 5) shortName = this.countryCodes[shortName.toString()];
          return shortName;
        }
      }, {
        key: "ToMillion",
        value: function ToMillion(labelValue) {
          // Nine Zeroes for Billions
          var converted = Math.abs(Number(labelValue)) >= 1.0e+9 ? Math.abs(Number(labelValue)) / 1.0e+9 + "B" // Six Zeroes for Millions 
          : Math.abs(Number(labelValue)) >= 1.0e+6 ? Math.abs(Number(labelValue)) / 1.0e+6 + "M" // Three Zeroes for Thousands
          : Math.abs(Number(labelValue)) >= 1.0e+3 ? Math.abs(Number(labelValue)) / 1.0e+3 + "K" : Math.abs(Number(labelValue));
          return converted.substring(0, 4);
        }
      }, {
        key: "NewMapChartModel",
        value: function NewMapChartModel(option) {
          if (this.myChart) {
            this.myChart.dispose();
          }

          var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]('chartdiv', _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_6__["MapChart"]);

          chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

          chart.geodata = _amcharts_amcharts4_geodata_worldLow__WEBPACK_IMPORTED_MODULE_7__["default"];
          chart.projection = new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_6__["projections"].Miller();
          /* chart.projection = new am4maps.projections.AzimuthalEqualArea(); */

          /* chart.projection = new am4maps.projections.orientciwation(); */

          /* const title = chart.chartContainer.createChild(am4core.Label); */

          /* title.text = ' Death in the World'; */

          /* title.fontSize = 10; */

          /* title.paddingTop = 10; */

          /* title.align = 'center'; */

          /* title.zIndex = 100; */

          var polygonSeries = chart.series.push(new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_6__["MapPolygonSeries"]());
          var polygonTemplate = polygonSeries.mapPolygons.template;
          polygonTemplate.tooltipText = '{name}: {value.value.formatNumber(\'#.0\')}';
          var minColor = "";
          var maxColor = "";

          switch (option) {
            case 'total_deaths':
              minColor = '#ef9a9a';
              maxColor = '#b71c1c';
              break;

            case 'total_cases':
              minColor = '#71afe5';
              maxColor = '#005a9e';
              break;

            case 'total_recovered':
              maxColor = '#397d54';
              minColor = '#73c088';
              break;

            case 'total_serious_cases':
              maxColor = '#884c0a';
              minColor = '#ffb007';
              break;

            default:
              minColor = '#ffffff';
              maxColor = '#AAAA00';
              break;
          }

          polygonSeries.heatRules.push({
            property: 'fill',
            target: polygonSeries.mapPolygons.template,

            /* min: am4core.color('#ffebee'), */
            min: _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"](minColor),
            max: _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"](maxColor)
          });
          polygonSeries.useGeodata = true; // add heat legend

          var heatLegend = chart.chartContainer.createChild(_amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_6__["HeatLegend"]);
          heatLegend.valign = 'bottom';
          heatLegend.align = 'left';
          heatLegend.width = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["percent"](100);
          heatLegend.series = polygonSeries;
          heatLegend.orientation = 'horizontal';
          heatLegend.padding(20, 20, 20, 20);
          heatLegend.valueAxis.renderer.labels.template.fontSize = 10;
          heatLegend.valueAxis.renderer.minGridDistance = 40;
          polygonSeries.mapPolygons.template.events.on('over', function (event) {
            handleHover(event.target);
          });
          polygonSeries.mapPolygons.template.events.on('hit', function (event) {
            handleHover(event.target);
          });

          function handleHover(mapPolygon) {
            if (!isNaN(mapPolygon.dataItem.value)) {
              heatLegend.valueAxis.showTooltipAt(mapPolygon.dataItem.value);
            } else {
              heatLegend.valueAxis.hideTooltip();
            }
          }

          polygonSeries.mapPolygons.template.strokeOpacity = 0.4;
          polygonSeries.mapPolygons.template.events.on('out', function (event) {
            heatLegend.valueAxis.hideTooltip();
          });
          /* chart.zoomControl = new am4maps.ZoomControl(); */

          /* chart.zoomControl.valign = 'top'; */

          /* polygonSeries.data = this.countries.map(item => {return {id:item.code,value:item.total_cases};}); */

          polygonSeries.data = this.countries.map(function (item) {
            return {
              id: item.code,
              value: item[option]
            };
          });
          this.myChart = chart;
          return;
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_getdata_service__WEBPACK_IMPORTED_MODULE_8__["GetdataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_12__["MessageService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      viewQuery: function DashboardComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.autoShownModal = _t.first);
        }
      },
      hostBindings: function DashboardComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function DashboardComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_12__["MessageService"]])],
      decls: 307,
      vars: 130,
      consts: [[1, "container-fluid", "ml-0", "pt-2"], [1, "row-fluid"], [1, "row", "min-vh-100", "flex-column", "flex-md-row"], [1, "col-12", "col-md-3", "col-xl-2", "p-0", "bg-dark", "flex-shrink-1", "sidebar-offcanvas"], ["id", "sidebar", 1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark", "flex-md-column", "flex-row", "align-items-center", "text-center", "sidebar-offcanvas"], ["src", "https://avatars3.githubusercontent.com/u/18377721?s=460&v=4", "width", "250px", 1, "rounded-circle", "my-4", "d-none", "d-md-block", "p-1", "shadow"], [1, "text-center"], ["type", "button", "data-toggle", "collapse", "data-target", "#nav", "aria-controls", "nav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "border-0", "order-1"], [1, "navbar-toggler-icon"], ["id", "nav", 1, "collapse", "navbar-collapse", "order-last"], [1, "navbar-nav", "flex-column", "w-100", "justify-content-center", "link"], [1, "nav-item"], ["href", "#education", "data-target", "#education", 1, "nav-link"], ["href", "#experience", 1, "nav-link"], ["href", "#skills", 1, "nav-link"], ["href", "#examples", 1, "nav-link"], ["href", "#contact", 1, "nav-link", "active"], [1, "nav", "justify-content-center"], ["href", "#", 1, "nav-link", "text-white", "px-2"], [1, "fab", "fa-twitter", "fa-lg"], [1, "fab", "fa-instagram", "fa-lg"], [1, "fa", "fa-envelope", "fa-lg"], [1, "fab", "fa-linkedin", "fa-lg"], [1, "col", "ml-2", "px-0", "pt-3", "flex-grow-1"], ["bsModal", "", "class", "modal fade d-block", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-auto-name", 3, "config", "onHidden", 4, "ngIf"], ["clss", " row mt-0 pt-0"], [1, "row", "pt-4"], [1, "col"], [1, "card-box", "pt-2"], [1, "row"], [1, "h2", "col", "text-center", "mb-2", "pb-2"], [1, "sub-header-title"], [1, "row", "mb-2", "pb-2"], [1, "col-xl-3", "col-md-6", "col-6"], [1, "header-title", "m-0", "text-md-left", "text-center"], [1, "topBoxes"], [1, "fa-3x", "text-center"], [1, "fas", "fa-circle-notch", "fa-spin", "m-2"], [1, "topBoxesDetails", "text-md-right", "text-center"], [1, "badge", "badge-blue", "badge-pill", "float-md-left", "m-md-3", "mt-2"], [1, "mdi", "mdi-trending-up"], [1, "text-muted"], [1, "progress", "progress-bar-alt-blue", "progress-sm", "m-0"], ["role", "progressbar", "aria-valuenow", "77", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-blue", 2, "width", "100%"], [1, "badge", "badge-danger", "badge-pill", "float-md-left", "m-md-3", "mt-2"], [1, "progress", "progress-bar-alt-danger", "progress-sm", "m-0"], ["role", "progressbar", "aria-valuenow", "77", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger", 2, "width", "100%"], [1, "badge", "badge-success", "badge-pill", "float-md-left", "m-md-3", "mt-2"], [1, "progress", "progress-bar-alt-success", "progress-sm", "m-0"], ["role", "progressbar", "aria-valuenow", "77", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "100%"], [1, "badge", "badge-warning", "badge-pill", "float-md-left", "m-md-3", "mt-2"], [1, "progress", "progress-bar-alt-warning", "progress-sm", "m-0"], ["role", "progressbar", "aria-valuenow", "77", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", 2, "width", "100%"], [1, "card-box", "pt-3", 2, "background-color", "#021D2F", "height", "570px"], [1, "d-flex"], [1, "col-md-2", "col-6", "pl-0", "float-left", "float-md-left"], [1, "form-control", "form-control-sm", 3, "change"], ["selectBy", ""], ["selected", "", "disabled", ""], ["value", "total_cases"], ["value", "total_deaths"], ["value", "total_recovered"], ["value", "total_serious_cases"], [1, "ml-auto", "header-title", "float-md-right", "mt-0", "mb-3", "mt-md-0"], ["id", "chartdiv", 2, "width", "100%", "height", "500px", "overflow", "hidden"], [1, "col-xl-4"], [1, "card-box", "pt-2", 2, "background-color", "#021D2F"], ["class", "infectedCountries", 4, "ngIf"], [1, "col-xl-8"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "header-title", "align-vertical", "m-1"], ["class", "m-0 ml-auto", 4, "ngIf"], [2, "background", "linear-gradient(0deg, rgba(25,27,71,1) 0%, rgba(31,74,159,1) 60%, rgba(28,118,233,1) 100%)", 3, "ngStyle"], ["type", "line", 1, "worldmap", 3, "height", "responsive", "data", "options", "onDataSelect"], [1, "header-title", "m-0", "text-md-center", "text-center", "pb-3"], ["height", "400", "type", "line", 3, "responsive", "data", "options"], [1, "fas", "fa-circle-notch", "fa-spin", "m-3"], ["type", "doughnut", "height", "400px", 3, "data", "options"], ["height", "400px", "type", "horizontalBar", 3, "responsive", "data", "options"], [1, "row", "hideTable"], ["selectionMode", "single", "selectionMode", "single", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "rowHover", "showCurrentPageReport", "rowsPerPageOptions", "paginator", "sortOrder", "rows", "columns", "value", "responsive", "onRowSelect", "onRowUnselect", 4, "ngIf"], [1, "header-title", "mb-3"], [1, "inbox-widget"], ["id", "radarChart", 2, "width", "100%", "height", "400px"], [1, "float-md-right", "float-right", "d-md-inline", "d-none"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "enableLogarithmicScale", 1, "custom-control-input", 3, "change"], ["enableLogarithmicScale", ""], ["for", "enableLogarithmicScale", 1, "custom-control-label"], [1, "header-title", "mt-0", "mb-3", "mt-md-0"], [1, "table-responsive"], ["id", "lineChart", 2, "width", "100%", "height", "400px", "overflow", "hidden"], [1, "header-title", "mt-0", "mb-3"], ["id", "pieChart", 2, "width", "100%", "height", "300px"], [1, "col-xl-5"], [1, "col-12"], [1, "col-xl-6", "col-md-6"], [1, "card-box", "pt-2", "widget-user"], [1, "fas", "fa-circle-notch", "fa-spin", "m-2", "text-blue"], [1, "font-weight-normal", "text-success"], [1, "header-title"], [1, "fas", "fa-circle-notch", "fa-spin", "m-2", "text-danger"], [1, "font-weight-normal", "text-danger"], [1, "fas", "fa-circle-notch", "fa-spin", "m-2", "text-warning"], [1, "font-weight-normal", "text-warning"], [1, "fas", "fa-circle-notch", "fa-spin", "m-2", "text-info"], ["class", "font-weight-normal text-info", 3, "d-none", 4, "ngIf"], [1, "col-xl-3"], [1, "card-box", "pt-2", "text-center"], [1, "h2", "col", "text-center"], [1, "sub-header-title", "fntSize-1"], [1, "header-title", "fntSize-1"], ["target", "_blank", "href", "https://www.facebook.com/sharer/sharer.php?u=https://afarka.com", 1, "btn", "btn-icon", "waves-effect", "btn-blue", "mr-1"], [1, "fab", "fa-facebook"], ["target", "_blank", "href", "https://twitter.com/intent/tweet?url=https://www.afarka.com&hashtags=Covid_19,CoronavirusPandemic,coronastatistics,corona&text=Stay%20Updated%20with%20Live%20Coronavirus%20Tracker", 1, "btn", "btn-icon", "waves-effect", "btn-blue", "mr-1"], [1, "fab", "fa-twitter"], ["target", "_blank", "href", "https://vk.com/share.php?url=https://www.afarka.com", 1, "btn", "btn-icon", "waves-effect", "btn-blue", "mr-1"], [1, "fab", "fa-vk"], ["href", "whatsapp://send?text=Coronavirus live statistics and tracker https://www.afarka.com", "data-action", "share/whatsapp/share", 1, "btn", "btn-icon", "waves-effect", "btn-blue"], [1, "fab", "fa-whatsapp"], ["href", "https://ko-fi.com/abdelillahfarka", 1, "btn", "btn-", "waves-effect", "btn-danger", "d-block", "mt-1", "mx-auto"], [1, "fas", "fa-coffee"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-auto-name", 1, "modal", "fade", "d-block", 3, "config", "onHidden"], ["autoShownModal", "bs-modal"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body", "text-center", "pt-4"], ["class", "modal-step", 4, "ngIf"], ["class", "col-12 text-center", 4, "ngIf"], [1, "modal-step"], ["src", "assets/images/step-1.png", "width", "125"], [1, "text-white", "mt-3"], [1, "text-blue"], [1, "text-white"], [1, "text-danger"], ["src", "assets/images/step-2.png", "width", "125"], ["src", "assets/images/step-3.png", "width", "125"], ["src", "assets/images/step-4.png", "width", "125"], ["src", "assets/images/step-5.png", "width", "125"], [1, "col-12", "text-center"], [1, "btn", "btn-secondary", "waves-effect", "waves-light", "mb-4", 3, "click"], [1, "fa", "fa-arrow-right", "mr-1"], [1, "form-group"], ["type", "checkbox", "id", "forDontShow", 1, "custom-control-input"], ["dontShow", ""], ["for", "forDontShow", 1, "custom-control-label"], [1, "btn", "btn-blue", "waves-effect", "waves-light", "mb-4", 3, "click"], [1, "fas", "fa-times-circle", "mr-1"], [1, "infectedCountries"], ["scrollHeight", "346px", 3, "value"], ["perfectscrollbar", ""], [1, "pl-0"], [1, "header-title", "mb-2"], [1, "ml-auto"], [1, "col-md-8", "col-8", "pl-0"], ["type", "text", "id", "example-placeholder", 1, "form-control", "form-control-sm", "input-sm", 3, "placeholder", "keyup"], ["search", ""], [1, "col-md-4", "col-4"], [1, "form-control", "form-control-sm", "pt-1", 3, "change"], ["sortBy", ""], ["value", "cases"], ["value", "todayCases"], ["value", "deaths"], ["value", "todayDeaths"], ["value", "recovered"], ["class", "infectedCountry", "pTemplate", "item"], [1, "infectedCountry"], [1, "infectedCountryFlag"], ["style", "height: 30px;\n                                                                                                           width: 40px;", 3, "src", "alt", 4, "ngIf", "ngIfElse"], ["unknown", ""], [1, "infectedCountryName", "mt-0", "mb-1", "fntwght-6"], [1, "infectedCountryDetails", "font-weight-bold"], [1, "infectedCountryCases", "text-blue"], [1, "infectedCountryDeaths", "text-danger"], [2, "height", "30px", "width", "40px", 3, "src", "alt"], ["src", "assets/flags/unknown.svg", 3, "alt"], [1, "m-0", "ml-auto"], ["filterBy", "title,value.name", "optionLabel", "title", 3, "options", "filter", "ngModel", "ngModelChange"], ["pTemplate", "selectedItem"], ["pTemplate", "item"], [2, "width", "16px", "text-align", "left", 3, "src"], [2, "float", "right", "margin-left", "10px"], [1, "ui-helper-clearfix", 2, "position", "relative", "height", "25px"], ["style", "width:24px;position:absolute;top:1px;left:5px", 3, "src", "alt", 4, "ngIf", "ngIfElse"], [2, "font-size", "14px", "float", "right", "margin-top", "4px", "text-align", "right!important"], [2, "width", "24px", "position", "absolute", "top", "1px", "left", "5px", 3, "src", "alt"], ["selectionMode", "single", "selectionMode", "single", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "rowHover", "showCurrentPageReport", "rowsPerPageOptions", "paginator", "sortOrder", "rows", "columns", "value", "responsive", "onRowSelect", "onRowUnselect"], ["tt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "sub-header-title", "pb-1"], [1, "ui-selectable-row"], ["class", "fntwght-6", 3, "pSortableColumn", 4, "ngFor", "ngForOf"], [1, "fntwght-6", 3, "pSortableColumn"], [3, "field"], [4, "ngFor", "ngForOf"], [1, "ui-column-title", "table-head-color", "col-3"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["class", "infectedCountryFlag", "style", "height: 30px; width: 40px;", 3, "src", "alt", 4, "ngIf", "ngIfElse"], [1, "infectedCountryName", "mt-0", "mb-1", "ml-2"], [1, "infectedCountryFlag", 2, "height", "30px", "width", "40px", 3, "src", "alt"], ["src", "assets/flags/unknown.svg", 2, "width", "40px", "height", "30px", 3, "alt"], [3, "href"], [1, "font-weight-normal", "text-info"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "aside", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nav", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "a.Farka");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Indusry 4.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "My Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ul", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "main", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, DashboardComponent_div_41_Template, 12, 9, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Global Summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "h4", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Infections");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](64, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "p", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "h4", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Deaths");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](79, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](83, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "p", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "h4", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Recoveries");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](98, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](102, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "p", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "h4", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Critical");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](117, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](121, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "p", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](124, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "select", 56, 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DashboardComponent_Template_select_change_132_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](133);

            return ctx.SortStateByCountries(_r1.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Select By");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, " Cases");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "option", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, " Deaths");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "option", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, " Recoveries");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "option", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, " critical");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "h4", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "Worldwide Infections ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](147, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](154, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](155, DashboardComponent_div_155_Template, 32, 4, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "h4", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "History");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](161, DashboardComponent_div_161_Template, 4, 3, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](163, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "p-chart", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDataSelect", function DashboardComponent_Template_p_chart_onDataSelect_165_listener($event) {
            return ctx.selectData($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, " Most affected country");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "h4", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "daily Infection");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](180, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](182, "p-chart", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "h4", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "death rate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](189, "i", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](191, "p-chart", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "h4", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](198, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](200, "p-chart", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](204, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](206, DashboardComponent_p_table_206_Template, 5, 11, "p-table", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "h4", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, "Rate Distribution ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](213, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](215, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "input", 86, 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DashboardComponent_Template_input_change_220_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](221);

            return ctx.loadLineChart(_r5.checked);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "label", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "Enable Logarithmic Scale");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "h4", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "Infections History");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](227, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](229, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "h4", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, "Infection Distribution By Countries");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](236, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](238, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "h4", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, "Infection Rates");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](250, "i", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "h2", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](253, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "h5", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, "Recovery Rate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](260, "i", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "h2", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](262);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](263, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "h5", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](265, "Death Rate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](270, "i", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "h2", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](272);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](273, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "h5", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](275, "Critical Rate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](280, "i", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](281, DashboardComponent_h2_281_Template, 2, 3, "h2", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "h5", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](283, "Nations Affected");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, "Outbreak Started");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](289, "app-countup");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "h5", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](293, "Share with your friends, family or coworkers.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](295, "Keep them up to date with the coronavirus outbreak.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "a", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](297, "i", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "a", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](299, "i", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "a", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](301, "i", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "a", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](303, "i", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](304, "a", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](305, "i", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](306, " Buy me a coffee ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isModalShown);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](64, 100, ctx.totalCases), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.todayCases, " today");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](79, 102, ctx.totalDeaths / ctx.finishedCases * 100, ".1-2"), "% ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](83, 105, ctx.totalDeaths), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.todayDeaths, " today");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](98, 107, ctx.totalRecoveries / ctx.finishedCases * 100, ".1-2"), "% ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](102, 110, ctx.totalRecoveries), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.activeCasesPerMillion, " M remain ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](117, 112, ctx.totalCritical / ctx.activeCases * 100, ".1-2"), "% ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](121, 115, ctx.totalCritical), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](124, 117, ctx.unresolved), " unresolved");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoadingMap);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoadingMap);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoadingCountries);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoadingCountries);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoadingCountries);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoadingCountries);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](128, _c3, ctx.heightExp));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("height", ctx.heightExp)("responsive", true)("data", ctx.historyData)("options", ctx.options);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoadingCountries);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("responsive", true)("data", ctx.newCasesMostInfectedCountry)("options", ctx.options1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoadingCountries);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.BarChartSecondCountry)("options", ctx.options2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("responsive", true)("data", ctx.data4)("options", ctx.options3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoadingCountries);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](253, 119, ctx.totalRecoveries / ctx.finishedCases * 100, ".1-2"), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](263, 122, ctx.totalDeaths / ctx.finishedCases * 100, ".1-2"), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](273, 125, ctx.totalCritical / ctx.activeCases * 100, ".1-2"), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fuse);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgStyle"], primeng_chart__WEBPACK_IMPORTED_MODULE_15__["UIChart"], _shared_countup_countup_component__WEBPACK_IMPORTED_MODULE_16__["CountupComponent"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalDirective"], primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_17__["VirtualScroller"], primeng_api__WEBPACK_IMPORTED_MODULE_12__["Header"], primeng_api__WEBPACK_IMPORTED_MODULE_12__["PrimeTemplate"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__["Dropdown"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], primeng_table__WEBPACK_IMPORTED_MODULE_19__["Table"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], primeng_table__WEBPACK_IMPORTED_MODULE_19__["SortableColumn"], primeng_table__WEBPACK_IMPORTED_MODULE_19__["SortIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitchDefault"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DecimalPipe"]],
      styles: [".bg-d[_ngcontent-%COMP%] {\n  background-color: #282d37;\n}\n\n[_nghost-%COMP%]     .ui-dropdown-item {\n  background-color: #ffb007;\n  color: #884c0a;\n}\n\n[_nghost-%COMP%]     .ui-table-wrapper th {\n  color: #e4c784;\n}\n\n[_nghost-%COMP%]     .ui-virtualscroller .ui-virtualscroller-header {\n  padding-left: 0;\n}\n\n.table-head-color[_ngcontent-%COMP%] {\n  color: #e4c784 !important;\n}\n\n.box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.item1[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  transform: translateX(10px);\n  \n}\n\n.txt-cntr[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n\n.modal-step[_ngcontent-%COMP%] {\n  min-height: 270px;\n  transition: all 0.2s;\n}\n\n.sidebar-offcanvas[_ngcontent-%COMP%] {\n  background-color: rgba(15, 156, 230, 0.25) !important;\n  overflow-y: auto;\n  overflow-x: hidden;\n  will-change: width;\n  box-shadow: inset 0 0 2rem rgba(15, 156, 230, 0.25), inset 0 0 0 1px rgba(15, 156, 230, 0.15) !important;\n}\n\n@media screen and (min-width: 601px) {\n  div.hideTable-1[_ngcontent-%COMP%] {\n    height: 0px !important;\n  }\n}\n\n.nav-item[_ngcontent-%COMP%]:hover {\n  color: #aee0fa !important;\n  background-color: rgba(15, 156, 230, 0.25) !important;\n  box-shadow: inset 0 0 2rem rgba(15, 156, 230, 0.45), 0 0 1rem rgba(15, 156, 230, 0.15) !important;\n}\n\n.table-title[_ngcontent-%COMP%] {\n  font-family: serif !important;\n  color: #a9d4f1 !important;\n}\n\nbody[_ngcontent-%COMP%]   .ui-table.ui-table-hoverable-rows[_ngcontent-%COMP%]   .ui-table-tbody[_ngcontent-%COMP%]    > tr.ui-selectable-row[_ngcontent-%COMP%]:not(.ui-state-highlight):not(.ui-contextmenu-selected):hover {\n  cursor: pointer;\n  background-color: #eaeaea;\n  color: #333333;\n}\n\n.column-title[_ngcontent-%COMP%] {\n  font-family: serif !important;\n  color: #f5f7f9 !important;\n  font-size: 1rem;\n}\n\n@media screen and (max-width: 601px) {\n  div.worldmap[_ngcontent-%COMP%] {\n    height: 550px !important;\n  }\n}\n\n@media screen and (min-width: 601px) {\n  div.fntSize-1[_ngcontent-%COMP%] {\n    font-size: 1rem !important;\n  }\n}\n\n.customNav[_ngcontent-%COMP%] {\n  font-family: initial;\n  font-size: 1rem;\n}\n\n@media screen and (max-width: 601px) {\n  .card-p[_ngcontent-%COMP%] {\n    font-size: 2vw !important;\n    font-weight: 500 !important;\n  }\n}\n\n@media screen and (min-width: 601px) {\n  .card-p[_ngcontent-%COMP%] {\n    font-weight: 500 !important;\n    font-size: 20px !important;\n    font-size: 1vw !important;\n  }\n}"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('fadeInOutAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])(600)])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('fadeInOutAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
            opacity: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])(600)])])],
          providers: [primeng_api__WEBPACK_IMPORTED_MODULE_12__["MessageService"]]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _core_services_getdata_service__WEBPACK_IMPORTED_MODULE_8__["GetdataService"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_12__["MessageService"]
        }];
      }, {
        autoShownModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['autoShownModal', {
            "static": false
          }]
        }],
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/not-found/not-found.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/not-found/not-found.component.ts ***!
    \********************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppPagesNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotFoundComponent = /*#__PURE__*/function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
      return new (t || NotFoundComponent)();
    };

    NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundComponent,
      selectors: [["app-not-found"]],
      decls: 171,
      vars: 0,
      consts: [["id", "yetiSVG", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 600 470"], ["id", "flashlightGrad", "x1", "126.5842", "x2", "90.5842", "y1", "176.5625", "y2", "213.5625", "gradientUnits", "userSpaceOnUse"], ["offset", "0", "stop-color", "#333"], ["offset", ".076", "stop-color", "#414141"], ["offset", ".2213", "stop-color", "#555"], ["offset", ".3651", "stop-color", "#626262"], ["offset", ".5043", "stop-color", "#666"], ["offset", ".6323", "stop-color", "#606060"], ["offset", ".8063", "stop-color", "#4e4e4e"], ["offset", "1", "stop-color", "#333"], ["fill", "#24658F", "d", "M0 0h600v470H0z"], ["id", "pillow"], ["fill", "#09334F", "d", "M241.3 124.6c-52.9 28.6-112.6 48-181.8 54.4-40.9 6.8-64.6-82.3-31.9-106.6C84 43.8 144.8 26.2 209.4 18c32.8 13 48.5 75.3 31.9 106.6z"], ["fill", "none", "stroke", "#001726", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M52.8 91.3c10 7.4 25.4 50.7 16.1 65.8M241.3 124.6c-52.9 28.6-112.6 48-181.8 54.4-40.9 6.8-64.6-82.3-31.9-106.6C84 43.8 144.8 26.2 209.4 18c32.8 13 48.5 75.3 31.9 106.6z"], ["fill", "#09334F", "stroke", "#001726", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M201.9 21.9c4.9-8 14.1-11.3 20.6-7.3s7.7 13.7 2.8 21.7"], ["fill", "#09334F", "stroke", "#001726", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M242.1 103.1c1.8.3 3.6.9 5.3 1.8 8.4 4.1 12.6 13 9.3 19.8s-12.9 9-21.3 4.9c-1.9-.9-3.6-2.1-5-3.4"], ["fill", "#09334F", "stroke", "#001726", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M70.3 172c.2 1.4.2 2.8.1 4.3-.8 9.4-8.3 16.4-16.7 15.6S39.2 183 40 173.7c.1-1.6.5-3.1 1-4.5"], ["fill", "#09334F", "stroke", "#001726", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M20.9 85.1c-4.1-5-5.1-11.6-2.1-16.9 4.1-7.2 14-9.2 22.1-4.6 3.7 2.1 6.4 5.2 7.9 8.6"], ["id", "yeti"], ["id", "bodyBG", "fill", "#67B1E0", "d", "M80.9 291.4l-17.1-72.8c-6.3-27 10.4-54 37.4-60.3l93.1-29.6c26.5-8.1 54.6 6.8 62.7 33.3l21.9 71.5"], ["id", "hlBody", "fill", "#FFF", "d", "M67.1 232.7c15.6-8.7 27.7-23.7 38-38.7 5.5-8 10.9-16.4 18.3-22.7 13.1-11.2 31.3-14.8 48.6-15 4.9 0 9.9.1 14.5-1.7 3.6-1.5 6.5-4.1 9.3-6.9 6.5-6.5 12-14 18-21-6.4-.6-12.9 0-19.4 2l-93.1 29.6c-27 6.3-43.7 33.4-37.4 60.3l3.2 14.1z", 1, "hlFur"], ["id", "bodyOutline", "fill", "none", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M80.9 291.4l-17.1-72.8c-6.3-27 10.4-54 37.4-60.3l93.1-29.6c26.5-8.1 54.6 6.8 62.7 33.3l21.9 71.5"], ["fill", "#67B1E0", "d", "M197.5 132.4l-11.2-47.9c-6.3-26.7-32.7-44.1-59.5-38.2-27.4 6-44.5 33.1-38.1 60.3l13.6 56.2"], ["id", "hlHead", "fill", "#FFF", "d", "M100.4 132.3l7.4 29.8 89.7-28.8-11.4-48.9c-1.6-6.8-4.5-12.9-8.4-18.3-9.6-7.9-28.5-12.9-46.9-8.5-24.9 5.9-34.5 23.6-38.1 37.9-.8.8-3.8 3-5.1 5.4.2 1.9.5 3.7 1 5.6l7 28.8 4.8-3z", 1, "hlFur"], ["fill", "#67B1E0", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M182.1 71.6c3.8 3.6 7 7.7 9.5 12-1.8.4-3.6.9-5.3 1.6 3.2 2.9 5.7 6.3 7.6 9.9-1.1.3-2.2.7-3.3 1.1 2.5 3.5 4.3 7.4 5.4 11.5-.8-.5-2.2-.8-3.3-1"], ["fill", "none", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M197.5 132.4l-11.2-47.9c-6.3-26.7-32.7-44.1-59.5-38.2-27.4 6-44.5 33.1-38.1 60.3l13.6 56.2"], ["cx", "85.8", "cy", "120.4", "fill", "#88C9F2", "rx", "11.5", "ry", "11.5", "transform", "rotate(-66.265 85.7992 120.4318)"], ["id", "hlEar", "fill", "#DDF1FA", "d", "M80.4 122.2c-1.3-5.5 1.6-11.1 6.6-13.2-1.3-.1-2.6-.1-3.9.3-6.2 1.5-10 7.7-8.5 13.9s7.7 10 13.9 8.5c.7-.2 1.3-.4 1.9-.6-4.7-.6-8.9-4-10-8.9z", 1, "hlSkin"], ["fill", "#88C9F2", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M84.2 116.6c-2.2.5-3.6 2.8-3 5 .5 2.2 2.8 3.6 5 3"], ["cx", "85.8", "cy", "120.4", "fill", "none", "stroke", "#265D85", "stroke-width", "2.5", "rx", "11.5", "ry", "11.5", "transform", "rotate(-66.265 85.7992 120.4318)"], ["fill", "#FFF", "d", "M106 130.3l-12 3.6 1.2-11.4-6.3-.1 6-12h-5.4l9.6-8.4z", 1, "hlFur"], ["fill", "#FFF", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M92.1 96.4c-5.1 5.9-8.4 11.7-10 17 4.2-1.2 8.5-2.2 12.8-3-4.2 4.8-6.7 9.5-7.6 13.8 2.7-.7 5.4-1.3 8-1.7-2.3 4.8-2.8 9.2-1.7 13.3 1.4-1 4-2.4 6.1-3.4", 1, "hlFur"], ["id", "face", "fill", "#DDF1FA", "d", "M169.1 70.4l7.3 23.4c9.4 26.8-1.8 45-20 50.7s-37.8-5.1-45.8-30.1L103.3 91", 1, "hlSkin"], ["id", "chin", "fill", "none", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M152.4 147.5c3.8 1 8 1.4 12.3 1.1-.5-1.4-1-2.9-1.6-4.3 3.8.6 7.9.7 12.1.1l-3.3-4.8c3.1-.6 6.3-1.6 9.5-3.1-1.4-1.6-2.8-3.1-4.2-4.6"], ["id", "eyebrow", "fill", "#FFF", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M100.9 89.8c7.6 3.5 15.9 6.1 24.7 7.7 1.1-3.3 2.1-6.6 3-9.9 5.5 2.3 11.3 4.1 17.5 5.4.2-3.3.4-6.5.4-9.7 4.5.7 9.2 1.1 14 1.1-.5-3.4-1.1-6.7-1.7-10 4.5-1.9 9-4.2 13.3-6.9", 1, "hlFur"], ["id", "eyeL"], ["cx", "135.9", "cy", "105.3", "r", "3.5", "fill", "#265D85"], ["cx", "133.7", "cy", "103.5", "r", "1", "fill", "#FFF"], ["id", "eyeR"], ["cx", "163.2", "cy", "96.3", "r", "3.5", "fill", "#265D85"], ["cx", "160.9", "cy", "94.5", "r", "1", "fill", "#FFF"], ["id", "nose", "fill", "#265D85", "d", "M149.3 101.2l4.4-1.6c1.8-.6 3.6 1 3.1 2.9l-1.1 3.9c-.4 1.6-2.3 2.2-3.6 1.3l-3.3-2.3c-1.7-1.1-1.3-3.5.5-4.2z"], ["fill", "#67B1E0", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M112.4 55.9c.9-4.3 3.8-9.2 8.8-13.7 1.4 2.3 2.8 4.7 4.1 7.1 2.3-4.8 6.9-9.8 13.8-14.1-.1 3.4-.3 6.8-.6 10.1 4.4-3 10.2-5.7 17.3-7.6-1.7 3.6-3.7 7.2-5.9 10.8"], ["id", "mouth"], ["id", "mouthBG", "fill", "#265D85", "d", "M149 115.7c-4.6 3.7-6.6 9.8-5 15.6.1.5.3 1.1.5 1.6.6 1.5 2.4 2.3 3.9 1.7l11.2-4.4 11.2-4.4c1.5-.6 2.3-2.4 1.7-3.9-.2-.5-.4-1-.7-1.5-2.8-5.2-8.4-8.3-14.1-7.9-3.7.2-5.9 1.1-8.7 3.2z"], ["id", "mouthPath", "d", "M149 115.7c-4.6 3.7-6.6 9.8-5 15.6.1.5.3 1.1.5 1.6.6 1.5 2.4 2.3 3.9 1.7l11.2-4.4 11.2-4.4c1.5-.6 2.3-2.4 1.7-3.9-.2-.5-.4-1-.7-1.5-2.8-5.2-8.4-8.3-14.1-7.9-3.7.2-5.9 1.1-8.7 3.2z"], ["id", "mouthClipPath"], ["overflow", "visible", 0, "xlink", "href", "#mouthPath"], ["clip-path", "url(#mouthClipPath)"], ["cx", "160.8", "cy", "133.2", "fill", "#CC4A6C", "rx", "13", "ry", "8", "transform", "rotate(-21.685 160.775 133.1613)"], ["cx", "158.4", "cy", "127.1", "fill", "#FFF", "opacity", ".1", "rx", "5", "ry", "1.5", "transform", "rotate(-21.685 158.3808 127.126)"], ["id", "tooth1", "fill", "#FFF", "d", "M161.5 116.1l-3.7 1.5c-1 .4-2.2-.1-2.6-1.1l-1.5-3.7 7.4-3 1.5 3.7c.5 1 0 2.2-1.1 2.6z"], ["id", "tooth2", "fill", "#FFF", "d", "M151.8 128.9l-1.9.7c-1 .4-1.5 1.6-1.1 2.6l1.1 2.8 5.6-2.2-1.1-2.8c-.5-1-1.6-1.5-2.6-1.1z"], ["id", "tooth3", "fill", "#FFF", "d", "M158.3 126.3l-1.9.7c-1 .4-1.5 1.6-1.1 2.6l1.1 2.8 5.6-2.2-1.1-2.8c-.5-1-1.6-1.5-2.6-1.1z"], ["id", "mouthOutline", "fill", "none", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M149 115.7c-4.6 3.7-6.6 9.8-5 15.6.1.5.3 1.1.5 1.6.6 1.5 2.4 2.3 3.9 1.7l11.2-4.4 11.2-4.4c1.5-.6 2.3-2.4 1.7-3.9-.2-.5-.4-1-.7-1.5-2.8-5.2-8.4-8.3-14.1-7.9-3.7.2-5.9 1.1-8.7 3.2z"], ["id", "armR"], ["fill", "#DDF1FA", "d", "M158.4 116.9l-.7.3c-3.7 1.5-5.5 5.7-4.1 9.4l1.2 2.9c1.7 4.4 6.7 6.5 11.1 4.8l1.4-.5", 1, "hlSkin"], ["fill", "#A9DDF3", "d", "M154.8 129.1l.7 1.8c1 2.5 5.4 3.1 5.4 3.1l-2-5.1c-.3-.7-1.1-1.1-1.8-.8l-2.3 1z"], ["fill", "none", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "stroke-width", "2.5", "d", "M158.4 116.9l-.7.3c-3.7 1.5-5.5 5.7-4.1 9.4l1.2 2.9c1.7 4.4 6.7 6.5 11.1 4.8l1.4-.5"], ["fill", "#DDF1FA", "stroke", "#265D85", "stroke-width", "2.5", "d", "M167.7 113.2l-.7.3c-3.7 1.5-5.5 5.7-4.1 9.4l1.2 2.9c1.7 4.4 6.7 6.5 11.1 4.8l1.4-.5", 1, "hlSkin"], ["fill", "#DDF1FA", "stroke", "#265D85", "stroke-width", "2.5", "d", "M177 109.4l-.7.3c-3.7 1.5-5.5 5.7-4.1 9.4l1.2 2.9c1.7 4.4 6.7 6.5 11.1 4.8l1.4-.5", 1, "hlSkin"], ["fill", "#88C9F2", "d", "M162.3 128.6l18.6 46.7 37.2-14.8-17.9-44.8"], ["fill", "#DDF1FA", "d", "M206.5 130.7l-5.9-15.1-37.9 13 6.4 17.4c10 1.6 34.6-6.3 37.4-15.3z", 1, "hlSkin"], ["fill", "none", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "stroke-width", "2.5", "d", "M162.3 128.6l18.6 46.7 37.2-14.8-15.3-38.3"], ["fill", "#DDF1FA", "d", "M190.8 119l-1.5-3.7c-2-5.1-7.9-7.6-13-5.6l5.2 12.9", 1, "hlSkin"], ["fill", "#DDF1FA", "d", "M203.5 123.8l-1.5-3.7c-2-5.1-7.9-7.6-13-5.6l5.2 12.9", 1, "hlSkin"], ["fill", "#A9DDF3", "d", "M200.4 119.4l-.7-1.8c-1-2.5-5.4-3.1-5.4-3.1l1.9 4.8c.3.8 1.3 1.3 2.1.9l2.1-.8z"], ["fill", "none", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "stroke-width", "2.5", "d", "M203.5 123.8l-1.5-3.7c-2-5.1-7.9-7.6-13-5.6"], ["fill", "none", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "stroke-width", "2.5", "d", "M193.7 126.4l-4.4-11.1c-2-5.1-7.9-7.6-13-5.6"], ["fill", "#67B1E0", "d", "M219.6 160.1c-1.5-6.2-3.2-13.2-5.1-21.1-2.8 2.1-5.6 4.5-8.3 7.4-2-1.8-4.1-3.7-6.2-5.7-2.4 3.6-4.6 7.7-6.7 12.1-3-1.9-6-3.9-9.2-6-1.4 2.9-2.7 6-4 9.2-4.7-.6-9.4-1.1-14.2-1.7 5.4 8 10.3 15.2 14.7 21.5"], ["fill", "none", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M219.6 160.1c-1.5-6.2-3.2-13.2-5.1-21.1-2.8 2.1-5.6 4.5-8.3 7.4-2-1.8-4.1-3.7-6.2-5.7-2.4 3.6-4.6 7.7-6.7 12.1-3-1.9-6-3.9-9.2-6-1.4 2.9-2.7 6-4 9.2-4.7-.6-9.4-1.1-14.2-1.7 5.4 8 10.3 15.2 14.7 21.5"], ["fill", "none", "stroke", "#3A5E77", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "stroke-width", "2.5", "d", "M160.9 125l2 5.1"], ["fill", "#DDF1FA", "d", "M172.2 126.4l-1.5-3.7c-2-5.1-7.9-7.6-13-5.6l5.2 12.9", 1, "hlSkin"], ["fill", "none", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "stroke-width", "2.5", "d", "M160.5 124l2.4 6.1"], ["fill", "#DDF1FA", "d", "M181.5 122.7L180 119c-2-5.1-7.9-7.6-13-5.6l5.2 12.9", 1, "hlSkin"], ["fill", "none", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "stroke-width", "2.5", "d", "M181.5 122.7L180 119c-2-5.1-7.9-7.6-13-5.6"], ["fill", "none", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "stroke-width", "2.5", "d", "M172.2 126.4l-1.5-3.7c-2-5.1-7.9-7.6-13-5.6"], ["id", "armL"], ["fill", "#67B1E0", "d", "M50.9 156.7c-12 35.8-7.8 69.6 8.3 101.9 12.1 22.7 37 14.1 39.5-11.8v-65l-47.8-25.1z"], ["fill", "none", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M50.9 156.7c-12 35.8-7.8 69.6 8.3 101.9 10 22.3 37.3 15.1 39.5-11.8v-65l-47.8-25.1z"], ["fill", "none", "stroke", "#262626", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "stroke-width", "20", "d", "M59.3 143.8l34.3 33.9"], ["fill", "#4D4D4D", "d", "M58.4 133.9l15.9 15.9-.9.9-16.5-16.5c.5-.2 1-.3 1.5-.3z"], ["fill", "#1A1A1A", "d", "M71.2 169.6l-20.1-20c-2.4-3.7-2.5-8.1.1-11.7l23.1 22.2"], ["fill", "#4D4D4D", "d", "M80.5 156.4l16 15.9-.9.9-16.5-16.5c.5-.1 1-.2 1.4-.3z"], ["fill", "#1A1A1A", "d", "M74.2 160.1L86 171.4l-2 11-10.2-10.1c-2.4-4.4-2.5-8.5.4-12.2z"], ["fill", "#88C9F2", "d", "M65.9 164.8c-1.9-5.5.8-11.8 6.1-14.1 4.9-2.2 10.4-.6 13.5 3.4 1.3 1.6 3.5 2.1 5.4 1.4 3-1.2 3.9-4.9 1.9-7.4-5.8-7.2-16.1-9.9-25-5.7-9.4 4.4-14.1 15.3-10.9 25.2"], ["fill", "none", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M67.9 168.3c-1.1-1.2-2-3.6-2-3.6-1.9-5.5.8-11.8 6.1-14.1 4.9-2.2 10.4-.6 13.5 3.4 1.3 1.6 3.5 2.1 5.4 1.4 3-1.2 3.9-4.9 1.9-7.4-5.8-7.2-16.1-9.9-25-5.7-9.4 4.4-14.1 15.3-10.9 25.2"], ["fill", "#88C9F2", "d", "M69.9 168.7c-1.9-5.5.8-11.8 6.1-14.1 4.9-2.2 10.4-.6 13.5 3.4 1.3 1.6 3.5 2.1 5.4 1.4 3-1.2 3.9-4.9 1.9-7.4-5.8-7.2-16.1-9.9-25-5.7-9.4 4.4-14.1 15.3-10.9 25.2"], ["fill", "#67B1E0", "d", "M49.9 155l2.7 12.7.2 11.8 5 8.6 9.5-1.8 2-8.7-6.9.6 1.7-11.7-6.6 2.8 1-13.8-4.6 2.9z"], ["fill", "none", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M71.9 172.3c-1.1-1.2-2-3.6-2-3.6-1.9-5.5.8-11.8 6.1-14.1 4.9-2.2 10.4-.6 13.5 3.4 1.3 1.6 3.5 2.1 5.4 1.4 3-1.2 3.9-4.9 1.9-7.4-5.8-7.2-16.1-9.9-25-5.7"], ["id", "hlHandL", "fill", "#DDF1FA", "d", "M101.7 156.9c-5.8-7.2-16.1-9.9-25-5.7-5.9 2.8-9.9 8.1-11.3 14.1l-1-.9-6.2 4.2c5.5 18.1 19.3 25.4 30.4 21l1.2-9.1c-6 2.4-12.7-.7-14.9-6.8-1.9-5.5.8-11.8 6.1-14.1 4.9-2.2 10.4-.6 13.5 3.4 1.3 1.6 3.5 2.1 5.4 1.4 2.9-1.3 3.8-5 1.8-7.5z", 1, "hlSkin"], ["fill", "none", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M89.7 180.5c-6 2.4-12.7-.7-14.9-6.8"], ["fill", "none", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M76.9 177.3c-1.1-1.2-2-3.6-2-3.6-1.9-5.5.8-11.8 6.1-14.1 4.9-2.2 10.4-.6 13.5 3.4 1.3 1.6 3.5 2.1 5.4 1.4 3-1.2 3.9-4.9 1.9-7.4-5.8-7.2-16.1-9.9-25-5.7"], ["id", "hlArmL", "fill", "#FFF", "d", "M98.8 202.8l-1.4-8.7-5.2.7-7.2-11.5-6.8 9-3.9-9.3-7.5 4.8 3.5-11.4-7.1 1.9 2.7-13.5-7.8 4.9c-11.7 26.5-3.6 52.5 1.7 66.6 15.5-6.4 30.3-21.9 39-33.5z", 1, "hlFur"], ["fill", "#A9DDF3", "d", "M101 161.2l-2.4-2.2c.2-1.6-.2-2.7-.8-3.9l2.6 2.5c.8.8 1 2.2.6 3.6z"], ["fill", "none", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M66.9 187.8l3.5-11.4-7.2 1.9 2.6-13.9-7.5 4.5 1.2-15.5-5.5 4.2"], ["fill", "none", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M54 157.6l-5.6-5.6 2.7 14.7"], ["fill", "none", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M67.1 188l7.3-5 3.8 9.3"], ["fill", "none", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M78.2 192.3l6.8-9 7.1 11.5"], ["id", "fingersBackL", "fill", "#88C9F2", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "stroke-width", "2.5", 2, "visibility", "hidden"], ["d", "M149.2 177.5l-5.6-23.3c-.6-2.7 1-5.4 3.7-6 2.7-.6 5.4 1 6 3.7l4.4 18.4c.6 2.7-1 5.4-3.7 6l-4.8 1.2M139.4 179.8l-5.6-23.3c-.6-2.7 1-5.4 3.7-6 2.7-.6 5.4 1 6 3.7l5.6 23.3-9.7 2.3z"], ["d", "M128.6 177.3l-4.4-18.4c-.6-2.7 1-5.4 3.7-6 2.7-.6 5.4 1 6 3.7l5.6 23.3-4.9 1.2c-2.7.5-5.4-1.2-6-3.8z"], ["id", "fingersBackR", "fill", "#88c9f2", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "stroke-width", "2.5", 2, "visibility", "hidden"], ["d", "M215.5 152l-15.9-17.9c-1.8-2.1-1.6-5.2.4-7.1 2.1-1.8 5.2-1.6 7.1.4l12.6 14.2c1.8 2.1 1.6 5.2-.4 7l-3.8 3.4"], ["d", "M208 158.6l-15.9-17.9c-1.8-2.1-1.6-5.2.4-7.1 2.1-1.8 5.2-1.6 7.1.4l15.9 17.9-7.5 6.7z"], ["d", "M197.2 161.5l-12.6-14.2c-1.8-2.1-1.6-5.2.4-7.1 2.1-1.8 5.2-1.6 7.1.4l15.9 17.9-3.7 3.3c-2.1 2-5.2 1.8-7.1-.3z"], ["id", "blanket"], ["d", "M1.2 271.4C6.6 262 13 253.1 22.4 248c10.3-5.5 22.5-5.5 33.7-8.8 21.8-6.5 37.5-25.2 50.3-43.9 5.5-8 10.9-16.4 18.3-22.7 13.1-11.2 31.3-14.8 48.6-15 4.9 0 9.9.1 14.5-1.7 3.6-1.5 6.5-4.1 9.3-6.9 10.1-10.2 17.9-22.8 29-32 7.9-6.6 18.7-14.7 29.5-13.7 13.9 1.2 25 5.8 38.5-1.5 28.1-15.2 27.8-60.6 56.2-75.1 16.2-8.3 36.9-3.6 52.6-12.7 5.4-3.2 9.8-7.7 13.9-12.5h128.5l-350.8 209L1.3 363l-.1-91.6z", "opacity", ".1"], ["fill", "#09334F", "d", "M0 281.6c5.3-9.2 11.5-17.9 20.7-22.8 10.3-5.5 22.5-5.5 33.7-8.8 21.8-6.5 37.5-25.2 50.3-43.9 5.5-8 10.9-16.4 18.3-22.7 13.1-11.2 31.3-14.8 48.6-15 4.9 0 9.9.1 14.5-1.7 3.6-1.5 6.5-4.1 9.3-6.9 10.1-10.2 17.9-22.8 29-32 7.9-6.6 18.7-14.7 29.5-13.7 13.9 1.2 25 5.8 38.5-1.5 28.1-15.2 27.8-60.6 56.2-75.1 16.2-8.3 36.9-3.6 52.6-12.7C411 19.1 417.1 8.4 424.9.3H700v570H0V281.6z"], ["fill", "#072A40", "d", "M0 281.6c5.3-9.2 11.6-17.9 20.8-22.8 10.3-5.5 22.5-5.5 33.7-8.8 21.8-6.5 37.5-25.2 50.3-43.9 5.5-8 10.9-16.4 18.3-22.7 13.1-11.2 31.3-14.8 48.6-15 4.9 0 9.9.1 14.5-1.7 3.6-1.5 6.5-4.1 9.3-6.9 10.1-10.2 17.9-22.8 29-32 7.9-6.6 18.7-14.7 29.5-13.7 13.9 1.2 25 5.8 38.5-1.5 28.1-15.2 27.8-60.6 56.2-75.1 16.2-8.3 36.9-3.6 52.6-12.7 9.8-5.7 15.9-16.4 23.7-24.6h100.4c-3.5 2.8-7.3 5.3-11.4 7.2-11.6 5.4-23 6.6-34.9 1.9-10.5-4.2-22.3 2.4-30.1 10.6-7.8 8.2-14 18.3-23.7 24-15.7 9.1-36.4 4.4-52.6 12.7-28.4 14.6-28.2 60-56.2 75.1-13.5 7.3-24.6 2.8-38.5 1.5-10.8-1-21.5 7.1-29.5 13.7-11.2 9.2-18.9 21.8-29 32-2.7 2.7-5.7 5.4-9.3 6.9-4.5 1.9-9.6 1.7-14.5 1.7-17.3.2-35.4 3.8-48.6 15-7.4 6.3-12.8 14.7-18.3 22.7-12.9 18.7-28.6 37.4-50.3 43.9-11.2 3.4-23.4 3.3-33.7 8.8-11.9 6.4-18.9 19-25.2 31-8.2 15.3-11.6 30-19.6 44.7v-72z"], ["fill", "none", "stroke", "#001726", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "stroke-width", "2.5", "d", "M1.2 283c5.3-9.3 11.8-18 21.1-23 10.3-5.5 22.5-5.5 33.7-8.8 21.8-6.5 37.5-25.2 50.3-43.9 5.5-8 10.9-16.4 18.3-22.7 13.1-11.2 31.3-14.8 48.6-15 4.9 0 9.9.1 14.5-1.7 3.6-1.5 6.5-4.1 9.3-6.9 10.1-10.2 17.9-22.8 29-32 7.9-6.6 18.7-14.7 29.5-13.7 13.9 1.2 25 5.8 38.5-1.5 28.1-15.2 27.8-60.6 56.2-75.1 16.2-8.3 36.9-3.6 52.6-12.7 9.8-5.7 15.9-16.4 23.7-24.5"], ["fill", "none", "stroke", "#001726", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "stroke-width", "2.5", "d", "M1.2 355c8-14.7 11.7-29.4 19.9-44.9 6.3-11.9 13.3-24.6 25.2-31 10.3-5.5 22.5-5.5 33.7-8.8 21.8-6.5 37.5-25.2 50.3-43.9 5.5-8 10.9-16.4 18.3-22.7 13.1-11.2 31.3-14.8 48.6-15 4.9 0 9.9.1 14.5-1.7 3.6-1.5 6.5-4.1 9.3-6.9 10.1-10.2 17.9-22.8 29-32 7.9-6.6 18.7-14.7 29.5-13.7 13.9 1.2 25 5.8 38.5-1.5 28.1-15.2 27.8-60.6 56.2-75.1 16.2-8.3 36.9-3.6 52.6-12.7 9.8-5.7 15.9-15.8 23.7-24s19.6-14.8 30.1-10.6c11.9 4.8 23.2 3.5 34.9-1.9 4-1.9 7.7-4.4 11.2-7.1"], ["d", "M111.2 197.2s50.7 23.9 90.8 43.1c14.2 6.8 18 25.4 7.5 37.2-7.6 8.5-20.2 10.4-30 4.5l-89.9-54.7 21.6-30.1z", "opacity", ".03"], ["d", "M12.1 266s53.5 64.8 94.7 114c11.7 13.9 1.8 35.1-16.4 35.1-7.1 0-13.8-3.6-17.8-9.5L0 296.5v-13.2L12.1 266z", "opacity", ".03"], ["d", "M155.7 170.1s111.4 46.9 171.1 69c3.5 1.3 7.4 0 9.4-3.2 2.7-4.2.9-9.9-3.8-11.7-33.5-12.8-147.3-56-147.3-56l-29.4 1.9z", "opacity", ".03"], ["d", "M255.9 114.7S349 145.6 412 176c2.1 1 4.6.6 6.2-1 2.8-2.7 1.9-7.5-1.7-9-23.3-9.6-94.3-38.6-131.1-50.4-.1.1-10.2 1.9-29.5-.9z", "opacity", ".03"], ["d", "M356.6 34.9l152.1 49.3c2.2.7 4.5.6 6.7-.2 8.7-3.4 8.2-15.9-.7-18.6l-121-36.8-37.1 6.3z", "opacity", ".03"], ["id", "fingersFrontL", 2, "visibility", "hidden"], ["fill", "#88C9F2", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "stroke-width", "2.5", "d", "M146.2 165.1l2.8 11.6c.6 2.7 3.3 4.3 6 3.7 2.7-.6 4.3-3.3 3.7-6l-1.6-6.8c-.6-2.7-3.3-4.3-6-3.7l-4.9 1.2"], ["fill", "#A9DDF3", "d", "M151.4 173.8l.5 2.2c.3 1.1 1.3 1.7 2.4 1.5 1.1-.3 1.7-1.3 1.5-2.4l-.5-2.2-3.9.9z"], ["fill", "#88C9F2", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "stroke-width", "2.5", "d", "M136.5 167.4l2.8 11.6c.6 2.7 3.3 4.3 6 3.7 2.7-.6 4.3-3.3 3.7-6l-2.8-11.6-9.7 2.3z"], ["fill", "#A9DDF3", "d", "M141.7 176.2l.5 2.2c.3 1.1 1.3 1.7 2.4 1.5 1.1-.3 1.7-1.3 1.5-2.4l-.5-2.2-3.9.9z"], ["fill", "#88C9F2", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "stroke-width", "2.5", "d", "M127.9 174.6l1.6 6.8c.6 2.7 3.3 4.3 6 3.7 2.7-.6 4.3-3.3 3.7-6l-2.8-11.6-4.9 1.2c-2.6.5-4.2 3.2-3.6 5.9z"], ["fill", "#A9DDF3", "d", "M131.9 178.5l.5 2.2c.3 1.1 1.3 1.7 2.4 1.5 1.1-.3 1.7-1.3 1.5-2.4l-.5-2.2-3.9.9z"], ["id", "fingersFrontR", 2, "visibility", "hidden"], ["fill", "#88c9f2", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "stroke-width", "2.5", "d", "M207.1 142.5l7.9 8.9c1.8 2.1 5 2.3 7.1.4 2.1-1.8 2.3-5 .4-7.1l-4.6-5.2c-1.8-2.1-5-2.2-7-.4l-3.8 3.4"], ["fill", "#A9DDF3", "d", "M215.8 147.7l1.5 1.7c.7.8 2 .9 2.8.2.8-.7.9-2 .2-2.8l-1.5-1.7-3 2.6z"], ["fill", "#88c9f2", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "stroke-width", "2.5", "d", "M199.6 149.1l7.9 8.9c1.8 2.1 5 2.3 7.1.4 2.1-1.8 2.3-5 .4-7.1l-7.9-8.9-7.5 6.7z"], ["fill", "#A9DDF3", "d", "M208.3 154.4l1.5 1.7c.7.8 2 .9 2.8.2.8-.7.9-2 .2-2.8l-1.5-1.7-3 2.6z"], ["fill", "#88c9f2", "stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "stroke-width", "2.5", "d", "M195.4 159.5l4.6 5.2c1.8 2.1 5 2.3 7.1.4 2.1-1.8 2.3-5 .4-7.1l-7.9-8.9-3.7 3.3c-2.1 1.9-2.3 5-.5 7.1z"], ["fill", "#A9DDF3", "d", "M200.8 161l1.5 1.7c.7.8 2 .9 2.8.2.8-.7.9-2 .2-2.8l-1.5-1.7-3 2.6z"], ["id", "flashlightFront"], ["fill", "#1A1A1A", "d", "M83.9 181.4l4.6 26.4 34.6-33.6-24.5-6.2c-8.9-2.6-16.6 3.9-14.7 13.4z"], ["fill", "#333", "d", "M91.9 167.8l20.5 7.4-.5 1.2-21.4-8.2c.5-.2 1-.3 1.4-.4z"], ["d", "M86 171.4c-2 2.5-3 6-2.2 10l4.6 26.4 11.4-11.1L86 171.4z"], ["fill", "url(#flashlightGrad)", "d", "M99.1 183.7c-10.6 9.4-13.4 21.4-9 28.5 4.3 6.8 18 3 28.6-6.4s14.9-23.7 8.8-29c-6.9-6.1-17.8-2.6-28.4 6.9z"], ["fill", "#B3B3B3", "d", "M101.6 185.7c-8.2 7.3-11.9 18.2-8.8 23.1 2.6 4.1 13.6-1.1 21.8-8.4s13.6-18.1 9.9-21.6c-4.4-4.2-14.7-.4-22.9 6.9z"], ["id", "lightSVG", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 600 470"], ["id", "white-glow"], ["result", "flood", "flood-color", "#ffffff", "flood-opacity", ".6"], ["in", "flood", "result", "mask", "in2", "SourceGraphic", "operator", "in"], ["in", "mask", "result", "dilated", "operator", "dilate", "radius", "3"], ["in", "dilated", "result", "blurred", "stdDeviation", "8"], ["in", "blurred"], ["in", "SourceGraphic"], ["id", "light", 2, "visibility", "hidden"], ["filter", "url(#white-glow)", "fill", "#F8FFE8", "d", "M122.2 177.4c-5.2-1.6-13.6 2.1-20.6 8.3-7.7 6.8-11.4 16.8-9.3 22.1L421 1683h1534V733L122.2 177.4z"], ["opacity", "0.7", "fill", "#FFFFFF", "d", "M101.6,185.7c-8.2,7.3-11.9,18.2-8.8,23.1c2.6,4.1,13.6-1.1,21.8-8.4s13.6-18.1,9.9-21.6 C120.1,174.6,109.8,178.4,101.6,185.7z"], ["id", "four04"], ["opacity", ".2", "id", "lettersShadow"], ["d", "M233.2 408.6l30.6 46.3-51.9 46 22.2 25.8 125.2 37.6 45.1-18.7-45.5-51.9 12.1-18.1-25.3-30.8-26.2-6.5-27.5-37.7z"], ["d", "M328.9 467.6S391.4 601.5 505 558c88.3-33.8-69.2-108.2-85-116.5-15.8-8.3-76.8 6.9-76.8 6.9l-14.3 19.2z"], ["d", "M474.2 515.1L505 558l-20.6 50.6 22.3 25.8 162.5 27 48.4-24.3-60.2-42.7 19.1-12.1-38.4-37.4-32.3.6-72-30.3z"], ["stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "stroke-width", "2.5", "fill", "#3A7199", "d", "M269.2 316l-17.9 6 15.4.8 19.2-6.4zM220.3 371l12.4 37.8 14 7.4-13.3-40.7zM214.4 317.4c-.3-.8-.5-1.6-.8-2.4-.3-.8-.5-1.7-.8-2.5-.3-.9-.5-1.7-.8-2.6-.3-.9-.6-1.8-.8-2.8-.3-.9-.6-1.9-.8-2.9-.3-1-.6-1.9-.8-2.9-.3-1-.5-1.9-.8-2.9-.3-1-.5-1.9-.8-2.9-.3-1-.5-2-.8-2.9-.3-1-.5-1.9-.8-2.9-.3-1-.5-1.9-.8-2.9-.3-1-.5-1.9-.8-2.9-.3-1-.5-1.9-.8-2.8-.2-.9-.5-1.8-.7-2.7-.2-.9-.5-1.7-.7-2.6l-.6-2.4-10.9 2.8c.2.7.4 1.5.6 2.3l.6 2.4c.2.8.4 1.6.7 2.5s.5 1.7.7 2.6c.2.9.5 1.8.7 2.7.2.9.5 1.8.7 2.7.2.9.5 1.8.7 2.7.2.9.5 1.8.7 2.7.2.9.5 1.8.8 2.7.3.9.5 1.8.8 2.7.3.9.5 1.8.8 2.7.3.9.5 1.8.8 2.7.3.9.5 1.7.8 2.6.3.8.5 1.7.8 2.5.2.8.5 1.6.7 2.3.2.8.5 1.5.7 2.2l6.3 19.3-28.8 9.7 10 2.6 31-10.4-6.8-21zM162.6 243.7l-25 119.5 10.7 32.2 7.6 6.5-11.5-34.7 26.9-128.8z", 1, "lettersSide"], ["stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "stroke-width", "2.5", "fill", "#67B1E0", "d", "M266.7 322.8l19.2-6.5 12.1 37.2-19.2 6.5 13.2 40.6-45.2 15.6-13.3-40.7-77.5 26.4-11.5-34.8 26.9-128.8 61.5-19.9 33.8 104.4zm-62-38.9c-.3-1-.5-1.9-.8-2.8-.2-.9-.5-1.8-.7-2.7-.2-.9-.5-1.7-.7-2.6l-.6-2.4-1.1.4c-.1 1.6-.2 3.2-.4 4.8-.1 1.6-.3 3.2-.4 4.7-.1 1.6-.3 3.1-.5 4.7s-.3 3.1-.5 4.7-.4 3.1-.5 4.7c-.2 1.6-.4 3.2-.6 4.7l-.6 4.8-.6 4.8-6.4 36.8 31-10.4-6.8-20.8c-.3-.8-.5-1.6-.8-2.4-.3-.8-.5-1.7-.8-2.5-.3-.9-.5-1.7-.8-2.6-.3-.9-.6-1.8-.8-2.8-.3-.9-.6-1.9-.8-2.9-.3-1-.6-1.9-.8-2.9-.3-1-.6-1.9-.8-2.9-.3-1-.5-1.9-.8-2.9-.3-1-.5-2-.8-2.9-.3-1-.5-1.9-.8-2.9-.3-1-.5-1.9-.8-2.9-.5-.9-.8-1.9-1-2.8", 1, "lettersFront"], ["stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "stroke-width", "2.5", "fill", "#3A7199", "d", "M390 347.5c-.1-1.9-.3-3.8-.5-5.5-.2-1.7-.4-3.4-.7-4.9-.3-1.5-.5-2.9-.9-4.3-.3-1.3-.7-2.5-1.1-3.6-.4-1.1-.8-2.1-1.3-3.1-.5-.9-.9-1.8-1.5-2.5-.5-.8-1.1-1.4-1.7-2-.6-.6-1.2-1.1-1.8-1.5-.6-.4-1.3-.7-2-1.1-.7-.3-1.4-.6-2-.8l-2.1-.6c-.7-.2-1.5-.3-2.2-.3h-14.3 1.6l2.1.3c.7.1 1.3.3 2 .5.6.2 1.3.5 1.9.8.6.3 1.2.6 1.8 1 .6.4 1.2.8 1.7 1.3s1.1 1.1 1.5 1.8c.5.7.9 1.5 1.4 2.3.4.9.8 1.8 1.2 2.8.4 1 .7 2.2 1 3.4.3 1.2.6 2.5.8 4 .2 1.4.4 2.9.6 4.5.2 1.6.3 3.3.4 5.1.1 1.8.2 3.8.2 5.8 0 2.1 0 4.3-.1 6.7-.1 2.4-.2 4.9-.4 7.6-.2 2.7-.4 5.5-.7 8.4-.3 2.9-.6 5.7-.9 8.4-.3 2.7-.7 5.2-1 7.5-.4 2.4-.8 4.6-1.2 6.7-.4 2.1-.8 4-1.3 5.8-.5 1.8-.9 3.5-1.4 5.1s-1 3.1-1.5 4.5-1 2.7-1.6 3.9c-.5 1.2-1.1 2.3-1.6 3.3-.3.5-.5.9-.8 1.4-.1.1-.2.3-.3.4-.2.3-.4.6-.6.8-.1.2-.2.3-.3.5-.2.2-.3.5-.5.7-.1.1-.2.3-.4.4-.2.2-.3.4-.5.6l-.4.4-.5.5c-.1.1-.3.2-.4.3-.2.1-.3.3-.5.4-.1.1-.3.2-.4.3-.2.1-.3.2-.5.3-.1.1-.3.2-.4.2-.3.2-.5.3-.8.4-.6.3-1.3.5-2 .7h-.1c-.6.2-1.3.4-1.9.5h-.1c-.6.1-1.3.2-1.9.2H349c-.7-.1-1.3-.2-2-.3h-.1c-.6-.1-1.3-.3-1.9-.5h-.1c-.6-.2-1.2-.5-1.8-.8-.6-.3-1.2-.7-1.8-1.1 0 0-.1 0-.1-.1 0 0-.1 0-.1-.1 0 0-.1 0-.1-.1 0 0-.1 0-.1-.1l11 8.3.1.1.1.1s.1 0 .1.1c0 0 .1 0 .1.1.3.2.6.4 1 .6.3.2.6.4 1 .5.3.2.6.3.9.4.3.1.7.3 1 .4h.2l.9.3c.3.1.7.2 1.1.3h.2c.3.1.6.1.9.2.4.1.7.1 1.1.1H363c.3 0 .5 0 .8-.1.3 0 .5-.1.8-.1.1 0 .2 0 .3-.1h.2c.1 0 .2 0 .3-.1.3-.1.5-.1.8-.2.3-.1.5-.1.8-.2.1 0 .1 0 .2-.1.1 0 .2-.1.3-.1.2-.1.4-.1.6-.2.2-.1.4-.2.6-.2l.6-.3c.1 0 .1-.1.2-.1s.1-.1.2-.1.1-.1.2-.1.1-.1.2-.1.1-.1.2-.1c.1-.1.3-.2.4-.3.2-.1.4-.2.6-.4.1 0 .1-.1.2-.1.1-.1.2-.1.2-.2.1-.1.2-.1.3-.2.1-.1.2-.2.3-.2.1-.1.3-.2.4-.4.2-.2.4-.3.5-.5l.3-.3c.1-.1.1-.1.1-.2l.2-.2c.1-.1.2-.3.4-.4.1-.2.3-.3.4-.5.2-.2.4-.5.6-.7.1-.1.2-.2.3-.4 0 0 0-.1.1-.1l.1-.1c.2-.2.3-.5.5-.8.1-.2.2-.3.3-.5l.9-1.5c.6-1.1 1.2-2.2 1.8-3.5.6-1.3 1.1-2.7 1.7-4.2.5-1.5 1.1-3.1 1.6-4.8.5-1.7 1-3.5 1.5-5.5.5-1.9 1-4 1.4-6.3s.9-4.6 1.3-7.2c.4-2.6.8-5.3 1.1-8.1.4-2.9.7-5.9 1-9 .3-3.2.6-6.2.8-9 .2-2.9.3-5.6.4-8.1.1-2.6.1-5 .1-7.2.1-1.6 0-3.7-.1-5.6zM325.4 293.8c.7-.6 1.3-1.2 2-1.8.2-.2.4-.4.6-.5.8-.7 1.7-1.4 2.6-2.1.2-.1.4-.3.6-.4.7-.5 1.4-1.1 2.2-1.6.3-.2.5-.4.8-.5.8-.5 1.7-1.1 2.5-1.6.1-.1.2-.1.3-.2 1-.6 1.9-1.1 2.9-1.6.2-.1.3-.2.5-.3.9-.5 1.9-.9 2.9-1.3.1-.1.3-.1.4-.2 1-.4 2-.9 3.1-1.2.4-.2.9-.3 1.3-.5.1 0 .2-.1.4-.1.4-.1.8-.3 1.2-.4.1 0 .1 0 .2-.1.5-.1 1-.3 1.5-.4h.1c.5-.1 1-.3 1.5-.4l-11.1 2.7c-.1 0-.3.1-.4.1-.1 0-.3.1-.4.1-.1 0-.3.1-.4.1h-.1c-.1 0-.2.1-.3.1-.3.1-.7.2-1 .3h-.1-.1c-.2.1-.5.1-.7.2-.1 0-.2.1-.4.1-.1 0-.1 0-.2.1-.1 0-.1 0-.2.1-.1 0-.2.1-.3.1-.3.1-.6.2-1 .3-.6.2-1.2.4-1.8.7-.4.2-.7.3-1.1.5-.1.1-.2.1-.4.2-.1 0-.2.1-.3.1-.6.3-1.1.5-1.7.8-.2.1-.5.2-.7.4-.1 0-.2.1-.3.1-.1 0-.1.1-.2.1-.2.1-.3.2-.5.3-.7.4-1.5.8-2.2 1.2-.1.1-.2.1-.3.2-.6.4-1.2.7-1.8 1.1-.2.1-.4.3-.6.4-.1.1-.2.1-.3.2-.1.1-.3.2-.4.3-.7.5-1.3.9-2 1.4-.2.1-.4.3-.5.4-.1.1-.1.1-.2.1-.7.6-1.5 1.2-2.2 1.8-.1 0-.1.1-.2.1-.1.1-.3.2-.4.4-.4.3-.7.6-1.1 1-.3.2-.5.5-.8.7-.2.2-.4.4-.7.6-.8.7-1.5 1.5-2.3 2.3-1.7 1.8-3.2 3.7-4.8 5.7-1.5 2-3 4.2-4.3 6.5-1.4 2.3-2.7 4.7-3.9 7.3-1.2 2.6-2.4 5.3-3.4 8.1-1.1 2.8-2.1 5.8-3 8.9-.9 3.1-1.7 6.3-2.4 9.6s-1.3 6.8-1.9 10.4c-.5 3.6-1 7.3-1.3 11.1-.4 3.8-.6 7.5-.7 11.2-.1 3.6-.2 7.1-.1 10.5.1 3.4.3 6.7.6 9.9s.7 6.3 1.3 9.3c.5 3 1.2 5.9 1.9 8.6.7 2.8 1.5 5.4 2.4 8 .9 2.5 1.9 5 3 7.3s2.3 4.5 3.6 6.6c.4.7.9 1.4 1.3 2.1.4.7.9 1.3 1.4 2s.9 1.3 1.4 1.9l1.5 1.8 8.3 9.9c-.5-.6-1.1-1.3-1.6-2s-1-1.3-1.5-2l-1.5-2.1c-.5-.7-1-1.5-1.4-2.2-1.4-2.3-2.7-4.6-3.9-7.1-1.2-2.5-2.3-5.1-3.2-7.8-1-2.7-1.9-5.6-2.6-8.6-.8-3-1.4-6.1-2-9.3-.6-3.2-1-6.5-1.3-10-.3-3.4-.5-7-.6-10.7-.1-3.7-.1-7.5.1-11.3.1-3.9.4-7.9.8-12s.9-8.1 1.4-12c.6-3.9 1.3-7.6 2-11.2.8-3.6 1.6-7 2.6-10.4 1-3.3 2-6.5 3.2-9.6 1.2-3.1 2.4-6 3.7-8.7 1.3-2.8 2.7-5.4 4.2-7.9s3-4.8 4.7-7c1.6-2.2 3.3-4.2 5.1-6.1.8-.9 1.6-1.7 2.4-2.5.2-.3.4-.5.6-.7z", 1, "lettersSide"], ["stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "stroke-width", "2.5", "fill", "#67B1E0", "d", "M436.1 339.3c.5 3.1 1 6.4 1.3 9.8.3 3.4.5 6.9.6 10.4.1 3.6 0 7.3-.1 11.1-.2 3.8-.4 7.8-.8 11.8-.4 4.1-.9 8-1.5 11.8-.6 3.8-1.3 7.5-2 11-.8 3.5-1.6 6.9-2.6 10.2-1 3.3-2 6.4-3.1 9.5-1.1 3-2.4 5.9-3.6 8.7-1.3 2.8-2.7 5.4-4.1 7.9-1.4 2.5-3 4.9-4.6 7.1-1.6 2.2-3.3 4.3-5 6.3-1.8 2-3.6 3.8-5.5 5.5-1.9 1.7-3.8 3.3-5.8 4.7-2 1.4-4.1 2.7-6.2 3.9-2.1 1.2-4.3 2.2-6.6 3.1-2.3.9-4.6 1.7-6.9 2.3-2.3.6-4.7 1.1-7.2 1.5-2.4.3-4.9.6-7.4.6-2.5.1-5.1 0-7.7-.2-2.6-.2-5.2-.5-7.7-1s-4.9-1.1-7.3-1.8c-2.4-.7-4.6-1.6-6.8-2.6s-4.3-2.1-6.4-3.4c-2.1-1.3-4-2.6-5.9-4.1-1.9-1.5-3.7-3.1-5.4-4.9-1.7-1.8-3.4-3.6-4.9-5.6-1.6-2-3-4.1-4.4-6.4-1.4-2.3-2.7-4.6-3.9-7.1-1.2-2.5-2.3-5.1-3.2-7.8-1-2.7-1.9-5.6-2.6-8.6-.8-3-1.4-6.1-2-9.3-.6-3.2-1-6.5-1.3-10-.3-3.4-.5-7-.6-10.7-.1-3.7-.1-7.5.1-11.3.1-3.9.4-7.9.8-12s.9-8.1 1.4-12c.6-3.9 1.3-7.6 2-11.2.8-3.6 1.6-7 2.6-10.4 1-3.3 2-6.5 3.2-9.6 1.2-3.1 2.4-6 3.7-8.7 1.3-2.8 2.7-5.4 4.2-7.9s3-4.8 4.7-7c1.6-2.2 3.3-4.2 5.1-6.1 1.8-1.9 3.6-3.7 5.5-5.3 1.9-1.6 3.9-3.1 5.9-4.5 2-1.4 4.1-2.6 6.3-3.7 2.1-1.1 4.4-2.1 6.6-2.9 2.3-.8 4.6-1.5 6.9-2.1 2.4-.5 4.8-1 7.2-1.2 2.5-.3 5-.4 7.5-.4 2.6 0 5.2.1 7.8.4 2.6.3 5.1.7 7.6 1.2s4.9 1.2 7.2 1.9c2.3.8 4.6 1.6 6.8 2.7 2.2 1 4.3 2.1 6.4 3.4 2.1 1.3 4 2.6 5.9 4.1 1.9 1.5 3.7 3.1 5.4 4.8 1.7 1.7 3.3 3.6 4.9 5.6 1.5 2 3 4.1 4.3 6.3 1.4 2.2 2.6 4.6 3.8 7 1.2 2.4 2.2 5 3.2 7.7.9 2.7 1.8 5.5 2.5 8.4.5 3 1.1 6 1.7 9.1zm-52 69.5c.5-1.9 1-4 1.4-6.3.4-2.2.9-4.6 1.3-7.2.4-2.6.8-5.3 1.1-8.1.4-2.9.7-5.9 1-9 .3-3.2.6-6.2.8-9 .2-2.9.3-5.6.4-8.1.1-2.6.1-5 .1-7.2 0-2.3-.1-4.3-.2-6.3-.1-1.9-.3-3.8-.5-5.5-.2-1.7-.4-3.4-.7-4.9-.3-1.5-.5-2.9-.9-4.3-.3-1.3-.7-2.5-1.1-3.6-.4-1.1-.8-2.1-1.3-3.1-.5-.9-.9-1.8-1.5-2.5-.5-.8-1.1-1.4-1.7-2-.6-.6-1.2-1.1-1.8-1.5-.6-.4-1.3-.7-2-1.1-.7-.3-1.4-.6-2-.8l-2.1-.6c-.7-.2-1.5-.3-2.2-.3-.8-.1-1.5-.1-2.2-.1-.7 0-1.5.1-2.2.2-.7.1-1.5.2-2.2.4-.7.2-1.4.4-2.1.7-.7.3-1.4.6-2.1 1.1-.7.5-1.4 1-2 1.6-.7.6-1.3 1.4-1.9 2.2-.6.8-1.2 1.7-1.8 2.8-.6 1-1.2 2.1-1.8 3.4-.6 1.2-1.1 2.6-1.7 4-.5 1.5-1.1 3-1.6 4.7-.5 1.7-1 3.5-1.5 5.4-.5 1.9-.9 4-1.4 6.2-.4 2.2-.9 4.6-1.2 7.1-.4 2.5-.8 5.2-1.1 8.1-.3 2.9-.7 5.9-1 9.1-.3 3.2-.6 6.2-.8 9.1-.2 2.9-.3 5.6-.4 8.2-.1 2.6-.1 5-.1 7.3s.1 4.4.2 6.4.3 3.9.4 5.7c.2 1.8.4 3.5.7 5 .3 1.6.5 3 .9 4.4.3 1.4.7 2.6 1.1 3.8.4 1.2.8 2.2 1.3 3.2s.9 1.9 1.5 2.6c.5.8 1.1 1.5 1.6 2.1.6.6 1.2 1.1 1.8 1.6.6.4 1.3.8 2 1.2.7.3 1.3.6 2 .9l2.1.6c.7.2 1.5.3 2.2.3.7.1 1.5.1 2.2 0 .7 0 1.5-.1 2.2-.2.7-.1 1.5-.3 2.2-.5.7-.2 1.4-.5 2.1-.8.7-.3 1.4-.7 2.1-1.2.7-.5 1.4-1.1 2-1.8.7-.7 1.3-1.5 1.9-2.4.6-.9 1.2-1.8 1.8-2.9.6-1.1 1.2-2.2 1.8-3.5.6-1.3 1.1-2.7 1.7-4.2.5-1.5 1.1-3.1 1.6-4.8.6-1.9 1.1-3.7 1.6-5.6", 1, "lettersFront"], ["stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "stroke-width", "2.5", "fill", "#3A7199", "d", "M548.6 448.8l-18.7-2.8 13.4 7.7 20.1 2.9zM480.2 475.8l-6 39.3 9.2 13 6.4-42.4zM499.1 425.2c.1-.8.3-1.6.4-2.5.1-.8.3-1.7.4-2.6.1-.9.3-1.8.5-2.7.2-.9.3-1.9.5-2.9s.4-1.9.5-2.9c.2-1 .4-2 .6-2.9l.6-3 .6-3 .6-3 .6-3c.2-1 .4-2 .6-2.9.2-1 .4-2 .6-2.9.2-1 .4-1.9.6-2.8l.6-2.7c.2-.9.4-1.7.6-2.6.2-.8.4-1.7.5-2.5l-10.9-2.4c-.2.7-.3 1.5-.5 2.3-.2.8-.3 1.6-.5 2.4-.2.8-.3 1.7-.5 2.5-.2.9-.4 1.7-.5 2.6l-.6 2.7-.6 2.7-.6 2.7c-.2.9-.4 1.8-.6 2.8-.2.9-.4 1.8-.6 2.8-.2.9-.4 1.8-.5 2.8-.2.9-.3 1.8-.5 2.7-.2.9-.3 1.8-.5 2.7-.2.9-.3 1.8-.5 2.6-.1.9-.3 1.7-.4 2.5-.1.8-.3 1.6-.4 2.4-.1.8-.2 1.5-.4 2.3l-3.1 20.1-30-4.4 7.8 6.9 32.3 4.7 3.3-21.5zM486.2 336.1l-76.3 95.3-5 33.7 3.8 9.2 5.5-36.2 82.1-102.8z", 1, "lettersSide"], ["stroke", "#265D85", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "stroke-width", "2.5", "fill", "#67B1E0", "d", "M543.3 453.7l20.1 2.9-6 38.6-20-2.8-6.5 42.1-47.4-6.5 6.5-42.3-81.1-11.4 5.4-36.2 82.2-102.8 63.8 9.9-17 108.5zm-37.7-62.8c.2-1 .4-1.9.6-2.8l.6-2.7c.2-.9.4-1.7.6-2.6.2-.8.4-1.7.5-2.5l-1.2-.2c-.8 1.4-1.6 2.7-2.5 4.1s-1.7 2.7-2.5 4c-.8 1.3-1.7 2.7-2.5 4-.9 1.3-1.7 2.6-2.6 4-.9 1.3-1.7 2.6-2.6 3.9-.9 1.3-1.8 2.6-2.7 4s-1.8 2.7-2.7 4-1.8 2.7-2.7 4L463.6 442l32.3 4.7 3.3-21.6c.1-.8.3-1.6.4-2.5.1-.8.3-1.7.4-2.6.1-.9.3-1.8.5-2.7.2-.9.3-1.9.5-2.9s.4-1.9.5-2.9c.2-1 .4-2 .6-2.9l.6-3 .6-3 .6-3 .6-3c.2-1 .4-2 .6-2.9.1-.8.3-1.8.5-2.8", 1, "lettersFront"], [1, "content"]],
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "linearGradient", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "stop", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "stop", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "stop", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "stop", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "stop", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "stop", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "stop", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "stop", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "g", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "g", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "ellipse", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "ellipse", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "g", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "circle", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "circle", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "g", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "circle", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "circle", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "g", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "clipPath", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "use", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "g", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "ellipse", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "ellipse", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "g", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "path", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "path", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "path", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "path", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "path", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "g", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "path", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "path", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "path", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "path", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "path", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "path", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "path", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "path", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "path", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "path", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "path", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "path", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "path", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "g", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "path", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "path", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "g", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "path", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "path", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "path", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "g", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "path", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "path", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "path", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "path", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "path", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "path", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "path", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "path", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "path", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "path", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "g", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "path", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "path", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "path", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "path", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "path", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "path", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "g", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "path", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "path", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "path", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "path", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "path", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "path", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "g", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "path", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "path", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "path", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "path", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "path", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "svg", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "filter", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "feFlood", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "feComposite", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "feMorphology", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "feGaussianBlur", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "feMerge");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "feMergeNode", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "feMergeNode", 144);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "g", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "path", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "path", 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "g", 148);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "g", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "path", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "path", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "path", 152);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "path", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "path", 154);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "path", 155);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "path", 156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "path", 157);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "path", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 159);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Hello?? Is somebody there?!?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "We know it\u2019s scary, but the page you\u2019re trying to reach can\u2019t be found. Perhaps it was just a bad ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " dream?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,900\");\n#yetiSVG[_ngcontent-%COMP%] {\n  width: 600px;\n  height: 470px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n}\n#lightSVG[_ngcontent-%COMP%] {\n  width: 600px;\n  height: 470px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: visible;\n}\n.content[_ngcontent-%COMP%] {\n  padding: 5rem 3rem 0 25rem;\n  position: relative;\n  z-index: 10;\n  font-family: \"Source Sans Pro\", sans-serif;\n  color: #FFF;\n}\n.content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.8rem;\n  font-size: 2.625rem;\n  font-weight: 900;\n  line-height: 120%;\n}\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: normal;\n  line-height: 150%;\n  color: #d1e2ed;\n}\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-not-found',
          templateUrl: './not-found.component.html',
          styleUrls: ['./not-found.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/countup/countup.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/countup/countup.component.ts ***!
    \*****************************************************/

  /*! exports provided: CountupComponent */

  /***/
  function srcAppSharedCountupCountupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountupComponent", function () {
      return CountupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CountupComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r82.timer["days"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r82.timer["hours"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r82.timer["minutes"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r82.timer["seconds"], " ");
      }
    }

    var CountupComponent = /*#__PURE__*/function () {
      function CountupComponent() {
        _classCallCheck(this, CountupComponent);

        this.oldDate = new Date("2019-12-01");
      }

      _createClass(CountupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          setInterval(function () {
            _this12.timer = _this12.dhms(Math.floor(new Date().getTime() - _this12.oldDate.getTime()));
          }, 1000);
        }
      }, {
        key: "dhms",
        value: function dhms(difference) {
          var days, hours, mins, secs;
          days = Math.floor(difference / (60 * 60 * 1000 * 24) * 1);
          hours = Math.floor(difference % (60 * 60 * 1000 * 24) / (60 * 60 * 1000) * 1);
          mins = Math.floor(difference % (60 * 60 * 1000 * 24) % (60 * 60 * 1000) / (60 * 1000) * 1);
          secs = Math.floor(difference % (60 * 60 * 1000 * 24) % (60 * 60 * 1000) % (60 * 1000) / 1000 * 1);
          return {
            days: days,
            hours: hours,
            minutes: mins,
            seconds: secs
          };
        }
      }]);

      return CountupComponent;
    }();

    CountupComponent.ɵfac = function CountupComponent_Factory(t) {
      return new (t || CountupComponent)();
    };

    CountupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CountupComponent,
      selectors: [["app-countup"]],
      decls: 10,
      vars: 1,
      consts: [["class", "row font-weight-bold", 4, "ngIf"], [1, "row"], [1, "col-3"], [1, "row", "font-weight-bold"]],
      template: function CountupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CountupComponent_div_0_Template, 9, 4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Days");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hours");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Mins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Secs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.timer);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-countup',
          templateUrl: './countup.component.html',
          styleUrls: ['./countup.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
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
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: true
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    } else console.log("test version");

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
    /*! /home/farka01/Corona-Statistics-And-Tracker-Dashboard-Angular-9/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);