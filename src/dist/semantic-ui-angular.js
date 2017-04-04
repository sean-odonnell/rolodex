/*!
 * Semantic-UI AngularJS integration
 * https://github.com/semantic-org/semantic-ui-angular
 * @license MIT
 * v0.0.0
 */

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var button_1 = __webpack_require__(1);
	var rating_1 = __webpack_require__(2);
	var divider_1 = __webpack_require__(3);
	(function () {
	    'use strict';
	    angular
	        .module('semantic.ui', [
	        button_1.smButtonModule.name,
	        rating_1.smRatingModule.name,
	        divider_1.smDividerModule.name
	    ]);
	})();


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	var SmButtonController = (function () {
	    function SmButtonController($animate) {
	        this.$animate = $animate;
	    }
	    SmButtonController.$inject = ['$animate'];
	    return SmButtonController;
	})();
	var SmButtonDirective = (function () {
	    function SmButtonDirective() {
	        var _this = this;
	        this.restrict = 'E';
	        this.replace = true;
	        this.transclude = true;
	        this.template = this.setTemplate;
	        this.controller = SmButtonController;
	        this.link = function (scope, element, attrs, ctrl, transclude) {
	            var node = element[0];
	            transclude(scope, function (nodes) {
	                element.append(nodes);
	            });
	            if (_this.isAnchorBtn(attrs)) {
	                scope.$watch(attrs.ngDisabled, function (isDisabled) {
	                    element.attr('tabindex', isDisabled ? -1 : 0);
	                    if (isDisabled) {
	                        ctrl.$animate.addClass(element, 'disabled');
	                    }
	                });
	            }
	            if (attrs.ariaLabel === void 0) {
	                element.attr('aria-label', node.textContent.trim());
	            }
	            scope.$watch(attrs.ngDisabled, function (isDisabled) {
	                if (isDisabled) {
	                    ctrl.$animate.addClass(element, 'disabled');
	                }
	            });
	            element.on('$destroy', function () {
	                scope.$destroy();
	            });
	        };
	    }
	    SmButtonDirective.instance = function () {
	        return new SmButtonDirective;
	    };
	    SmButtonDirective.prototype.isAnchorBtn = function (attrs) {
	        return attrs.href !== void 0 || attrs.ngHref !== void 0 || attrs.xlinkHref !== void 0;
	    };
	    SmButtonDirective.prototype.setTemplate = function (element, attrs) {
	        if (this.isAnchorBtn(attrs)) {
	            return '<a class="ui button"></a>';
	        }
	        else {
	            return '<button class="ui button"></button>';
	        }
	    };
	    return SmButtonDirective;
	})();
	exports.smButtonModule = angular
	    .module('semantic.ui.elements.button', [])
	    .directive('smButton', SmButtonDirective.instance);


