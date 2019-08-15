import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function FriendCard(props) {
  console.log(props)
  const nombreFundacion = props.organization ? <span>{props.organization.nombre}</span> : "NA";
  const fundacionInfo = props.page === "search"? 
  <React.Fragment>
  <li>
  <strong>Fundacion:</strong> {nombreFundacion}
 </li><hr/>
 </React.Fragment> : ""
          
  return (
    <div className="card">
      <div className="img-container" onClick={() => props.Click}>
        <img alt={props.nombre} src={props.imagen} />
      </div>
      <div className="content">
        <ul>
            <p className="mt-3"><strong>{props.nombre}</strong></p>
          <hr/>
            <p>{props.fecha}</p>
            <p>{props.lugar}</p>
          <hr/>
          {fundacionInfo}

          <Link to={"/Posts/" + props.id}>
                <p>Mas info</p>
          </Link>
        </ul>
      </div>
      </div>
  );
}

export default FriendCard;
