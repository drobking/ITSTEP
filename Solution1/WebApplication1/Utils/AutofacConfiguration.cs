using Autofac;
using Autofac.Integration.Mvc;
using ClassLibrary1;
using ClassLibrary1.Repository.Abstract;
using ClassLibrary1.Repository.Implemetation;
using GameStore.BLL.Services.Absrtaction;
using GameStore.BLL.Services.Implement;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Utils
{
    public static class AutofacConfiguration
    {
        public static void ConfigurateContainer() {
            var builder = new ContainerBuilder();


            builder.RegisterControllers(typeof(MvcApplication).Assembly);
            builder.RegisterType<ApplicationContext>().As<DbContext>();
            builder.RegisterGeneric(typeof(ApplicationRepository<>)).As(typeof(IGeneticRepository<>));
            builder.RegisterType<GameService>().As<IGameService>();

            DependencyResolver.SetResolver(new AutofacDependencyResolver(builder.Build()));
        }
    }
}