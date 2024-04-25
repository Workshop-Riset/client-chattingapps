import { useContext, useEffect } from "react";
import { ContexStore } from "../Store/ContexStore";
import ConversationCard from "../Components/ConversationCard";
import socket from "../socket";

export default function Conversation({onlineUsers}) {
  


  return (
    <>
      <div className="col-3 p-0">
        <div className="d-flex flex-column h-100">
          <div
            className="rounded text-light p-2 mb-2"
            style={{
              backgroundColor: "#7077A1",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Chats
          </div>
          <div className="overflow-auto">
            {/* card conversation */}
            {onlineUsers.map((el) => (
              <ConversationCard key={el.userName.id} online={el}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
