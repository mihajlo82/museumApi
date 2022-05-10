using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Model.models;
using museumApi.Data;

namespace museumApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WingsController : ControllerBase
    {
        private readonly museumApiContext _context;

        public WingsController(museumApiContext context)
        {
            _context = context;
        }

        // GET: api/Wings
        [EnableCors("AllowOrigin")]
        [HttpGet]
        [Route("GetWings")]
        public async Task<ActionResult<IEnumerable<Wings>>> GetWings()
        {
            return await _context.Wings.ToListAsync();
        }

        // GET: api/Wings/5
        [EnableCors("AllowOrigin")]
        [HttpGet]
        [Route("GetWings/{id}")]
        public async Task<ActionResult<Wings>> GetWings(int id)
        {
            var wings = await _context.Wings.FindAsync(id);

            if (wings == null)
            {
                return NotFound();
            }

            return wings;
        }

        // PUT: api/Wings/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [EnableCors("AllowOrigin")]
        [HttpPut]
        [Route("editWing/{id}")]
        public async Task<IActionResult> PutWings(int id, Wings wings)
        {
            if (id != wings.Id)
            {
                return BadRequest();
            }

            _context.Entry(wings).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WingsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(wings);
        }

        // POST: api/Wings
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Wings>> PostWings(Wings wings)
        {
            _context.Wings.Add(wings);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWings", new { id = wings.Id }, wings);
        }

        // DELETE: api/Wings/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWings(int id)
        {
            var wings = await _context.Wings.FindAsync(id);
            if (wings == null)
            {
                return NotFound();
            }

            _context.Wings.Remove(wings);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool WingsExists(int id)
        {
            return _context.Wings.Any(e => e.Id == id);
        }


        [EnableCors("AllowOrigin")]
        [HttpGet]
        [Route("GetFilterWing/{value}/{phrase}")]
        public async Task<ActionResult<IEnumerable<Wings>>> GetFilterWing(int value, string phrase )
        {

            try
            {
                if (value != 0 && phrase == "__MAGIC_LOGIC_NO_STRING__")
                {
                    return await _context.Wings.Where(x => x.ArtType == value).ToListAsync();
                }
                else if (value != 0 && phrase != "__MAGIC_LOGIC_NO_STRING__")
                {
                    return await _context.Wings.Where(x => x.ArtType == value).Where(x => x.Name.Contains(phrase)).ToListAsync();
                }
                else if (value == 0 && phrase != "__MAGIC_LOGIC_NO_STRING__")
                {
                    return await _context.Wings.Where(x => x.Name.Contains(phrase)).ToListAsync();
                }
                else
                {
                    return await _context.Wings.ToListAsync();
                }
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
