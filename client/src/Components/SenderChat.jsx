export default function SenderChat({ msgnya }) {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  const timeOnly = formattedHours + ':' + formattedMinutes + ' ' + ampm;
  
  return (
    <div
      className="text-left mb-2"
      style={{ marginRight: "auto", maxWidth: "70%" }}
    >
      <div
        className="p-2 mx-4 rounded"
        style={{
          backgroundColor: "#474F7A",
          alignSelf: "flex-start",
        }}
      >
        <div className="text-light">{msgnya.message}</div>
        <div className="small text-light-muted ">{timeOnly}</div>{" "}
        {/* Waktu pesan */}
      </div>
    </div>
  );
}
