using System;
using HeroicSamples.BootstrapAlerts.Extensions.Alerts;
using Microsoft.AspNetCore.Mvc;

namespace HeroicSamples.BootstrapAlerts.Controllers
{
    public class ApiController : Controller
    {
        public IActionResult Success()
        {
            return Ok(DateTime.UtcNow.ToString()).WithSuccess("Success!", "The API call worked!");
        }

        public IActionResult Error()
        {
            return BadRequest().WithDanger("Failed!", "The API didn't like your request...");
        }
    }
}
