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
    var OtherSkillComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            OtherSkillComponent = (function () {
                function OtherSkillComponent(dataService) {
                    var _this = this;
                    this.dataService = dataService;
                    dataService.getOtherSkills().then(function (skills) {
                        _this.skills1 = skills.splice(0, Math.floor(skills.length / 3));
                        _this.skills2 = skills.splice(0, Math.floor(skills.length / 2));
                        _this.skills3 = skills;
                    }).catch(function (error) {
                        console.log(error);
                    });
                }
                OtherSkillComponent = __decorate([
                    core_1.Component({
                        templateUrl: './app/otherSkill/otherSkill.html',
                        selector: 'otherSkills',
                        providers: [data_service_1.DataService],
                        styles: []
                    }), 
                    __metadata('design:paramtypes', [data_service_1.DataService])
                ], OtherSkillComponent);
                return OtherSkillComponent;
            })();
            exports_1("OtherSkillComponent", OtherSkillComponent);
        }
    }
});
//# sourceMappingURL=otherSkill.component.js.map