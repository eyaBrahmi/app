import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormationPageComponent } from './formation-page/formation-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InscritComponent } from './inscrit/inscrit.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'formation', component: FormationPageComponent },
  { path: '', component: HomePageComponent },
  { path:'login', component: LoginComponent},
  { path:'inscrit',component: InscritComponent},
  { path: 'formation-page',component: FormationPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
