import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = [];

  constructor() {}

  refresh(): Observable<Article[]> {
    return of(this.getArticles());
  }

  add(article: Article): Observable<void> {
    this.articles.push(article);
    this.save();
    return of();
  }

  getArticles() {
    const str = localStorage.getItem('articles');
    if (!str) {
      return [];
    }
    return JSON.parse(str) as Article[];
  }

  remove(selectedArticles: Set<Article>): Observable<void> {
    this.articles = this.articles.filter((a) => !selectedArticles.has(a));
    this.save();
    return of();
  }

  save() {
    localStorage.setItem('articles', JSON.stringify(this.articles));
  }
}
