import React from "react";
import { Link, Outlet } from "react-router-dom";

function Header(){
    return(
        <div className="container">
            <h6>Header</h6>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="admin">Admin</Link></li>
            <li><Link to="productadd">Product Add</Link></li>
            </ul>
            <Outlet/>
        </div>
    )
}

export default Header;