using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary1.Entities
{
   public class Developer
    {
        [Key]
        public int ID { get; set; }
        [Required]
        public string Company { get; set; }
        public Developer()
        {
            Games = new List<Game>();
        }
        public virtual ICollection<Game> Games { get; set; }
    }
}
