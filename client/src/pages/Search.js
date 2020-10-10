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
{/*         <Row>
        <Col size="sm-4">
        <div className="mb-3 mb-md-0" style={{textAlign:"center"}}>
          <h4>¿Qué tipo de posts quieres ver?</h4>
        </div>
        </Col>
        <Col size="sm-8">
          <Row>
            <Col size="6 md-5">
              <div style={{height:"3rem", display:"flex", justifyContent:"center", cursor:"pointer"}}>
                <img src={EventIco} style={{height:"3rem"}}></img>
                <span className="post-filter-text events" onMouseEnter={this.handleAnimationOn} onMouseOut={this.handleAnimationOff}>Eventos</span>    
              </div>
            </Col>
            <Col size="6 md-5">
              <div style={{height:"3rem", display:"flex", justifyContent:"center", cursor:"pointer"}}>
                <img src={NeedsIco} style={{height:"3rem"}}></img>
                <span className="post-filter-text collections" onMouseEnter={this.handleAnimationOn} onMouseOut={this.handleAnimationOff}>Recaudaciones</span>    
              </div>
            </Col>
          </Row>
        </Col>
        </Row>
        <hr/> */}
        <Row>
        <Col size="sm-12">
          
            <h4 className="filter-title mt-3">¿De qué forma quieres ayudar?</h4>

            <div className="filter-container">
          
              <div className="filter-div">
                <img src={DonaIco} className="filter-icon" onMouseEnter={this.handleAnimationOn} onMouseOut={this.handleAnimationOff} onClick={() => this.retrievePosts({"necesidad":"dinero"})}></img>
                <p className="filter-text resetmargin donation">Económica</p>
              </div>

              <div className="filter-div">
                <img src={VoluntIco} className="filter-icon" onMouseEnter={this.handleAnimationOn} onMouseOut={this.handleAnimationOff} onClick={() => this.retrievePosts({"necesidad":"voluntarios"})}></img>
                <p className="filter-text resetmargin volunteers">Voluntariado</p>
              </div>

              <div className="filter-div">
                <img src={RopaIco} className="filter-icon" onMouseEnter={this.handleAnimationOn} onMouseOut={this.handleAnimationOff} onClick={() => this.retrievePosts({"necesidad":"ropa"})}></img>
                <p className="filter-text resetmargin clothes">Ropa</p>
              </div>

              <div className="filter-div">
                <img src={ComidaIco} className="filter-icon" onMouseEnter={this.handleAnimationOn} onMouseOut={this.handleAnimationOff} onClick={() => this.retrievePosts({"necesidad":"comida"})}></img>
                <p className="filter-text resetmargin food">Comida</p>
              </div>

              <div className="filter-div">
                <img src={ToysIco} className="filter-icon" onMouseEnter={this.handleAnimationOn} onMouseOut={this.handleAnimationOff} onClick={() => this.retrievePosts({"necesidad":"juguetes"})}></img>
                <p className="filter-text resetmargin toys">Juguetes</p>
              </div>

              <div className="filter-div">
                <img src={ArtPersIco} className="filter-icon" onMouseEnter={this.handleAnimationOn} onMouseOut={this.handleAnimationOff} onClick={() => this.retrievePosts({"necesidad":"personales"})}></img>
                <p className="filter-text resetmargin personal">Personales</p>
              </div>

              <div className="filter-div">
                <img src={OtroIco} className="filter-icon" onMouseEnter={this.handleAnimationOn} onMouseOut={this.handleAnimationOff} onClick={() => this.retrievePosts({"necesidad":"otros"})}></img>
                <p className="filter-text resetmargin other">Otros</p>
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
