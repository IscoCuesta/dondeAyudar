import React from "react";
import { Link } from "react-router-dom";
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
            <strong>Nombre:</strong> {props.name}
          </li>
          <hr/>
          <li>
            <strong>Lugar / Fecha:</strong> {props.location}
          </li>
          <hr/>
          <li>
            <strong>Resumen:</strong> {props.descripcion}
          </li>
          <hr/>
          <a href={props.postID}><p>Mas info</p></a>
          
                

        </ul>
      </div>
      </div>
  );
}

export default FriendCard;
