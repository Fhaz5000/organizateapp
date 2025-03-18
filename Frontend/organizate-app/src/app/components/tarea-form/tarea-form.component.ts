import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../models/tarea.model';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-tarea-form',
  imports: [ReactiveFormsModule],
  templateUrl: './tarea-form.component.html',
  styleUrl: './tarea-form.component.css'
})
export class TareaFormComponent {
  tareaForm: FormGroup;

  constructor(private fb: FormBuilder, private tareaService: TareaService) {
    this.tareaForm = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  agregarTarea() {
    if (this.tareaForm.valid) {
      const nuevaTarea: Tarea = this.tareaForm.value;
      this.tareaService.agregarTarea(nuevaTarea).subscribe({
        next: () => {
          alert('Tarea creada con éxito');
          this.tareaForm.reset();
          window.location.reload();
        },
        error: (err) => console.error('Error al crear la tarea', err)
      });
    }
  }
}