/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	var ratingConfig = {
	    max: 5,
	    size: '',
	    stateActive: 'active',
	    stateHover: 'selected',
	    stateHoverParent: 'selected',
	    type: 'star'
	};
	var SmRatingController = (function () {
	    function SmRatingController($scope, $element, $attrs) {
	        var _this = this;
	        this.$scope = $scope;
	        this.$element = $element;
	        this.$attrs = $attrs;
	        var ratingStates = this.evalAttribute('ratingStates') || Array.apply(null, Array(this.evalAttribute('max'))), stateActive = this.evalAttribute('stateActive'), stateHover = this.evalAttribute('stateHover'), stateHoverParent = this.evalAttribute('stateHoverParent');
	        if (angular.isDefined($attrs.readonly)) {
	            $scope.$watch($attrs.readonly, function (readonly) {
	                _this.readonly = readonly;
	            });
	        }
	        this.icons = ratingStates.map(function (state, index) {
	            var iconElm = angular.element('<i class="icon"></i>'), value = index + 1;
	            iconElm.on('mouseenter', function () {
	                $scope.$apply(function () {
	                    if (!_this.readonly) {
	                        _this.hoverValue = value;
	                        _this.$element.addClass(stateHoverParent);
	                        _this.updateStateHover();
	                    }
	                    if (angular.isDefined(_this.$attrs.onHover)) {
	                        _this.$scope.$eval(_this.$attrs.onHover, { value: value });
	                    }
	                });
	            });
	            iconElm.on('click', function () {
	                _this.rate(value);
	            });
	            return angular.extend({
	                element: iconElm,
	                index: index,
	                stateActive: stateActive,
	                stateHover: stateHover
	            }, state);
	        });
	        this.icons.forEach(function (icon) {
	            $element.append(icon.element);
	        });
	        $element
	            .addClass('ui rating')
	            .addClass($attrs.type || ratingConfig.type)
	            .addClass($attrs.size || ratingConfig.size)
	            .attr({
	            'aria-valuemax': this.icons.length,
	            'aria-valuemin': 0,
	            role: 'slider',
	            tabindex: 0
	        })
	            .on('mouseleave', function () {
	            _this.hoverValue = -1;
	            if (angular.isDefined($attrs.onLeave)) {
	                $scope.$evalAsync($attrs.onLeave);
	            }
	            $element.removeClass(stateHoverParent);
	            _this.updateStateHover();
	        })
	            .on('keydown', function (evt) {
	            if (/(37|38|39|40)/.test(evt.which)) {
	                evt.preventDefault();
	                evt.stopPropagation();
	                _this.rate(_this.ngModel.$viewValue + (evt.which === 38 || evt.which === 39 ? 1 : -1));
	            }
	        });
	    }
	    SmRatingController.prototype.rate = function (value) {
	        if (!this.readonly && value >= 0 && value <= this.icons.length) {
	            this.ngModel.$setViewValue(value);
	            this.ngModel.$render();
	        }
	    };
	    SmRatingController.prototype.init = function (ngModel) {
	        var _this = this;
	        this.ngModel = ngModel;
	        ngModel.$render = function () {
	            var value = ngModel.$viewValue;
	            _this.$element.attr('aria-valuenow', value);
	            _this.icons.forEach(function (icon, index) {
	                icon.element[index < value ? 'addClass' : 'removeClass'](icon.stateActive);
	            });
	        };
	        ngModel.$formatters.push(function (value) {
	            if (angular.isNumber(value) && value % 1 !== 0) {
	                value = Math.round(value);
	            }
	            return value;
	        });
	    };
	    SmRatingController.prototype.updateStateHover = function () {
	        var _this = this;
	        this.icons.forEach(function (icon, index) {
	            icon.element[index < _this.hoverValue ? 'addClass' : 'removeClass'](icon.stateHover);
	        });
	    };
	    SmRatingController.prototype.evalAttribute = function (attr) {
	        return angular.isDefined(this.$attrs[attr]) ?
	            this.$scope.$eval(this.$attrs[attr]) :
	            ratingConfig[attr];
	    };
	    SmRatingController.$inject = ['$scope', '$element', '$attrs'];
	    return SmRatingController;
	})();
	var SmRatingDirective = (function () {
	    function SmRatingDirective() {
	        this.restrict = 'E';
	        this.require = ['smRating', 'ngModel'];
	        this.controller = SmRatingController;
	        this.link = function (scope, element, attrs, ctrls) {
	            var smRating = ctrls[0], ngModel = ctrls[1];
	            smRating.init(ngModel);
	        };
	    }
	    SmRatingDirective.instance = function () {
	        return new SmRatingDirective;
	    };
	    return SmRatingDirective;
	})();
	exports.smRatingModule = angular
	    .module('semantic.ui.modules.rating', [])
	    .directive('smRating', SmRatingDirective.instance)
	    .constant('ratingConfig', ratingConfig);


/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	var SmDividerDirective = (function () {
	    function SmDividerDirective() {
	        this.restrict = 'E';
	        this.replace = true;
	        this.transclude = true;
	        this.template = this.setTemplate;
	        this.link = function (scope, element, attrs, ctrl, transclude) {
	            transclude(scope, function (nodes) {
	                element.append(nodes);
	            });
	        };
	    }
	    SmDividerDirective.instance = function () {
	        return new SmDividerDirective;
	    };
	    SmDividerDirective.prototype.hasType = function (attrs) {
	        return attrs.vertical !== void 0 || attrs.horizontal !== void 0;
	    };
	    SmDividerDirective.prototype.setTemplate = function (element, attrs) {
	        if (this.hasType(attrs)) {
	            if (attrs.vertical !== void 0) {
	                return '<div class="ui divider vertical"></div>';
	            }
	            else {
	                return '<div class="ui divider horizontal"></div>';
	            }
	        }
	        else {
	            return '<div class="ui divider"></div>';
	        }
	    };
	    return SmDividerDirective;
	})();
	exports.smDividerModule = angular
	    .module('semantic.ui.elements.divider', [])
	    .directive('smDivider', SmDividerDirective.instance);


/***/ }
/******/ ]);
//# sourceMappingURL=semantic-ui-angular.js.map