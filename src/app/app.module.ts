import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormationCardComponent } from './formation-card/formation-card.component';
import { FooterComponent } from './footer/footer.component';
import { FormationPageComponent } from './formation-page/formation-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { InscritComponent } from './inscrit/inscrit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FormationCardComponent,
    FooterComponent,
    FormationPageComponent,
    HomePageComponent,
    LoginComponent,
    InscritComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
