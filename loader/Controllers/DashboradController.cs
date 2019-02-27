using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace loader.Controllers
{
    public class DashboradController : Controller
    {
        // GET: Dashborad
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Index1()
        {
            return View();
        }
        public ActionResult Dashborad()
        {
            return View();
        }
        public ActionResult DashboradPartial()
        {
            return PartialView();
        }

    }
}