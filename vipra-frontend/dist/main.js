(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/about-company/about-company.component.css":
/*!*******************************************************!*\
  !*** ./src/about-company/about-company.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/about-company/about-company.component.html":
/*!********************************************************!*\
  !*** ./src/about-company/about-company.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\r\n<div class=\"row\">\r\n        <img [src]=\"fullImagePath\">\r\n</div>\r\n<p class=\"pure-u-1-3\">{{content}}</p>\r\n"

/***/ }),

/***/ "./src/about-company/about-company.component.ts":
/*!******************************************************!*\
  !*** ./src/about-company/about-company.component.ts ***!
  \******************************************************/
/*! exports provided: AboutCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutCompanyComponent", function() { return AboutCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_contentful_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/services/contentful-service */ "./src/common/services/contentful-service.ts");
/* harmony import */ var _common_entities_about_company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/entities/about-company */ "./src/common/entities/about-company.ts");
/* harmony import */ var _common_mappingLayer_mapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/mappingLayer/mapper */ "./src/common/mappingLayer/mapper.ts");
/* harmony import */ var _common_infrastructure_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/infrastructure/modal-service */ "./src/common/infrastructure/modal-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AboutCompanyComponent = /** @class */ (function () {
    function AboutCompanyComponent(_contentfulService, _modalService) {
        this._contentfulService = _contentfulService;
        this._modalService = _modalService;
        this.fullImagePath = '/assets/dog.jpg';
    }
    AboutCompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        var entries = this._contentfulService.ofContentType(_common_entities_about_company__WEBPACK_IMPORTED_MODULE_2__["AboutCompany"].CONTENT_TYPE_ID, _common_entities_about_company__WEBPACK_IMPORTED_MODULE_2__["AboutCompany"].ORDER_FIELD, _common_mappingLayer_mapper__WEBPACK_IMPORTED_MODULE_3__["mapAboutCompany"]).then(function (data) {
            _this.title = data[0].title;
            _this.content = data[0].about;
        });
    };
    AboutCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'about-company',
            template: __webpack_require__(/*! ./about-company.component.html */ "./src/about-company/about-company.component.html"),
            styles: [__webpack_require__(/*! ./about-company.component.css */ "./src/about-company/about-company.component.css")]
        }),
        __metadata("design:paramtypes", [_common_services_contentful_service__WEBPACK_IMPORTED_MODULE_1__["ContentfulService"],
            _common_infrastructure_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"]])
    ], AboutCompanyComponent);
    return AboutCompanyComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{title}}!\r\n  </h1>\r\n  \r\n  <about-company></about-company>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _common_services_contentful_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/services/contentful-service */ "./src/common/services/contentful-service.ts");
/* harmony import */ var _common_errors_error_reason__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/errors/error-reason */ "./src/common/errors/error-reason.ts");
/* harmony import */ var _common_infrastructure_contentful_values__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/infrastructure/contentful-values */ "./src/common/infrastructure/contentful-values.ts");
/* harmony import */ var _about_company_about_company_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../about-company/about-company.component */ "./src/about-company/about-company.component.ts");
/* harmony import */ var _common_infrastructure_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/infrastructure/modal-service */ "./src/common/infrastructure/modal-service.ts");
/* harmony import */ var _common_infrastructure_modals_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/infrastructure/modals/modal.component */ "./src/common/infrastructure/modals/modal.component.ts");
/* harmony import */ var _components_common_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/common/shared.module */ "./src/components/common/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _about_company_about_company_component__WEBPACK_IMPORTED_MODULE_6__["AboutCompanyComponent"],
                _common_infrastructure_modals_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _components_common_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"].forRoot()
            ],
            providers: [
                _common_infrastructure_contentful_values__WEBPACK_IMPORTED_MODULE_5__["ContentfulValues"],
                _common_errors_error_reason__WEBPACK_IMPORTED_MODULE_4__["ErrorReason"],
                _common_services_contentful_service__WEBPACK_IMPORTED_MODULE_3__["ContentfulService"],
                _common_infrastructure_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/common/entities/about-company.ts":
/*!**********************************************!*\
  !*** ./src/common/entities/about-company.ts ***!
  \**********************************************/
/*! exports provided: AboutCompany */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutCompany", function() { return AboutCompany; });
var AboutCompany = /** @class */ (function () {
    function AboutCompany(title, about) {
        this.title = title;
        this.about = about;
    }
    AboutCompany.CONTENT_TYPE_ID = 'about_company';
    AboutCompany.ORDER_FIELD = '';
    return AboutCompany;
}());



/***/ }),

