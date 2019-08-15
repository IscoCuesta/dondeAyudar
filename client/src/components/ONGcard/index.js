import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Cards(props) {
  return (
    <div className="card" style={{ width: '25rem'}}>
      <div className="content">
        <ul>
          <strong>Nombre de la Fundacion:</strong> {props.nombre}
          <li>
            <strong>Logo:</strong> {props.logo}
          </li>
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

