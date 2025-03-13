using Microsoft.AspNetCore.Mvc;
using OrganizateAPI.Data;
using OrganizateAPI.Models;
using System.Collections.Generic;
using System.Linq;

namespace OrganizateAPI.Controllers
{
    [ApiController]
    [Route("api/tareas")]
    public class TareasController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TareasController(AppDbContext context)
        {
            _context = context;
        }

        // Obtener todas las tareas
        [HttpGet]
        public ActionResult<IEnumerable<Tarea>> GetTareas()
        {
            return _context.Tareas.ToList();
        }

        // Crear una nueva tarea
        [HttpPost]
        public ActionResult<Tarea> CrearTarea(Tarea tarea)
        {
            _context.Tareas.Add(tarea);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetTareas), new { id = tarea.Id }, tarea);
        }

        // Actualizar una tarea
        [HttpPut("{id}")]
        public IActionResult ActualizarTarea(int id, Tarea tarea)
        {
            var tareaExistente = _context.Tareas.Find(id);
            if (tareaExistente == null) return NotFound();

            tareaExistente.Titulo = tarea.Titulo;
            tareaExistente.Descripcion = tarea.Descripcion;
            tareaExistente.Estado = tarea.Estado;
            _context.SaveChanges();

            return NoContent();
        }

        // Eliminar una tarea
        [HttpDelete("{id}")]
        public IActionResult EliminarTarea(int id)
        {
            var tarea = _context.Tareas.Find(id);
            if (tarea == null) return NotFound();

            _context.Tareas.Remove(tarea);
            _context.SaveChanges();
            return NoContent();
        }
    }
}
