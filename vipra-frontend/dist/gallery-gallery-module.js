(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gallery-gallery-module"],{

/***/ "./src/gallery/gallery-content/gallery-content.component.html":
/*!********************************************************************!*\
  !*** ./src/gallery/gallery-content/gallery-content.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pure-g\">\r\n    <div class=\"pure-u-4-24\"></div>\r\n    <div class=\"pure-u-18-24 pure-g\">\r\n        <div *ngFor=\"let elem of content\"  class=\"pure-u-6-24 cell\" (click)=\"cellClick(elem)\">\r\n                <div><img [src]=\"elem.imageUrl\" width=\"200px\" /></div>\r\n                <p>{{elem.shortenedContent}}</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"pure-u-4-24\"></div>\r\n</div>"

/***/ }),

/***/ "./src/gallery/gallery-content/gallery-content.component.scss":
/*!********************************************************************!*\
  !*** ./src/gallery/gallery-content/gallery-content.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cell {\n  padding: 20px;\n  text-align: justify;\n  background: #002969; }\n\n.cell:hover {\n  background: #001959; }\n\n.cell div {\n  text-align: center; }\n\nimg {\n  width: 100%;\n  max-height: 600px; }\n"

/***/ }),

/***/ "./src/gallery/gallery-content/gallery-content.component.ts":
/*!******************************************************************!*\
  !*** ./src/gallery/gallery-content/gallery-content.component.ts ***!
  \******************************************************************/
/*! exports provided: GalleryContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryContentComponent", function() { return GalleryContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gallery_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/gallery-content.service */ "./src/gallery/services/gallery-content.service.ts");
/* harmony import */ var _common_services_contentful_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/contentful-service */ "./src/common/services/contentful-service.ts");
/* harmony import */ var _common_infrastructure_calling_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/infrastructure/calling-bus-service */ "./src/common/infrastructure/calling-bus-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GalleryContentComponent = /** @class */ (function () {
    function GalleryContentComponent(galleryContentService, contentfulService, callingBusService) {
        this.galleryContentService = galleryContentService;
        this.contentfulService = contentfulService;
        this.callingBusService = callingBusService;
    }
    GalleryContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.galleryContentService.getGalleryContent()
            .subscribe(function (arr) {
            _this.content = arr;
            arr.forEach(function (element) {
                var el = element;
                _this.contentfulService.obtainAssetUrl(element.assetId)
                    .subscribe(function (res) { return el.imageUrl = res; });
            });
        });
    };
    GalleryContentComponent.prototype.cellClick = function (elem) {
        this.callingBusService.callPhotoForm(elem);
    };
    GalleryContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gallery-content',
            template: __webpack_require__(/*! ./gallery-content.component.html */ "./src/gallery/gallery-content/gallery-content.component.html"),
            styles: [__webpack_require__(/*! ./gallery-content.component.scss */ "./src/gallery/gallery-content/gallery-content.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_gallery_content_service__WEBPACK_IMPORTED_MODULE_1__["GalleryContentService"],
            _common_services_contentful_service__WEBPACK_IMPORTED_MODULE_2__["ContentfulService"],
            _common_infrastructure_calling_bus_service__WEBPACK_IMPORTED_MODULE_3__["CallingBusService"]])
    ], GalleryContentComponent);
    return GalleryContentComponent;
}());



/***/ }),

/***/ "./src/gallery/gallery-header/gallery-header.component.html":
/*!******************************************************************!*\
  !*** ./src/gallery/gallery-header/gallery-header.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"centerize\">{{header}}</h1>"

/***/ }),

/***/ "./src/gallery/gallery-header/gallery-header.component.scss":
/*!******************************************************************!*\
  !*** ./src/gallery/gallery-header/gallery-header.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centerize {\n  padding-left: 200px;\n  padding-right: 200px; }\n"

/***/ }),

