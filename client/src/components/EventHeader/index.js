import React from "react";
import "./style.css";

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
        <div className="row">
            <div className="col-md-12 nombreEvento">
                {props.nombre}
            </div>
        </div>
    );
}

export function Portada(props) {
    return (
        <div
            className="fotoEvento text">
            <img src="/images/logoPrueba.jpeg" alt={"Portada"} ></img>
        </div>
    );
}

export function InfoONG (props) {
    return (
        <div className="row">
            <div className="col-md-7 infoEspecifica">
                <h2>Nombre del Evento</h2> <p>{props.nombre}</p>
                <h2>Descripcion del Evento</h2> <p>{props.descripcion}</p>
                <h2>Detalles Especificos</h2> <p>{props.resumen}</p>
                <h2>Tipo de apoyo que se necesita</h2> <p>{props.necesidad}</p>
            </div>
            <div className="col-md-5 objNecesidades">
                <h2>Lugar donde se llevara a cabo el evento</h2> <p>{props.lugar}</p>
                <div className="row">
                    <div className="col-sm-4">       
                        <h2>Fecha Inicial</h2> <p>{props.startDate}</p>
                    </div>
                    <div className="col-sm-8"> 
                        <h2>Fecha Final</h2> <p>{props.endDate}</p>
                    </div>
                </div>
                <h2>Link del evento</h2> <p>{props.link}</p>
                <h2>Imagen</h2> <p>{props.imagen}</p>
            </div>
        </div>
    );
}



