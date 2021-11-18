import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { a1, a2 } from 'src/test/article';

import { ArticleService } from './article.service';

describe('ArticleService', () => {
  let service: ArticleService;

  it('should be created', () => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleService);
    service.getArticles();
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleService);
    service.articles$.next([a1]);
    service.add(a2);
    expect(service).toBeTruthy();
  });

  it('should be created with an not empty localstorage in error', () => {
    localStorage.clear();
    localStorage.setItem('articles', 'truc');
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleService);

    service.getArticles();
    expect(service).toBeTruthy();
  });

  it('should be created with an not empty localstorage', () => {
    localStorage.clear();
    localStorage.setItem('articles', '[]');
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleService);

    service.getArticles();
    expect(service).toBeTruthy();
  });

  it('should remove', fakeAsync(() => {
    localStorage.clear();
    localStorage.setItem('articles', JSON.stringify([a1]));
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleService);
    service.articles$.next([a1]);
    service.articles$.subscribe((articles) => {
      if (!articles) {
        return;
      }
      if (articles.length > 0) {
        service.remove(new Set([a1]));
      }
    });
    tick(1);
    console.log('service.articles$.value: ', service.articles$.value);
  }));
});
