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
    var JobComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            JobComponent = (function () {
                function JobComponent(dataService) {
                    var _this = this;
                    this.dataService = dataService;
                    dataService.getJobs().then(function (jobs) {
                        _this.jobs = jobs;
                    }).catch(function (error) {
                        console.log(error);
                    });
                }
                JobComponent.prototype.select = function (job) {
                    this.selected = job;
                };
                JobComponent = __decorate([
                    core_1.Component({
                        templateUrl: './app/job/job.html',
                        selector: 'jobs',
                        providers: [data_service_1.DataService],
                        styles: []
                    }), 
                    __metadata('design:paramtypes', [data_service_1.DataService])
                ], JobComponent);
                return JobComponent;
            })();
            exports_1("JobComponent", JobComponent);
        }
    }
});
//# sourceMappingURL=job.component.js.map