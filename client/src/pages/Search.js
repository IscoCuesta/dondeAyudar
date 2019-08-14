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
import BackHead from "../images/fondo-banner.svg";
import PeopleHead from "../images/friends-banner.svg";
import Header from "../components/Header";



const divIconsS = {
  margin: "auto",
  textAlign: "center",
  /* display: "flex-inline", */
};


class Search extends Component {

  state= {
    posts: []
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts = (filter) => {
    API.getPosts({filter
    }).then(res => {
      this.setState({ 
        posts: res.data 
      }, () => {
        console.log(this.state)
      })
    })  
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
        <Col size="sm-4"></Col>
        <Col size="sm-4">
          <div style={divIconsS}>
          <img src={EventIco} className="animated infinite pulse" style={{maxWidth:"7rem"}}></img>
          
              <p>Evento</p>
          </div>
          
          
          <div style={divIconsS}>
          <img src={EventIco} className="animated infinite pulse" style={{maxWidth:"7rem"}}></img>
              <p>Recaudación</p>
              </div>
              </Col>
          <Col size="sm-4"></Col>
        </Row>
        <hr/>
        <Row className="icons-Row">
        <Col size="sm-2"></Col>
          <Col size="sm-1">
          <img src={EventIco} className="animated infinite pulse" style={{maxWidth:"5rem"}}></img>
              <p style={{textAlign:"center", color:"red", fontWeight:"bold"}}>Ropa</p>
          </Col>

          <Col size="sm-1">
          <img src={NeedsIco} className="animated infinite pulse" style={{maxWidth:"5rem"}}></img>
              <p style={{textAlign:"center", color:"red", fontWeight:"bold"}}>Comida</p>  
          </Col>

          <Col size="sm-1">
          <img src={DonaIco} className="animated infinite pulse" style={{maxWidth:"5rem"}}></img>
              <p style={{textAlign:"center", color:"red", fontWeight:"bold"}}>Apoyo económico</p>  
          </Col>

          <Col size="sm-1">
          <img src={VoluntIco} className="animated infinite pulse" style={{maxWidth:"5rem"}}></img>
              <p style={{textAlign:"center", color:"red", fontWeight:"bold"}}>Voluntariado</p>  
          </Col>

          <Col size="md-1">
          <img src={VoluntIco} className="animated infinite pulse" style={{maxWidth:"5rem"}}></img>
              <p style={{textAlign:"center", color:"red", fontWeight:"bold"}}>Juguetes</p>  
          </Col>

          <Col size="md-1">
          <img src={VoluntIco} className="animated infinite pulse" style={{maxWidth:"5rem"}}></img>
              <p style={{textAlign:"center", color:"red", fontWeight:"bold"}}>Artículos personales</p>  
          </Col>

          <Col size="md-1">
          <img src={VoluntIco} className="animated infinite pulse" style={{maxWidth:"5rem"}}></img>
              <p style={{textAlign:"center", color:"red", fontWeight:"bold"}}>Otros</p>  
          </Col>
          <Col size="md-2"></Col>
        </Row>
          <hr/>
        
        <Row>

          {this.state.posts.map(post => (
              <EventCard
                  guessCard="1"
                  id={post._id}
                  key={post._id}
                  name={post.nombre}
                  location={post.lugar}
                  descripcion={post.descripcion}
                  image="https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/2018/01/15155312/iStock-667709450.jpg"
                >
              </EventCard>
          ))}
 
        </Row>
        
      </Container>
    );
  }
}

export default Search;
