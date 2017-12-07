import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RepublicRoutingModule } from './republic.routing';
import { PlanetListComponent } from './planet-list/planet-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RepublicRoutingModule
  ],
  declarations: [PlanetListComponent]
})
export class RepublicModule { }
