import ChatBubbleLeft from "../Components/ChatBubble-1";
import ChatBubbleRight from "../Components/ChatBubbleRight";

export default function ChatPage() {
  return (
    <div className="flex w-screen h-screen justify-center items-center mt-10 gap-4 bg-orange-200 ">
      <div className="flex flex-col w-1/4 bg-red-400 items-center rounded-2xl p-5">
        Friend
      </div>
      <div className="flex flex-col w-2/5 bg-red-400 items-center rounded-2xl p-5">
        <ChatBubbleLeft />
        <ChatBubbleRight />
        <ChatBubbleLeft />
        <ChatBubbleRight />
      </div>
      <div className="flex flex-col w-1/4 bg-red-400 items-center rounded-2xl p-5 gap-5">
        Profile
        <div className="flex ">
            <img src="https://plus.unsplash.com/premium_photo-1713823800666-c854a364d790?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8" className="rounded-full w-20 h-20" />
        </div>
      </div>
    </div>
  );
}
