using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

public interface IUrbanObservatoryHTTP { Task<string> GetJSONData(string url); }

public class UrbanObservatoryHTTP : IUrbanObservatoryHTTP {

    public async Task<string> GetJSONData(string url)
    {
        using (HttpClient client = new HttpClient())
        {
            var response = await client.GetStringAsync(url);
            //var responseString = await response.Content.ReadAsStringAsync();
            return response;
        }
    }
}