import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home";
import AddCraft from "../pages/AddCraft";
import AllCraft from "../pages/AllCraft";
import DetailsCraft from "../pages/DetailsCraft";
import MyCraft from "../pages/MyCraft";
import SubCatagory from "../pages/SubCatagory";
import UpdateMyCraft from "../pages/UpdateMyCraft";
import NotFound from "../pages/NotFound";




const routes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <NotFound />,
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

            },
            {
                path: "/catagories/:catagory",
                element: <SubCatagory></SubCatagory>,
                loader: ({ params }) => fetch(`https://assignment-10-server-irb98dscl-naimuls-projects-ee8c232f.vercel.app/catagories/${params.catagory}`)

            },
            {
                path: "/crafts/:id",
                element: <PrivateRoute> <DetailsCraft /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-10-server-irb98dscl-naimuls-projects-ee8c232f.vercel.app/crafts/${params.id}`)

            },
            {
                path: "/update/:id",
                element: <PrivateRoute> <UpdateMyCraft /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-10-server-irb98dscl-naimuls-projects-ee8c232f.vercel.app/crafts/${params.id}`)

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