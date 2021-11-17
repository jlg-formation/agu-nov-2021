import { ArticleService } from './article.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor() {
    super();
    console.log('http article');
  }
}
