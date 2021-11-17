import { Article } from './../interfaces/article';
import { ArticleService } from './article.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor(private http: HttpClient) {
    super();
    console.log('http article');
    this.refresh();
  }

  refresh() {
    this.http.get<Article[]>('http://localhost:3000/api/articles').subscribe({
      next: (articles) => {
        console.log('articles: ', articles);
        this.articles = articles;
        this.save();
      },
      error: (err) => {
        console.log('err: ', err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  override add(article: Article) {
    super.add(article);
    this.http
      .post<void>('http://localhost:3000/api/articles', article)
      .subscribe({
        next: () => {
          this.refresh();
        },
        error: (err) => {
          console.log('err: ', err);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }

  override remove(selectedArticles: Set<Article>) {
    super.remove(selectedArticles);
    const ids = [...selectedArticles].map((a) => a.id);
    this.http
      .delete<void>('http://localhost:3000/api/articles', {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(ids),
      })
      .subscribe({
        next: () => {
          this.refresh();
        },
        error: (err) => {
          console.log('err: ', err);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }
}
