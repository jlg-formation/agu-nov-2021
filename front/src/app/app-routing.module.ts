import { NotFoundComponent } from './routes/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { LegalComponent } from './routes/legal/legal.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'legal', component: LegalComponent },
  {
    path: 'stock',
    loadChildren: () =>
      import('./routes/stock/stock.module').then((m) => m.StockModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
