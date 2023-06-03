import React, { useState } from 'react';
import { socket } from '../../socket';
import img from "../../assets/paper.png";
import "./index.css";

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
      setValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <div className='message-box'>
      {isConnected ?
        <input className= 'input-box curved-radius' value={value} onChange={e => setValue(e.target.value)} placeholder='Write a message...' />
        : <input className= 'input-box curved-radius white-border'  value={username} onChange={(event) => setUsername(event.target.value)} placeholder='Type in a username here...' />}
      <button type="submit" className='send-button curved-radius white-border transparent-background'> <img src={img} alt="send" width={20}/> </button>
      </div>
    </form>
  );
}