import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { throwError } from 'rxjs';
import { ArticleService } from './../../../services/article.service';
import { AddComponent } from './add.component';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AddComponent],
    }).compileComponents();
  });

  it('should create', async () => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should create and submit', async () => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.submit();
    expect(component).toBeTruthy();
  });

  it('should create and submit in error', async () => {
    const articleService = new ArticleService();
    articleService.add = () => {
      return throwError(() => new Error('oh zut'));
    };
    TestBed.overrideProvider(ArticleService, { useValue: articleService });

    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.submit();
    expect(component).toBeTruthy();
  });
});
