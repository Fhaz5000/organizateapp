import { Routes } from '@angular/router';
import { TareaFormComponent } from './components/tarea-form/tarea-form.component';
import { TareaListComponent } from './components/tarea-list/tarea-list.component';
export const routes: Routes = [
    { path: '', component: TareaListComponent },       
  { path: 'crear-tarea', component: TareaFormComponent }, 
  { path: '**', redirectTo: '', pathMatch: 'full' }   
];
