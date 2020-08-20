namespace ClassLibrary1
{
    using ClassLibrary1.Entities;
    using ClassLibrary1.Initializer;
    using System;
    using System.Data.Entity;
    using System.Linq;

    public class ApplicationContext : DbContext
    {
        
        public ApplicationContext()
            : base("name=ApplicationContext")
        {
            Database.SetInitializer(new GamesInitializer());
        }
        public DbSet<Ganre> Ganres { get; set; }
        public DbSet<Developer> Developers { get; set; }
        public DbSet<Game> Games { get; set; }

        // Add a DbSet for each entity type that you want to include in your model. For more information 
        // on configuring and using a Code First model, see http://go.microsoft.com/fwlink/?LinkId=390109.

        // public virtual DbSet<MyEntity> MyEntities { get; set; }
    }

    //public class MyEntity
    //{
    //    public int Id { get; set; }
    //    public string Name { get; set; }
    //}
}