export default function ConversationCard({conversation, handlerClick}){
    return (
        <div className="card mb-2">
          <button onClick={handlerClick}>
        <div className="card-body d-flex align-items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ojoK1Hpq4ifuYoSHOz1YMkgZwo13Egz6FZeBbOesWQ&s"
            alt="Profile"
            className="rounded-circle mr-3"
            style={{ width: "50px", height: "50px", objectFit: "fill" }}
          />
          <div>
            <div className="card-title" style={{ fontWeight: "bold" }}>
              {conversation.username}
            </div>
            <div>{conversation.lastMessage}</div>
          </div>
        </div>
        </button>
      </div>
    )
}