using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace ExploreCalifornia2.Services
{
    public class RestCallouts
    {
        public string GetReleases(string url)
        {
            using (var httpClient = new HttpClient()) { 
                var response = httpClient.GetStringAsync(new Uri(url)).Result;
                return response;
            }
        }

    }
}
