import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

import trash from "../../images/trash.svg";

function EventCard(props) {
  const editable = props.editable;
  const deleteButton = editable ?
    <div className="delete-btn">
      <img
        alt="delete post"
        className="dashboard-icon"
        src={trash}
      />
    </div> : <div></div>
  console.log(props.fecha)
  const nombreFundacion = props.organization ? <span>{props.organization.nombre}</span> : "NA";
  const fundacionInfo = props.page === "search"? 
  <React.Fragment>
    {nombreFundacion}
 </React.Fragment> : ""
          
  return (
    <div className="card">
      <div className="img-container" onClick={() => props.Click}>
        <img className="post-image" alt={props.nombre} src={props.imagen} />
      </div>
      {deleteButton}
      <div className="content">
            <p className="eventcard-title resetmargin mt-3"><strong>{props.nombre}</strong></p>
            <p className="resetmargin"> {new Date(props.fecha).toString().slice(0, 16)}</p>
          <p className="resetmargin">{fundacionInfo}</p>
          <hr/>
          <Link to={"/Posts/" + props.id}>
                <p className="mb-3">Ver detalles</p>
          </Link>
      </div>
      </div>
  );
}

export default EventCard;
