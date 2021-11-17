import { Article } from 'src/app/interfaces/article';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from './../../services/article.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  selectedArticles = new Set<Article>();
  constructor(public articleService: ArticleService) {}

  ngOnInit(): void {}

  toggle(a: Article) {
    if (this.selectedArticles.has(a)) {
      this.selectedArticles.delete(a);
      return;
    }
    this.selectedArticles.add(a);
  }

  removeArticles() {
    console.log('removeArticles');
    this.articleService.remove(this.selectedArticles);
    this.selectedArticles.clear();
  }
}
