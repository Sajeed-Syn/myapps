import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { MovieaddComponent } from './movieadd/movieadd.component';
import { SimpleComponent } from './simple/simple.component';

const routes: Routes = [
  { path: 'demo', component: DemoComponent },
  { path: 'simple', component: SimpleComponent },
  { path: 'add', component: MovieaddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
