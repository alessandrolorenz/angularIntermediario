import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLifeCycleComponent } from './main-life-cycle/main-life-cycle.component';
import { LifecicleChildComponent } from './main-life-cycle/lifecicle-child/lifecicle-child.component';
import { ChildChildComponent } from './main-life-cycle/lifecicle-child/child-child/child-child.component';
import { CheckComponent } from './check/check.component';
import { CheckChildComponent } from './check/check-child/check-child.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLifeCycleComponent,
    LifecicleChildComponent,
    ChildChildComponent,
    CheckComponent,
    CheckChildComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
