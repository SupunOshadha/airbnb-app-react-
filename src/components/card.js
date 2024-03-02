import React from "react";

export default function card (props){
     let  badgeText;
     if(props.openSpots === 0){
        badgeText = "SOLD OUT"
     }else if(props.location === 'online'){
        badgeText = "ONLINE"
     }  
    return(
    
        <div className="card">
            {/* {props.openSpots === 0 &&<div className="card-badge">SLD OUT</div>} */}
            {
                badgeText&&
                <div className="card-badge">
                {badgeText}</div>
            }
            <img 
                src={props.coverImg} 
                className="card--img" 
            />
            <div className="card--stats">
                <img src=""  className="card--star"/>
                <span>{props.stats.ratings}</span>
                <span className="grey">({props.stats.reviewCount}) . </span>
                <span className="grey">{props.location} </span>
            </div>
            <p className="card--title">{props.title}</p> 
            <p><span className="bold"> From ${props.price} </span></p>
        </div> 
    )
}