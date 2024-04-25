import { FaTelegram } from "react-icons/fa";
import ReceiverChat from "../Components/ReceiverChat";
import SenderChat from "../Components/SenderChat";
import { useContext, useEffect, useState } from "react";
import { ContexStore } from "../Store/ContexStore";
import socket from "../socket";

export default function Message({inputMessage, setInputMessage, allMessages}) {
  // if (message) {
  //   senderMessages = message.filter((msg) => msg.senderId === receiverId);
  //   receiverMessages = message.filter((msg) => msg.senderId !== receiverId);
  // }

  const sendMessage = () => {
    socket.emit("message:send", inputMessage);
  };

  return (
    <div className="col-9 p-0 border">
      <div className="row h-100 m-0">
        <div className="col p-0">
          <div className="align-items-start justify-content-center h-100">
            <div className="text-light" style={{ paddingBottom: "70px" }}>
              <div
                className="rounded text-light p-2 mb-2"
                style={{ backgroundColor: "#7077A1" }}
              >
                MEJA BUNDAR
              </div>
              {allMessages
                ? allMessages.map((el, index) => (
                    <SenderChat key={index} msgnya={el} />
                  ))
                : "No Message"}

              <form
                onSubmit={(e) => sendMessage(e)}
                className="d-flex align-items-center justify-content-end fixed-bottom"
                style={{ marginLeft: "385px" }}
              >
                <input
                  type="text"
                  className="form-control mr-2"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  name="message"
                />
                <button className="btn btn-primary" type="submit">
                  Send <FaTelegram className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
