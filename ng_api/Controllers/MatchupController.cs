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
    public async Task<IActionResult> Post([FromBody] MatchUp matchup)
    {
        _context.MatchUps.Add(matchup);
        try
        {
            return Ok();
        }
        catch (System.Exception)
        {
            return BadRequest();
        }
    }
}
