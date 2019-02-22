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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pt-3 pb-3\">\n\n  <div class=\"row\">\n\n    <div class=\"col-md-6\">\n      <app-product-filter></app-product-filter>\n      <app-product-table></app-product-table>\n    </div>\n\n    <div class=\"col-md-6\">\n      <app-product-details></app-product-details>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");
/* harmony import */ var _product_table_product_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-table/product-table.component */ "./src/app/product-table/product-table.component.ts");
/* harmony import */ var _product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-filter/product-filter.component */ "./src/app/product-filter/product-filter.component.ts");
/* harmony import */ var _shared___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/ */ "./src/app/shared/index.ts");
/* harmony import */ var _product_filter_services_products_filter_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-filter/services/products-filter.service */ "./src/app/product-filter/services/products-filter.service.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/product-details/product-details.component.ts");
/* harmony import */ var _product_details_services_product_details_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product-details/services/product-details.service */ "./src/app/product-details/services/product-details.service.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _product_table_product_table_component__WEBPACK_IMPORTED_MODULE_8__["ProductTableComponent"],
                _product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_9__["ProductFilterComponent"],
                _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_12__["ProductDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _core__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                _shared___WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
            ],
            providers: [_product_filter_services_products_filter_service__WEBPACK_IMPORTED_MODULE_11__["ProductsFilterService"], _product_details_services_product_details_service__WEBPACK_IMPORTED_MODULE_13__["ProductDetailsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/products.service */ "./src/app/core/services/products.service.ts");
/* harmony import */ var _services_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/spinner.service */ "./src/app/core/services/spinner.service.ts");






var CORE_MODULES = [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]];
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule has already been loaded. Import Core modules in the AppModule only.');
        }
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [CORE_MODULES],
            exports: [CORE_MODULES],
            providers: [_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"], _services_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.module */ "./src/app/core/core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"]; });




/***/ }),

/***/ "./src/app/core/services/products.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/products.service.ts ***!
  \***************************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_models_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/models/constants */ "./src/app/shared/models/constants.ts");
/* harmony import */ var _shared_models_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/models/error */ "./src/app/shared/models/error.ts");






function timestampToDate(timestamp) {
    var date = new Date(timestamp * _shared_models_constants__WEBPACK_IMPORTED_MODULE_4__["TIMESTAMP_DELIMITER"]);
    date.setHours(0, 0, 0);
    return date;
}
var PRODUCTS = [
    {
        id: 1,
        title: 'Bosch',
        description: 'BOSCH KGN39VI35',
        price: 15587,
        delivery_date: timestampToDate(1550580024)
    },
    {
        id: 2,
        title: 'Samsung',
        description: 'SAMSUNG RB29FSRNDSA/UA',
        price: 7000.0,
        delivery_date: timestampToDate(1550925624)
    },
    {
        id: 3,
        title: 'Snai',
        description: 'SNAIGE RF-390-1803AA',
        price: 7999.99,
        delivery_date: timestampToDate(1551271224)
    },
    {
        id: 4,
        title: 'Bosch',
        description: 'BOSCH I393',
        price: 7000.0,
        delivery_date: timestampToDate(1550580629)
    },
    {
        id: 5,
        title: 'Samsung',
        description: 'SAMSUNG DSA/DE',
        price: 7999.99,
        delivery_date: timestampToDate(1550580629)
    }
];
var MAX_PRICE = 16000;
function validatePrice(product, onSuccess) {
    if (product.price > MAX_PRICE) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(_shared_models_constants__WEBPACK_IMPORTED_MODULE_4__["MS_API_DELAY"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new _shared_models_error__WEBPACK_IMPORTED_MODULE_5__["ErrorResponse"]('price', "Max price is " + MAX_PRICE));
        }));
    }
    else {
        return onSuccess;
    }
}
var ProductsService = /** @class */ (function () {
    function ProductsService() {
        this.products$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](PRODUCTS);
    }
    ProductsService.prototype.get = function () {
        return this.products$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(_shared_models_constants__WEBPACK_IMPORTED_MODULE_4__["MS_API_DELAY"]));
    };
    ProductsService.prototype.update = function (product) {
        var _this = this;
        var onSuccess = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(_shared_models_constants__WEBPACK_IMPORTED_MODULE_4__["MS_API_DELAY"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            var productIdx = _this.products$.value.findIndex(function (p) { return p.id === product.id; });
            var newProducts = _this.products$.value.slice();
            newProducts[productIdx] = product;
            _this.products$.next(newProducts);
        }));
        return validatePrice(product, onSuccess);
    };
    ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/core/services/spinner.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/spinner.service.ts ***!
  \**************************************************/
