import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Module1Module } from './module1/module1.module';
import { Module2Module } from './module2/module2.module';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    Module1Module,
    Module2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
