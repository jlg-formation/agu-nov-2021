import { ArticleService } from './../../../services/article.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/interfaces/article';
import { faPlus, faCircleNotch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  faPlus = faPlus;
  faCircleNotch = faCircleNotch;
  isAdding = false;
  f = new FormGroup({
    name: new FormControl('Tournevis', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(15),
    ]),
    price: new FormControl(1.23, [Validators.required, Validators.max(1000)]),
    qty: new FormControl(1, [Validators.required]),
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {}

  submit() {
    console.log('submit');
    this.isAdding = true;
    this.articleService.add(this.f.value as Article).subscribe({
      next: () => {
        console.log('added success');
        this.isAdding = false;
        this.router.navigate(['..'], { relativeTo: this.route });
      },
      error: (err) => {
        console.log('err: ', err);
        this.isAdding = false;
      },
    });
  }
}