/*! exports provided: SpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerService", function() { return SpinnerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var Spinner = /** @class */ (function () {
    function Spinner() {
        this.isSpinning$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    Object.defineProperty(Spinner.prototype, "isSpinning", {
        get: function () {
            return this.isSpinning$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Spinner.prototype.run = function () {
        this.isSpinning$.next(true);
    };
    Spinner.prototype.stop = function () {
        this.isSpinning$.next(false);
    };
    return Spinner;
}());
var SpinnerService = /** @class */ (function () {
    function SpinnerService() {
        this.appliedSpinners$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    SpinnerService.prototype.addSpinner = function (name) {
        var _a;
        if (!this.appliedSpinners$.value.hasOwnProperty(name)) {
            this.appliedSpinners$.next(Object.assign({}, this.appliedSpinners$.value, (_a = {},
                _a[name] = new Spinner(),
                _a)));
        }
    };
    SpinnerService.prototype.getSpinnerState = function (name) {
        return this.appliedSpinners$.value.hasOwnProperty(name)
            ? this.appliedSpinners$.value[name].isSpinning
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
    };
    SpinnerService.prototype.updateSpinnerState = function (name, isSpinning) {
        if (this.appliedSpinners$.value.hasOwnProperty(name)) {
            if (isSpinning) {
                this.appliedSpinners$.value[name].run();
            }
            else {
                this.appliedSpinners$.value[name].stop();
            }
        }
    };
    SpinnerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SpinnerService);
    return SpinnerService;
}());



/***/ }),

/***/ "./src/app/product-details/product-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/product-details/product-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-spinner [isSpinning]=\"spinnerState\"></app-spinner>\n\n<form *ngIf=\"(hasProductDetails$ | async); else noRecordsTmpl\"\n      [formGroup]=\"form\">\n\n  <h3 class=\"text-uppercase text-center\">\n    Product Details\n  </h3>\n\n  <div class=\"row\">\n    <mat-form-field class=\"col-12\">\n      <input\n        matInput\n        type=\"text\"\n        formControlName=\"title\"\n        placeholder=\"Title\">\n    </mat-form-field>\n\n    <mat-form-field class=\"col-12\">\n      <input\n        matInput\n        type=\"text\"\n        formControlName=\"description\"\n        placeholder=\"Description\">\n    </mat-form-field>\n\n    <mat-form-field class=\"col-md-6\">\n      <input\n        matInput\n        type=\"number\"\n        formControlName=\"price\"\n        placeholder=\"Price\">\n\n      <mat-error *ngIf=\"form.get('price').hasError('max_price')\">\n        {{ form.get('price').getError('max_price') }}\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"col-md-6\">\n      <input matInput\n             [matDatepicker]=\"picker\"\n             formControlName=\"delivery_date\"\n             placeholder=\"Delivery date\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n\n  </div>\n\n</form>\n\n<ng-template #noRecordsTmpl>\n  <div class=\"no-records text-uppercase w-100 d-flex align-items-center justify-content-center\">\n    No selected records\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/product-details/product-details.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/product-details/product-details.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  min-height: 270px; }\n\n.no-records {\n  color: rgba(0, 0, 0, 0.54); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1kZXRhaWxzL0U6XFx3b3JrXFxlcHMtdGVzdC9zcmNcXGFwcFxccHJvZHVjdC1kZXRhaWxzXFxwcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlscy9FOlxcd29ya1xcZXBzLXRlc3Qvc3JjXFxhc3NldHNcXHN0eWxlc1xcY29uc3RhbnRzXFxfY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSwwQkNMZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vYXNzZXRzL3N0eWxlcy9jb25zdGFudHMvY29sb3JzXCI7XG5cbjpob3N0IHtcbiAgbWluLWhlaWdodDogMjcwcHg7XG59XG5cbi5uby1yZWNvcmRzIHtcbiAgY29sb3I6IHJnYmEoJGJsYWNrLWNvbG9yLCAkb3BhY2l0eS1tZCk7XG59XG4iLCIvLyBDb21tb24gY29sb3JzXG4kd2hpdGUtY29sb3I6ICNmZmY7XG4kYmxhY2stY29sb3I6ICMwMDA7XG5cbiRpbmRpZ28tMzAwLWNvbG9yOiAjNzk4NmNiO1xuXG4vLyBPcGFjaXR5XG4kb3BhY2l0eS1sZzogMC44NztcbiRvcGFjaXR5LW1kOiAwLjU0O1xuJG9wYWNpdHktc206IDAuMjQ7XG4iXX0= */"

/***/ }),

/***/ "./src/app/product-details/product-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/product-details/product-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/product-details.service */ "./src/app/product-details/services/product-details.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/services/spinner.service */ "./src/app/core/services/spinner.service.ts");






