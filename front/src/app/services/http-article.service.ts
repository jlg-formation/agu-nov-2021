import { Article } from './../interfaces/article';
import { ArticleService } from './article.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { delay, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

const url = '/api/articles';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor(private http: HttpClient) {
    super();
    console.log('http article');
  }

  override refresh(): Observable<Article[]> {
    return this.http
      .get<Article[]>(url)
      .pipe(tap((articles) => this.articles$.next(articles)));
  }

  override add(article: Article) {
    super.add(article);
    return this.http.post<void>(url, article).pipe(delay(200));
  }

  override remove(selectedArticles: Set<Article>): Observable<void> {
    super.remove(selectedArticles);
    const ids = [...selectedArticles].map((a) => a.id);
    return this.http
      .delete<void>(url, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(ids),
      })
      .pipe(delay(200));
  }
}
