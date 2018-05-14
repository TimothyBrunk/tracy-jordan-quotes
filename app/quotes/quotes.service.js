"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var QuotesService = /** @class */ (function () {
    function QuotesService() {
        this.quotes = new Array("You look good, like a solid gold candy bar.", "Let me just say, it's a pleasure to be here. It's an honor for you to meet me.", "I also have a character named Ching Chong, who likes to play ping pong. I jsut made that up right now.");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVvdGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdW90ZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUkzQztJQURBO1FBR1UsV0FBTSxHQUFHLElBQUksS0FBSyxDQUN6Qiw2Q0FBNkMsRUFDN0MsZ0ZBQWdGLEVBQ2hGLHdHQUF3RyxDQUN4RyxDQUFBO0lBU0gsQ0FBQztJQVBDLGlDQUFTLEdBQVQ7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQsc0NBQWMsR0FBZDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBZFUsYUFBYTtRQUR6QixpQkFBVSxFQUFFO09BQ0EsYUFBYSxDQWV6QjtJQUFELG9CQUFDO0NBQUEsQUFmRCxJQWVDO0FBZlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBRdW90ZSB9IGZyb20gJ34vcXVvdGVzL3F1b3RlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFF1b3Rlc1NlcnZpY2Uge1xuXG4gIHByaXZhdGUgcXVvdGVzID0gbmV3IEFycmF5PHN0cmluZz4oXG4gICBcIllvdSBsb29rIGdvb2QsIGxpa2UgYSBzb2xpZCBnb2xkIGNhbmR5IGJhci5cIixcbiAgIFwiTGV0IG1lIGp1c3Qgc2F5LCBpdCdzIGEgcGxlYXN1cmUgdG8gYmUgaGVyZS4gSXQncyBhbiBob25vciBmb3IgeW91IHRvIG1lZXQgbWUuXCIsXG4gICBcIkkgYWxzbyBoYXZlIGEgY2hhcmFjdGVyIG5hbWVkIENoaW5nIENob25nLCB3aG8gbGlrZXMgdG8gcGxheSBwaW5nIHBvbmcuIEkganN1dCBtYWRlIHRoYXQgdXAgcmlnaHQgbm93LlwiXG4gIClcblxuICBnZXRRdW90ZXMoKTogc3RyaW5nW117XG4gICAgcmV0dXJuIHRoaXMucXVvdGVzO1xuICB9XG5cbiAgZ2V0UmFuZG9tUXVvdGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5xdW90ZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnRoaXMucXVvdGVzLmxlbmd0aCldOyBcbiAgfVxufSJdfQ==