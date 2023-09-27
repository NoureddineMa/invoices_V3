import React from "react";
import { Outlet , Navigate } from "react-router-dom";
import Cookies from "js-cookie";


function ProtectSuperAdmin(){
    const userRole = Cookies.get('role')

    return(
        userRole === "superadmin" ? <Outlet /> : <Navigate to="/" />
    )
}

export default ProtectSuperAdmin;