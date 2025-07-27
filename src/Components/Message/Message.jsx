import React, { useState } from "react"
import "./Message.css"

const Message = ({ emisor, texto, hora, id, deleteMessageById }) => {
    const [messageSelected, setMessageSelected] = useState(false);

    const handleChangeMessageSelected = (e) => {
        e.preventDefault();
        setMessageSelected(true);
    };

    return (
        <div
            onContextMenu={handleChangeMessageSelected}
            className={emisor === "YO" ? "own-message" : "contact-message"}>
            <div className="message-conteiner">
                <p>{texto}</p>
                <span>{hora}</span>
            </div>
            {messageSelected && (
                <button onClick={() => deleteMessageById(id)}>Eliminar</button>
            )}
        </div>
    );
};

export default Message