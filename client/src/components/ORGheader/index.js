import React from "react";
import "./style.css";
import { Link } from "react-router-dom"

import { FormBtn } from "../Form";
import add from "../../images/plus-circle.svg";
import edit from "../../images/edit.svg";

export function Header(props) {
    const editable = props.editable;
    const buttons = props.desktop ? 
        <div className="dashboard">
            <Link to = '/ong/newpost'>
                <img
                  alt="Crear nuevo post"
                  className="dashboard-icon"
                  src={add}
                />
            </Link>
            <Link to = {`/ong/edit/${props.orgId}`}>
                <img
                  alt="Editar perfil"
                  className="dashboard-icon"
                  src={edit}
                />
            </Link>
        </div> :
        <div className="dashboard">
            <Link to = '/ong/newPost'>
                <div className="dashboard-btn">
                    <FormBtn>
                        Crear post
                    </FormBtn>
                </div>
                
            </Link>
            <Link to = {`/ong/edit/${props.orgId}`}>
                <div className="dashboard-btn">
                    <FormBtn>
                        Editar perfil
                    </FormBtn>
                </div>
            </Link>  
        </div>;
        const dashboard = editable ? buttons : <div></div>;
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
                            <div className="nombre-text"> {props.nombre} </div>
                        </div>
                        {dashboard}
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
                    <h4 className="events-title"> {props.children.length > 0 ? "Próximos eventos" : "Aún no se han creado eventos"} </h4>
                    <div className="row">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}


