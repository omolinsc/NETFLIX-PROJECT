import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './components/films/films.component';
import { HeroineComponent } from './components/heroine/heroine.component';
import { NavComponent } from './components/nav/nav.component';
import { Films2Component } from './components/films2/films2.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    HeroineComponent,
    NavComponent,
    Films2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
