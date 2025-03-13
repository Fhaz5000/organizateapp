using Microsoft.EntityFrameworkCore;
using OrganizateAPI.Models;

namespace OrganizateAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Tarea> Tareas { get; set; }
    }
}
