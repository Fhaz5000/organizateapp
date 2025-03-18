import { Component } from '@angular/core';
import { TareaListComponent } from './components/tarea-list/tarea-list.component';
import { TareaFormComponent } from './components/tarea-form/tarea-form.component';
import { TareaService } from './services/tarea.service';
import { Tarea, EstadoTarea } from './models/tarea.model';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [TareaListComponent, TareaFormComponent] 
})
export class AppComponent {
  title = 'Organizate';
  constructor(private tareaService: TareaService,private router: Router) {}

  
  
  
}
