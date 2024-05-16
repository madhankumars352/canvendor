import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";

function Admin1(){
    return(
        <div>
                <h3 className="mt-40 mb-40">Admin</h3>
                <Outlet/>
        </div>
    )
}

export default Admin1;