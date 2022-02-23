import { FC, useEffect, useState } from "react";
import Button from "./Button";

const supported = "contacts" in navigator;

const props = ["name", "email", "tel"];
const opts = { multiple: true };

type Contact = {
  [key: string]: string;
};

declare global {
  interface Navigator {
    contacts: {
      select: (
        props: string[],
        opts: { multiple: boolean }
      ) => Promise<Contact[]>;
    };
  }
}

const ContactsApiExample: FC = () => {
  const [contacts, setContacts] = useState<Contact[]>();

  useEffect(() => {
    const contactor = async () => {
      if (!supported) {
        return;
      }
    };

    contactor();
  }, []);

  return (
    <section>
      <h2>Contacts API</h2>

      <p>Supported: {supported.toString()}</p>

      {supported && (
        <p>
          <Button
            onClick={async () => {
              const contacts = await navigator.contacts.select(props, opts);
              setContacts(contacts);
            }}
          >
            Pick a contact!
          </Button>

          {JSON.stringify(contacts)}
        </p>
      )}
    </section>
  );
};

export default ContactsApiExample;
