import React, { useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import '../../global.scss';
import "./MessageBoard.scss";
import uniqid from 'uniqid';
const MessageBoard = () => {
  const [messages, setMessages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const message = {
      author: formData.get("author"),
      text: formData.get("text"),
    };

    // Post the message to the API
    fetch("http://localhost:4000/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    })
      .then((res) => res.json())
      .then((data) => {
        // Update the messages with the new message
        const date = new Date();

        setMessages([
          ...messages,
          {
            ...message,
            date:
              date.getHours().toString() +
              ":" +
              date.getMinutes().toString() +
              ":" +
              date.getSeconds().toString() +
              " | " +
              date.getDay().toString() +
              "." +
              date.getMonth().toString() +
              "." +
              date.getFullYear().toString(),
          },
        ]);
      });
  };

  return (
    <div className="message-board">
      <Navigation />
      <div className="message-board-header">
        <h1>Message Board</h1>
      </div>
      <ul className="message-board-list">
        {messages.map((message) => (
          <li key={uniqid()}>
            {message.date} <b>{message.author}:</b> {message.text}
          </li>
        ))}
      </ul>
      <form className="message-board-form" onSubmit={handleSubmit}>
        <input type="text" name="author" placeholder="Your name" />
        <input type="text" name="text" placeholder="Your message" />
        <button type="submit">Post Message</button>
      </form>
    </div>
  );
};

export default MessageBoard;
