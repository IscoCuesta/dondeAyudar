import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Cards(props) {
  return (
    <div className="card" style={{ width: '25rem'}}>
      <div className="content">
        <ul>
          <p className="mt-3"><strong>Creado por {props.nombre} </strong></p>

          <img style={{margin:"auto", width:"50%"}} src={props.logo} alt={props.nombre}></img>

        <hr/>
          <Link to={"../ONG/" + props.id}>
                <p>Click aqui para más información</p>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Cards;

