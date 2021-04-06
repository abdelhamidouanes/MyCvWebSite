import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { NavHComponent } from './nav-h/nav-h.component';
import { ProfileHComponent } from './profile-h/profile-h.component';
import { InfoPHComponent } from './info-p-h/info-p-h.component';
import { ButtonPHComponent } from './button-p-h/button-p-h.component';
import { InformationComponent } from './information/information.component';
import { AboutIComponent } from './about-i/about-i.component';
import { BasicIComponent } from './basic-i/basic-i.component';
import { SocialbuttonHComponent } from './socialbutton-h/socialbutton-h.component';
import { ProfessionalskillsComponent } from './professionalskills/professionalskills.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { FeelfreeCComponent } from './feelfree-c/feelfree-c.component';
import { FooterComponent } from './footer/footer.component';
import { BgService } from './Services/bg.service';
import { Nav2HComponent } from './nav2-h/nav2-h.component';
import { AfficheMenuService } from './Services/afficheMenu.service';
import { NavigateButtonComponent } from './navigate-button/navigate-button.component';
import { SliderComponent } from './slider/slider.component';
import { ProfilePicService } from './Services/profilePic.service';
import { ThemePreferencesService } from './Services/themePreferences.service';
import { ProfessionalSkillsService } from './Services/professionalSkills.service';
import { CompetenceComponent } from './competence/competence.component';
import { FormationService } from './Services/formation.service';
import { CompetenceService } from './Services/competence.service';
import { MonCVComponent } from './mon-cv/mon-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavHComponent,
    ProfileHComponent,
    InfoPHComponent,
    ButtonPHComponent,
    InformationComponent,
    AboutIComponent,
    BasicIComponent,
    SocialbuttonHComponent,
    ProfessionalskillsComponent,
    EducationComponent,
    ContactComponent,
    FeelfreeCComponent,
    FooterComponent,
    Nav2HComponent,
    NavigateButtonComponent,
    SliderComponent,
    CompetenceComponent,
    MonCVComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BgService,
              AfficheMenuService,
              ProfilePicService,
              ThemePreferencesService,
              ProfessionalSkillsService,
              FormationService,
              CompetenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
