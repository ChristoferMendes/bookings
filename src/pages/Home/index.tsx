import React, { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { useDispatch } from 'react-redux'
import { MdFlightTakeoff } from 'react-icons/md'
import { addBookingRequest } from '../../store/modules/booking/actions'
import './styles.css'

export type Trip = {
  id: number;
  title: string;
  status: boolean;
  image: string;
  amount: number;

}

function Home() {
  const dispatch = useDispatch();
  const [trips, setTrips] = useState<Trip[] | []>([])

  useEffect(() => {
    (async () => {
      const response = await api.get('/trips')

      setTrips(response.data);
    })()
  }, [])

  const handleAdd = (id: Trip['id']) => {
    dispatch(addBookingRequest(id))
  }

  return (
    <div>
      <div className='box'>
        {trips.map(trip => (
          <li key={trip.id}>
            <img src={trip.image} alt="" />
            <strong>{trip.title}</strong>
            <span>Status {trip.status ? 'Available' : 'Unavailable'}</span>

            <button type='button' onClick={() => handleAdd(trip.id)}>
              <div>
                <MdFlightTakeoff size={16} color='#fff' />
              </div>
              <span>Request booking</span>
            </button>
          </li>
        ))}

      </div>
    </div>
  )
}

export default Home