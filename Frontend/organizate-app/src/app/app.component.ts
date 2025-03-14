import { Component } from '@angular/core';
import { TareaListComponent } from './components/tarea-list/tarea-list.component';
import { TareaFormComponent } from './components/tarea-form/tarea-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [TareaListComponent, TareaFormComponent] 
})
export class AppComponent {
  title = 'Organizate';
}
