using GameStore.BLL.Services.Absrtaction;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class GamesController : Controller
    {
        private readonly IGameService gameService;
        public GamesController( IGameService _gameService )
        {
            gameService = _gameService;
        }
        // GET: Games
        public ActionResult Index()
        {
            var games = gameService.GetAllGames();
            return View(games);
        }
    }
}