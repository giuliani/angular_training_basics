import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JediListComponent } from './jedi-list/jedi-list.component';

const routes: Routes = [
    {
        path: 'light',
        component: JediListComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LightRoutingModule { }