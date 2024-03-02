import React from "react"
import logo from "../images/air.png"
export default function navBar(){
    return(
        <nav>
            <img src={logo} className="logo" alt="logo"/>
            <h3 className="nav--title">airbnb</h3>       
        </nav>
    )
}
