﻿namespace API.DTOs
{
    public class CreateContactDTO
    {
        //Create a CreateContactDTO that has the properties Firstname, lastname, physical address and delivery address
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhysicalAddress { get; set; }
        public string DeliveryAddress { get; set; }
    }
}
