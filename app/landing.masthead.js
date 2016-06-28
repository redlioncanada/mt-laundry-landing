System.register(['angular2/core', './services/appdata.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, appdata_service_1;
    var AppMasthead;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (appdata_service_1_1) {
                appdata_service_1 = appdata_service_1_1;
            }],
        execute: function() {
            AppMasthead = (function () {
                function AppMasthead(appdata, _elementRef) {
                    this.appdata = appdata;
                    this._elementRef = _elementRef;
                    this.enabled = true;
                    this.element = _elementRef.nativeElement;
                    var data = appdata.get();
                    this.enabled = data.masthead.enabled;
                    this.image = data.masthead.image;
                    this.imageForeground = data.masthead.imageForeground;
                    this.title = data.masthead.title;
                    this.alt = data.masthead.alt;
                }
                AppMasthead.prototype.ngAfterViewInit = function () {
                    var self = this;
                    if (this.imageForeground) {
                        setTimeout(function () {
                            $(self.element).find('.mt-landing-image img').last().animate({ opacity: 1 }, { duration: 350, queue: false });
                            $(self.element).find('.mt-landing-light').animate({ bottom: '70%' }, { duration: 300, queue: false, complete: function () {
                                    var self1 = this;
                                    setTimeout(function () {
                                        $(self1).animate({ opacity: 0 }, { duration: 100, queue: false });
                                    }, 200);
                                } });
                        }, 4000);
                    }
                    else {
                        $(self.element).find('.mt-landing-image img').css({ 'position': 'relative', 'opacity': '1' });
                    }
                };
                AppMasthead = __decorate([
                    core_1.Component({
                        selector: 'masthead',
                        template: "\n    \t<div class=\"{{!enabled ? 'hide': ''}}\">\n\t\t\t<div class=\"mt-landing-title\"><h1>{{title}}</h1></div>\n\t\t\t<div class=\"mt-landing-image\">\n\t\t\t\t<img src=\"{{image}}\" alt=\"{{alt}}\" />\n\t\t\t\t<img *ngIf=\"imageForeground\" src=\"{{imageForeground}}\" alt=\"{{alt}}\" />\n\t\t\t</div>\n\t\t\t<img class=\"mt-landing-light\" src=\"./public/images/light.png\" />\n\t\t</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [appdata_service_1.AppDataService, core_1.ElementRef])
                ], AppMasthead);
                return AppMasthead;
            }());
            exports_1("AppMasthead", AppMasthead);
        }
    }
});
//# sourceMappingURL=landing.masthead.js.map