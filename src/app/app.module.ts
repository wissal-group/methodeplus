import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursCoranComponent } from './cours-coran/cours-coran.component';
import { CoursIslamComponent } from './cours-islam/cours-islam.component';
import { QuiSommesNousComponent } from './qui-sommes-nous/qui-sommes-nous.component';
import { LangueArabeAdulteComponent } from './langue-arabe-adulte/langue-arabe-adulte.component';
import { LangueArabeEnfantsComponent } from './langue-arabe-enfants/langue-arabe-enfants.component';
import { RegistrationComponent } from './registration/registration.component';

const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'qui-sommes-nous', component: QuiSommesNousComponent},
  { path: 'langue-arabe-adulte', component: LangueArabeAdulteComponent },
  { path: 'langue-arabe-enfants', component: LangueArabeEnfantsComponent },
  { path: 'cours-de-coran', component: CoursCoranComponent },
  { path: 'cours-islam', component: CoursIslamComponent },
  { path: 'reg', component: RegistrationComponent },
  { path: '**', redirectTo: 'not-found' }
];


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AccueilComponent,
    FooterComponent,
    CoursCoranComponent,
    CoursIslamComponent,
    QuiSommesNousComponent,
    LangueArabeAdulteComponent,
    LangueArabeEnfantsComponent,
    RegistrationComponent
	],
  imports: [
    BrowserModule,
    FormsModule,
   
	ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