var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(productDetailsService, fb, spinnerService) {
        this.productDetailsService = productDetailsService;
        this.fb = fb;
        this.spinnerService = spinnerService;
        this.classList = 'mat-card d-flex w-100 flex-column justify-content-center position-relative';
        this.hasProductDetails$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.spinnerName = 'product_details';
        this.subscriptions = new Set();
        this.spinnerService.addSpinner(this.spinnerName);
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        this.initSpinnerState();
        this.initSubscriptions();
    };
    ProductDetailsComponent.prototype.ngOnDestroy = function () {
        this.clearSubscriptions();
    };
    ProductDetailsComponent.prototype.initSpinnerState = function () {
        this.spinnerState = this.spinnerService.getSpinnerState(this.spinnerName);
    };
    ProductDetailsComponent.prototype.initSubscriptions = function () {
        this.subscribeToProductDetails();
    };
    ProductDetailsComponent.prototype.clearSubscriptions = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    ProductDetailsComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            title: [this.product.title, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: [this.product.description, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            price: [this.product.price, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            delivery_date: [
                this.product.delivery_date.toISOString(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]
        }, {
            updateOn: 'blur'
        });
    };
    ProductDetailsComponent.prototype.subscribeToProductDetails = function () {
        var _this = this;
        this.subscriptions.add(this.productDetailsService.get().subscribe(function (product) {
            _this.product = product;
            if (product) {
                _this.createForm();
                _this.subscribeToFormChanges();
            }
            _this.hasProductDetails$.next(!!product);
        }));
    };
    ProductDetailsComponent.prototype.subscribeToFormChanges = function () {
        var _this = this;
        this.form.valueChanges.subscribe(function (value) {
            _this.updateProductDetails(value);
        });
    };
    ProductDetailsComponent.prototype.updateProductDetails = function (formValue) {
        var _this = this;
        if (this.form.valid) {
            this.spinnerService.updateSpinnerState(this.spinnerName, true);
            this.spinnerService.updateSpinnerState('products', true);
            this.productDetailsService
                .update(Object.assign({}, this.product, formValue))
                .subscribe(function () {
                _this.spinnerService.updateSpinnerState(_this.spinnerName, false);
                _this.spinnerService.updateSpinnerState('products', false);
            }, function (error) {
                _this.form.get(error.field).setErrors({
                    max_price: error.message
                });
                _this.spinnerService.updateSpinnerState(_this.spinnerName, false);
                _this.spinnerService.updateSpinnerState('products', false);
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductDetailsComponent.prototype, "classList", void 0);
    ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-details',
            template: __webpack_require__(/*! ./product-details.component.html */ "./src/app/product-details/product-details.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./product-details.component.scss */ "./src/app/product-details/product-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_details_service__WEBPACK_IMPORTED_MODULE_2__["ProductDetailsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _core_services_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"]])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "./src/app/product-details/services/product-details.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/product-details/services/product-details.service.ts ***!
  \*********************************************************************/
/*! exports provided: ProductDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsService", function() { return ProductDetailsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/products.service */ "./src/app/core/services/products.service.ts");




var ProductDetailsService = /** @class */ (function () {
    function ProductDetailsService(productsService) {
        this.productsService = productsService;
        this.selectedProduct$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ProductDetailsService.prototype.get = function () {
        return this.selectedProduct$.asObservable();
    };
    ProductDetailsService.prototype.select = function (product) {
        this.selectedProduct$.next(product);
    };
    ProductDetailsService.prototype.update = function (product) {
        return this.productsService.update(product);
    };
    ProductDetailsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]])
    ], ProductDetailsService);
    return ProductDetailsService;
}());



/***/ }),

/***/ "./src/app/product-filter/product-filter.component.html":
/*!**************************************************************!*\
  !*** ./src/app/product-filter/product-filter.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mb-2\">\n\n  <div class=\"row\">\n\n    <div class=\"col-6 d-flex align-items-center\">\n      <span class=\"font-weight-bold\">Total:</span>\n      &nbsp;\n      {{ total$ | async }}\n    </div>\n\n    <div class=\"col-6\">\n\n      <mat-form-field class=\"w-100\">\n        <input\n          matInput\n          type=\"text\"\n          placeholder=\"Search\"\n          [formControl]=\"filterControls.search\">\n      </mat-form-field>\n\n    </div>\n\n  </div>\n\n  <app-collapsible label=\"Additional filter\">\n\n    <div class=\"row mt-2\">\n\n      <div class=\"col-auto\">\n        <mat-form-field>\n          <input matInput\n                 type=\"number\"\n                 placeholder=\"Max price\"\n                 [formControl]=\"filterControls.price\">\n        </mat-form-field>\n      </div>\n\n      <div class=\"col-auto\">\n        <mat-form-field>\n          <input matInput\n                 [matDatepicker]=\"picker\"\n                 [formControl]=\"filterControls.delivery_date\"\n                 placeholder=\"Delivery date\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n      </div>\n\n    </div>\n\n  </app-collapsible>\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/product-filter/product-filter.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/product-filter/product-filter.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZmlsdGVyL3Byb2R1Y3QtZmlsdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/product-filter/product-filter.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-filter/product-filter.component.ts ***!
  \************************************************************/
/*! exports provided: ProductFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFilterComponent", function() { return ProductFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_products_filter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/products-filter.service */ "./src/app/product-filter/services/products-filter.service.ts");
/* harmony import */ var _shared_models_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/models/filter */ "./src/app/shared/models/filter.ts");
/* harmony import */ var _shared_models_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/models/constants */ "./src/app/shared/models/constants.ts");








