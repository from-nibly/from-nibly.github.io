System.register(['angular2/core', '../api/data.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, data_service_1;
    var ReferenceComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            ReferenceComponent = (function () {
                function ReferenceComponent(dataService) {
                    var _this = this;
                    this.dataService = dataService;
                    dataService.getReferences().then(function (references) {
                        _this.references = references;
                    }).catch(function (error) {
                        console.log(error);
                    });
                }
                ReferenceComponent = __decorate([
                    core_1.Component({
                        templateUrl: './app/reference/reference.html',
                        selector: 'references',
                        providers: [data_service_1.DataService],
                        styles: ['.margined { margin-bottom : 20px}']
                    }), 
                    __metadata('design:paramtypes', [data_service_1.DataService])
                ], ReferenceComponent);
                return ReferenceComponent;
            })();
            exports_1("ReferenceComponent", ReferenceComponent);
        }
    }
});
//# sourceMappingURL=reference.component.js.map