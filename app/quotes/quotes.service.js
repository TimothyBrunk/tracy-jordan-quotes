"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var QuotesService = /** @class */ (function () {
    function QuotesService() {
        this.quotes = new Array("You look good, like a solid gold candy bar. - Tracy Jordan", "Let me just say, it's a pleasure to be here. It's an honor for you to meet me. - Tracy Jordan", "I also have a character named Ching Chong, who likes to play ping pong. I just made that up right now.", "Live everyweek, like it's Shark Week.");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVvdGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdW90ZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUkzQztJQURBO1FBR1UsV0FBTSxHQUFHLElBQUksS0FBSyxDQUN6Qiw0REFBNEQsRUFDNUQsK0ZBQStGLEVBQy9GLHdHQUF3RyxFQUN4Ryx1Q0FBdUMsQ0FDdkMsQ0FBQTtJQVNILENBQUM7SUFQQyxpQ0FBUyxHQUFUO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVELHNDQUFjLEdBQWQ7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQWZVLGFBQWE7UUFEekIsaUJBQVUsRUFBRTtPQUNBLGFBQWEsQ0FnQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQWhCRCxJQWdCQztBQWhCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFF1b3RlIH0gZnJvbSAnfi9xdW90ZXMvcXVvdGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUXVvdGVzU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBxdW90ZXMgPSBuZXcgQXJyYXk8c3RyaW5nPihcbiAgIFwiWW91IGxvb2sgZ29vZCwgbGlrZSBhIHNvbGlkIGdvbGQgY2FuZHkgYmFyLiAtIFRyYWN5IEpvcmRhblwiLFxuICAgXCJMZXQgbWUganVzdCBzYXksIGl0J3MgYSBwbGVhc3VyZSB0byBiZSBoZXJlLiBJdCdzIGFuIGhvbm9yIGZvciB5b3UgdG8gbWVldCBtZS4gLSBUcmFjeSBKb3JkYW5cIixcbiAgIFwiSSBhbHNvIGhhdmUgYSBjaGFyYWN0ZXIgbmFtZWQgQ2hpbmcgQ2hvbmcsIHdobyBsaWtlcyB0byBwbGF5IHBpbmcgcG9uZy4gSSBqdXN0IG1hZGUgdGhhdCB1cCByaWdodCBub3cuXCIsXG4gICBcIkxpdmUgZXZlcnl3ZWVrLCBsaWtlIGl0J3MgU2hhcmsgV2Vlay5cIlxuICApXG5cbiAgZ2V0UXVvdGVzKCk6IHN0cmluZ1tde1xuICAgIHJldHVybiB0aGlzLnF1b3RlcztcbiAgfVxuXG4gIGdldFJhbmRvbVF1b3RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucXVvdGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSp0aGlzLnF1b3Rlcy5sZW5ndGgpXTsgXG4gIH1cbn0iXX0=