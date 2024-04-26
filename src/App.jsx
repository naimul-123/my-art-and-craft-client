import { Outlet, useLoaderData } from "react-router-dom"
import Navbar from "./conponents/Navbar"
import { createContext } from "react"
export const DataContext = createContext(null)

function App() {

  const data = useLoaderData()

  return (
    <div>
      <Navbar />
      <DataContext.Provider value={data}>
        <Outlet></Outlet>
      </DataContext.Provider>
    </div>
  )
}

export default App
