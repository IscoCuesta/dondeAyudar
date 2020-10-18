import React from "react";
import "./style.css";
import { Link } from "react-router-dom"

// const nombreEvento = { background: rgba(233, 233, 226, 0.358);
//     height: "150px",
//     text-align: "center",
//     vertical-align: "middle",
//     line-height: "150px",
//     font-size: "100px",
//     color: "blue",
// };

export function Header(props) {
    return (
        <div className="row header-row">
            <div className="col-12">
                <div className="header-container">
                    <div
                        style={{  backgroundImage: `url(${props.imagen})` }}
                        className="foto">
                    </div>
                    <div className="details-tab">
                        <div className="event-title">
                            {props.nombre}
                        </div>
                        <div className="event-timedate">
                            Empieza {Date(props.fechaInicial).toString().slice(4, 15)}, 
                            termina {Date(props.fechaFinal).toString().slice(4, 16)}
                        </div>
                        <div className="event-location">
                             {props.lugar}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function PostInfo (props) {
    let necesidades = null
    if(props.necesidad){
        necesidades = Object.values(props.necesidad).map(elemento => <p className="apoyo">{elemento.charAt(0).toUpperCase() + elemento.slice(1)}</p>)
    }
    return (
        <div className="row info-row">
            <div className="col-12">
                <div className="info-container">
                    <div className="row no-gutters">
                        <div className="col-md-8">
                            <div className="event-info">
                                <h4>Resumen</h4> <p>{props.resumen}</p>
                                <h4>Detalles del evento</h4> <p>{props.descripcion}</p>
                                <h4>¿Qué se necesita?</h4> {necesidades}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="poster-org">
                                <div className="content text-center">
                                    <h5>Creado por</h5>
                                    <Link to={"../ONG/" + props.id}>
                                        <p className="poster-name"> {props.nombre} </p>
                                    </Link>
                                    <img style={{margin:"auto", width:"50%"}} src={props.logo} alt={props.nombre}></img>

                                    <hr/>
                                    <a href={props.link}>
                                        <p className="external-link">Más información del evento</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>         
            </div>
        </div>
    );
}