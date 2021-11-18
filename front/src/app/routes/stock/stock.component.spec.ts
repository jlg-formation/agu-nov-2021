import { ArticleService } from './../../services/article.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockComponent } from './stock.component';
import { throwError } from 'rxjs';

describe('StockComponent', () => {
  let component: StockComponent;
  let fixture: ComponentFixture<StockComponent>;

  it('should create', async () => {
    await TestBed.configureTestingModule({
      declarations: [StockComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(StockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should create with refresh in error', async () => {
    const articleService = new ArticleService();
    articleService.refresh = () => {
      return throwError(() => new Error('oh zut'));
    };
    await TestBed.configureTestingModule({
      providers: [{ provide: ArticleService, useValue: articleService }],
      declarations: [StockComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(StockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should call removeArticle', async () => {
    await TestBed.configureTestingModule({
      declarations: [StockComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(StockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.removeArticles();
    expect(component).toBeTruthy();
  });
});
