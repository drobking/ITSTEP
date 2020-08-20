using ClassLibrary1.Repository.Abstract;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary1.Repository.Implemetation
{
    ////////////////CRUD
    public class ApplicationRepository<TEntity> : IGeneticRepository<TEntity> where TEntity:class
    {
        private readonly DbContext context;
        private readonly DbSet<TEntity> set;
        public ApplicationRepository(DbContext _context)
        {
            context = _context;
            set=context.Set<TEntity>();
        }
        public void Create(TEntity entity)
        {
            set.Add(entity);
            Save();
        }
     

        public void Delete(TEntity entity)
        {
            set.Remove(entity);
            
            Save();
        }

        public IEnumerable<TEntity> GetAll()
        {
            return set.AsEnumerable();
        }

        public TEntity GetByID(int id)
        {
            return set.Find(id);
        }

        public void Update(TEntity entity)
        {
            context.Entry(entity).State = EntityState.Modified;
            Save();
        }
        private void Save() {
            context.SaveChanges();
        }
    }
}
