import { Injectable } from '@angular/core';
import { Quote } from '~/quotes/quote';

@Injectable()
export class QuotesService {

  private quotes = new Array<string>(
   "You look good, like a solid gold candy bar. - Tracy Jordan",
   "Let me just say, it's a pleasure to be here. It's an honor for you to meet me. - Tracy Jordan",
   "I also have a character named Ching Chong, who likes to play ping pong. I just made that up right now.",
   "Live everyweek, like it's Shark Week."
  )

  getQuotes(): string[]{
    return this.quotes;
  }

  getRandomQuote(): string {
    return this.quotes[Math.floor(Math.random()*this.quotes.length)]; 
  }
}