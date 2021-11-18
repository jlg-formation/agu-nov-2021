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
      if (!articles) {
        return;
      }
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
    console.log('strxxx: ', str);
    try {
      const articles = JSON.parse(str);
      return articles as Article[];
    } catch (err) {
      return [];
    }
  }

  remove(selectedArticles: Set<Article>): Observable<void> {
    console.log('start remove');
    const articles = this.articles$.value?.filter(
      (a) => !selectedArticles.has(a)
    );
    this.articles$.next(articles);
    console.log('about to return of');
    return of(undefined);
  }
}
