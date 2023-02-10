using API.DTOs;
using API.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        // Inject JsonContactsService
        private JsonFileService _service;

        public ContactsController(JsonFileService service)
        {
            _service = service;
        }

        // CRUD HTTP Requests Handler

        // Create a read contact http get request handler
        [HttpGet]
        public IActionResult GetContacts()
        {
            return Ok(_service.GetContacts());
        }

        // Create a read contact http get request handler
        [HttpGet("{id}")]
        public IActionResult GetContactById(Guid id)
        {
            var contact = _service.GetContactById(id);
            if (contact == null)
            {
                return NotFound();
            }
            return Ok(contact);
        }

        // Create a create contact http post request handler
        [HttpPost]
        public IActionResult AddContact(CreateContactDTO createContact)
        {
            var contact = _service.AddContact(createContact);
            return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + contact.Id, contact);
        }

        // Create a update contact http put request handler
        [HttpPut("{id}")]
        public IActionResult UpdateContact(Guid id, UpdateContactDTO updateContact)
        {
            var contact = _service.GetContactById(id);
            if (contact == null)
            {
                return NotFound();
            }
            _service.UpdateContact(updateContact);
            return NoContent();
        }

        // Create a delete contact http delete request handler
        [HttpDelete("{id}")]
        public IActionResult DeleteContact(Guid id)
        {
            var contact = _service.GetContactById(id);
            if (contact == null)
            {
                return NotFound();
            }
            _service.DeleteContact(id);
            return NoContent();
        }
    }
}
