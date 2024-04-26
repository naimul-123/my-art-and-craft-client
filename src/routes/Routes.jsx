import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/updateProfile",
                element: <PrivateRoute><UpdateProfile /></PrivateRoute>
            },

        ]
    }
])

export default routes;