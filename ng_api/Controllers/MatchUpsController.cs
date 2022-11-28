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
    public class MatchUpsController : ControllerBase
    {
        private readonly NgAssessDbContext _context;

        public MatchUpsController(NgAssessDbContext context)
        {
            _context = context;
        }

        // GET: api/MatchUps
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MatchUp>>> GetMatchUps()
        {
            return await _context.MatchUps.ToListAsync();
        }

        // GET: api/MatchUps/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MatchUp>> GetMatchUp(int id)
        {
            var matchUp = await _context.MatchUps.FindAsync(id);

            if (matchUp == null)
            {
                return NotFound();
            }

            return matchUp;
        }

        // PUT: api/MatchUps/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMatchUp(int id, MatchUp matchUp)
        {
            if (id != matchUp.MatchupId)
            {
                return BadRequest();
            }

            _context.Entry(matchUp).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MatchUpExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/MatchUps
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<MatchUp>> PostMatchUp(MatchUp matchUp)
        {
            _context.MatchUps.Add(matchUp);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (MatchUpExists(matchUp.MatchupId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetMatchUp", new { id = matchUp.MatchupId }, matchUp);
        }

        // DELETE: api/MatchUps/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMatchUp(int id)
        {
            var matchUp = await _context.MatchUps.FindAsync(id);
            if (matchUp == null)
            {
                return NotFound();
            }

            _context.MatchUps.Remove(matchUp);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MatchUpExists(int id)
        {
            return _context.MatchUps.Any(e => e.MatchupId == id);
        }
    }
}
