import { Article } from './../../interfaces/article';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  articles: Article[] = [
    { name: 'Tournevis cruciforme', price: 2.4, qty: 123 },
    { name: 'Pince', price: 5, qty: 68 },
    { name: 'Marteau', price: 8.54, qty: 5 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
