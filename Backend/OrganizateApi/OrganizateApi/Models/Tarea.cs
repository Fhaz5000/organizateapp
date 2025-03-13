namespace OrganizateAPI.Models
{
    public class Tarea
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Descripcion { get; set; }
        public EstadoTarea Estado { get; set; } = EstadoTarea.Pendiente;
    }

    public enum EstadoTarea
    {
        Pendiente,
        Completada
    }
}
