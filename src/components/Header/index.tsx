import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

import logo from '../../assets/logo.svg'
import './styles.css'
import { RootState } from "../../store";

export default function Header () {
  const bookingsSize: [] = useSelector((state: RootState) => state.booking);
  return (
    <header className="container">
      <Link to={'/'}>
        <img src={logo} alt="" className="logo"/>
      </Link>

      <Link to={'/booking'} className="bookings">
        <div>
          <strong>My booking</strong>
          <span>{bookingsSize.length} bookings</span>
        </div>
      </Link>
    </header>
  )
}