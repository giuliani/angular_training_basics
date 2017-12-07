import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SithListComponent } from './sith-list/sith-list.component';

const routes: Routes = [
    { 
        path: 'dark',
        component: SithListComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DarkRoutingModule { }