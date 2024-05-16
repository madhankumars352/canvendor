import React from "react";
import { useLoaderData, useParams } from "react-router-dom";




function Productdetails(){
    const {id} = useParams();
    console.log(id);
const singleview = useLoaderData();
console.log(singleview);
    return(
        <div>
            <h3>Productdetails</h3>
            <div>{singleview.pname}</div>
            <div>{singleview.pdescription}</div>
            <div>{singleview.pprice}</div>
        </div>
    )
}

export const pdetaloader = async({params}) => {
    const {id} = params;
    let pdetaloaderfetch = await fetch('http://localhost:8000/product/'+id);
    let pdetajson = await pdetaloaderfetch.json();
    return pdetajson
}









export default Productdetails;