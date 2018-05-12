import { Injectable } from '@angular/core';
import { Quote } from '~/quotes/quote';

@Injectable()
export class QuotesService {

  private quotes = new Array<Quote>(
   {id: 1, quote: "This is hilarious"},
   {id: 2, quote: "WHY!!!??"},
   {id: 3, quote: "It's too late"},
  )

  getQuotes(): Quote[]{
    return this.quotes;
  }

  getRandomQuote(): Quote {


    return this.quotes[Math.random()*this.quotes.length]
  }

}
