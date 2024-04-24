import { useContext, useEffect } from "react"
import { ContexStore } from "../Store/ContexStore";
import ConversationCard from "../Components/ConversationCard";
export default function Conversation(){
  const state = useContext(ContexStore)

  useEffect(() => {
    state.fetchConversation();
    
  },[])
    return (
        <>
        <div className="col-3 p-0">
          <div className="d-flex flex-column h-100">
            <div className="rounded text-light p-2 mb-2" style={{backgroundColor : '#7077A1', fontWeight:'bold', fontSize : '20px'}}>
              Chats
            </div>
            <div className="overflow-auto">
              {/* card conversation */}
              {state.conversation.map((el) => (
              <ConversationCard key={el.id} conversation={el} handlerClick={() => state.fetchMessage(el.id)}/>
              ))}
            </div>
          </div>
        </div>
        </>
    )
}