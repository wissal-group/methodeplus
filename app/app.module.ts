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
import { QuiSommesNousComponent } from './qui-sommes-nous/qui-sommes-nous.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ArabePourEnfantsComponent } from './arabe-pour-enfants/arabe-pour-enfants.component';
import { ArabePourAdultesComponent } from './arabe-pour-adultes/arabe-pour-adultes.component';
import { SciencesIslamComponent } from './sciences-islam/sciences-islam.component';
import { ContactService } from './services/contact.service';



const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'qui-sommes-nous', component: QuiSommesNousComponent},
  { path: 'arabe-pour-adultes', component: ArabePourAdultesComponent },
  { path: 'arabe-pour-enfants', component: ArabePourEnfantsComponent },
  { path: 'sciences-islam', component: SciencesIslamComponent },  
 
  { path: '', component: AccueilComponent },
  { path: '**', redirectTo: 'not-found' }
];


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AccueilComponent,
    FooterComponent,
    QuiSommesNousComponent,
    ArabePourEnfantsComponent,
    ArabePourAdultesComponent,
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
  providers: [  ContactService,DatePipe],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
