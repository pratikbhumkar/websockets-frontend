import React from 'react';
import { ChatMessage } from "../ChatMessage";
import "./index.css";
export function MessageWindow({ messages }) {
  return (
    <ul id='message-list'>
      {
        messages && messages.length > 0 && messages.map((message, index) =>
          <ChatMessage key={index} message={message} />
        )
      }
    </ul>
  );
}