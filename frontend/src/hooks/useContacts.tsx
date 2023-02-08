import { useEffect, useState } from "react";
import { Contact } from "../interfaces/Contact";
import { CreateContact } from "../interfaces/CreateContact";
import { createContact, getContacts } from "../services/Api";

// Create a custom hook to use the API to get all contacts and return the contacts
export const useContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  // Create a function to add a contact to the contacts state
  const addContact = (contact: Contact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, contact];
    });
  };

  const createNewContact = async (contact: CreateContact) => {
    const createdContact = await createContact(contact);
    addContact(createdContact);
  };

  useEffect(() => {
    (async () => {
      setContacts(await getContacts());
    })();
  }, []);

  return [contacts, createNewContact] as const;
};
