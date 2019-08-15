import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function OngCard(props) {
  return (
    <div className="card" style={{ width: '25rem'}}>
      <div className="content text-center">
        <p className="mt-3" style={{ fontSize: '.85rem'}}><strong>Creado por {props.nombre} </strong></p>

        <img style={{margin:"auto", width:"50%"}} src={props.logo} alt={props.nombre}></img>

        <hr/>
        <Link to={"../ONG/" + props.id}>
              <p>Click aqui para más información</p>
        </Link>
      </div>
    </div>
  );
}

export default OngCard;

