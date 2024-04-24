export default function Friends({friend}) {
  return (
    <div className="flex bg-blue-400 w-40  items-center rounded-2xl p-5 gap-5">
      <img
        src="https://plus.unsplash.com/premium_photo-1713823800666-c854a364d790?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
        className="rounded-full w-10 h-10 object-cover"
      />
      {friend.FriendUser.username}
    </div>
  );
}
