import { Outlet } from "react-router-dom"
import Navbar from "./conponents/Navbar"
import { createContext } from "react"
import Footer from "./conponents/Footer"


function App() {



  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar />

      <Outlet></Outlet>
      <Footer />

    </div>
  )
}

export default App
