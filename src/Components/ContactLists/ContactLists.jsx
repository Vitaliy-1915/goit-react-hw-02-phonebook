import React from "react";
import Button from "../Button/Button";
import { v4 as uuidv4 } from "uuid";
import { ContactList, ContactListItem } from "./ContactLists.styles";

function ContactLists({ contacts }) {
  return (
    <ContactList>
      {contacts.map(({ name, number }) => (
        <ContactListItem key={uuidv4()}>
          {name} {number}
          <Button type="button" text="Delete" />
        </ContactListItem>
      ))}
    </ContactList>
  );
}

export default ContactLists;
