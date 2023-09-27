import React from "react";
import { Outlet , Navigate } from "react-router-dom";
import Cookies from "js-cookie";


function ProtectAdmin(){
    const userRole = Cookies.get('role')

    return(
        userRole === "admin" ? <Outlet /> : <Navigate to="/" />
    )
}

export default ProtectAdmin;