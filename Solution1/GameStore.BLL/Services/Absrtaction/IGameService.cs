using ClassLibrary1.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GameStore.BLL.Services.Absrtaction
{
   public interface IGameService
    {
        ICollection<Game> GetAllGames();
    }
}
