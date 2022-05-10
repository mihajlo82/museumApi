using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using museumApi.Data;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;


namespace museumApi
{
    public class Program
    {
        public  museumApiContext _context;
        public Program()
        {
        }
        public Program(museumApiContext context)
        {
            _context = context;
        }
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();


            //var host = CreateHostBuilder(args).Build();

            //using (var scope = host.Services.CreateScope())
            //{
            //    var serviceProvider = scope.ServiceProvider;
            //    try
            //    {
            //      //  SeedData sd = new SeedData(_context);
            //   //     SeedData.Seed();
            //    //    DbContextOptions<museumApiContext> options

            //    }
            //    catch (Exception ex)
            //    {
            //        Debug.WriteLine(ex.Message);
            //    }
            //}

            //host.Run();

        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                  
                    webBuilder.UseStartup<Startup>();
                });
    }
}
