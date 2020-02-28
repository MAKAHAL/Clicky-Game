import React from "react";
import "./style.css";

const FriendCard = props => (
  <div 
    className="card" 
    value={props.id} 
    onClick={props.onClick}
  >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default FriendCard;