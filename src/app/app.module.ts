import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursCoranComponent } from './cours-coran/cours-coran.component';
import { CoursIslamComponent } from './cours-islam/cours-islam.component';
import { QuiSommesNousComponent } from './qui-sommes-nous/qui-sommes-nous.component';
import { RegistrationComponent } from './registration/registration.component';
import { FaireDonComponent } from './faire-don/faire-don.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ApprenantsService } from './services/apprenant/ApprenantsService';
import { ArabePourEnfantsComponent } from './arabe-pour-enfants/arabe-pour-enfants.component';
import { ArabePourAdultesComponent } from './arabe-pour-adultes/arabe-pour-adultes.component';
import { AnglaisComponent } from './anglais/anglais.component';
import { FrancaisFleComponent } from './francais-fle/francais-fle.component';
import { SoutienScolaireComponent } from './soutien-scolaire/soutien-scolaire.component';
import { SciencesIslamComponent } from './sciences-islam/sciences-islam.component';



const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'qui-sommes-nous', component: QuiSommesNousComponent},
  { path: 'arabe-pour-adultes', component: ArabePourAdultesComponent },
  { path: 'arabe-pour-enfants', component: ArabePourEnfantsComponent },
  { path: 'anglais', component: AnglaisComponent },
  { path: 'sciences-islam', component: SciencesIslamComponent },
  
  { path: 'soutien-scolaire', component: SoutienScolaireComponent },
  { path: 'francais-fle', component: FrancaisFleComponent },
  { path: 'faire-don', component: FaireDonComponent },
  { path: '', component: AccueilComponent },
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
    RegistrationComponent,
    FaireDonComponent,
    ArabePourEnfantsComponent,
    ArabePourAdultesComponent,
    AnglaisComponent,
    FrancaisFleComponent,
    SoutienScolaireComponent,
    SciencesIslamComponent
  	],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
	  ReactiveFormsModule,  
    RouterModule.forRoot(appRoutes,{scrollPositionRestoration: 'enabled'})

  
  ],
  providers: [ApprenantsService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
