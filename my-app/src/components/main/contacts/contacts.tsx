import React, { useState, useEffect } from "react";
import { Users } from "../../../app/types/users";
import { ContactsHead } from "./contactsHead";
import { ContactsReturn } from "./contactsReturn";

export const Contacts: React.FC = () => {
  const [contact, setContact] = useState<Users[]>([]);
  const [error, setError] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((res) => setContact(res.slice(0, 10)))
      .catch((err) => setError(err));
  }, []);

  return (
    <>
      <ContactsHead />
      {contact.length > 0
        ? contact.map((contacts: Users) => (
            <ContactsReturn key={contacts.id} contacts={contacts} />
          ))
        : "Loading..."}
    </>
  );
};
