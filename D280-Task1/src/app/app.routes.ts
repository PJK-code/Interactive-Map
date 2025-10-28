import { Routes } from '@angular/router';
import { MapCompComponent } from './map-comp/map-comp.component';


export const routes: Routes = [
    { path: '', redirectTo: '/map-comp', pathMatch: 'full' },
    { path: 'map-comp', component: MapCompComponent },
];

