using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UrbanObservatory.Model
{
    public class QueryString
    {
        // queryString for URL; remained for UI validation.
        private string queryString; 
        private string startTime;
        private string endTime;
        private string buffer;
        private string bbox;
        private string sensor_type;

        public QueryString(string startTime, string endTime, string buffer, string bbox, string sensor_type){
            
            this.startTime = startTime;
            this.endTime = endTime;
            this.buffer = buffer;
            this.bbox = bbox;
            this.sensor_type = sensor_type;
            this.queryString = buildURL(this.startTime, this.endTime, this.buffer, this.bbox, this.sensor_type);
        
        }

        private string buildURL(string startTime, string endTime, string buffer, string bbox, string sensor_type){

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
   
            return queryString.ToString();
        }

        public string getQueryString() {
            return queryString;
        }
    }

    
}
