using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Mvc;

namespace loader.Controllers
{
    public class loaderController : Controller
    {
        // GET: loader
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult Submit()
        {
            Thread.Sleep(10000);
            return Json("Submited Your Request");
        }
    }
}