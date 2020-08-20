using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary1.Entities
{
   public class Game
    {
        [Key]
        public int ID { get; set; }
        [Required]
        public string Name { get; set; }
        public string Desc { get; set; }
        [Required]
        public int Year { get; set; }
        [Required]
        public float Price { get; set; }
        public string Image { get; set; }
        public int GanreID { get; set; }
        public int DeveloperID { get; set; }
        public virtual Ganre Ganre { get; set; }
        public virtual Developer Developer { get; set; }
    }
}
