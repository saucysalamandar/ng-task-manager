import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found.component';

export const routes: Routes = [ 
     { path: '', redirectTo: "/projects", pathMatch: "full" },
     { path: '**', component: NotFoundComponent }
];

@NgModule({
     imports: [
          RouterModule.forRoot(routes),
     ],
     exports: [
          RouterModule
     ]
})
export class AppRoutingModule {

}