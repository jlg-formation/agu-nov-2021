import { ComponentFixture, TestBed } from '@angular/core/testing';
import { throwError } from 'rxjs';
import { a1 } from 'src/test/article';
import { ArticleService } from './../../services/article.service';
import { StockComponent } from './stock.component';

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

  it('should call toggle', async () => {
    await TestBed.configureTestingModule({
      declarations: [StockComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(StockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.toggle(a1);
    component.toggle(a1);
    expect(component).toBeTruthy();
  });
});
