import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile";
import Home from "../pages/Home";
import AddCraft from "../pages/AddCraft";
import AllCraft from "../pages/AllCraft";
import DetailsCraft from "../pages/DetailsCraft";
import MyCraft from "../pages/MyCraft";
import SubCatagory from "../pages/SubCatagory";
import UpdateMyCraft from "../pages/UpdateMyCraft";




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
                path: "/allcraft",
                element: <AllCraft />,
                loader: () => fetch(`http://localhost:3000/crafts`)
            },
            {
                path: "/catagories/:catagory",
                element: <SubCatagory></SubCatagory>,
                loader: ({ params }) => fetch(`http://localhost:3000/catagories/${params.catagory}`)

            },
            {
                path: "/crafts/:id",
                element: <PrivateRoute> <DetailsCraft /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/crafts/${params.id}`)

            },
            {
                path: "/update/:id",
                element: <PrivateRoute> <UpdateMyCraft /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/crafts/${params.id}`)

            },

            {
                path: "/mycrafts",
                element: <PrivateRoute> <MyCraft /></PrivateRoute>,

            },
            {
                path: "/addcraft",
                element: <PrivateRoute> <AddCraft /></PrivateRoute>
            },

        ]
    }
])

export default routes;