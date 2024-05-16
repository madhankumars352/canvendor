import React from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export const ploaderlist = async () => {
    let pfetch = await fetch('http://localhost:8000/product');
    let pfetchjson = await pfetch.json();
    return pfetchjson

}

function Admin(){
    const productdata = useLoaderData();

    return(
        <div className="container">
            
            <div className="row">

            {
                productdata.map((data) => (
                    <div className="col" key={data.id}>

<div>{data.pname}</div>
<div>{data.pdescription}</div>
<div>{data.pprice}</div>
<Link to={data.id}><div>view</div></Link>

                        </div>
                ))
            }
        </div>
   
        </div>
       
    )
    
}

export default Admin;