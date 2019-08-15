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
        <div className="rowHeader">
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
                <div className="textInfoEsp">
                    <h5>Resumen</h5> <p>{props.resumen}</p>
                    <h5>Descripcion del Evento</h5> <p>{props.descripcion}</p>
                    <h5>Tipo de apoyo que se necesita</h5> {props.necesidad}
                </div>
            </div>
            <div className="col-md-5 objNecesidades">
                <div className="row">
                    <div className="col-sm-12 TextObjNed">
                        <h5>Locación del evento</h5> <p>{props.lugar}</p>
                    </div>
                    <div className="col-sm-6">       
                        <h5>Fecha Inicial</h5> <p>{props.fechaInicial}</p>
                    </div>
                    <div className="col-sm-6"> 
                        <h5>Fecha Final</h5> <p>{props.fechaFinal}</p>
                    </div>
                
                    <a className="linkEvent" href={props.link}><strong>Link del evento</strong></a>
                </div>
            </div>
        </div>
    );
}



