import { Outlet } from "react-router-dom"
import Navbar from "./conponents/Navbar"
import Footer from "./conponents/Footer"


function App() {



  return (
    <div className="max-w-screen-2xl mx-auto  bg-base-100">
      <Navbar />

      <Outlet ></Outlet>
      <Footer />

    </div>
  )
}

export default App
