import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Admin from "./Admin";


function Home(){
    const navigator = useNavigate();
    const handlesubmit = (e) => {
        e.preventDefault();
navigator('./admin');
    }
    return(
        <div className="container">
            <h3>Home</h3>
            <form onSubmit={handlesubmit}>
                <input type="text" name="fname" placeholder="first name"/>
                <input type="text" name="lname" placeholder="last name"/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Home;