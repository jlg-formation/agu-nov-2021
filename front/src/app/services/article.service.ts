import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = this.getArticles();

  constructor() {}

  getArticles() {
    const str = localStorage.getItem('articles');
    if (!str) {
      return [
        { name: 'Tournevis cruciforme', price: 2.4, qty: 123 },
        { name: 'Pince', price: 5, qty: 68 },
        { name: 'Marteau', price: 8.54, qty: 5 },
      ];
    }
    return JSON.parse(str) as Article[];
  }

  save() {
    localStorage.setItem('articles', JSON.stringify(this.articles));
  }

  add(article: Article) {
    this.articles.push(article);
    this.save();
  }
}