/***/ "./src/common/errors/argument-error.ts":
/*!*********************************************!*\
  !*** ./src/common/errors/argument-error.ts ***!
  \*********************************************/
/*! exports provided: ArgumentError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArgumentError", function() { return ArgumentError; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ArgumentError = /** @class */ (function (_super) {
    __extends(ArgumentError, _super);
    function ArgumentError(reason, argumentName) {
        var _this = _super.call(this) || this;
        _this.reason = reason;
        _this.argumentName = argumentName;
        _this.message = _this.toString();
        return _this;
    }
    ArgumentError.prototype.toString = function () {
        var result = '';
        if (this.argumentName) {
            result = 'Argument name: ' + this.argumentName + ', ';
        }
        result += 'Reason: ' + this.reason;
        return result;
    };
    return ArgumentError;
}(Error));



/***/ }),

/***/ "./src/common/errors/error-reason.ts":
/*!*******************************************!*\
  !*** ./src/common/errors/error-reason.ts ***!
  \*******************************************/
/*! exports provided: ErrorReason */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorReason", function() { return ErrorReason; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ErrorReason = /** @class */ (function () {
    function ErrorReason() {
        this.OutOfRange = 'Out of range';
        this.Null = 'Null';
        this.TooSmall = 'Argument is to small';
        this.Inconsistency = 'Inconsistency';
    }
    ErrorReason = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ErrorReason);
    return ErrorReason;
}());



/***/ }),

/***/ "./src/common/infrastructure/contentful-values.ts":
/*!********************************************************!*\
  !*** ./src/common/infrastructure/contentful-values.ts ***!
  \********************************************************/
/*! exports provided: ContentfulValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentfulValues", function() { return ContentfulValues; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

[_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]];
var ContentfulValues = /** @class */ (function () {
    function ContentfulValues() {
        this.API_KEY_NAME = "VipraContentfulAPIKey";
        this.SPACE_ID = "odwss3fdjzqe";
        this.ACCESS_TOKEN = "b9ac8d8f6d9bba6ab9f97aefaefa35d3fa578be4c0d0f321bf0e660361befb68";
    }
    return ContentfulValues;
}());



/***/ }),

