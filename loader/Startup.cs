using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(loader.Startup))]
namespace loader
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
