import React, { useState } from 'react';
import { socket } from '../socket';

function sendJoinEvent(username, setIsConnected) {
  const userData = { 'username': username }
  socket.emit('join', userData);
  setIsConnected(true)
}

export function MyForm() {
  const [value, setValue] = useState('');
  const [username, setUsername] = useState('');
  const [isConnected, setIsConnected] = useState(socket.connected);

  function onSubmit(event) {
    event.preventDefault();
    isConnected ?
      socket.emit('message', { user: username, 'message': value })
      : sendJoinEvent(username, setIsConnected)
  }

  return (
    <form onSubmit={onSubmit}>
      {isConnected ?
        <input value={value} onChange={e => setValue(e.target.value)} placeholder='message' />
        : <input value={username} onChange={(event) => setUsername(event.target.value)} placeholder='username' />}
      <button type="submit" >Submit</button>
    </form>
  );
}