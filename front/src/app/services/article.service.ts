import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = [
    { name: 'Tournevis cruciforme', price: 2.4, qty: 123 },
    { name: 'Pince', price: 5, qty: 68 },
    { name: 'Marteau', price: 8.54, qty: 5 },
  ];

  constructor() {}
}
