using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ng_api.Models;

namespace ng_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HeroesController : ControllerBase
    {
        private readonly NgAssessDbContext _context;

        public HeroesController(NgAssessDbContext context)
        {
            _context = context;
        }

        // GET: api/Heroes
        [HttpGet]
        public async Task<ActionResult<Hero>> GetHeroes()
        {
            Random r = new Random();
            int idx = r.Next(1,9);
            return await _context.Heroes.FindAsync(idx);
        }

    }
}
