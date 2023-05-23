import React, { useState, useEffect } from 'react';
import { socket } from './socket';
import { ConnectionState } from './components/ConnectionState';
import { ConnectionManager } from './components/ConnectionManager';
import { MyForm } from './components/MyForm';
import { Events } from './components/Events';

export default function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [messageResponse, setMessageResponse] = useState([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onMessageResponse(value) {
      setMessageResponse(previous => [...previous, value['user']+': '+value['message']]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('messageResponse', onMessageResponse);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('messageResponse', onMessageResponse);
    };
  }, []);

  return (
    <div className="App">
      <ConnectionState isConnected={ isConnected } />
      <Events events={ messageResponse } />
      <ConnectionManager />
      <MyForm />
    </div>
  );
}