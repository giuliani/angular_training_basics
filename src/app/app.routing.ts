import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlanetListComponent } from './republic/planet-list/planet-list.component';
import { AppComponent } from './app.component';
// import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
    // { 
    //     path: '',
    //     component: AppComponent
    // },
    { 
        path: 'republic',
        component: PlanetListComponent
    }
    // ,
    // { 
    //     path: '**',
    //     component: NotFoundComponent
    // }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }