import { FaTelegram } from "react-icons/fa";
import ReceiverChat from "../Components/ReceiverChat";
import SenderChat from "../Components/SenderChat";
import { useContext, useEffect, useState } from "react";
import { ContexStore } from "../Store/ContexStore";

export default function Message({
  message,
  receiverName,
  receiverId,
  conversationId,
}) {
  const state = useContext(ContexStore);
  // sendMSg, setSendMsg
  const handlerChangeMsg = (e) => {
    const { value } = e.target;
    state.setSendMsg((prevSendMsg) => ({
      ...prevSendMsg,
      message: value
    }));
  };
  
  
  console.log(state.sendMSg.message, '<<<<<');  
  let senderMessages;
  let receiverMessages;
  if (message) {
    senderMessages = message.filter((msg) => msg.senderId === receiverId);
    receiverMessages = message.filter((msg) => msg.senderId !== receiverId);
  }

  return (
    <div className="col-9 p-0 border">
      <div className="row h-100 m-0">
        <div className="col p-0">
          <div className="align-items-start justify-content-center h-100">
            <div className="text-light">
              <div
                className="rounded text-light p-2 mb-2"
                style={{ backgroundColor: "#7077A1" }}
              >
                {message ? receiverName : ""}
              </div>
              {message
                ? senderMessages.map((el) => (
                    <SenderChat key={el.id} msgnya={el} />
                  ))
                : ""}
              {/* Bubble Message Kanan Receiver */}
              {message
                ? receiverMessages.map((el) => (
                    <ReceiverChat key={el.id} msgnya={el} />
                  ))
                : ""}

              {/* Bubble Message Kiri Sender */}

              {/* Form input send message with react icon */}
              <form
                onSubmit={(e) =>
                  state.handlerSendMsg(conversationId, receiverId, e)
                }
                className="d-flex align-items-center justify-content-end fixed-bottom"
                style={{ marginLeft: "385px" }}
              >
                <input
                  type="text"
                  className="form-control mr-2"
                  value={state.sendMSg.message}
                  onChange={handlerChangeMsg}
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
