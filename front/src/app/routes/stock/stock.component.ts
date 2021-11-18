import { Article } from 'src/app/interfaces/article';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ArticleService } from './../../services/article.service';
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockComponent implements OnInit {
  faPlus = faPlus;
  faTrashAlt = faTrashAlt;
  selectedArticles = new Set<Article>();

  isLoading = false;

  constructor(public articleService: ArticleService) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.isLoading = true;
    this.articleService.refresh().subscribe({
      next: (articles) => {
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
    this.articleService.remove(new Set(this.selectedArticles)).subscribe({
      next: () => {
        console.log('remove done.');
        this.articleService.refresh().subscribe();
      },
    });
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
