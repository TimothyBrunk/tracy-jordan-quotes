"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var quotes_service_1 = require("./quotes.service");
var QuotesComponent = /** @class */ (function () {
    function QuotesComponent(_quotesService) {
        this._quotesService = _quotesService;
        this.quote = "";
    }
    QuotesComponent.prototype.ngOnInit = function () {
        this.quote = this._quotesService.getRandomQuote();
        console.log(this.quote);
        this.quote = "Random 1";
    };
    QuotesComponent.prototype.onNewQuote = function () {
        var newQuote = this._quotesService.getRandomQuote();
        if (newQuote !== this.quote) {
            this.quote = newQuote;
        }
        console.log(this.quote);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVvdGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInF1b3Rlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsbURBQStDO0FBUy9DO0lBSUUseUJBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUYxQyxVQUFLLEdBQVksRUFBRSxDQUFDO0lBRTBCLENBQUM7SUFFdkQsa0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztJQUMxQixDQUFDO0lBRUQsb0NBQVUsR0FBVjtRQUVFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFcEQsRUFBRSxDQUFBLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FDM0IsQ0FBQztZQUNDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBQ3hCLENBQUM7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUUxQixDQUFDO0lBdkJVLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3ZDLENBQUM7eUNBS3FDLDhCQUFhO09BSnZDLGVBQWUsQ0F3QjNCO0lBQUQsc0JBQUM7Q0FBQSxBQXhCRCxJQXdCQztBQXhCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7UXVvdGVzU2VydmljZX0gZnJvbSBcIi4vcXVvdGVzLnNlcnZpY2VcIjsgXG5pbXBvcnQgeyBRdW90ZSB9IGZyb20gJy4vcXVvdGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtcXVvdGVzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3F1b3Rlcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3F1b3Rlcy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFF1b3Rlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBxdW90ZSA6IHN0cmluZyA9IFwiXCI7IFxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3F1b3Rlc1NlcnZpY2UgOiBRdW90ZXNTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHsgXG4gICAgdGhpcy5xdW90ZSA9IHRoaXMuX3F1b3Rlc1NlcnZpY2UuZ2V0UmFuZG9tUXVvdGUoKTsgXG4gICAgY29uc29sZS5sb2codGhpcy5xdW90ZSk7IFxuICAgIHRoaXMucXVvdGUgPSBcIlJhbmRvbSAxXCI7IFxuICB9XG5cbiAgb25OZXdRdW90ZSgpOiB2b2lke1xuXG4gICAgbGV0IG5ld1F1b3RlID0gdGhpcy5fcXVvdGVzU2VydmljZS5nZXRSYW5kb21RdW90ZSgpOyBcblxuICAgIGlmKG5ld1F1b3RlICE9PSB0aGlzLnF1b3RlKVxuICAgIHtcbiAgICAgIHRoaXMucXVvdGUgPSBuZXdRdW90ZTsgXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2codGhpcy5xdW90ZSk7IFxuICAgIFxuICB9XG59Il19