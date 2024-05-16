import React, { useState } from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



function ProductAdd(){
    const[productlist,setproductlist]=useState("");
   const[pname,setpname]=useState("");
   const[pdescription,setpdescription]=useState("");
   const[pprice,setpprice]=useState("");

    const hpnamechange = (e) => {
        setpname(e.target.value);     
    }
    const hpdescriptionchange = (e) => {
        setpdescription(e.target.value);
    }
    const hppricechange = (e) => {
        setpprice(e.target.value);
    }

    const onsubmit = (e) => {
        e.preventDefault();
      
       const productlistnew = {...productlist,pname:pname,pdescription:pdescription,pprice:pprice};
       setproductlist(productlistnew);
       fetch('http://localhost:8000/product',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(productlist)
       })
       setpname("");
       setpdescription("");
       setpprice("");
            }
       
    return(
        <div className='container'>
            <h3 className="mt-20 mb-20">Product Add</h3>
            <form onSubmit={(e)=>onsubmit(e)}>
               
                <div className="forminpdiv">
                <input type="text" className="forminp" name="pname" value={pname} placeholder="Enter Product Name" onChange={(e)=>hpnamechange(e)}/>
                </div>

                <div className="forminpdiv">
                <input type="text" className="forminp" name="pdescription" value={pdescription} placeholder="Enter Product Description" onChange={(e)=>hpdescriptionchange(e)}/>
                </div>

               <div className="forminpdiv">
                <input type="text" className="forminp" name="pprice" value={pprice} placeholder="Enter Product Price" onChange={(e)=>hppricechange(e)}/>    
                </div>

              
               
                
                <button type="submit" className="primary">Submit</button>
            </form>
            
        </div>
    )
}

export default ProductAdd;