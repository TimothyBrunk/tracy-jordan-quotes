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
    };
    QuotesComponent.prototype.onNewQuote = function () {
        var newQuote = this._quotesService.getRandomQuote();
        while (newQuote === this.quote) {
            newQuote = this._quotesService.getRandomQuote();
        }
        this.quote = newQuote;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVvdGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInF1b3Rlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsbURBQStDO0FBUy9DO0lBSUUseUJBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUYxQyxVQUFLLEdBQVksRUFBRSxDQUFDO0lBRTBCLENBQUM7SUFFdkQsa0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNwRCxDQUFDO0lBRUQsb0NBQVUsR0FBVjtRQUVFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFcEQsT0FBTSxRQUFRLEtBQUssSUFBSSxDQUFDLEtBQUssRUFDN0IsQ0FBQztZQUNDLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2xELENBQUM7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztJQUN4QixDQUFDO0lBbkJVLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3ZDLENBQUM7eUNBS3FDLDhCQUFhO09BSnZDLGVBQWUsQ0FvQjNCO0lBQUQsc0JBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7UXVvdGVzU2VydmljZX0gZnJvbSBcIi4vcXVvdGVzLnNlcnZpY2VcIjsgXG5pbXBvcnQgeyBRdW90ZSB9IGZyb20gJy4vcXVvdGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtcXVvdGVzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3F1b3Rlcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3F1b3Rlcy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFF1b3Rlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBxdW90ZSA6IHN0cmluZyA9IFwiXCI7IFxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3F1b3Rlc1NlcnZpY2UgOiBRdW90ZXNTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHsgXG4gICAgdGhpcy5xdW90ZSA9IHRoaXMuX3F1b3Rlc1NlcnZpY2UuZ2V0UmFuZG9tUXVvdGUoKTsgXG4gIH1cblxuICBvbk5ld1F1b3RlKCk6IHZvaWR7XG5cbiAgICBsZXQgbmV3UXVvdGUgPSB0aGlzLl9xdW90ZXNTZXJ2aWNlLmdldFJhbmRvbVF1b3RlKCk7IFxuXG4gICAgd2hpbGUobmV3UXVvdGUgPT09IHRoaXMucXVvdGUpXG4gICAge1xuICAgICAgbmV3UXVvdGUgPSB0aGlzLl9xdW90ZXNTZXJ2aWNlLmdldFJhbmRvbVF1b3RlKCk7XG4gICAgfVxuICAgIHRoaXMucXVvdGUgPSBuZXdRdW90ZTsgXG4gIH1cbn0iXX0=