var MIN_CHARS_SEARCH = 3;
var ProductFilterComponent = /** @class */ (function () {
    function ProductFilterComponent(productsFilterService) {
        this.productsFilterService = productsFilterService;
        this.filterControls = {
            search: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            delivery_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        };
        this.total$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('0 items');
        this.subscriptions = new Set();
    }
    ProductFilterComponent.prototype.ngOnInit = function () {
        this.initSubscriptions();
    };
    ProductFilterComponent.prototype.ngOnDestroy = function () {
        this.clearSubscriptions();
    };
    ProductFilterComponent.prototype.initSubscriptions = function () {
        this.subscribeToFilteredProducts();
        this.subscribeToSearch();
        this.subscribeToPrice();
        this.subscribeToDeliveryDate();
    };
    ProductFilterComponent.prototype.clearSubscriptions = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    ProductFilterComponent.prototype.subscribeToFilteredProducts = function () {
        var _this = this;
        this.subscriptions.add(this.productsFilterService.getFilteredProducts().subscribe(function (products) {
            var declension = products.length === 1 ? 'item' : 'items';
            _this.total$.next(products.length + " " + declension);
        }));
    };
    ProductFilterComponent.prototype.subscribeToSearch = function () {
        var _this = this;
        this.subscriptions.add(this.filterControls.search.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(_shared_models_constants__WEBPACK_IMPORTED_MODULE_7__["MS_FORM_FIELDS_DELAY"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (searchValue) {
            _this.handleSearchFieldValue(searchValue);
        }))
            .subscribe());
    };
    ProductFilterComponent.prototype.subscribeToPrice = function () {
        var _this = this;
        this.subscriptions.add(this.filterControls.price.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(_shared_models_constants__WEBPACK_IMPORTED_MODULE_7__["MS_FORM_FIELDS_DELAY"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (price) {
            _this.handleAddFieldValue(price, "price" /* PRICE */, { price: price });
        }))
            .subscribe());
    };
    ProductFilterComponent.prototype.subscribeToDeliveryDate = function () {
        var _this = this;
        this.subscriptions.add(this.filterControls.delivery_date.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(_shared_models_constants__WEBPACK_IMPORTED_MODULE_7__["MS_FORM_FIELDS_DELAY"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (delivery_date) {
            _this.handleAddFieldValue(delivery_date, "delivery_date" /* DELIVERY_DATE */, {
                delivery_date: delivery_date
            });
        }))
            .subscribe());
    };
    ProductFilterComponent.prototype.handleSearchFieldValue = function (value) {
        if (value.length >= MIN_CHARS_SEARCH) {
            this.productsFilterService.addFilter("search" /* SEARCH */, new _shared_models_filter__WEBPACK_IMPORTED_MODULE_6__["CrossFilter"](['title', 'description'], value.toLowerCase().trim(), false));
        }
        else if (value.length === 0) {
            this.productsFilterService.removeFilter("search" /* SEARCH */);
        }
    };
    ProductFilterComponent.prototype.handleAddFieldValue = function (value, name, filter) {
        var strValue = String(value === null ? '' : value);
        if (strValue.length > 0) {
            this.productsFilterService.addFilter(name, new _shared_models_filter__WEBPACK_IMPORTED_MODULE_6__["AdditionalFilter"](filter));
        }
        else {
            this.productsFilterService.removeFilter(name);
        }
    };
    ProductFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-filter',
            template: __webpack_require__(/*! ./product-filter.component.html */ "./src/app/product-filter/product-filter.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./product-filter.component.scss */ "./src/app/product-filter/product-filter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_products_filter_service__WEBPACK_IMPORTED_MODULE_5__["ProductsFilterService"]])
    ], ProductFilterComponent);
    return ProductFilterComponent;
}());



/***/ }),

/***/ "./src/app/product-filter/services/products-filter.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/product-filter/services/products-filter.service.ts ***!
  \********************************************************************/
/*! exports provided: ProductsFilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsFilterService", function() { return ProductsFilterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/products.service */ "./src/app/core/services/products.service.ts");
/* harmony import */ var _core_services_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/spinner.service */ "./src/app/core/services/spinner.service.ts");






