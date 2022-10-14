import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

import logo from '../../assets/logo.svg'
import './styles.css'
import { RootState } from "../../store";
import { useEffect } from "react";
import { api } from "../../services/api";

export default function Header () {
  const bookingsSize: [] = useSelector((state: RootState) => state.booking);

  useEffect(() => {
    const loadUser = async () => {
      const res = await api.get(`/users/${1}`)

      console.log(res.data);
    }

    loadUser();
  }, [])


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