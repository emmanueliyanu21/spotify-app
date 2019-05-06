import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/pages/home.component';
import { TodolistComponent } from './components/pages/todo-list.component';
import { SigninComponent } from './components/pages/signin.component';
import { SignupComponent } from './components/pages/signup.component';
import { LogComponent } from './components/logs/log.component';
import { DetailComponent } from './components/pages/detail.component';
import { ArtistComponent } from './components/pages/artist.component';
import {  AlbumComponent } from './components/pages/album.component'; 
import { AboutService } from './services/about.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TodolistComponent,
    SigninComponent,
    SignupComponent, 
    LogComponent, 
    DetailComponent,
    ArtistComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [AboutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
