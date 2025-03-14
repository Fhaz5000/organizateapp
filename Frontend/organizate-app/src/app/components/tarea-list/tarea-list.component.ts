import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareaService } from '../../services/tarea.service';
import { Tarea, EstadoTarea } from '../../models/tarea.model';

@Component({
  selector: 'app-tarea-list',
  standalone: true,
  templateUrl: './tarea-list.component.html',
  styleUrls: ['./tarea-list.component.css'],
  imports: [CommonModule]
})
export class TareaListComponent implements OnInit {
  tareas: Tarea[] = [];
  EstadoTarea = EstadoTarea; // 🔹 Exponer EstadoTarea para el HTML

  constructor(private tareaService: TareaService) {}

  ngOnInit(): void {
    this.cargarTareas();
  }

  cargarTareas(): void {
    this.tareaService.obtenerTareas().subscribe(data => {
      this.tareas = data;
    });
  }

  alternarEstado(tarea: Tarea): void {
    tarea.estado = tarea.estado === EstadoTarea.Pendiente ? EstadoTarea.Completada : EstadoTarea.Pendiente;
    this.tareaService.actualizarTarea(tarea).subscribe();
  }

  eliminarTarea(id?: number): void {
    if (id === undefined) return;

    this.tareaService.eliminarTarea(id).subscribe(() => {
      this.tareas = this.tareas.filter(t => t.id !== id);
    });
  }
}
