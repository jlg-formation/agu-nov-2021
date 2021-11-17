import { Article } from 'src/app/interfaces/article';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from './../../services/article.service';
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  faPlus = faPlus;
  faTrashAlt = faTrashAlt;
  selectedArticles = new Set<Article>();

  isLoading = false;

  constructor(public articleService: ArticleService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.articleService.refresh().subscribe({
      next: (articles) => {
        this.articleService.articles = articles;
        this.isLoading = false;
      },
      error: (err) => {
        console.log('err: ', err);
        this.isLoading = false;
      },
    });
  }

  removeArticles() {
    console.log('removeArticles');
    this.articleService.remove(this.selectedArticles);
    this.selectedArticles.clear();
  }

  toggle(a: Article) {
    if (this.selectedArticles.has(a)) {
      this.selectedArticles.delete(a);
      return;
    }
    this.selectedArticles.add(a);
  }
}
