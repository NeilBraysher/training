using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace ExploreCalifornia2
{
    public class Startup
    {

        private readonly IConfiguration configuration;

        // uses ASP.Net's internal configuration object
        public Startup(IConfiguration configuration)
        {
            this.configuration = configuration;
        }
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton<FeatureToggles>(x => new FeatureToggles {
                DeveloperExceptions = configuration.GetValue<bool>("FeatureToggles:DeveloperExceptions")
            });
            services.AddMvc();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, FeatureToggles features)
        {

            app.UseExceptionHandler("/error.html");

            if (features.DeveloperExceptions)
            {
                app.UseDeveloperExceptionPage();
            }
            
            app.Use(async (context, next) =>
            {
                if (context.Request.Path.Value.Contains("invalid"))
                    throw new Exception("ERR NERR!");
                await next();
            });

            app.UseMvc(routes =>
            {
                routes.MapRoute("Default",
                    "{controller=Home}/{action=Index}/{id?}"
                );
            });

            app.UseFileServer();
        }
    }
}
