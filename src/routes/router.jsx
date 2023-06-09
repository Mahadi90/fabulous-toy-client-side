import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AdToy from "../pages/AdToy/AdToy";
import AllToys from "../pages/AllToys/AllToys";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
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
        errorElement: <ErrorPage></ErrorPage>,
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
                loader: ({params}) => fetch(`https://fabulous-toys-server.vercel.app/allToys/${params.id}`)
            },
            {
                path: 'addToy',
                element: <PrivateRotes><AdToy></AdToy></PrivateRotes>
            },
            {
                path: 'allToys',
                element: <AllToys></AllToys>
               
            },
            {
                path: 'myToys',
                element: <PrivateRotes><MyToys></MyToys></PrivateRotes>
            },
            {
                path: '/updateToy/:id',
                element: <UpdateToy></UpdateToy>,
                loader : ({params}) => fetch(`https://fabulous-toys-server.vercel.app/allToys/${params.id}`)
            },
            {
                path: '/singlecategory/:id',
                element: <PrivateRotes><SingleCategoryDeatils></SingleCategoryDeatils></PrivateRotes>,
                loader : ({params}) => fetch(`https://fabulous-toys-server.vercel.app/sportsCar/${params.id}`)
            },
            {
                path:'/singlecategory2/:id',
                element: <PrivateRotes><SingleCategoryDeatils></SingleCategoryDeatils></PrivateRotes>,
                loader : ({params}) => fetch(`https://fabulous-toys-server.vercel.app/regularcartoys/${params.id}`)
            },
            {
                path:'/singlecategory3/:id',
                element: <PrivateRotes><SingleCategoryDeatils></SingleCategoryDeatils></PrivateRotes>,
                loader : ({params}) => fetch(`https://fabulous-toys-server.vercel.app/trucktoys/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router; 