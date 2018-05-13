import { Injectable } from '@angular/core';
import { Quote } from '~/quotes/quote';

@Injectable()
export class QuotesService {

  private quotes = new Array<string>(
   "This is hilarious",
   "WHY!!!??",
   "It's too late"
  )
private quoteObject = new Array<Quote> (
  {id:1, quote:"This is hilarious"}, 
  {id: 2, quote: "This is hilarious"}, 
  {id:3, quote: "WHY!!!??"}
)

  getQuotes(): string[]{
    return this.quotes;
  }

  getRandomQuote(): string {

    return this.quotes[Math.floor(Math.random()*this.quotes.length)]; 
  
  }
}
