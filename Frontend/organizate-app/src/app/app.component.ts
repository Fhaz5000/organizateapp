import { Component } from '@angular/core';
import { TareaListComponent } from './components/tarea-list/tarea-list.component';
import { TareaFormComponent } from './components/tarea-form/tarea-form.component';
import { TareaService } from './services/tarea.service';
import { Tarea, EstadoTarea } from './models/tarea.model';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [TareaListComponent, TareaFormComponent] 
})
export class AppComponent {
  title = 'Organizate';
  constructor(private tareaService: TareaService) {}

  crearTarea() {
    const nuevaTarea: Tarea = {
      titulo: 'Nueva tarea',
      descripcion: 'Descripción de la tarea',
      estado: EstadoTarea.Pendiente // Usar el enum correctamente
    };

    this.tareaService.agregarTarea(nuevaTarea).subscribe({
      next: (tareaCreada) => console.log('Tarea creada:', tareaCreada),
      error: (error) => console.error('Error al crear la tarea:', error)
    });
  }
}
