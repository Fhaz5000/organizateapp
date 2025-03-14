import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TareaService } from './services/tarea.service';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent // Importar AppComponent en lugar de declararlo
  ],
  providers: [TareaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
