import React from "react";
import "./style.css";

export function Header(props) {
    return (
        <div className="row">
            <div className="col-md-10 nombre">
                {props.nombre}
            </div>
            <div className="col-md-2 logo">
                <img className="logoo" src="/images/logoPrueba.jpeg" alt={props.nombre}></img>
            </div>
        </div>
    );
}

export function Portada(props) {
    return (
        <div
            style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
            className="jumbotron text">
            {/* <img src="/images/backgroundPrueba.jpg" alt={"Portada"} ></img> */}
        </div>
    );
}

export function InfoONG (props) {
    return (
        <div className="row">
            <div className="col-md-8 infoEspecifica">
                <h2>Descripcion</h2> <p>{props.descripcion}</p>
                <h2>Mision</h2> <p>{props.mision}</p>
                <h2>Vision</h2> <p>{props.vision}</p>
            </div>
            <div className="col-md-4 objNecesidades">
                <h3>Objetivo</h3> <p>{props.objetivo}</p>
                <h3>Necesidades</h3> <p>{props.necesidades}</p>
            </div>
        </div>
    );
}

