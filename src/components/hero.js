import React from "react";
import heroPic from "../images/hero.png"
export default function hero(){
    return(
        <section className="hero">
           <img src={heroPic} alt="hero figure" className="hero--figure"/>
           <h1 className="hero--title">Online Experiences</h1>
           <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}
