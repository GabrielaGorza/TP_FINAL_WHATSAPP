import React, { useState } from "react"
import ContactList from "../../Components/ContactList/ContactList"
import { getContactList } from "../../services/contactService";



const ContactScreen = () => {
    const contacts = getContactList
    const [contactsList, setContactsList] = useState (contacts);

    return (
        <div>
            <ContactList contacts={contactsList} />
        </div>
    );
};

export default ContactScreen;
