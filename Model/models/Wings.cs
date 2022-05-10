using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.models
{
    public class Wings
    {
        public int Id { get; set; }

        [StringLength(25, MinimumLength =2, ErrorMessage = "Name must contain between 2 and 25 characters!")]
        public string Name { get; set; }

        [StringLength(2999, MinimumLength = 20, ErrorMessage = "Description must contain between 20 and 2999 characters!")]
        public string Description { get; set; }

        public int Type { get; set; }
        public int ArtType { get; set; }

        [StringLength(1499, MinimumLength = 10, ErrorMessage = "ImageUrl must contain between 10 and 1499 characters!")]
        public string ImageUrl { get; set; }
    }
}
