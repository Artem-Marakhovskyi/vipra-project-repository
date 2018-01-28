webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/about-company/about-company.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/about-company/about-company.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\r\n<p>{{content}}</p>"

/***/ }),

/***/ "../../../../../src/about-company/about-company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutCompanyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_contentful_service__ = __webpack_require__("../../../../../src/common/services/contentful-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_entities_about_company__ = __webpack_require__("../../../../../src/common/entities/about-company.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_mappingLayer_mapper__ = __webpack_require__("../../../../../src/common/mappingLayer/mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_logger_core__ = __webpack_require__("../../../../angular2-logger/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_logger_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_logger_core__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AboutCompanyComponent = (function () {
    function AboutCompanyComponent(_contentfulService, _logger) {
        this._contentfulService = _contentfulService;
        this._logger = _logger;
    }
    AboutCompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        var entries = this._contentfulService.ofContentType(__WEBPACK_IMPORTED_MODULE_2__common_entities_about_company__["a" /* AboutCompany */].CONTENT_TYPE_ID, __WEBPACK_IMPORTED_MODULE_2__common_entities_about_company__["a" /* AboutCompany */].ORDER_FIELD, __WEBPACK_IMPORTED_MODULE_3__common_mappingLayer_mapper__["a" /* mapAboutCompany */]).then(function (data) {
            _this._logger.debug('received [About Company] objects from CMS');
            _this._logger.debug(data);
            _this.title = data[0].title;
            _this.content = data[0].about;
        });
    };
    return AboutCompanyComponent;
}());
AboutCompanyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'about-company',
        template: __webpack_require__("../../../../../src/about-company/about-company.component.html"),
        styles: [__webpack_require__("../../../../../src/about-company/about-company.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_services_contentful_service__["a" /* ContentfulService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_services_contentful_service__["a" /* ContentfulService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_logger_core__["Logger"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_logger_core__["Logger"]) === "function" && _b || Object])
], AboutCompanyComponent);

var _a, _b;
//# sourceMappingURL=about-company.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n  <about-company></about-company>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_contentful_service__ = __webpack_require__("../../../../../src/common/services/contentful-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_errors_error_reason__ = __webpack_require__("../../../../../src/common/errors/error-reason.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_infrastructure_contentful_values__ = __webpack_require__("../../../../../src/common/infrastructure/contentful-values.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_logger_core__ = __webpack_require__("../../../../angular2-logger/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_logger_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_logger_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_company_about_company_component__ = __webpack_require__("../../../../../src/about-company/about-company.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__about_company_about_company_component__["a" /* AboutCompanyComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__common_infrastructure_contentful_values__["a" /* ContentfulValues */],
            __WEBPACK_IMPORTED_MODULE_4__common_errors_error_reason__["a" /* ErrorReason */],
            __WEBPACK_IMPORTED_MODULE_3__common_services_contentful_service__["a" /* ContentfulService */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_logger_core__["Logger"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/common/entities/about-company.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutCompany; });
var AboutCompany = (function () {
    function AboutCompany(title, about) {
        this.title = title;
        this.about = about;
    }
    return AboutCompany;
}());

AboutCompany.CONTENT_TYPE_ID = 'about_company';
AboutCompany.ORDER_FIELD = '';
//# sourceMappingURL=about-company.js.map

/***/ }),

/***/ "../../../../../src/common/errors/argument-error.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArgumentError; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ArgumentError = (function (_super) {
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

//# sourceMappingURL=argument-error.js.map

/***/ }),

/***/ "../../../../../src/common/errors/error-reason.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorReason; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ErrorReason = (function () {
    function ErrorReason() {
        this.OutOfRange = 'Out of range';
        this.Null = 'Null';
        this.TooSmall = 'Argument is to small';
        this.Inconsistency = 'Inconsistency';
    }
    return ErrorReason;
}());
ErrorReason = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], ErrorReason);

//# sourceMappingURL=error-reason.js.map

/***/ }),

/***/ "../../../../../src/common/infrastructure/contentful-values.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentfulValues; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

[__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */]];
var ContentfulValues = (function () {
    function ContentfulValues() {
        this.API_KEY_NAME = "VipraContentfulAPIKey";
        this.SPACE_ID = "odwss3fdjzqe";
        this.ACCESS_TOKEN = "b9ac8d8f6d9bba6ab9f97aefaefa35d3fa578be4c0d0f321bf0e660361befb68";
    }
    return ContentfulValues;
}());

//# sourceMappingURL=contentful-values.js.map

/***/ }),

/***/ "../../../../../src/common/mappingLayer/mapper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mapAboutCompany;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entities_about_company__ = __webpack_require__("../../../../../src/common/entities/about-company.ts");

function mapAboutCompany(item) {
    return new __WEBPACK_IMPORTED_MODULE_0__entities_about_company__["a" /* AboutCompany */](item.fields.title, item.fields.about);
}
//# sourceMappingURL=mapper.js.map

/***/ }),

/***/ "../../../../../src/common/services/contentful-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentfulService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__errors_argument_error__ = __webpack_require__("../../../../../src/common/errors/argument-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__errors_error_reason__ = __webpack_require__("../../../../../src/common/errors/error-reason.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__infrastructure_contentful_values__ = __webpack_require__("../../../../../src/common/infrastructure/contentful-values.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var contentful = __webpack_require__("../../../../contentful/dist/contentful.js");
var ContentfulService = (function () {
    function ContentfulService(contentfulValues, errorTypes) {
        this.contentfulValues = contentfulValues;
        this.errorTypes = errorTypes;
        this.client = contentful.createClient({
            space: contentfulValues.SPACE_ID,
            accessToken: contentfulValues.ACCESS_TOKEN
        });
    }
    ContentfulService.prototype.ofContentType = function (contentTypeId, orderField, mappingFunction, reverseOrder, take, skip) {
        if (reverseOrder === void 0) { reverseOrder = false; }
        if (take === void 0) { take = 100; }
        if (skip === void 0) { skip = 0; }
        if (contentTypeId.length === 0) {
            throw new __WEBPACK_IMPORTED_MODULE_1__errors_argument_error__["a" /* ArgumentError */](this.errorTypes.Inconsistency, "contentTypeId");
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
            throw new __WEBPACK_IMPORTED_MODULE_1__errors_argument_error__["a" /* ArgumentError */](this.errorTypes.Inconsistency, "entryId");
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
    return ContentfulService;
}());
ContentfulService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__infrastructure_contentful_values__["a" /* ContentfulValues */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__infrastructure_contentful_values__["a" /* ContentfulValues */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__errors_error_reason__["a" /* ErrorReason */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__errors_error_reason__["a" /* ErrorReason */]) === "function" && _b || Object])
], ContentfulService);

var _a, _b;
//# sourceMappingURL=contentful-service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map