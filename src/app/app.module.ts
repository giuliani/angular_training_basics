import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { RepublicModule } from './republic/republic.module';
import { DarkModule } from './dark/dark.module';
import { LightModule } from './light/light.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
// import { NotFoundComponent } from './not-found.component';

// import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DarkModule,
    LightModule,
    RepublicModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
