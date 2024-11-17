import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FormComponent } from './form/form.component';
import { PostedComponent } from './posted/posted.component';
import { UsersComponent } from './users/users.component';
import {FormsModule} from "@angular/forms";
import { ngrxStore } from '../state/ngrxStore';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PostedComponent,
    UsersComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(ngrxStore),
    FormsModule,
    EffectsModule.forRoot([]),

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