/***/ "./src/gallery/gallery-header/gallery-header.component.ts":
/*!****************************************************************!*\
  !*** ./src/gallery/gallery-header/gallery-header.component.ts ***!
  \****************************************************************/
/*! exports provided: GalleryHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryHeaderComponent", function() { return GalleryHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_contentful_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/services/contentful-service */ "./src/common/services/contentful-service.ts");
/* harmony import */ var _common_entities_gallery_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/entities/gallery-header */ "./src/common/entities/gallery-header.ts");
/* harmony import */ var _common_mappingLayer_mapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/mappingLayer/mapper */ "./src/common/mappingLayer/mapper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GalleryHeaderComponent = /** @class */ (function () {
    function GalleryHeaderComponent(contentService) {
        this.contentService = contentService;
    }
    GalleryHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contentService.ofContentType(_common_entities_gallery_header__WEBPACK_IMPORTED_MODULE_2__["GalleryHeader"].CONTENT_TYPE_ID, 'content', _common_mappingLayer_mapper__WEBPACK_IMPORTED_MODULE_3__["mapGalleryHeader"]).subscribe(function (r) { return _this.header = r[0].content; });
    };
    GalleryHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gallery-header',
            template: __webpack_require__(/*! ./gallery-header.component.html */ "./src/gallery/gallery-header/gallery-header.component.html"),
            styles: [__webpack_require__(/*! ./gallery-header.component.scss */ "./src/gallery/gallery-header/gallery-header.component.scss")]
        }),
        __metadata("design:paramtypes", [_common_services_contentful_service__WEBPACK_IMPORTED_MODULE_1__["ContentfulService"]])
    ], GalleryHeaderComponent);
    return GalleryHeaderComponent;
}());



/***/ }),

/***/ "./src/gallery/gallery.component.html":
/*!********************************************!*\
  !*** ./src/gallery/gallery.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n    <gallery-header></gallery-header>\r\n    <gallery-content></gallery-content>\r\n    <div class=\"centered lower-btn\">\r\n            <custom-button txt=\"Связаться с нами\"  (click)=\"callUs()\"></custom-button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/gallery/gallery.component.scss":
/*!********************************************!*\
  !*** ./src/gallery/gallery.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  background: #052d6e;\n  padding-top: 100px;\n  position: relative; }\n\n.centered {\n  text-align: center; }\n\n.lower-btn {\n  padding-top: 40px;\n  padding-bottom: 40px; }\n"

/***/ }),

/***/ "./src/gallery/gallery.component.ts":
/*!******************************************!*\
  !*** ./src/gallery/gallery.component.ts ***!
  \******************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/gallery/gallery.component.scss")]
        })
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/gallery/gallery.module.ts":
/*!***************************************!*\
  !*** ./src/gallery/gallery.module.ts ***!
  \***************************************/
/*! exports provided: GalleryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryModule", function() { return GalleryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gallery_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery.routing */ "./src/gallery/gallery.routing.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _common_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/shared.module */ "./src/common/shared.module.ts");
/* harmony import */ var _gallery_header_gallery_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery-header/gallery-header.component */ "./src/gallery/gallery-header/gallery-header.component.ts");
/* harmony import */ var _photo_cell_photo_cell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./photo-cell/photo-cell.component */ "./src/gallery/photo-cell/photo-cell.component.ts");
/* harmony import */ var _gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery.component */ "./src/gallery/gallery.component.ts");
/* harmony import */ var _gallery_content_gallery_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gallery-content/gallery-content.component */ "./src/gallery/gallery-content/gallery-content.component.ts");
/* harmony import */ var _services_gallery_content_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/gallery-content.service */ "./src/gallery/services/gallery-content.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var GalleryModule = /** @class */ (function () {
    function GalleryModule() {
    }
    GalleryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _common_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _gallery_routing__WEBPACK_IMPORTED_MODULE_1__["routing"]
            ],
            declarations: [
                _gallery_header_gallery_header_component__WEBPACK_IMPORTED_MODULE_4__["GalleryHeaderComponent"],
                _photo_cell_photo_cell_component__WEBPACK_IMPORTED_MODULE_5__["PhotoCellComponent"],
                _gallery_component__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"],
                _gallery_content_gallery_content_component__WEBPACK_IMPORTED_MODULE_7__["GalleryContentComponent"]
            ],
            providers: [
                _services_gallery_content_service__WEBPACK_IMPORTED_MODULE_8__["GalleryContentService"]
            ],
            exports: [
                _gallery_header_gallery_header_component__WEBPACK_IMPORTED_MODULE_4__["GalleryHeaderComponent"],
                _photo_cell_photo_cell_component__WEBPACK_IMPORTED_MODULE_5__["PhotoCellComponent"],
                _gallery_component__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"],
                _gallery_content_gallery_content_component__WEBPACK_IMPORTED_MODULE_7__["GalleryContentComponent"]
            ]
        })
    ], GalleryModule);
    return GalleryModule;
}());



