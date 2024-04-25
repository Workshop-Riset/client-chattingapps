
import { useContext, useEffect, useState } from 'react';
import { ContexStore } from "../Store/ContexStore";
import Conversation from './Conversation';
import Message from './Message';
import socket from '../socket';

export default function Home() {
  const state = useContext(ContexStore)
  const [inputMessage, setInputMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const { onlineUsers, setOnlineUsers } = useContext(ContexStore);

  

  useEffect(() => {
    socket.auth = {
      token: localStorage.access_token,
    };

    socket.connect();

    socket.on("message:new", (value) => {
      console.log(value, "<< new message");
      setAllMessages(value);
    });
    socket.on("users:online", (value) => {
      console.log(value, "< online users");
      setOnlineUsers(value);
    });

    return () => {
      socket.off("users:online"); 
      socket.off("message:new");
    };
  }, []);
  return (
    <div className="container-fluid vh-100 wh-100" style={{ backgroundColor: "#EEEEEE" }}>
      <div className="d-flex row vh-100 wh-100" style={{ backgroundColor: "" }}>
        {/* conversation list */}
        <Conversation onlineUsers={onlineUsers}/>
        {/* end conversation list */}
        {/* messangger */}
        <Message inputMessage={inputMessage} setInputMessage={setInputMessage} allMessages={allMessages}/>
        {/* end messagge */}
      </div>
    </div>
  );
}
