import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile";
import Home from "../pages/Home";
import AddCraft from "../pages/AddCraft";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        loader: () => fetch('/data.json'),
        children: [
            {
                index: true,
                element: <Home />

            },
            {
                path: "/register",
                element: <Register />

            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/addcraft",
                element: <PrivateRoute> <AddCraft /></PrivateRoute>
            },

        ]
    }
])

export default routes;