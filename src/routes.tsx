import { BrowserRouter, Routes, Route } from "react-router-dom";

import Booking from "./pages/Booking";
import Home from "./pages/Home";

export default function Router () {
  return(
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/booking" element={<Booking />}/>
      </Routes>
  )
}