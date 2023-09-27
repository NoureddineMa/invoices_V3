import React from "react";
import { Outlet , Navigate } from "react-router-dom";
import Cookies from "js-cookie";


function ProtectUser(){
    const userRole = Cookies.get('role')

    return(
        userRole === "user" ? <Outlet /> : <Navigate to="/" />
    )
}

export default ProtectUser;