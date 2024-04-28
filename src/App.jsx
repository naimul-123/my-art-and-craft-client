import { Outlet } from "react-router-dom"
import Navbar from "./conponents/Navbar"
import { createContext } from "react"


function App() {



  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar />

      <Outlet></Outlet>

    </div>
  )
}

export default App
