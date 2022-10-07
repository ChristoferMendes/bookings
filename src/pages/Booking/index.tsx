import { MdDelete } from 'react-icons/md'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'
import type { Trip } from '../Home'
import './styles.css'

function Booking() {
  const bookings: [Trip] = useSelector((state: RootState) => state.booking)

  return (
    <div>
      <h1 className='title'>You requested {bookings.length} booking</h1>

      {bookings.map(booking => (
        <div className='booking' key={booking.id}>
          <img
            src={booking.image}
            alt={booking.title} />

          <strong>{booking.title}</strong>
          <span>Quantity: {booking.amount}</span>
          <button type='button' onClick={() => { }}>
            <MdDelete size={20} color={'#000'} />
          </button>
        </div>
      ))}
      <footer>
        <button type='button'>Request bookings</button>
      </footer>
    </div>

  )
}

export default Booking