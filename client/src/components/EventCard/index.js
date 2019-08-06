import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container" onClick={() => props.Click}>
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Earth:</strong> {props.location}
          </li>
        </ul>
      </div>
      </div>
  );
}

export default FriendCard;