var ProductsFilterService = /** @class */ (function () {
    function ProductsFilterService(productsService, spinnerService) {
        this.productsService = productsService;
        this.spinnerService = spinnerService;
        this.spinnerName = 'products';
        this.products = [];
        this.filteredProducts$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.appliedFilters$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.spinnerService.addSpinner(this.spinnerName);
        this.subscribeToProducts();
        this.subscribeToAppliedFilters();
    }
    ProductsFilterService.prototype.getFilteredProducts = function () {
        return this.filteredProducts$.asObservable();
    };
    ProductsFilterService.prototype.addFilter = function (name, filter) {
        var _a;
        this.appliedFilters$.next(Object.assign({}, this.appliedFilters$.value, (_a = {},
            _a[name] = filter,
            _a)));
    };
    ProductsFilterService.prototype.removeFilter = function (field) {
        var _a = this.appliedFilters$.value, _b = field, filter = _a[_b], rest = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, [typeof _b === "symbol" ? _b : _b + ""]);
        this.appliedFilters$.next(rest);
    };
    ProductsFilterService.prototype.subscribeToProducts = function () {
        var _this = this;
        this.spinnerService.updateSpinnerState(this.spinnerName, true);
        this.productsService
            .get()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (ps) {
            _this.products = ps;
            _this.appliedFilters$.next(_this.appliedFilters$.value);
            _this.spinnerService.updateSpinnerState(_this.spinnerName, false);
        }))
            .subscribe();
    };
    ProductsFilterService.prototype.subscribeToAppliedFilters = function () {
        var _this = this;
        this.appliedFilters$.subscribe(function (filters) {
            var filterKeys = Object.keys(filters);
            if (filterKeys.length > 0) {
                var products_1 = _this.products;
                filterKeys.forEach(function (fk) {
                    products_1 = products_1.filter(filters[fk].comparatorFn.bind(filters[fk]));
                });
                _this.filteredProducts$.next(products_1);
            }
            else {
                _this.filteredProducts$.next(_this.products);
            }
        });
    };
    ProductsFilterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"],
            _core_services_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"]])
    ], ProductsFilterService);
    return ProductsFilterService;
}());



/***/ }),

/***/ "./src/app/product-table/product-table.component.html":
/*!************************************************************!*\
  !*** ./src/app/product-table/product-table.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8 position-relative\">\n\n  <app-spinner [isSpinning]=\"spinnerState\"></app-spinner>\n\n  <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 w-100\">\n\n    <!-- Id Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef>\n        #\n      </th>\n      <td mat-cell *matCellDef=\"let p\">\n        {{ p.id }}\n      </td>\n    </ng-container>\n\n    <!-- Title Column -->\n    <ng-container matColumnDef=\"title\">\n      <th mat-header-cell *matHeaderCellDef>\n        Title\n      </th>\n      <td mat-cell *matCellDef=\"let p\">\n        {{ p.title }}\n      </td>\n    </ng-container>\n\n    <!-- Description Column -->\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef>\n        Description\n      </th>\n      <td mat-cell *matCellDef=\"let p\">\n        {{ p.description }}\n      </td>\n    </ng-container>\n\n    <!-- Price Column -->\n    <ng-container matColumnDef=\"price\">\n      <th mat-header-cell *matHeaderCellDef>\n        Price\n      </th>\n      <td mat-cell *matCellDef=\"let p\">\n        {{ p.price | currency:'USD' }}\n      </td>\n    </ng-container>\n\n    <!-- Delivery date Column -->\n    <ng-container matColumnDef=\"delivery_date\">\n      <th mat-header-cell *matHeaderCellDef>\n        Delivery date\n      </th>\n      <td mat-cell *matCellDef=\"let p\">\n        {{ p.delivery_date | date:'M/d/yyyy' }}\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row\n        *matRowDef=\"let p; columns: displayedColumns;\"\n        (click)=\"selectProduct(p)\"\n        [ngClass]=\"{'selected': p.id === selectedProductId}\"\n        class=\"product-row\"></tr>\n\n  </table>\n\n  <div *ngIf=\"hasNoData | async\" class=\"no-records d-flex justify-content-center align-items-center\">\n    No records found\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/product-table/product-table.component.scss":
/*!************************************************************!*\
  !*** ./src/app/product-table/product-table.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-records {\n  background: #fff;\n  color: rgba(0, 0, 0, 0.54);\n  height: 100px; }\n\n.product-row {\n  cursor: pointer;\n  transition: background-color 0.3s ease; }\n\n.product-row:hover, .product-row.selected {\n    background-color: rgba(121, 134, 203, 0.24); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC10YWJsZS9FOlxcd29ya1xcZXBzLXRlc3Qvc3JjXFxhcHBcXHByb2R1Y3QtdGFibGVcXHByb2R1Y3QtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3QtdGFibGUvRTpcXHdvcmtcXGVwcy10ZXN0L3NyY1xcYXNzZXRzXFxzdHlsZXNcXGNvbnN0YW50c1xcX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZ0JDRmdCO0VER2hCLDBCQ0ZnQjtFREdoQixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxlQUFlO0VBQ2Ysc0NBQXNDLEVBQUE7O0FBRnhDO0lBTUksMkNDVnNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0LXRhYmxlL3Byb2R1Y3QtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vYXNzZXRzL3N0eWxlcy9jb25zdGFudHMvY29sb3JzXCI7XG5cbi5uby1yZWNvcmRzIHtcbiAgYmFja2dyb3VuZDogJHdoaXRlLWNvbG9yO1xuICBjb2xvcjogcmdiYSgkYmxhY2stY29sb3IsICRvcGFjaXR5LW1kKTtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLnByb2R1Y3Qtcm93IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcblxuICAmOmhvdmVyLFxuICAmLnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRpbmRpZ28tMzAwLWNvbG9yLCAkb3BhY2l0eS1zbSk7XG4gIH1cbn1cbiIsIi8vIENvbW1vbiBjb2xvcnNcbiR3aGl0ZS1jb2xvcjogI2ZmZjtcbiRibGFjay1jb2xvcjogIzAwMDtcblxuJGluZGlnby0zMDAtY29sb3I6ICM3OTg2Y2I7XG5cbi8vIE9wYWNpdHlcbiRvcGFjaXR5LWxnOiAwLjg3O1xuJG9wYWNpdHktbWQ6IDAuNTQ7XG4kb3BhY2l0eS1zbTogMC4yNDtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/product-table/product-table.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/product-table/product-table.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTableComponent", function() { return ProductTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _product_filter_services_products_filter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product-filter/services/products-filter.service */ "./src/app/product-filter/services/products-filter.service.ts");
