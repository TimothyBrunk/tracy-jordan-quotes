import { Injectable } from '@angular/core';
import { Quote } from '~/quotes/quote';

@Injectable()
export class QuotesService {

  private quotes = new Array<string>(
   "You look good, like a solid gold candy bar.",
   "Let me just say, it's a pleasure to be here. It's an honor for you to meet me.",
   "I also have a character named Ching Chong, who likes to play ping pong. I jsut made that up right now."
  )

  getQuotes(): string[]{
    return this.quotes;
  }

  getRandomQuote(): string {
    return this.quotes[Math.floor(Math.random()*this.quotes.length)]; 
  }
}