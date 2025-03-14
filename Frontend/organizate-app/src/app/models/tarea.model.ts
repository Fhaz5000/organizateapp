export enum EstadoTarea {
    Pendiente = "Pendiente",
    Completada = "Completada"
  }
  
  export interface Tarea {
    id?: number;
    titulo: string;
    descripcion: string;
    estado: EstadoTarea;
  }
  