/* harmony import */ var _product_details_services_product_details_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product-details/services/product-details.service */ "./src/app/product-details/services/product-details.service.ts");
/* harmony import */ var _core_services_spinner_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/services/spinner.service */ "./src/app/core/services/spinner.service.ts");








var ProductTableComponent = /** @class */ (function () {
    function ProductTableComponent(productsFilterService, productDetailsService, spinnerService, cd) {
        this.productsFilterService = productsFilterService;
        this.productDetailsService = productDetailsService;
        this.spinnerService = spinnerService;
        this.cd = cd;
        this.displayedColumns = [
            'id',
            'title',
            'description',
            'price',
            'delivery_date'
        ];
        this.hasNoData = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
    }
    ProductTableComponent.prototype.ngOnInit = function () {
        this.initSpinnerState();
        this.subscribeToProducts();
    };
    ProductTableComponent.prototype.ngOnDestroy = function () {
        this.productsSubscription.unsubscribe();
    };
    ProductTableComponent.prototype.selectProduct = function (product) {
        if (this.selectedProductId === product.id) {
            this.selectedProductId = null;
            this.productDetailsService.select(null);
        }
        else {
            this.selectedProductId = product.id;
            this.productDetailsService.select(product);
        }
    };
    ProductTableComponent.prototype.initSpinnerState = function () {
        this.spinnerState = this.spinnerService.getSpinnerState('products');
    };
    ProductTableComponent.prototype.subscribeToProducts = function () {
        var _this = this;
        this.productsSubscription = this.productsFilterService
            .getFilteredProducts()
            .subscribe(function (products) {
            _this.createDataSource(products);
            _this.cd.markForCheck();
        });
    };
    ProductTableComponent.prototype.createDataSource = function (products) {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](products);
        this.hasNoData = this.dataSource.connect().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (ps) { return ps.length === 0; }));
    };
    ProductTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-table',
            template: __webpack_require__(/*! ./product-table.component.html */ "./src/app/product-table/product-table.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./product-table.component.scss */ "./src/app/product-table/product-table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_product_filter_services_products_filter_service__WEBPACK_IMPORTED_MODULE_5__["ProductsFilterService"],
            _product_details_services_product_details_service__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsService"],
            _core_services_spinner_service__WEBPACK_IMPORTED_MODULE_7__["SpinnerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], ProductTableComponent);
    return ProductTableComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/collapsible/collapsible.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/collapsible/collapsible.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n\n  <input id=\"collapsible\" type=\"checkbox\" class=\"d-none toggle\">\n\n  <label for=\"collapsible\" class=\"lbl-toggle text-uppercase mb-0\">\n    {{ label }}\n  </label>\n\n  <div class=\"collapsible-content\">\n    <ng-content></ng-content>\n  </div>\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/shared/components/collapsible/collapsible.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/collapsible/collapsible.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lbl-toggle {\n  display: block;\n  color: rgba(0, 0, 0, 0.54);\n  cursor: pointer;\n  transition: color 0.2s ease; }\n\n.lbl-toggle:hover {\n  color: #7986cb; }\n\n.lbl-toggle::before {\n  content: \" \";\n  display: inline-block;\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n  border-left: 5px solid currentColor;\n  vertical-align: middle;\n  margin-right: 0.7rem;\n  -webkit-transform: translateY(-2px);\n          transform: translateY(-2px);\n  transition: -webkit-transform 0.4s ease;\n  transition: transform 0.4s ease;\n  transition: transform 0.4s ease, -webkit-transform 0.4s ease; }\n\n.toggle:checked + .lbl-toggle::before {\n  -webkit-transform: rotate(90deg) translateX(-3px);\n          transform: rotate(90deg) translateX(-3px); }\n\n.collapsible-content {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease; }\n\n.toggle:checked + .lbl-toggle + .collapsible-content {\n  max-height: 350px; }\n\n.toggle:checked + .lbl-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29sbGFwc2libGUvRTpcXHdvcmtcXGVwcy10ZXN0L3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGNvbGxhcHNpYmxlXFxjb2xsYXBzaWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29sbGFwc2libGUvRTpcXHdvcmtcXGVwcy10ZXN0L3NyY1xcYXNzZXRzXFxzdHlsZXNcXGNvbnN0YW50c1xcX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsY0FBYztFQUNkLDBCQ0xnQjtFRE1oQixlQUFlO0VBQ2YsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UsY0NUd0IsRUFBQTs7QURZMUI7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGlDQUFrRDtFQUNsRCxvQ0FBcUQ7RUFDckQsbUNBQW9EO0VBQ3BELHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQix1Q0FBK0I7RUFBL0IsK0JBQStCO0VBQS9CLDREQUErQixFQUFBOztBQUdqQztFQUNFLGlEQUF5QztVQUF6Qyx5Q0FBeUMsRUFBQTs7QUFHM0M7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdDQUFnQyxFQUFBOztBQUdsQztFQUNFLGlCQXBDNEIsRUFBQTs7QUF1QzlCO0VBQ0UsNkJBQTZCO0VBQzdCLDRCQUE0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29sbGFwc2libGUvY29sbGFwc2libGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9jb25zdGFudHMvY29sb3JzXCI7XG5cbiR0b2dnbGUtYm9yZGVyLXdpZHRoOiA1cHg7XG4kY29sbGFwc2libGUtbWF4LWhlaWdodDogMzUwcHg7XG5cbi5sYmwtdG9nZ2xlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiByZ2JhKCRibGFjay1jb2xvciwgJG9wYWNpdHktbWQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcbn1cblxuLmxibC10b2dnbGU6aG92ZXIge1xuICBjb2xvcjogJGluZGlnby0zMDAtY29sb3I7XG59XG5cbi5sYmwtdG9nZ2xlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItdG9wOiAkdG9nZ2xlLWJvcmRlci13aWR0aCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogJHRvZ2dsZS1ib3JkZXItd2lkdGggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiAkdG9nZ2xlLWJvcmRlci13aWR0aCBzb2xpZCBjdXJyZW50Q29sb3I7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1yaWdodDogMC43cmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2U7XG59XG5cbi50b2dnbGU6Y2hlY2tlZCArIC5sYmwtdG9nZ2xlOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlWCgtM3B4KTtcbn1cblxuLmNvbGxhcHNpYmxlLWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuM3MgZWFzZTtcbn1cblxuLnRvZ2dsZTpjaGVja2VkICsgLmxibC10b2dnbGUgKyAuY29sbGFwc2libGUtY29udGVudCB7XG4gIG1heC1oZWlnaHQ6ICRjb2xsYXBzaWJsZS1tYXgtaGVpZ2h0O1xufVxuXG4udG9nZ2xlOmNoZWNrZWQgKyAubGJsLXRvZ2dsZSB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuIiwiLy8gQ29tbW9uIGNvbG9yc1xuJHdoaXRlLWNvbG9yOiAjZmZmO1xuJGJsYWNrLWNvbG9yOiAjMDAwO1xuXG4kaW5kaWdvLTMwMC1jb2xvcjogIzc5ODZjYjtcblxuLy8gT3BhY2l0eVxuJG9wYWNpdHktbGc6IDAuODc7XG4kb3BhY2l0eS1tZDogMC41NDtcbiRvcGFjaXR5LXNtOiAwLjI0O1xuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/collapsible/collapsible.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/collapsible/collapsible.component.ts ***!
  \************************************************************************/
/*! exports provided: CollapsibleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapsibleComponent", function() { return CollapsibleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CollapsibleComponent = /** @class */ (function () {
    function CollapsibleComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CollapsibleComponent.prototype, "label", void 0);
    CollapsibleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-collapsible',
            template: __webpack_require__(/*! ./collapsible.component.html */ "./src/app/shared/components/collapsible/collapsible.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./collapsible.component.scss */ "./src/app/shared/components/collapsible/collapsible.component.scss")]
        })
    ], CollapsibleComponent);
    return CollapsibleComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/spinner/spinner.component.html":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/spinner/spinner.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isSpinning | async\"\n     class=\"spinner-container position-absolute d-flex align-items-center justify-content-center w-100 h-100\">\n  <mat-spinner></mat-spinner>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/spinner/spinner.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/spinner/spinner.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner-container {\n  background-color: rgba(255, 255, 255, 0.87);\n  top: 0;\n  left: 0;\n  z-index: 100; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9FOlxcd29ya1xcZXBzLXRlc3Qvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcc3Bpbm5lclxcc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9FOlxcd29ya1xcZXBzLXRlc3Qvc3JjXFxhc3NldHNcXHN0eWxlc1xcY29uc3RhbnRzXFxfY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSwyQ0NGZ0I7RURHaEIsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9jb25zdGFudHMvY29sb3JzXCI7XG5cbi5zcGlubmVyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHdoaXRlLWNvbG9yLCAkb3BhY2l0eS1sZyk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAwO1xufVxuIiwiLy8gQ29tbW9uIGNvbG9yc1xuJHdoaXRlLWNvbG9yOiAjZmZmO1xuJGJsYWNrLWNvbG9yOiAjMDAwO1xuXG4kaW5kaWdvLTMwMC1jb2xvcjogIzc5ODZjYjtcblxuLy8gT3BhY2l0eVxuJG9wYWNpdHktbGc6IDAuODc7XG4kb3BhY2l0eS1tZDogMC41NDtcbiRvcGFjaXR5LXNtOiAwLjI0O1xuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/spinner/spinner.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/spinner/spinner.component.ts ***!
  \****************************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], SpinnerComponent.prototype, "isSpinning", void 0);
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/shared/components/spinner/spinner.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./spinner.component.scss */ "./src/app/shared/components/spinner/spinner.component.scss")]
        })
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });




