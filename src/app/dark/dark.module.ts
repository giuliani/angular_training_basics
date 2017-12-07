import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { DarkRoutingModule } from './dark.routing';
import { SithListComponent } from './sith-list/sith-list.component';
import { DarkService } from '../services/dark.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DarkRoutingModule
  ],
  declarations: [SithListComponent],
  providers: [DarkService]
})
export class DarkModule { }
