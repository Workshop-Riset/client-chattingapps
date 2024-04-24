import { useContext, useEffect } from "react";
import Friends from "../Components/Friends";
import { ContexStore } from "../Store/ContexStore";
export default function FriendList() {
  const dataFriends = useContext(ContexStore);
  console.log(dataFriends.friends, "<<<<<");
  useEffect(() => {
    dataFriends.fetchFriends();
  }, []);
  return (
    <>
      <div className="flex flex-col bg-red-400 items-center p-2 justify-center w-1/4 gap-6 rounded-2xl">
        <div className="flex flex-col bg-blue-400 w-56 items-center  rounded-2xl p-4">
          Friend
        </div>
        <div className="flex flex-col gap-4">
          {dataFriends.friends.map((friend) => (
            <Friends key={friend.id} friend={friend} />
          ))}
        </div>
      </div>

      {/* <div className="bg-red-600 box-content h-64 w-32">
        Div Main
        <div>Friends List</div>
        <div>
            List Friend
        </div>
      </div> */}
    </>
  );
}
