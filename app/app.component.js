System.register(['angular2/core', './skill/skill.component', './job/job.component', './otherSkill/otherSkill.component', './reference/reference.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, skill_component_1, job_component_1, otherSkill_component_1, reference_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (skill_component_1_1) {
                skill_component_1 = skill_component_1_1;
            },
            function (job_component_1_1) {
                job_component_1 = job_component_1_1;
            },
            function (otherSkill_component_1_1) {
                otherSkill_component_1 = otherSkill_component_1_1;
            },
            function (reference_component_1_1) {
                reference_component_1 = reference_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.html',
                        directives: [skill_component_1.SkillComponent, job_component_1.JobComponent, otherSkill_component_1.OtherSkillComponent, reference_component_1.ReferenceComponent],
                        styles: [
                            // 'div { border-width:2px; border-style:solid; border-color:black;}',
                            '.centerBlock { text-align:center; }',
                            '.round-image { border-radius : 25px; width: 230px; height:230px; overflow:hidden;}'
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map