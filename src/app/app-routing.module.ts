import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';

const routes: Routes = [
  { path: 'home', component: HeroComponent},
  { path: '', redirectTo : 'home', pathMatch : 'full'},
  { path: '**', redirectTo : 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
