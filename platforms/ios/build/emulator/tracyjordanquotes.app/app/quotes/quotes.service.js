"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var QuotesService = /** @class */ (function () {
    function QuotesService() {
        this.quotes = new Array({ id: 1, quote: "This is hilarious" }, { id: 2, quote: "WHY!!!??" }, { id: 3, quote: "It's too late" });
    }
    QuotesService.prototype.getQuotes = function () {
        return this.quotes;
    };
    QuotesService.prototype.getRandomQuote = function () {
        return this.quotes[Math.random() * this.quotes.length];
    };
    QuotesService = __decorate([
        core_1.Injectable()
    ], QuotesService);
    return QuotesService;
}());
exports.QuotesService = QuotesService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVvdGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdW90ZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUkzQztJQURBO1FBR1UsV0FBTSxHQUFHLElBQUksS0FBSyxDQUN6QixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFDLEVBQ25DLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFDLEVBQzFCLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFDLENBQy9CLENBQUE7SUFZSCxDQUFDO0lBVkMsaUNBQVMsR0FBVDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxzQ0FBYyxHQUFkO1FBR0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDdEQsQ0FBQztJQWhCVSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7T0FDQSxhQUFhLENBa0J6QjtJQUFELG9CQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBRdW90ZSB9IGZyb20gJ34vcXVvdGVzL3F1b3RlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFF1b3Rlc1NlcnZpY2Uge1xuXG4gIHByaXZhdGUgcXVvdGVzID0gbmV3IEFycmF5PFF1b3RlPihcbiAgIHtpZDogMSwgcXVvdGU6IFwiVGhpcyBpcyBoaWxhcmlvdXNcIn0sXG4gICB7aWQ6IDIsIHF1b3RlOiBcIldIWSEhIT8/XCJ9LFxuICAge2lkOiAzLCBxdW90ZTogXCJJdCdzIHRvbyBsYXRlXCJ9LFxuICApXG5cbiAgZ2V0UXVvdGVzKCk6IFF1b3RlW117XG4gICAgcmV0dXJuIHRoaXMucXVvdGVzO1xuICB9XG5cbiAgZ2V0UmFuZG9tUXVvdGUoKTogUXVvdGUge1xuXG5cbiAgICByZXR1cm4gdGhpcy5xdW90ZXNbTWF0aC5yYW5kb20oKSp0aGlzLnF1b3Rlcy5sZW5ndGhdXG4gIH1cblxufVxuIl19