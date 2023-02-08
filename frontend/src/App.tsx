import React from "react";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import { useContacts } from "./hooks/useContacts";

function App() {
  // create a state variable for contacts
  const [contacts, createNewContact] = useContacts();

  return (
    <div className="App">
      <h1>Contact Management</h1>
      <p>Using .NET 6 WebAPI and ReactTS</p>

      <ContactForm handleCreateContact={createNewContact} />
      <ContactList contacts={contacts} />

      <footer className="footer">© chan, tim, mac</footer>
    </div>
  );
}

export default App;

// ContactForm component
// ContactList component
