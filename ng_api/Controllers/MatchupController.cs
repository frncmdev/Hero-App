using Microsoft.AspNetCore.Mvc;
using ng_api.Repository;
using ng_api.Repository.Models;

[ApiController]
[Route("api/[controller]")]
public class MatchUpController: ControllerBase
{
    private readonly NgAssessDbContext _context;
    public MatchUpController()
    {
        _context = new NgAssessDbContext();
    }
    [HttpGet]
    public async Task<IActionResult> Get()
    {
        try
        {
            var value = _context.MatchUps.ToList();
            return Ok(value);
        }
        catch (Exception err)
        {
            return BadRequest();
        }
        
    }
    [HttpPost]
    public async Task<IActionResult> Post(MatchUp matchup)
    {
        MatchUp _matchup = new MatchUp();
        _matchup.MatchupId = matchup.MatchupId;
        _matchup.MatchupTime = matchup.MatchupTime;
        _matchup.Winner = matchup.Winner;
        
        _context.Heroes.Single(h => h.HeroId == matchup.HeroId).MatchUps.Add(_matchup);
        _context.Villains.Single(v => v.VillainId == matchup.VillainId).MatchUps.Add(_matchup);
        await _context.SaveChangesAsync();
        if(await _context.MatchUps.FindAsync(_matchup.MatchupId) is not null)
        {
            return NoContent();
        }
        return BadRequest();
    }
}
