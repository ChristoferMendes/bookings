import { useDispatch } from 'react-redux'
import { MdFlightTakeoff } from 'react-icons/md'
import { addBookingRequest } from '../../store/modules/booking/actions'
import './styles.css'
import { Trip } from '../../typescript/interfaces'
import useFetch from '../../services/useFetch'
import { Loading } from '../../components/Misc/Loading'



function Home() {
  const dispatch = useDispatch();
  const { data: trips, loading, error } = useFetch<Trip[]>('/trips')

  const handleAdd = (id: Trip['id']) => {
    dispatch(addBookingRequest(id))
  }

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <h1>{error.message}</h1>
  }

  return (
    <div className='grid-container'>
      <div className='box'>
        <div className="box-container">
          {trips?.map(trip => (
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
    </div>
  )
}

export default Home