using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ExploreCalifornia2.Model;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using ExploreCalifornia2.Services;

namespace ExploreCalifornia2.Controllers
{
    public class QueryController : Controller
    {
        public IActionResult Index(string id, string derp)
        {
            String heck = id + derp;
            return new ContentResult { Content = heck };
        }

        public IActionResult Query(string startTime, string endTime, string buffer, string bbox, string sensor_type)
        {
            QueryString queryString = new QueryString(startTime, endTime, buffer, bbox, sensor_type);
            RestCallouts restCallout = new RestCallouts();
            return new ContentResult { Content = restCallout.GetReleases(queryString.getQueryString()) };
        }
    }
}