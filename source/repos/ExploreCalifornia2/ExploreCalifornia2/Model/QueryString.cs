using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace ExploreCalifornia2.Model
{
    public class QueryString
    {
        private string queryString; 

        public QueryString(string startTime, string endTime, string buffer, string bbox, string sensor_type){

            StringBuilder queryString = new StringBuilder($"https://api.newcastle.urbanobservatory.ac.uk/api/v1/sensors/data/raw.json?start_time={startTime}&end_time={endTime}");

            if (!String.IsNullOrEmpty(buffer)){
                queryString.Append("&buffer=");
                queryString.Append(buffer);
            }
            if (!String.IsNullOrEmpty(bbox))
            {
                queryString.Append("&bbox=");
                queryString.Append(bbox);
            }
            if (!String.IsNullOrEmpty(sensor_type))
            {
                queryString.Append("&sensor_type=");
                queryString.Append(sensor_type);
            }
   
            this.queryString = queryString.ToString();
        }

        public string getQueryString() {
            return queryString;
        }
    }

    
}
