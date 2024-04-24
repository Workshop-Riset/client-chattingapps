export default function ReceiverChat({msgnya}){
  const date = new Date(msgnya.timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  const timeOnly = formattedHours + ':' + formattedMinutes + ' ' + ampm;
    return (
        <div className="text-right mb-2" style={{ marginLeft: 'auto', maxWidth: '70%' }}>
        <div className="p-2 mx-4 rounded" style={{ backgroundColor: '#3E3232', alignSelf: 'flex-end' }}>
          <div>{msgnya.message}</div>
          <div className="small text-light-muted">{timeOnly}</div> {/* Waktu pesan */}
        </div>
      </div>
    )
}