/***/ "./src/common/infrastructure/modal-service.ts":
/*!****************************************************!*\
  !*** ./src/common/infrastructure/modal-service.ts ***!
  \****************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
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

/**
* ModalService - Service used to interact with the Modal Component
*/
var ModalService = /** @class */ (function () {
    function ModalService() {
        this.modals = [];
    }
    /**
    * close - Closes the selected modal by searching for the component and setting
    * isOpen to false
    * Note: If a modal is set to be 'blocking' a user click outside of the modal will
    * not dismiss the modal, this is off my default
    * @param { String } modalId The id of the modal to close
    */
    ModalService.prototype.close = function (modalId, checkBlocking) {
        if (checkBlocking === void 0) { checkBlocking = false; }
        var modal = this.findModal(modalId);
        if (modal) {
            if (checkBlocking && modal.blocking) {
                return;
            }
            setTimeout(function () {
                modal.isOpen = false;
            }, 250);
        }
    };
    /**
    * findModal - Locates the specified modal in the modals array
    * @param { String } modalId The id of the modal to find
    */
    ModalService.prototype.findModal = function (modalId) {
        for (var _i = 0, _a = this.modals; _i < _a.length; _i++) {
            var modal = _a[_i];
            if (modal.modalId === modalId) {
                return modal;
            }
        }
        return null;
    };
    /**
    * open - Opens the specified modal based on the suplied modal id
    * @param { String } modalId The id of the modal to open
    */
    ModalService.prototype.open = function (modalId) {
        var modal = this.findModal(modalId);
        if (modal) {
            setTimeout(function () {
                modal.isOpen = true;
            }, 250);
        }
    };
    /**
    * registerModal - Registers all modal components being used on initialization
    * @param { Object } newModal The new modal to add to the array of available modals
    */
    ModalService.prototype.registerModal = function (newModal) {
        var modal = this.findModal(newModal.modalId);
        // Delete existing to replace the modal
        if (modal) {
            this.modals.splice(this.modals.indexOf(modal), 1);
        }
        this.modals.push(newModal);
    };
    ModalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/common/infrastructure/modals/modal.component.html":
/*!***************************************************************!*\
  !*** ./src/common/infrastructure/modals/modal.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-container\" *ngIf=\"isOpen\">\r\n    <div class=\"modal-overlay\" (click)=\"close(true)\"></div>\r\n      <div class=\"app-modal\">\r\n      <div class=\"title\">\r\n      <h3 *ngIf=\"modalTitle\" [innerHTML]=\"modalTitle\"></h3>\r\n      <button *ngIf=\"!blocking && closebtn\"\r\n          class=\"btn-close\" (click)=\"close()\">X</button>\r\n    </div>\r\n    <div class=\"body\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/common/infrastructure/modals/modal.component.scss":
/*!***************************************************************!*\
  !*** ./src/common/infrastructure/modals/modal.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-container .modal-overlay {\n  background: rgba(169, 169, 169, 0.65);\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 1100; }\n\n.modal-container .app-modal {\n  background: white;\n  border-radius: 3px;\n  left: calc(50% - 250px);\n  padding: 0;\n  max-height: calc(100% - 100px);\n  overflow-y: auto;\n  position: fixed;\n  top: 50px;\n  width: 500px;\n  z-index: 1101; }\n\n.modal-container .app-modal .title {\n    height: 30px; }\n\n.modal-container .app-modal .title h3 {\n      display: inline-block;\n      margin-top: 0 !important; }\n\n.modal-container .app-modal .title .btn-close {\n      background: lightgray;\n      border: 0;\n      border-radius: 50%;\n      float: right;\n      height: 25px;\n      width: 25px; }\n"

/***/ }),

/***/ "./src/common/infrastructure/modals/modal.component.ts":
/*!*************************************************************!*\
  !*** ./src/common/infrastructure/modals/modal.component.ts ***!
  \*************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal-service */ "./src/common/infrastructure/modal-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * ModalComponent - This class represents the modal component.
 * @requires Component
 */
var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService) {
        this.modalService = modalService;
        this.isOpen = false;
    }
    /**
    * keyup - Checks keys entered for the 'esc' key, attached to hostlistener
    */
    ModalComponent.prototype.keyup = function (event) {
        if (event.keyCode === 27) {
            this.modalService.close(this.modalId, true);
        }
    };
    /**
    * ngOnInit - Initiated when component loads
    */
    ModalComponent.prototype.ngOnInit = function () {
        this.modalService.registerModal(this);
    };
    /**
    * close - Closes the selected modal
    */
    ModalComponent.prototype.close = function (checkBlocking) {
        if (checkBlocking === void 0) { checkBlocking = false; }
        this.modalService.close(this.modalId, checkBlocking);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ModalComponent.prototype, "closebtn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "modalId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "modalTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ModalComponent.prototype, "blocking", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keyup', ['$event'])
        /**
        * keyup - Checks keys entered for the 'esc' key, attached to hostlistener
        */
        ,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ModalComponent.prototype, "keyup", null);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal',
            styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/common/infrastructure/modals/modal.component.scss")],
            template: __webpack_require__(/*! ./modal.component.html */ "./src/common/infrastructure/modals/modal.component.html")
        }),
        __metadata("design:paramtypes", [_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/common/mappingLayer/mapper.ts":
/*!*******************************************!*\
  !*** ./src/common/mappingLayer/mapper.ts ***!
  \*******************************************/
/*! exports provided: mapAboutCompany */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapAboutCompany", function() { return mapAboutCompany; });
/* harmony import */ var _entities_about_company__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/about-company */ "./src/common/entities/about-company.ts");

function mapAboutCompany(item) {
    return new _entities_about_company__WEBPACK_IMPORTED_MODULE_0__["AboutCompany"](item.fields.title, item.fields.about);
}


/***/ }),

