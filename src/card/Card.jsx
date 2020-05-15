import React from 'react'
import "./card-styles.css"

function Card(props){
    return(
        <div className="card-wrapper col-sm-12 col-md-12 col-lg-4">
        <div className="box">
      <div className="card">
        <div className="imgBx">
            <img src={require("../img/"+props.img)} alt="images"/>
        </div>
        <div className="details">
            <h2>{props.name}<br/><span>{props.place +", "+ props.dob}</span></h2>
        </div>
      </div>
       </div>
        </div>
        
    )
}

export default Card;