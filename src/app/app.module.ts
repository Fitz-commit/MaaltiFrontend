import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { ChartModule } from 'angular2-chartjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { Service } from './data/service';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { PwforgottenComponent } from './pwforgotten/pwforgotten.component';
import { YtprofilComponent } from './ytprofil/ytprofil.component';
import { ChartComponent } from './chart/chart.component';
import { StartComponent } from './start/start.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    FooterComponent,
    LoginComponent,
    ProfilComponent,
    HomeComponent,
    SearchComponent,
    PwforgottenComponent,
    YtprofilComponent,
    ChartComponent,
    StartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartModule,
    
  
    
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
