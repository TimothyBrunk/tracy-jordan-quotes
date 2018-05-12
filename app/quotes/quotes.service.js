"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var QuotesService = /** @class */ (function () {
    function QuotesService() {
        this.quotes = new Array("This is hilarious", "WHY!!!??", "It's too late");
        this.quoteObject = new Array({ id: 1, quote: "This is hilarious" }, { id: 2, quote: "This is hilarious" }, { id: 3, quote: "WHY!!!??" });
    }
    QuotesService.prototype.getQuotes = function () {
        return this.quotes;
    };
    QuotesService.prototype.getRandomQuote = function () {
        return this.quotes[Math.floor(Math.random() * this.quotes.length)];
    };
    QuotesService = __decorate([
        core_1.Injectable()
    ], QuotesService);
    return QuotesService;
}());
exports.QuotesService = QuotesService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVvdGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdW90ZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUkzQztJQURBO1FBR1UsV0FBTSxHQUFHLElBQUksS0FBSyxDQUN6QixtQkFBbUIsRUFDbkIsVUFBVSxFQUNWLGVBQWUsQ0FDZixDQUFBO1FBQ0ssZ0JBQVcsR0FBRyxJQUFJLEtBQUssQ0FDN0IsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEtBQUssRUFBQyxtQkFBbUIsRUFBQyxFQUNqQyxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFDLEVBQ25DLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFDLENBQzFCLENBQUE7SUFXRCxDQUFDO0lBVEMsaUNBQVMsR0FBVDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxzQ0FBYyxHQUFkO1FBRUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBRW5FLENBQUM7SUFyQlUsYUFBYTtRQUR6QixpQkFBVSxFQUFFO09BQ0EsYUFBYSxDQXNCekI7SUFBRCxvQkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUXVvdGUgfSBmcm9tICd+L3F1b3Rlcy9xdW90ZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBRdW90ZXNTZXJ2aWNlIHtcblxuICBwcml2YXRlIHF1b3RlcyA9IG5ldyBBcnJheTxzdHJpbmc+KFxuICAgXCJUaGlzIGlzIGhpbGFyaW91c1wiLFxuICAgXCJXSFkhISE/P1wiLFxuICAgXCJJdCdzIHRvbyBsYXRlXCJcbiAgKVxucHJpdmF0ZSBxdW90ZU9iamVjdCA9IG5ldyBBcnJheTxRdW90ZT4gKFxuICB7aWQ6MSwgcXVvdGU6XCJUaGlzIGlzIGhpbGFyaW91c1wifSwgXG4gIHtpZDogMiwgcXVvdGU6IFwiVGhpcyBpcyBoaWxhcmlvdXNcIn0sIFxuICB7aWQ6MywgcXVvdGU6IFwiV0hZISEhPz9cIn1cbilcblxuICBnZXRRdW90ZXMoKTogc3RyaW5nW117XG4gICAgcmV0dXJuIHRoaXMucXVvdGVzO1xuICB9XG5cbiAgZ2V0UmFuZG9tUXVvdGUoKTogc3RyaW5nIHtcblxuICAgIHJldHVybiB0aGlzLnF1b3Rlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqdGhpcy5xdW90ZXMubGVuZ3RoKV07IFxuICBcbiAgfVxufVxuIl19