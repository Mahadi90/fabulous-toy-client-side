import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/Authproviders";
import loader from '../assets/loader.json'
import Lottie from "lottie-react";

const PrivateRotes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  
if(loading){
    return  <div className="w-40 mx-auto"><Lottie className="h-52 w-52 text-center" animationData={loader} loop={true} /></div>
}
  if (user) {
    return children;
  }

  return <Navigate state={{from : location}} to="/login" replace></Navigate>;
};

export default PrivateRotes;
