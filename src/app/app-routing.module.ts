import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NothingComponent } from './nothing/nothing.component';

const routes: Routes = [
  { path: 'home', component: NothingComponent},
  { path: '', redirectTo : 'home', pathMatch : 'full'},
  { path: '**', redirectTo : 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
