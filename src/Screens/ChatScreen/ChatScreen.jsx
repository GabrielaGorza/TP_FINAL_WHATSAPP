import React, { useState, useEffect } from "react"
import MessageList from "../../Components/MessageList/MessageList"
import NewMessageForm from "../../Components/NewMessageForm/NewMessageForm"
import { getContactById } from "../../services/contactService"
import { useParams } from 'react-router'
import "./ChatScreen.css"

const ChatScreen = () => {
  const { contact_id } = useParams();


  if (!contact_id) {
    return (
      <div className="welcome-screen">
        <img src='/Images/WhatsApp-Cover.png' className="welcome-cover" alt="WhatsApp Cover"/>
        <h1 className="welcome-title">Descarga WhatsApp para Windows</h1>
        <p>Descarga la aplicación para Windows y haz llamadas, comparte pantalla y disfruta de una experiencia más rápida. </p>
        <button className="download-button">Descargar</button>
      </div>
    );
  }

  const [contactSelected, setContactSelected] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const updatedContact = getContactById(Number(contact_id));
    setContactSelected(updatedContact);
    setMessages(updatedContact?.messages || []);
  }, [contact_id]);

  const deleteMessageById = (message_id) => {
    const new_messages_list = messages.filter((message) => message.id !== message_id);
    setMessages(new_messages_list);
  };

  const addNewMessage = (texto) => {
    const new_message = {
      emisor: "YO",
      hora: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      texto: texto,
      status: "visto",
      id: messages.length + 1,
    };
    setMessages([...messages, new_message]);
  };

  if (!contactSelected) return null;

  return (
    <div className="chat-screen-container">
      <div className="chat-header">
        <img src={contactSelected.avatar} alt={contactSelected.name} className="chat-header-avatar" />
        <div className="chat-header-info">
          <h2 className="chat-header-name">{contactSelected.name}</h2>
          <span className={`chat-header-status ${contactSelected.online ? "online" : ""}`}>
            {contactSelected.online ? "En línea" : contactSelected.lastSeen}
          </span>
        </div>
        <div className="chat-header-icons">
          <i className="bi bi-camera-video"></i>
          <i className="bi bi-chevron-down"></i>
          <i className="bi bi-shop-window"></i>
          <i className="bi bi-search"></i>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
      </div>

      <MessageList messages={messages} deleteMessageById={deleteMessageById} />
      <div className="message-list-container"></div>
      <NewMessageForm addNewMessage={addNewMessage} />
    </div>
  );
};

export default ChatScreen;