import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function EventCard(props) {
  const nombreFundacion = props.organization ? <span>{props.organization.nombre}</span> : "NA";
  const fundacionInfo = props.page === "search"? 
  <React.Fragment>
  <strong>Fundacion:</strong> {nombreFundacion}
  <hr/>
 </React.Fragment> : ""
          
  return (
    <div className="card">
      <div className="img-container" onClick={() => props.Click}>
        <img alt={props.nombre} src={props.imagen} />
      </div>
      <div className="content">
            <p className="mt-3"><strong>{props.nombre}</strong></p>
          <hr/>
            <p>{Date(props.fechaInicial).toString().slice(0, 16)}</p>
            <p>{props.lugar}</p>
          <hr/>
          <p>{fundacionInfo}</p>
          <Link to={"/Posts/" + props.id}>
                <p>Mas info</p>
          </Link>
      </div>
      </div>
  );
}

export default EventCard;
