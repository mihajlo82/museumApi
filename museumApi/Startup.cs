using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using museumApi.Data;

namespace museumApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "museumApi", Version = "v1" });
            });

            services.AddDbContext<museumApiContext>(options =>
                    options.UseSqlServer(Configuration.GetConnectionString("museumApiContext")));

            //   builder.Services.AddTransient<DataSeeder>();
          //  services.AddTransient<SeedData>;
           
            // Named Policy
            services.AddCors(options =>
            {
                options.AddPolicy(name: "AllowOrigin",
                    builder =>
                    {
                        builder.AllowAnyOrigin()
                               .AllowAnyHeader()
                               .AllowAnyMethod();
                    });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "museumApi v1"));
            }


            app.UseHttpsRedirection();
            
            app.UseRouting();

            //app.UseCors(builder =>
            //{
            //    builder
            //    .AllowAnyOrigin()
            //    .AllowAnyMethod()
            //    .AllowAnyHeader();
            //}); 

            app.UseCors("AllowOrigin");


            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