/***/ }),

/***/ "./src/gallery/gallery.routing.ts":
/*!****************************************!*\
  !*** ./src/gallery/gallery.routing.ts ***!
  \****************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery.component */ "./src/gallery/gallery.component.ts");


var routes = [
    { path: '', component: _gallery_component__WEBPACK_IMPORTED_MODULE_1__["GalleryComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/gallery/photo-cell/photo-cell.component.html":
/*!**********************************************************!*\
  !*** ./src/gallery/photo-cell/photo-cell.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>gallery</h1>"

/***/ }),

/***/ "./src/gallery/photo-cell/photo-cell.component.scss":
/*!**********************************************************!*\
  !*** ./src/gallery/photo-cell/photo-cell.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/gallery/photo-cell/photo-cell.component.ts":
/*!********************************************************!*\
  !*** ./src/gallery/photo-cell/photo-cell.component.ts ***!
  \********************************************************/
/*! exports provided: PhotoCellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoCellComponent", function() { return PhotoCellComponent; });
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

var PhotoCellComponent = /** @class */ (function () {
    function PhotoCellComponent() {
    }
    PhotoCellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'photo-cell',
            template: __webpack_require__(/*! ./photo-cell.component.html */ "./src/gallery/photo-cell/photo-cell.component.html"),
            styles: [__webpack_require__(/*! ./photo-cell.component.scss */ "./src/gallery/photo-cell/photo-cell.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PhotoCellComponent);
    return PhotoCellComponent;
}());



/***/ }),

/***/ "./src/gallery/services/gallery-content.service.ts":
/*!*********************************************************!*\
  !*** ./src/gallery/services/gallery-content.service.ts ***!
  \*********************************************************/
/*! exports provided: GalleryContentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryContentService", function() { return GalleryContentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_entities_gallery_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/entities/gallery-image */ "./src/common/entities/gallery-image.ts");
/* harmony import */ var _common_services_contentful_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/contentful-service */ "./src/common/services/contentful-service.ts");
/* harmony import */ var _common_mappingLayer_mapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/mappingLayer/mapper */ "./src/common/mappingLayer/mapper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GalleryContentService = /** @class */ (function () {
    function GalleryContentService(contentfulService) {
        this.contentfulService = contentfulService;
    }
    GalleryContentService.prototype.getGalleryContent = function () {
        return this.contentfulService
            .ofContentType(_common_entities_gallery_image__WEBPACK_IMPORTED_MODULE_1__["GalleryImage"].CONTENT_TYPE_ID, null, _common_mappingLayer_mapper__WEBPACK_IMPORTED_MODULE_3__["mapGalleryImage"]);
    };
    GalleryContentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_common_services_contentful_service__WEBPACK_IMPORTED_MODULE_2__["ContentfulService"]])
    ], GalleryContentService);
    return GalleryContentService;
}());



/***/ })

}]);
//# sourceMappingURL=gallery-gallery-module.js.map