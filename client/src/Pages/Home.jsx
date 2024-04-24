
import { useContext } from 'react';
import { ContexStore } from "../Store/ContexStore";
import Conversation from './Conversation';
import Message from './Message';

export default function Home() {
  const state = useContext(ContexStore)
  console.log(state.message.message,'<<<<pesan nya');
  console.log(state.message.receiverName,'<<<<penerima nya');
  console.log(state.message.receiverId,'<<<<penerima id');
  console.log(state.message.id,'<<<<conversation id');
  return (
    <div className="container-fluid vh-100 wh-100" style={{ backgroundColor: "#EEEEEE" }}>
      <div className="d-flex row vh-100 wh-100" style={{ backgroundColor: "" }}>
        {/* conversation list */}
        <Conversation />
        {/* end conversation list */}
        {/* messangger */}
        <Message message={state.message.message} receiverName={state.message.receiverName} receiverId={state.message.receiverId} conversationId={state.message.id}/>
        {/* end messagge */}
      </div>
    </div>
  );
}
