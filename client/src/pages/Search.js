import React, { Component } from "react";
import firebase from '@firebase/app';
import '@firebase/storage';

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
import StatusMessage from "../components/StatusMessage";
import { throws } from "assert";

import Nav from "../components/Nav";


const divIconsS = {
  margin: "auto",
  textAlign: "center",
  /* display: "flex-inline", */
};

class Search extends Component {

  state= {
    posts: [],
    postsFound: true
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts = filter => {
    API.getPosts(filter
    ).then(res => {
      console.log(res)
      if(res.data.length === 0){
        this.setState({
          posts: res.data,
          postsFound: false
        }, () => {
          console.log(this.state)
        })
      }
      else{
        this.setState({ 
          posts: res.data,
          postsFound: true
        }, () => {
          console.log(this.state)
        })
      }
    })  
  }

  handleAnimationOn = event => {
    event.target.classList.add('animated');
    event.target.classList.add('infinite');
    event.target.classList.add('pulse');
  }

  handleAnimationOff = event => {
    event.target.classList.remove('animated');
    event.target.classList.remove('infinite');
    event.target.classList.remove('pulse');
  }

  render() {
    return (
      <div>
      <Nav/>
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
        <Col size="sm-4">
        <div style={{textAlign:"center"}}>
          <h4>¿De qué forma quieres ayudar?</h4>
        </div>
        </Col>
        <Col size="sm-8">
          <Row>
            <Col size="md-5">
              <div style={{height:"3rem", display:"flex", justifyContent:"center", cursor:"pointer"}}>
                <img src={EventIco} style={{height:"3rem"}}></img>
                <span style={{marginLeft:"1rem", lineHeight:"3rem", verticalAlign:"middle", color:"#D93B65", fontWeight:"bold", fontSize:"1rem"}}
                onMouseEnter={this.handleAnimationOn} onMouseOut={this.handleAnimationOff}>Asistiendo a un evento</span>    
              </div>
            </Col>
            <Col size="md-5">
              <div style={{height:"3rem", display:"flex", justifyContent:"center", cursor:"pointer"}}>
                <img src={NeedsIco} style={{height:"3rem"}}></img>
                <span style={{marginLeft:"1rem", lineHeight:"3rem", verticalAlign:"middle", color:"#E421A2", fontWeight:"bold", fontSize:"1rem"}}
                onMouseEnter={this.handleAnimationOn} onMouseOut={this.handleAnimationOff}>Contribuyendo a una recaudación</span>    
              </div>
            </Col>
          </Row>
        </Col>
        </Row>
        <hr/>
        <Row>
        <Col size="sm-12">
          <div style={{display:"flex", justifyContent:"space-around"}}>
          <div>
            <h4 className="mt-4">¿Qué tipo de contribución puedes hacer?</h4>
          </div>
          
            <div style={{width:"5rem"}}>
              <img src={DonaIco} style={{width:"5rem", cursor:"pointer"}}
              onMouseEnter={this.handleAnimationOn} onMouseOut={this.handleAnimationOff}
              onClick={() => this.retrievePosts({"necesidad":"dinero"})}></img>
              <p style={{marginTop:".3rem", marginLeft:"-.05vw",textAlign:"center", color:"#84BF04", fontWeight:"bold", fontSize:"0.8rem"}}
              >Económica</p>
            </div>

            <div style={{width:"5rem"}}>
              <img src={VoluntIco} style={{width:"5rem", cursor:"pointer"}}
              onMouseEnter={this.handleAnimationOn} onMouseOut={this.handleAnimationOff}
              onClick={() => this.retrievePosts({"necesidad":"voluntarios"})}></img>
              <p style={{marginTop:".3rem", marginLeft:"-.05vw", textAlign:"center", color:"#F2B705", fontWeight:"bold", fontSize:"0.8rem"}}
              >Voluntariado</p>
            </div>

            <div style={{width:"5rem"}}>
              <img src={RopaIco} style={{width:"5rem", cursor:"pointer"}}
              onMouseEnter={this.handleAnimationOn} onMouseOut={this.handleAnimationOff}
              onClick={() => this.retrievePosts({"necesidad":"ropa"})}></img>
              <p style={{marginTop:".3rem", marginLeft:"-.05vw", textAlign:"center", color:"#6900BC", fontWeight:"bold", fontSize:"0.8rem"}}
              >Ropa</p>
            </div>

            <div style={{width:"5rem"}}>
              <img src={ComidaIco} style={{width:"5rem", cursor:"pointer"}}
              onMouseEnter={this.handleAnimationOn} onMouseOut={this.handleAnimationOff}
              onClick={() => this.retrievePosts({"necesidad":"comida"})}></img>
              <p style={{marginTop:".3rem", marginLeft:"-.05vw", textAlign:"center", color:"#EF9300", fontWeight:"bold", fontSize:"0.8rem"}}
              >Comida</p>
            </div>

            <div style={{width:"5rem"}}>
              <img src={ToysIco} style={{width:"5rem", cursor:"pointer"}}
              onMouseEnter={this.handleAnimationOn} onMouseOut={this.handleAnimationOff}
              onClick={() => this.retrievePosts({"necesidad":"juguetes"})}></img>
              <p style={{marginTop:".3rem", marginLeft:"-.05vw", textAlign:"center", color:"#CC0097", fontWeight:"bold", fontSize:"0.8rem"}}
              >Juguetes</p>
            </div>

            <div style={{width:"5rem"}}>
              <img src={ArtPersIco} style={{width:"5rem", cursor:"pointer"}}
              onMouseEnter={this.handleAnimationOn} onMouseOut={this.handleAnimationOff}
              onClick={() => this.retrievePosts({"necesidad":"personales"})}></img>
              <p style={{marginTop:".3rem", marginLeft:"-.05vw", textAlign:"center", color:"#009CFC", fontWeight:"bold", fontSize:"0.8rem"}}
              >Art. Personales</p>
            </div>

            <div style={{width:"5rem"}}>
              <img src={OtroIco} style={{width:"5rem", cursor:"pointer"}}
              onMouseEnter={this.handleAnimationOn} onMouseOut={this.handleAnimationOff}
              onClick={() => this.retrievePosts({"necesidad":"otros"})}></img>
              <p style={{marginTop:".3rem", marginLeft:"-.05vw", textAlign:"center", color:"#055E00", fontWeight:"bold", fontSize:"0.8rem"}}
              >Otros</p>
            </div>

          </div>
        </Col>
        </Row>
          <hr/>
        <Row>
          <StatusMessage
            status={this.state.postsFound}>
          </StatusMessage>

          {this.state.posts.map(post => (
              <EventCard
                  guessCard="1"
                  id={post._id}
                  key={post._id}
                  nombre={post.nombre}
                  lugar={post.lugar}
                  fecha={post.fechaInicial}
                  organization={post.organization}
                  imagen={post.imagen}
                  page="search"
                >
              </EventCard>
          ))}
 
        </Row>
        
      </Container>
      </div>
    );
  }
}

export default Search;
