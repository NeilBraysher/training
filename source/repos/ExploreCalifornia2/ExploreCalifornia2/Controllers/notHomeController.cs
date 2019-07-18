using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ExploreCalifornia2.Controllers
{
    public class notHomeController : Controller
    {
        public string Index()
        {
            return "Henlo fren";
        }
    }
}