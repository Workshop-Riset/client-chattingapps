import ChatBubbleLeft from "../Components/ChatBubble-1";
import ChatBubbleRight from "../Components/ChatBubbleRight";
import Friends from "../Components/Friends";

export default function ChatPage() {
  return (
    <div className="flex w-screen h-screen justify-center items-center mt-10 gap-4 bg-orange-200 ">
      <div className="flex flex-col bg-red-400 items-center p-2 justify-center w-1/4 gap-6 rounded-2xl">
        <div className="flex flex-col bg-blue-400 w-56 items-center  rounded-2xl p-5">
          Friend
        </div>
        <div className="flex flex-col gap-2">
          <Friends />
          <Friends />
          <Friends />
        </div>
      </div>
      <div className="flex flex-col w-2/5 bg-red-400 items-center rounded-2xl p-5">
        <ChatBubbleLeft />
        <ChatBubbleRight />
        <ChatBubbleLeft />
        <ChatBubbleRight />
        <div className="flex gap-4">
          <input className="flex w-80 h-10 rounded-xl" type="text" />
          <button className=" h-10 items-center"> Send </button>
        </div>
      </div>
      <div className="flex flex-col w-1/4 bg-red-400 items-center rounded-2xl p-5 gap-5">
        Profile
        <div className="flex ">
          <img
            src="https://plus.unsplash.com/premium_photo-1713823800666-c854a364d790?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
            className="rounded-full w-20 h-20 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
