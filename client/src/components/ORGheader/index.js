import React from "react";
import "./style.css";
import { FormBtn } from "../Form"
import { Link } from "react-router-dom"

export function Header(props) {
    return (
        <div className="row header-row">
            <div className="col-12">
                <div className="header-container">
                    <div
                        style={{  backgroundImage: `url(${props.headerUrl})` }}
                        className="foto">
                    </div>
                    <div className="name-tab">
                        <div className="nombre">
                            {props.nombre}
                        </div>
                    </div>
                    <div className="logo-container">
                        <img className="logo" src={props.logoUrl} alt={props.nombre}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function InfoONG (props) {
    let necesidades = null
    let objetivo = null
    if(props.objetivo){
        objetivo = Object.values(props.objetivo).map(elemento => <p>{elemento.charAt(0).toUpperCase() + elemento.slice(1)}</p>)
    }
    if(props.necesidades){
        necesidades = Object.values(props.necesidades).map(elemento => <p>{elemento.charAt(0).toUpperCase() + elemento.slice(1)}</p>)
    }
    return (
        <div className="row info-row">
            <div className="col-12">
                <div className="info-container">
                    <div className="row no-gutters">
                        <div className="col-md-8">
                            <div className="org-info">
                                <h4>Descripción</h4> <p>{props.descripcion}</p>
                                <h4>Misión</h4> <p>{props.mision}</p>
                                <h4>Visión</h4> <p>{props.vision}</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="org-contact">
                                <div className="target-div">
                                    <h5>Grupo de ayuda</h5> 
                                    {objetivo}
                                </div>
                                <div className="needs-div">
                                    <h5>Necesidades</h5> 
                                    {necesidades}
                                </div>
                                <div className="contact-div">
                                    <h5>Contacto</h5> 
                                    <p>Dirección: {props.direccion}</p>
                                    <p>Teléfono: {props.telefono}</p>
                                    <p>Email: {props.email}</p>
                                    <p>Website: <a href={props.paginaweb}>Link</a></p>
                                    
                                    <Link to = '/ONG/newPost'>
                                        {/* <FormBtn className="centered-btn">
                                            Create a new post
                                        </FormBtn> */}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>         
            </div>
        </div>
    );
}

export function Events (props) {
    return (
        <div className="row events-row">
            <div className="col-12">
                <div className="events-container">
                    <h4 className="events-title"> Nuestros próximos eventos </h4>
                    <div className="row">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}


