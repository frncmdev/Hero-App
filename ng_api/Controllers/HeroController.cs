using Microsoft.AspNetCore.Mvc;
using ng_api.Repository.Models;
using ng_api.Repository;

[ApiController]
[Route("api/[controller]")]
public class HeroController : ControllerBase 
{
    private readonly Random _rndm;
    private readonly NgAssessDbContext _context;
    public HeroController()
    {
        _context = new NgAssessDbContext();
        _rndm = new Random();
    }
    [HttpGet]
    public async Task<IActionResult> Get()
    {
        Random _rndm = new Random();
        int idx = _rndm.Next(1,9);
        var value = _context.Heroes.SingleOrDefault(item => item.HeroId == idx);
        return Ok(value);
    }
}