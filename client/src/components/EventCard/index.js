import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function EventCard(props) {
  console.log(props.fecha)
  const nombreFundacion = props.organization ? <span>{props.organization.nombre}</span> : "NA";
  const fundacionInfo = props.page === "search"? 
  <React.Fragment>
  <strong>Fundación:</strong> {nombreFundacion}
  <hr/>
 </React.Fragment> : ""
          
  return (
    <div className="card">
      <div className="img-container" onClick={() => props.Click}>
        <img className="post-image" alt={props.nombre} src={props.imagen} />
      </div>
      <div className="content">
            <p className="resetmargin mt-3"><strong>{props.nombre}</strong></p>
          <hr/>
            <p className="resetmargin"><strong>Fecha:</strong> {new Date(props.fecha).toString().slice(0, 16)}</p>
          <p className="resetmargin">{fundacionInfo}</p>
          <Link to={"/Posts/" + props.id}>
                <p className="mb-3">Ver detalles</p>
          </Link>
      </div>
      </div>
  );
}

export default EventCard;
