import { useState, useEffect } from 'react';
import { socket } from '../../socket';
import { MessageBox } from '../MessageBox';
import { MessageWindow } from '../MessageWindow/Index';
import { ConnectionStatus } from "../ConnectionStatus";
import "./index.css";


// import { ChatMessage } from '../ChatMessage';
// import { ConnectionState } from './components/ConnectionState';
// import { ConnectionManager } from '../ConnectionManager';

export function ChatWindow() {
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
        <MessageBox />
        <ConnectionStatus connectionState={connectionState}/>
      </div>
    </div>
  );
}