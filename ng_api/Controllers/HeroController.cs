using Microsoft.AspNetCore.Mvc;
using ng_api.Repository.Models;
using ng_api.Repository;

[ApiController]
[Route("api/[controller]")]
public class HeroController : ControllerBase 
{
    private readonly NgAssessDbContext _context;
    public HeroController()
    {
        _context = new NgAssessDbContext();
    }
    [HttpGet]
    public async Task<IActionResult> Get()
    {
        var value = _context.Heroes.ToList();
        return Ok(value);
    }
}