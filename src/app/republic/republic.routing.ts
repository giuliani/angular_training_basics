import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlanetListComponent } from './planet-list/planet-list.component';

const routes: Routes = [
    { 
        path: 'republic',
        component: PlanetListComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RepublicRoutingModule { }