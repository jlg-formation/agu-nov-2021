import { ThemeService } from './../../services/theme.service';
import { ViewportService } from './../../services/viewport.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(
    public viewportService: ViewportService,
    public themeService: ThemeService
  ) {}

  ngOnInit(): void {}
}
