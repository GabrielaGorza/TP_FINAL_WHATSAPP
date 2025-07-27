import React from 'react'
import ContactItem from '../ContactItem/ContactItem'
import './ContactList.css'


const ContactList = ({ contacts }) => {
  return (
    <div className="contact-list-container">
      <div className="contact-list-header">
        <h1 className="contact-list-title">WhatsApp</h1>
        <div className="contact-list-icons">
          <i className="bi bi-chat-left-dots"></i>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
      </div>
      <div className="search-bar">
  <i className="bi bi-search"></i>
  <input type="text" placeholder="Buscar un chat o iniciar uno nuevo" disabled />
</div>
      <div className="contact-items">
        {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default ContactList