using API.Models;
using System.Text.Json;

namespace API.Data
{
    public class JsonFileRepository
    {
        public List<Contact> Contacts { get; set; }

        // create a repository that reads content inside a contacts.json and stores it on Contacts property
        public JsonFileRepository()
        {
            var json = File.ReadAllText("contacts.json");
            Contacts = JsonSerializer.Deserialize<List<Contact>>(json);
        }

        // CRUD opertations

        // Create a method to get all contacts
        public IEnumerable<Contact> GetAllContacts()
        {
            return Contacts;
        }

        // Create a method to get a contact by id
        public Contact GetContactById(Guid id)
        {
            return Contacts.FirstOrDefault(c => c.Id == id);
        }

        // Create a method to add a new contact
        public void AddContact(Contact contact)
        {
            Contacts.Add(contact);
        }

        // create a method to update a contact
        public void UpdateContact(Contact contact)
        {
            var index = Contacts.FindIndex(c => c.Id == contact.Id);
            Contacts[index] = contact;
        }

        // create a method to delete a contact
        public void DeleteContact(Guid id)
        {
            var index = Contacts.FindIndex(c => c.Id == id);
            Contacts.RemoveAt(index);
        }

        // create a method to save changes
        public void SaveChanges()
        {
            var json = JsonSerializer.Serialize(Contacts, new JsonSerializerOptions
            {
                WriteIndented = true
            });
            File.WriteAllText("contacts.json", json);
        }
    }
}
