import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { LightRoutingModule } from './light.routing';
import { JediListComponent } from './jedi-list/jedi-list.component';
import { LightService } from '../services/light.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    LightRoutingModule
  ],
  declarations: [JediListComponent],
  providers: [LightService]
})
export class LightModule { }
