import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetenceComponent } from './competence/competence.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { InformationComponent } from './information/information.component';
import { MonCVComponent } from './mon-cv/mon-cv.component';
import { ProfessionalskillsComponent } from './professionalskills/professionalskills.component';

const routes: Routes = [
  { path: 'home', component: MonCVComponent},
  { path: 'info', component: InformationComponent },
  { path: 'competence', component: CompetenceComponent },
  { path: 'experience', component: ProfessionalskillsComponent },
  { path: 'formation', component: EducationComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo : 'home', pathMatch : 'full'},
  { path: '**', redirectTo : 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
