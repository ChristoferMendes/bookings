import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { removeBooking } from '../../store/modules/booking/actions'
import type { Trip } from '../Home'
import './styles.css'

function Booking() {
  const bookings: [Trip] = useSelector((state: RootState) => state.booking)
  const dispatch = useDispatch();
  const handleRemove = (id: number) => {
    dispatch(removeBooking(id))
  }

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
          <button type='button' onClick={() => handleRemove(booking.id)}>
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