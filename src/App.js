import React, { useState, useEffect } from 'react';
import { socket } from './socket';
// import { ConnectionState } from './components/ConnectionState';
import { ConnectionManager } from './components/ConnectionManager';
import { MyForm } from './components/ChatWindow';
import { MessageWindow } from './components/MessageWindow/Index';
import { ChatMessage } from './components/ChatMessage';
import { ConnectionStatus } from "./components/ConnectionStatus";
import "./App.css";

export default function App() {
  const [messageResponse, setMessageResponse] = useState([]);
  const [connectionState, setConnectionState] = useState(false);

  useEffect(() => {
    function onMessageResponse(value) {
      setMessageResponse(previous => [...previous, value]);
    }

    function onConnect() {
      setConnectionState(true);
    }

    function onDisconnect() {
      setConnectionState(false);
    }

    socket.on('disconnect', onDisconnect);
    socket.on('connect', onConnect);
    socket.on('messageResponse', onMessageResponse);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('messageResponse', onMessageResponse);
    };
  }, []);

  return (
    <div className="App">
      <div className='chat-window'>
        <div className='messages-window'>
          <MessageWindow messages={messageResponse} />
        </div>
        {/* <ConnectionManager /> */}
        <MyForm />
        <ConnectionStatus connectionState={connectionState}/>
      </div>
      {/* <ChatMessage/> */}
    </div>
  );
}