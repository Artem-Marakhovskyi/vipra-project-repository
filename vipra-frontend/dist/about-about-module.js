(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./src/about/about.component.html":
/*!****************************************!*\
  !*** ./src/about/about.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n    <h2>{{about?.header}}</h2>\r\n    <div class=\"pure-g\">\r\n        <div class=\"pure-u-1-5\"></div>\r\n        <div  class=\"pure-u-3-5\">\r\n            <div *ngFor=\"let p of about?.contentArr\">\r\n                <p class=\"par\">{{p.content}}</p>\r\n                <div *ngFor=\"let imgSrc of p.imgSources\" class=\"img-container\">\r\n                    <img [src]=\"imgSrc\"/>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"pure-u-1-5\"></div>\r\n    </div>\r\n    <div class=\"centered lower-btn\">\r\n            <custom-button txt=\"Связаться с нами\"  (click)=\"callUs()\"></custom-button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/about/about.component.scss":
/*!****************************************!*\
  !*** ./src/about/about.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  background: #052d6e;\n  padding-top: 100px;\n  position: relative;\n  margin: 0 auto;\n  padding: 0 calc(50%-400px); }\n\nh2 {\n  text-align: center; }\n\n.centered {\n  text-align: center; }\n\n.lower-btn {\n  padding-top: 40px;\n  padding-bottom: 40px; }\n\n.par {\n  width: 800px;\n  text-align: justify; }\n\n.img-container {\n  text-align: center; }\n\n.img-container img {\n  width: 400px; }\n"

/***/ }),

/***/ "./src/about/about.component.ts":
/*!**************************************!*\
  !*** ./src/about/about.component.ts ***!
  \**************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_contentful_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/services/contentful-service */ "./src/common/services/contentful-service.ts");
/* harmony import */ var _common_entities_about_company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/entities/about-company */ "./src/common/entities/about-company.ts");
/* harmony import */ var _common_mappingLayer_mapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/mappingLayer/mapper */ "./src/common/mappingLayer/mapper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutComponent = /** @class */ (function () {
    function AboutComponent(contentfulService) {
        this.contentfulService = contentfulService;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contentfulService.ofContentType(_common_entities_about_company__WEBPACK_IMPORTED_MODULE_2__["AboutCompany"].CONTENT_TYPE_ID, 'header', _common_mappingLayer_mapper__WEBPACK_IMPORTED_MODULE_3__["mapAboutCompany"])
            .subscribe(function (r) { return _this.about = r[0]; });
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [_common_services_contentful_service__WEBPACK_IMPORTED_MODULE_1__["ContentfulService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/about/about.module.ts":
/*!***********************************!*\
  !*** ./src/about/about.module.ts ***!
  \***********************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component */ "./src/about/about.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _common_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/shared.module */ "./src/common/shared.module.ts");
/* harmony import */ var _about_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.routing */ "./src/about/about.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _common_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _about_routing__WEBPACK_IMPORTED_MODULE_4__["routing"]
            ],
            declarations: [
                _about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"]
            ],
            providers: [],
            exports: []
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ }),

/***/ "./src/about/about.routing.ts":
/*!************************************!*\
  !*** ./src/about/about.routing.ts ***!
  \************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component */ "./src/about/about.component.ts");


var routes = [
    { path: '', component: _about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=about-about-module.js.map