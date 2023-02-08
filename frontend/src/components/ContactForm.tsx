import { useState } from "react";
import { CreateContact } from "../interfaces/CreateContact";
import styles from "./ContactForm.module.css";

interface Props {
  handleCreateContact: (contact: CreateContact) => Promise<void>;
}

export default function ContactForm({ handleCreateContact }: Props) {
  // create a state variable for the form inputs
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    physicalAddress: "",
    deliveryAddress: "",
  });

  // Create a function to clear the form inputs
  const clearForm = () => {
    setContact({
      firstName: "",
      lastName: "",
      physicalAddress: "",
      deliveryAddress: "",
    });
  };

  // create a function to handle the form submission and clear the form inputs
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(contact);
    await handleCreateContact(contact);
    clearForm();
  };

  // create a function to handle the form input changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setContact((prevContact) => {
      return {
        ...prevContact,
        [name]: value,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1 className={styles.formTitle}>Add Contact</h1>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={contact.firstName}
        onChange={handleChange}
        className={styles.formInput}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={contact.lastName}
        onChange={handleChange}
        className={styles.formInput}
      />

      <label htmlFor="physicalAddress">Physical Address</label>
      <input
        type="text"
        id="physicalAddress"
        name="physicalAddress"
        value={contact.physicalAddress}
        onChange={handleChange}
        className={styles.formInput}
      />

      <label htmlFor="deliveryAddress">Delivery Address</label>
      <input
        type="text"
        id="deliveryAddress"
        name="deliveryAddress"
        value={contact.deliveryAddress}
        onChange={handleChange}
        className={styles.formInput}
      />

      <button type="submit" className={styles.formButton}>
        Submit
      </button>
    </form>
  );
}
