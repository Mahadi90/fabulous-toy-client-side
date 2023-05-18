import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AdToy from "../pages/AdToy/AdToy";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SingleToyDetails from "../pages/shared/SignleToyDetails/SingleToyDetails";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path : '/',
                element: <Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'singleToydetails',
                element: <SingleToyDetails></SingleToyDetails>
            },
            {
                path: 'addToy',
                element: <AdToy></AdToy>
            }
        ]
    }
])

export default router; 