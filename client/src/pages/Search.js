import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import EventCard from "../components/EventCard";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import EventIco from "../images/event-ico.svg";
import DonaIco from "../images/dona-ico.svg";
import NeedsIco from "../images/needs-ico.svg";
import VoluntIco from "../images/volunt-ico.svg";
import RopaIco from "../images/ropa-ico.svg";
import ComidaIco from "../images/comida-ico.svg";
import ToysIco from "../images/toys-ico.svg";
import ArtPersIco from "../images/personal-ico.svg";
import OtroIco from "../images/Otro-ico.svg";
import BackHead from "../images/fondo-banner.svg";
import PeopleHead from "../images/friends-banner.svg";
import Header from "../components/Header";



const divIconsS = {
  margin: "auto",
  textAlign: "center",
  /* display: "flex-inline", */
};




class Books extends Component {


  componentDidMount() {
    // this.loadBooks();
  }


  render() {
    return (
      <Container fluid>
        <Row>
            <Header backgroundImage={BackHead}>
            <div className="friendsHead">
              <img src={PeopleHead} width="50%"></img>
            </div>
            
              
            </Header>
        </Row>
        <br/>
        <Row>
        <Col size="sm-3">
        <div style={{textAlign:"center"}}>
          <h4>Selecciona el tipo de evento</h4>
        </div>
        </Col>
        <Col size="sm-9">
          <div style={{display:"flex", justifyContent:"center"}}>
            
            
            <div style={{marginRight:"2rem"}}>
              <img src={EventIco} className="animated infinite pulse" style={{width:"7rem"}}></img>
              <p style={{textAlign:"center", color:"#D93B65", fontWeight:"bold", fontSize:"1rem"}}>Evento</p>    
            </div>

            <div>
              <img src={NeedsIco} className="animated infinite pulse" style={{width:"7rem"}}></img>
              <p style={{textAlign:"center", color:"#E421A2", fontWeight:"bold", fontSize:"1rem"}}>Recaudación</p>    
            </div>
          </div>

        </Col>
        </Row>
        <hr/>
        <Row>
        <Col size="sm-12">
          <div style={{display:"flex", justifyContent:"space-around"}}>
          <div>
            <h4>¿Con qué quieres ayudar?</h4>
          </div>
          
            <div style={{width:"5rem"}}>
              <img src={RopaIco} className="animated infinite pulse" style={{width:"5rem"}}></img>
              <p style={{textAlign:"center", color:"#6900BC", fontWeight:"bold", fontSize:"0.8rem"}}>Ropa</p>
            </div>

            <div style={{width:"5rem"}}>
              <img src={ComidaIco} className="animated infinite pulse" style={{width:"5rem"}}></img>
              <p style={{textAlign:"center", color:"#EF9300", fontWeight:"bold", fontSize:"0.8rem"}}>Comida</p>
            </div>

            <div style={{width:"5rem"}}>
              <img src={DonaIco} className="animated infinite pulse" style={{width:"5rem"}}></img>
              <p style={{textAlign:"center", color:"#84BF04", fontWeight:"bold", fontSize:"0.8rem"}}>Apoyo económico</p>
            </div>

            <div style={{width:"5rem"}}>
              <img src={VoluntIco} className="animated infinite pulse" style={{width:"5rem"}}></img>
              <p style={{textAlign:"center", color:"#F2B705", fontWeight:"bold", fontSize:"0.8rem"}}>Voluntariado</p>
            </div>

            <div style={{width:"5rem"}}>
              <img src={ToysIco} className="animated infinite pulse" style={{width:"5rem"}}></img>
              <p style={{textAlign:"center", color:"#CC0097", fontWeight:"bold", fontSize:"0.8rem"}}>Juguetes</p>
            </div>

            <div style={{width:"5rem"}}>
              <img src={ArtPersIco} className="animated infinite pulse" style={{width:"5rem"}}></img>
              <p style={{textAlign:"center", color:"#009CFC", fontWeight:"bold", fontSize:"0.8rem"}}>Artículos personales</p>
            </div>

            <div style={{width:"5rem"}}>
              <img src={OtroIco} className="animated infinite pulse" style={{width:"5rem"}}></img>
              <p style={{textAlign:"center", color:"#055E00", fontWeight:"bold", fontSize:"0.8rem"}}>Otros</p>
            </div>

          </div>
        </Col>
        </Row>
          <hr/>
          <Row>
            
              <EventCard
                  guessCard="1"
                  id="1"
                  key="1"
                  name="Campamento Tortugero"
                  image="https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/2018/01/15155312/iStock-667709450.jpg"
                  location="2, 3 y 4 de semptiembre en Nautla, Veracruz"
                  resumen="Liberacion de tortugas, playas más limpias, conocimiento acerca de la bioconservación"
                  postID="/Event/1"
                  >
              </EventCard>
            
              <EventCard
                  guessCard="2"
                  id="2"
                  key="2"
                  name="Tapaton 2019"
                  image="https://www.csc.gov.sg/images/default-source/ethos-images/ethos-digital-issue-3/charity_754x556px.jpg?sfvrsn=c26d54c4_0"
                  location="Del 17 al 24 de septiembre, alcaldía Benito Juárez"
                  resumen="Dona tus tapitas para salvar vidas. Colecta de tapas de plastico de cualquier tipo de envase"
                  postID="/Event/1"
                  >
              </EventCard>
            
              <EventCard
                  guessCard="1"
                  id="1"
                  key="1"
                  name="Campamento Tortugero"
                  image="https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/2018/01/15155312/iStock-667709450.jpg"
                  location="2, 3 y 4 de semptiembre en Nautla, Veracruz"
                  resumen="Liberacion de tortugas, playas más limpias, conocimiento acerca de la bioconservación"
                  postID="/Event/1"
                  >
              </EventCard>
            
              <EventCard
                  guessCard="2"
                  id="2"
                  key="2"
                  name="Tapaton 2019"
                  image="https://www.csc.gov.sg/images/default-source/ethos-images/ethos-digital-issue-3/charity_754x556px.jpg?sfvrsn=c26d54c4_0"
                  location="Del 17 al 24 de septiembre, alcaldía Benito Juárez"
                  resumen="Dona tus tapitas para salvar vidas. Colecta de tapas de plastico de cualquier tipo de envase"
                  postID="/Event/1"
                  >
              </EventCard>

              
        </Row>
        
      </Container>
    );
  }
}

export default Books;
