import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { FormsModule } from "@angular/forms"
import { 
      MatSelectModule,
      MatRadioModule,
      MatCardModule
    } from "@angular/material";
import { NgClassComponent } from './ng-class/ng-class.component'

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    NgClassComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
