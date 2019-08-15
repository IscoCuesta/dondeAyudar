import React from "react";
import "./style.css";
import { FormBtn } from "../Form"
import { Link } from "react-router-dom"

export function Header(props) {
    return (
        <div className="row rowHeader">
            <div className="col-md-10 nombre">
                {props.nombre}
            </div>
            <div className="col-md-2 logo">
                <img className="logoo" src={props.logoUrl} alt={props.nombre}></img>
            </div>
        </div>
    );
}

export function Portada(props) {
    return (
        <div
            style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center", backgroundSize: 'cover', backgroundImage: `url(${props.headerUrl})` }}
            className="foto text">
        </div>
    );
}

export function InfoONG (props) {
    return (
        // <div className="imagenFondo"></div>
        <div className="row InfoONGstyle">
            <div className="col-md-8 infoEspecifica">
                <h3>Descripcion</h3> <p>{props.descripcion}</p>
                <h3>Mision</h3> <p>{props.mision}</p>
                <h3>Vision</h3> <p>{props.vision}</p>
            </div>
            <div className="col-md-4 objNecesidades">
                <div className="infoObj">
                    <h3>Objetivo</h3> <p>{props.objetivo}</p>
                    <br/> <br/> <br/> <br/> <br/> <br/>
                    <h3>Necesidades</h3> <p>{props.necesidades}</p>
                    <br/> <br/> <br/> <br/> <br/>
                    <Link to = '/ONG/newPost'>
                        <FormBtn>
                            Create a new post
                        </FormBtn>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export function Footer (props) {
    return (
        <div className="row">
            <div className="col-md-12 footer">
                <div className="footerInfo">
                    <p>{props.direccion}</p>
                    <p>{props.telefono}</p>
                    <p>{props.email}</p>
                    <p>{props.paginaweb}</p>
                </div>
            </div>
        </div>
    );
}


