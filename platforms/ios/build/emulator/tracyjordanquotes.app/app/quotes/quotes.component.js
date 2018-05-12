"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var quotes_service_1 = require("./quotes.service");
var QuotesComponent = /** @class */ (function () {
    function QuotesComponent(_quotesService) {
        this._quotesService = _quotesService;
    }
    QuotesComponent.prototype.ngOnInit = function () {
        this.quote = this._quotesService.getRandomQuote();
    };
    QuotesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-quotes',
            templateUrl: './quotes.component.html',
            styleUrls: ['./quotes.component.scss']
        }),
        __metadata("design:paramtypes", [quotes_service_1.QuotesService])
    ], QuotesComponent);
    return QuotesComponent;
}());
exports.QuotesComponent = QuotesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVvdGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInF1b3Rlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsbURBQStDO0FBUy9DO0lBSUUseUJBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUFJLENBQUM7SUFFdkQsa0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNwRCxDQUFDO0lBUlUsZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDdkMsQ0FBQzt5Q0FLcUMsOEJBQWE7T0FKdkMsZUFBZSxDQVMzQjtJQUFELHNCQUFDO0NBQUEsQUFURCxJQVNDO0FBVFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1F1b3Rlc1NlcnZpY2V9IGZyb20gXCIuL3F1b3Rlcy5zZXJ2aWNlXCI7IFxuaW1wb3J0IHsgUXVvdGUgfSBmcm9tICcuL3F1b3RlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXF1b3RlcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9xdW90ZXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9xdW90ZXMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBRdW90ZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgcXVvdGUgOiBRdW90ZTsgXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcXVvdGVzU2VydmljZSA6IFF1b3Rlc1NlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQgeyBcbiAgICB0aGlzLnF1b3RlID0gdGhpcy5fcXVvdGVzU2VydmljZS5nZXRSYW5kb21RdW90ZSgpOyBcbiAgfVxufSJdfQ==