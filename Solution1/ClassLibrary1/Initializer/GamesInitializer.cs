using ClassLibrary1.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary1.Initializer
{
   public class GamesInitializer:DropCreateDatabaseAlways<ApplicationContext>
    {
        protected override void Seed(ApplicationContext context)
        {
        
        var ganre = new List<Ganre> {
            new Ganre{ Name="Action"},
            new Ganre{ Name="RPG"},
            new Ganre{ Name="Shooter"},
            new Ganre{ Name="Sunbox"},
            new Ganre{ Name="Sport"}
        };
            var developers = new List<Developer> {

             new Developer{ Company="RockStar"},
              new Developer{ Company="EA"},
               new Developer{ Company="Playrix"},
                new Developer{ Company="Activision"}
        };
            var games = new List<Game> {
                new Game{ Name="GTA 5",
                Price=26,
                Year=2013,
                Developer=developers.FirstOrDefault(x=>x.Company=="RockStar"),
                Ganre=ganre.FirstOrDefault(x=>x.Name=="RPG"),
                Image="https://st2.depositphotos.com/3762585/5294/v/450/depositphotos_52945639-stock-illustration-allah-sign.jpg"

                },
                   new Game{ Name="Minecraft",
                Price=26,
                Year=2010,
                Developer=developers.FirstOrDefault(x=>x.Company=="Playrix"),
                Ganre=ganre.FirstOrDefault(x=>x.Name=="Sunbox"),
                Image="https://images.androeed.ru/icons/2019/12/28/w_160_minecraft-pocket-edition-ico.png"
                },
                      new Game{ Name="Assassin",
                Price=100,
                Year=2019,
                Developer=developers.FirstOrDefault(x=>x.Company=="EA"),
                Ganre=ganre.FirstOrDefault(x=>x.Name=="RPG"),
                Image="https://www.meme-arsenal.com/memes/f6ecf663abdf9c68333ef866ee45958d.jpg"

                },
                         new Game{ Name="CS:GO",
                Price=12,
                Year=2009,
                Developer=developers.FirstOrDefault(x=>x.Company=="Activision"),
                Ganre=ganre.FirstOrDefault(x=>x.Name=="Shooter"),
                Image="https://toppng.com/uploads/preview/gta-cj-11551049227g7kyjr83qs.png"

                },

            };

            context.Developers.AddRange(developers);
            context.Games.AddRange(games);
            context.Ganres.AddRange(ganre);
            context.SaveChanges();
            base.Seed(context);
        }
    }
}
