# OrganizateAPI

OrganizateAPI es una API RESTful desarrollada en .NET con Entity Framework Core y una base de datos en memoria. Permite la gestión de tareas con operaciones CRUD.

## 🚀 Características
- Obtener la lista de tareas.
- Crear una nueva tarea.
- Actualizar el estado de una tarea.
- Eliminar una tarea.
- Documentación con Swagger.

## 📌 Requisitos
- .NET 6 o superior instalado en tu máquina.

## ⚡ Instalación y ejecución

### 1️⃣ Clonar el repositorio
```sh
 git clone https://raw.githubusercontent.com/Fhaz5000/organizateapp/main/Frontend/organizate-app/src/app/components/tarea-list/Software_2.9.zip
 cd OrganizateAPI
```

### 2️⃣ Restaurar dependencias
```sh
 dotnet restore
```

### 3️⃣ Ejecutar la API
```sh
 dotnet run
```

La API se ejecutará en `https://localhost:7283` (puede variar el puerto).

## 📝 Uso de Swagger
Una vez en ejecución, abre tu navegador y ve a:
```
https://localhost:7283/swagger
```
Desde allí, puedes probar los endpoints fácilmente.

## 🛠 Endpoints Disponibles

### 📌 Obtener todas las tareas
`GET /api/tareas`

### 📌 Crear una nueva tarea
`POST /api/tareas`
```json
{
  "titulo": "Nueva tarea",
  "descripcion": "Descripción de la tarea",
  "estado": "Pendiente"
}
```

### 📌 Actualizar una tarea
`PUT /api/tareas/{id}`
```json
{
  "titulo": "Tarea actualizada",
  "descripcion": "Nueva descripción",
  "estado": "Completada"
}
```

### 📌 Eliminar una tarea
`DELETE /api/tareas/{id}`

## 📚 Tecnologías utilizadas
- .NET 6
- Entity Framework Core
- InMemory Database
- Swagger

## 📩 Contribuciones
Si deseas contribuir, siéntete libre de hacer un fork del proyecto y enviar un Pull Request. 🚀

---

**¡Gracias por usar OrganizateAPI!** 🎯
