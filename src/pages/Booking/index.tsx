import { MdAdd, MdAddCircle, MdDelete, MdRemoveCircle } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import type { RootState } from '../../store'
import { removeReserve, updateAmountRequest } from '../../store/modules/booking/actions'
import { Trip } from '../../typescript/interfaces'
import './styles.css'

function Booking() {
  const bookings: Trip[] = useSelector((state: RootState) => state.booking)
  const dispatch = useDispatch();
  const handleRemove = (id: number) => {
    dispatch(removeReserve(id))
  }

  const decrementAmout = (trip: Trip) => {
    dispatch(updateAmountRequest(trip.id, trip.amount - 1))
  }

  const incrementAmount = (trip: Trip) => {
    dispatch(updateAmountRequest(trip.id, trip.amount + 1))
  }

  return (
    <div>
      <h1 className='title'>You requested {bookings.length} booking</h1>

      {bookings.map(booking => (
        <div className='booking' key={booking.id}>
          <img
            src={booking.image}
            alt={booking.title} />
          <strong className='booking-title'>{booking.title}</strong>
          <div id='amount'>
            <button type='button' onClick={() => decrementAmout(booking)}>
              <MdRemoveCircle size={25} />
            </button>
            <input type={'text'} readOnly value={booking.amount}></input>
            <button type='button' onClick={() => incrementAmount(booking)}>
              <MdAddCircle size={25} />
            </button>
          </div>
          <button type='button' onClick={() => handleRemove(booking.id)}>
            <MdDelete size={20} color={'#000'} />
          </button>
        </div>
      ))}
      <footer>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <button type='button'>Request bookings</button>
        </Link>
      </footer>
    </div>

  )
}

export default Booking