/***/ }),

/***/ "./src/app/shared/models/constants.ts":
/*!********************************************!*\
  !*** ./src/app/shared/models/constants.ts ***!
  \********************************************/
/*! exports provided: MS_FORM_FIELDS_DELAY, MS_API_DELAY, TIMESTAMP_DELIMITER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MS_FORM_FIELDS_DELAY", function() { return MS_FORM_FIELDS_DELAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MS_API_DELAY", function() { return MS_API_DELAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIMESTAMP_DELIMITER", function() { return TIMESTAMP_DELIMITER; });
var MS_FORM_FIELDS_DELAY = 500;
var MS_API_DELAY = 1500;
var TIMESTAMP_DELIMITER = 1000;


/***/ }),

/***/ "./src/app/shared/models/error.ts":
/*!****************************************!*\
  !*** ./src/app/shared/models/error.ts ***!
  \****************************************/
/*! exports provided: ErrorResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorResponse", function() { return ErrorResponse; });
var ErrorResponse = /** @class */ (function () {
    function ErrorResponse(field, message) {
        this.field = field;
        this.message = message;
    }
    return ErrorResponse;
}());



/***/ }),

/***/ "./src/app/shared/models/filter.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/models/filter.ts ***!
  \*****************************************/
/*! exports provided: AdditionalFilter, CrossFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalFilter", function() { return AdditionalFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossFilter", function() { return CrossFilter; });
function formatFilterValue(value) {
    return String(value).toLowerCase();
}
var AdditionalFilter = /** @class */ (function () {
    function AdditionalFilter(filter) {
        this.filter = filter;
    }
    AdditionalFilter.prototype.comparatorFn = function (item) {
        var _this = this;
        var fields = Object.keys(this.filter);
        return fields.every(function (field) {
            return formatFilterValue(_this.filter[field]) === formatFilterValue(item[field]);
        });
    };
    return AdditionalFilter;
}());

