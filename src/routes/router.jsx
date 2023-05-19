import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AdToy from "../pages/AdToy/AdToy";
import AllToys from "../pages/AllToys/AllToys";
import SingleCategoryDeatils from "../pages/Home/Category/SingleCategoryDeatils";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import MyToys from "../pages/MyToys/MyToys";
import SingleToyDetails from "../pages/shared/SignleToyDetails/SingleToyDetails";
import SignUp from "../pages/SignUp/SignUp";
import UpdateToy from "../pages/UpdateToys/UpdateToy";
import PrivateRotes from "./PrivateRotes";

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
                path: 'singleToydetails/:id',
                element: <PrivateRotes><SingleToyDetails></SingleToyDetails></PrivateRotes>,
                loader: ({params}) => fetch(`http://localhost:5000/allToys/${params.id}`)
            },
            {
                path: 'addToy',
                element: <AdToy></AdToy>
            },
            {
                path: 'allToys',
                element: <AllToys></AllToys>
               
            },
            {
                path: 'myToys',
                element: <MyToys></MyToys>
            },
            {
                path: '/updateToy/:id',
                element: <UpdateToy></UpdateToy>,
                loader : ({params}) => fetch(`http://localhost:5000/allToys/${params.id}`)
            },
            {
                path: '/singlecategory',
                element: <SingleCategoryDeatils></SingleCategoryDeatils>,
                // loader : ({params}) => fetch(`http://localhost:5000/category`)
            }
        ]
    }
])

export default router; 