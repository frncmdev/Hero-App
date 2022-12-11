using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ng_api.Repository;
using ng_api.Repository.Models;

[ApiController]
[Route("api/[controller]")]
public class VillainController : ControllerBase 
{
    private readonly NgAssessDbContext _context;
    public VillainController()
    {
        _context = new NgAssessDbContext();
    }
    [HttpGet]
    public async Task<IActionResult> Get()
    {
        Random _rndm = new Random();
        int idx = _rndm.Next(1,9);
        var value = _context.Villains.SingleOrDefault(item => item.VillainId == idx);
        return Ok(value);
    }
    [HttpGet]
    [Route("all")]
    public async Task<ActionResult<IEnumerable<Villain>>> getAll()
    {
        var value = await _context.Villains.ToListAsync();
        return Ok(value);
    }
}