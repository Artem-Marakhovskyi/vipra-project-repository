(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/home/activity-details/activity-details.component.html":
/*!*******************************************************************!*\
  !*** ./src/home/activity-details/activity-details.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"info-block full-width\">\r\n    <p class=\"centered bold padded margined h\">Деятельность</p>\r\n    <div class=\"pure-g\">\r\n\r\n        <div class=\"pure-u-4-24\"></div>\r\n        <div class=\"pure-u-6-24\">\r\n            <img class=\"centered-img\" src=\"/assets/u59.png\">\r\n            <p class=\"centered sub-h\">Строительство и реконструкция</p>\r\n            <ul>\r\n               <li>Разработка проектной документации</li> \r\n               <li>Выполнение строительно-монтажных работ</li> \r\n               <li>Выполнение отделочных работ</li> \r\n               <li>Проведение реконструкции</li> \r\n            </ul>\r\n        </div>\r\n\r\n        <div class=\"pure-u-4-24\"></div>\r\n\r\n\r\n        <div class=\"pure-u-6-24\">\r\n            <img class=\"centered-img\" src=\"/assets/u59.png\">\r\n            <p class=\"centered sub-h\">Обслуживание АЗС и нефтебаз</p>\r\n            <ul>\r\n                <li>Проведение работ повышенной опасности</li> \r\n                <li>Изготовление технологического оборудование</li> \r\n                <li>Проведение электротехнического измерения</li> \r\n                <li>Подбор земельных участков для строительства АЗС и нефтебаз</li> \r\n             </ul>\r\n        </div>\r\n\r\n        <div class=\"pure-u-4-24\"></div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/home/activity-details/activity-details.component.scss":
/*!*******************************************************************!*\
  !*** ./src/home/activity-details/activity-details.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centered-img {\n  display: block;\n  margin: 0 auto; }\n\n.margined {\n  margin-bottom: 40px; }\n\n.fullwidth {\n  width: 100%; }\n\n.info-block {\n  background-color: #052d6e;\n  padding: 20px; }\n\n.centered {\n  text-align: center; }\n\n.sub-h {\n  font-size: 1.5em; }\n\n.h {\n  font-size: 2em; }\n\n.bold {\n  font-weight: 900; }\n\nul {\n  list-style-type: disc; }\n\nli {\n  padding: 15px 0px 0px 5px; }\n"

/***/ }),

/***/ "./src/home/activity-details/activity-details.component.ts":
/*!*****************************************************************!*\
  !*** ./src/home/activity-details/activity-details.component.ts ***!
  \*****************************************************************/
/*! exports provided: ActivityDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityDetailsComponent", function() { return ActivityDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_entityServices_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/entityServices/image-service */ "./src/common/entityServices/image-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivityDetailsComponent = /** @class */ (function () {
    function ActivityDetailsComponent(imageService) {
        this.imageService = imageService;
    }
    ActivityDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'activity-details',
            template: __webpack_require__(/*! ./activity-details.component.html */ "./src/home/activity-details/activity-details.component.html"),
            styles: [__webpack_require__(/*! ./activity-details.component.scss */ "./src/home/activity-details/activity-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_common_entityServices_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"]])
    ], ActivityDetailsComponent);
    return ActivityDetailsComponent;
}());



/***/ }),

/***/ "./src/home/home.component.html":
/*!**************************************!*\
  !*** ./src/home/home.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<welcome></welcome>\r\n<activity-details></activity-details>"

/***/ }),

/***/ "./src/home/home.component.scss":
/*!**************************************!*\
  !*** ./src/home/home.component.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centered-img {\n  display: block;\n  margin: 0 auto; }\n\n.margined {\n  margin-bottom: 40px; }\n\n.fullwidth {\n  width: 100%; }\n\n.info-block {\n  background-color: #052d6e;\n  padding: 20px; }\n\n.centered {\n  text-align: center; }\n\n.sub-h {\n  font-size: 1.5em; }\n\n.h {\n  font-size: 2em; }\n\n.bold {\n  font-weight: 900; }\n\nul {\n  list-style-type: disc; }\n\nli {\n  padding: 15px 0px 0px 5px; }\n"

/***/ }),

