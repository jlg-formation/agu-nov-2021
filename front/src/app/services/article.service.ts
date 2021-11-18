import { BehaviorSubject, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles$ = new BehaviorSubject<Article[] | undefined>(undefined);

  constructor() {
    this.articles$.subscribe((articles) => {
      localStorage.setItem('articles', JSON.stringify(articles));
    });
  }

  refresh(): Observable<Article[]> {
    return of(this.getArticles());
  }

  add(article: Article): Observable<void> {
    this.articles$.value?.push(article);
    this.articles$.next(this.articles$.value);
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
    const articles = this.articles$.value?.filter(
      (a) => !selectedArticles.has(a)
    );
    this.articles$.next(articles);
    return of();
  }
}
