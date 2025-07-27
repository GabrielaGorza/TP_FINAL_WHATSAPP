import React from 'react'
import { Link } from 'react-router'


const ContactItem = ({ contact }) => {
    const lastMessage = contact.messages?.[contact.messages.length - 1]?.texto || '';

    return (
        <Link to={`/contact/${contact.id}/messages`} className="contact-profile">
            <img className="photo-avatar" src={contact.avatar} alt={contact.name} />
            <div className="contact-content">
                <div>
                    <div className="contact-details">
                        <h2 className="contact-name">{contact.name}</h2>
                        <span className="contact-lastSeen">{contact.lastSeen}</span>
                    </div>
                    <span className="contact-preview">{lastMessage.slice(0, 40)}{lastMessage.length > 40 ? '…' : ''}</span>
                </div>

            </div>
        </Link>
    );
};

export default ContactItem