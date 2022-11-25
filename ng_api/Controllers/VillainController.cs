using Microsoft.AspNetCore.Mvc;
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
        try
        {    
            var value = _context.Villains.ToList();
            return Ok(value);
        }
        catch (System.Exception)
        {
            return BadRequest();            
        }
    }
}