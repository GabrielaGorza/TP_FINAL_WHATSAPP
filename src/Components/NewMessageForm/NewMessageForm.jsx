import React from "react"
import "./NewMessageForm.css"

const NewMessageForm = ({ addNewMessage }) => {
    const handleSubmitSendMessageForm = (event) => {
        event.preventDefault();
        const new_message_text = event.target.message.value;
        if (new_message_text.trim() === "") return;
        addNewMessage(new_message_text);
        event.target.message.value = "";
    };

    return (
        <form className="new-message-form" onSubmit={handleSubmitSendMessageForm}>
            <input
                type="text"
                placeholder="Escribe un mensaje"
                id="message"
                name="message"
                className="message-input"
                autoComplete="off"
            />
            <button type="submit" className="send-button">
                <i class="bi bi-arrow-right-circle-fill"></i>
            </button>
        </form>
    );
};

export default NewMessageForm