/***/ "./src/common/services/contentful-service.ts":
/*!***************************************************!*\
  !*** ./src/common/services/contentful-service.ts ***!
  \***************************************************/
/*! exports provided: ContentfulService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentfulService", function() { return ContentfulService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _errors_argument_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errors/argument-error */ "./src/common/errors/argument-error.ts");
/* harmony import */ var _errors_error_reason__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../errors/error-reason */ "./src/common/errors/error-reason.ts");
/* harmony import */ var _infrastructure_contentful_values__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../infrastructure/contentful-values */ "./src/common/infrastructure/contentful-values.ts");
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/contentful.browser.js");
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContentfulService = /** @class */ (function () {
    function ContentfulService(contentfulValues, errorTypes) {
        this.contentfulValues = contentfulValues;
        this.errorTypes = errorTypes;
        this.client = Object(contentful__WEBPACK_IMPORTED_MODULE_4__["createClient"])({
            space: contentfulValues.SPACE_ID,
            accessToken: contentfulValues.ACCESS_TOKEN
        });
    }
    ContentfulService.prototype.ofContentType = function (contentTypeId, orderField, mappingFunction, reverseOrder, take, skip) {
        if (reverseOrder === void 0) { reverseOrder = false; }
        if (take === void 0) { take = 100; }
        if (skip === void 0) { skip = 0; }
        if (contentTypeId.length === 0) {
            throw new _errors_argument_error__WEBPACK_IMPORTED_MODULE_1__["ArgumentError"](this.errorTypes.Inconsistency, "contentTypeId");
        }
        var returnList = [];
        var paramObj = {
            content_type: contentTypeId,
            limit: take,
            skip: skip
        };
        if (orderField) {
            paramObj.order = reverseOrder ? orderField : '-' + orderField;
        }
        return this.client.getEntries(paramObj).then(function (response) { return response.items.map(mappingFunction); }).catch(function () {
            throw new Error('Problem with rertieving data');
        });
    };
    ContentfulService.prototype.entry = function (entryId, mappingFunction) {
        if (entryId.length === 0) {
            throw new _errors_argument_error__WEBPACK_IMPORTED_MODULE_1__["ArgumentError"](this.errorTypes.Inconsistency, "entryId");
        }
        return this.client.getEntry(entryId)
            .then(function (response) { return mappingFunction(response); })
            .catch(function () {
            throw new Error('Problem with rertieving entry');
        });
    };
    ContentfulService.prototype.asset = function (assetId) {
        return this.client.getAsset(assetId)
            .then(function (response) { return response.fields.file.url; })
            .catch(function () {
            throw new Error('Problem with rertieving entry');
        });
    };
    ContentfulService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_infrastructure_contentful_values__WEBPACK_IMPORTED_MODULE_3__["ContentfulValues"],
            _errors_error_reason__WEBPACK_IMPORTED_MODULE_2__["ErrorReason"]])
    ], ContentfulService);
    return ContentfulService;
}());



/***/ }),

/***/ "./src/components/common/footer/footer.component.css":
/*!***********************************************************!*\
  !*** ./src/components/common/footer/footer.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/components/common/footer/footer.component.html":
/*!************************************************************!*\
  !*** ./src/components/common/footer/footer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n  <p>\r\n    It is a footer\r\n  </p>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/components/common/footer/footer.component.ts":
/*!**********************************************************!*\
  !*** ./src/components/common/footer/footer.component.ts ***!
  \**********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'common-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/components/common/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/components/common/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/components/common/header/header.component.css":
/*!***********************************************************!*\
  !*** ./src/components/common/header/header.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/components/common/header/header.component.html":
/*!************************************************************!*\
  !*** ./src/components/common/header/header.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"text-align:center\">\r\n  <p>\r\n    It is a header\r\n  </p>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/components/common/header/header.component.ts":
/*!**********************************************************!*\
  !*** ./src/components/common/header/header.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.title = 'app';
    }
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'common-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/components/common/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/components/common/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/components/common/shared.module.ts":
/*!************************************************!*\
  !*** ./src/components/common/shared.module.ts ***!
  \************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ "./src/components/common/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/components/common/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: []
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]
            ],
            providers: [],
            exports: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\amarakhovskyi\Documents\GitHub\vipra-project-repository\vipra-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map