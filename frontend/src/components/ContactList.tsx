import React from "react";
import { Contact } from "../interfaces/Contact";
import styles from "./ContactList.module.css";

interface Props {
  contacts: Contact[];
}

export default function ContactList({ contacts }: Props) {
  // create a component that displays list of contacts using UL and LI tags
  // add a button to each contact to delete it
  return (
    <div className={styles.container}>
      <ul className={styles.listContainer}>
        {contacts.map((contact) => (
          <li key={contact.id} className={styles.listItem}>
            <p className={styles.listItemText}>
              First Name: {contact.firstName}
            </p>
            <p className={styles.listItemText}>Last Name: {contact.lastName}</p>
            <p className={styles.listItemText}>
              Physical Address: {contact.physicalAddress}
            </p>
            <p className={styles.listItemText}>
              Delivery Address: {contact.deliveryAddress}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
