import { Component, OnInit } from '@angular/core';

import {QuotesService} from "./quotes.service"; 
import { Quote } from './quote';

@Component({
  moduleId: module.id,
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  private quote : Quote; 

  constructor(private _quotesService : QuotesService) { }

  ngOnInit(): void { 
    this.quote = this._quotesService.getRandomQuote(); 
  }
}