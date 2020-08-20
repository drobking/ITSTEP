using ClassLibrary1.Entities;
using ClassLibrary1.Repository.Abstract;
using GameStore.BLL.Services.Absrtaction;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GameStore.BLL.Services.Implement
{
    public class GameService : IGameService
    {
        private readonly IGeneticRepository<Game> repository;
        public GameService(IGeneticRepository<Game> _repository)
        {
            repository = _repository;
        }
        public ICollection<Game> GetAllGames()
        {
           return repository.GetAll().ToList();
        }
    }
}