/***/ "./src/home/home.component.ts":
/*!************************************!*\
  !*** ./src/home/home.component.ts ***!
  \************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/home/home.module.ts":
/*!*********************************!*\
  !*** ./src/home/home.module.ts ***!
  \*********************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/home/welcome/welcome.component.ts");
/* harmony import */ var _activity_details_activity_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activity-details/activity-details.component */ "./src/home/activity-details/activity-details.component.ts");
/* harmony import */ var _common_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/shared.module */ "./src/common/shared.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "./src/home/home.component.ts");
/* harmony import */ var _home_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.routing */ "./src/home/home.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _common_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"].forRoot(),
                _home_routing__WEBPACK_IMPORTED_MODULE_6__["routing"]
            ],
            declarations: [
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"],
                _activity_details_activity_details_component__WEBPACK_IMPORTED_MODULE_3__["ActivityDetailsComponent"],
                _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
            ],
            providers: [],
            exports: [
                _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"],
                _activity_details_activity_details_component__WEBPACK_IMPORTED_MODULE_3__["ActivityDetailsComponent"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/home/home.routing.ts":
/*!**********************************!*\
  !*** ./src/home/home.routing.ts ***!
  \**********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "./src/home/home.component.ts");


var routes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/home/welcome/welcome.component.html":
/*!*************************************************!*\
  !*** ./src/home/welcome/welcome.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img [src]=\"backgroundUrl\"/>\r\n\r\n<div class=\"pure-g\">\r\n    <div class=\"pure-u-5-24\"></div>\r\n    <div class=\"motto-container\">\r\n        <h1 class=\"motto-lg\">\r\n            Комплексные решение для АЗС и нефтебаз\r\n        </h1>\r\n\r\n        <h2 class=\"motto-sm rest-width\">\r\n            Свяжитесь с нами сейчас для того, чтобы начать строительство как можно быстрей\r\n        </h2>\r\n        \r\n        <div class=\"button-container\">\r\n                <custom-button [txt]=\"knowMore\"></custom-button>\r\n                <custom-button [txt]=\"callUs\"></custom-button>\r\n        </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/home/welcome/welcome.component.scss":
/*!*************************************************!*\
  !*** ./src/home/welcome/welcome.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 100%;\n  top: 0px;\n  position: absolute;\n  height: 600px;\n  z-index: -1;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.motto-container {\n  padding: 10px;\n  position: relative;\n  top: 180px; }\n\n.motto-container * {\n    letter-spacing: .01em; }\n\n.motto-container .motto-lg {\n    margin-bottom: 50px; }\n\n.motto-container .motto-sm {\n    width: 500px; }\n\n.button-container {\n  margin-top: 40px; }\n\ncustom-button {\n  margin-left: 40px; }\n\ndiv.pure-g {\n  height: 600px; }\n"

/***/ }),

/***/ "./src/home/welcome/welcome.component.ts":
/*!***********************************************!*\
  !*** ./src/home/welcome/welcome.component.ts ***!
  \***********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_entityServices_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/entityServices/image-service */ "./src/common/entityServices/image-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(imageService) {
        this.imageService = imageService;
        this.knowMore = "Узнать больше";
        this.callUs = "Связаться с нами";
    }
    WelcomeComponent_1 = WelcomeComponent;
    WelcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imageService.getImageUrl(WelcomeComponent_1.IMAGE_ASSET_ID)
            .subscribe(function (url) { return _this.backgroundUrl = url; });
    };
    WelcomeComponent.IMAGE_ASSET_ID = "7JzHB2xMLSwWSwayqwIAKC";
    WelcomeComponent = WelcomeComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/home/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/home/welcome/welcome.component.scss")]
        }),
        __metadata("design:paramtypes", [_common_entityServices_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
    var WelcomeComponent_1;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map