var CrossFilter = /** @class */ (function () {
    function CrossFilter(fields, value, isStrictMode) {
        this.fields = fields;
        this.value = value;
        this.isStrictMode = isStrictMode !== undefined ? isStrictMode : true;
        this.comparatorFn = this.isStrictMode
            ? this.hasEqualsEntries
            : this.hasSomeEntries;
    }
    CrossFilter.prototype.hasEqualsEntries = function (item) {
        var _this = this;
        return this.fields.every(function (field) { return formatFilterValue(item[field]) === formatFilterValue(_this.value); });
    };
    CrossFilter.prototype.hasSomeEntries = function (item) {
        var _this = this;
        return this.fields.every(function (field) {
            return formatFilterValue(item[field]).includes(formatFilterValue(_this.value));
        });
    };
    return CrossFilter;
}());



/***/ }),

/***/ "./src/app/shared/modules/index.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/modules/index.ts ***!
  \*****************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material/material.module */ "./src/app/shared/modules/material/material.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return _material_material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"]; });




/***/ }),

/***/ "./src/app/shared/modules/material/material.module.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/modules/material/material.module.ts ***!
  \************************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var COMPONENT_MODULES = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: COMPONENT_MODULES.slice(),
            exports: COMPONENT_MODULES.slice(),
            providers: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"]]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/collapsible/collapsible.component */ "./src/app/shared/components/collapsible/collapsible.component.ts");
/* harmony import */ var _modules___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/ */ "./src/app/shared/modules/index.ts");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/spinner/spinner.component */ "./src/app/shared/components/spinner/spinner.component.ts");






var COMPONENTS = [_components_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_3__["CollapsibleComponent"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__["SpinnerComponent"]];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _modules___WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]],
            exports: [_modules___WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]].concat(COMPONENTS),
            declarations: COMPONENTS.slice()
        })
    ], SharedModule);
    return SharedModule;
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
// This file can be replaced during build by using the `fileReplacements` array.
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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\work\eps-test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map