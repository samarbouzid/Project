using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRUDPatient.Models
{
    public class Patient
    {

        public int Id { get; set; }

        public string Name { get; set; }

        public string AfterName { get; set; }

        public string Phone { get; set; }

        public string Address { get; set; }

        public DateTime BirthDate { get; set; }

        public bool isActive { get; set; }

    }
}
