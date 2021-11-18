import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { HttpArticleService } from './http-article.service';
import { a1 } from 'src/test/article';

const url = 'http://localhost:3000/api/articles';

describe('HttpArticleService', () => {
  let service: HttpArticleService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HttpArticleService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be refreshed', () => {
    service.refresh().subscribe({
      next: (articles) => {
        console.log('xxx articles: ', articles);
      },
    });
    const request = http.expectOne(url);
    expect(request.request.method).toBe('GET');
    request.flush(JSON.stringify([a1]));

    expect(service).toBeTruthy();
  });

  it('should add', () => {
    service.add(a1).subscribe();
    const request = http.expectOne(url);
    expect(request.request.method).toBe('POST');
    request.flush(JSON.stringify(a1), { status: 201, statusText: 'Created' });

    expect(service).toBeTruthy();
  });

  it('should remove', () => {
    service.remove(new Set([a1])).subscribe();
    const request = http.expectOne(url);
    expect(request.request.method).toBe('DELETE');
    request.flush('', { status: 204, statusText: 'No Content' });

    expect(service).toBeTruthy();
  });
});
