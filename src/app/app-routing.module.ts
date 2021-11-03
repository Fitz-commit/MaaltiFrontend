import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { ProfilComponent } from './profil/profil.component';
import { HomeComponent } from './home/home.component';
import { PwforgottenComponent } from './pwforgotten/pwforgotten.component';
import { RouterModule, Routes } from '@angular/router';
import { YtprofilComponent } from './ytprofil/ytprofil.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent},
  { path: 'Search', component: SearchComponent},
  { path: 'Profil', component: ProfilComponent},
  { path: 'YTProfil', component: YtprofilComponent},
  { path: 'Password', component: PwforgottenComponent},
  { path: '', component: HomeComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

  
 }
