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
            className="fotoEvento text" 
            style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center", backgroundSize: 'cover', backgroundImage: `url(${props.imagen})` }}>
        </div>
    );
}

export function PostInfo (props) {
    let necesidades = null
    if(props.necesidad){
        necesidades = Object.values(props.necesidad).map(elemento => <p>{elemento.charAt(0).toUpperCase() + elemento.slice(1)}</p>)
    }
    return (
        <div className="row">
            <div className="col-md-7 infoEspecifica">
                <div className="textInfoEsp">
                    <h5><strong>Resumen</strong></h5> <p>{props.resumen}</p>
                    <h5><strong>Descripcion del Evento</strong></h5> <p>{props.descripcion}</p>
                    <h5><strong>Tipo de apoyo que se necesita</strong></h5> <p>{necesidades}</p>
                </div>
            </div>
            <div className="col-md-5 objNecesidades">
                <div className="row">
                    <div className="col-sm-12 TextObjNed">
                        <h5><strong>Locación del evento</strong></h5> <p>{props.lugar}</p>
                    </div>
                    <div className="col-sm-6">       
                        <h5><strong>Fecha Inicial</strong></h5> <p>{Date(props.fechaInicial).toString().slice(0, 16)}</p>
                    </div>
                    <div className="col-sm-6"> 
                        <h5><strong>Fecha Final</strong></h5> <p>{Date(props.fechaFinal).toString().slice(0, 16)}</p>
                    </div>
                
                    <a className="linkEvent" href={props.link}><strong>Link del evento</strong></a>
                </div>
            </div>
        </div>
    );
}



