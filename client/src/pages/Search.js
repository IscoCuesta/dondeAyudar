import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import EventCard from "../components/EventCard";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Books extends Component {


  componentDidMount() {
    // this.loadBooks();
  }


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-4">
            <Jumbotron>
              <p>Eventos</p>
            </Jumbotron>
          </Col>
          <Col size="md-4">
            <Jumbotron>
              <p>Aportaciones</p>
            </Jumbotron>
          </Col>
          <Col size="md-4">
            <Jumbotron>
              <p>Donaciones</p>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-5">
          </Col>
          <Col size="md-2 offset-md-5">
              <p>"Filters"</p>
          </Col>

        </Row>

          <hr></hr>
        <Row>
          <Col size="md-5">                
          </Col>
          <Col size="md-2 offset-md-5">            
              <p>"Cards"</p>            
          </Col>
          <Col size="md-5">                
          </Col>
        </Row>
          <Row>

          <Col size="md-6">
            <Link to="/Event/1">
              <EventCard
                  guessCard="1"
                  
                  id="1"
                  key="1"
                  name='"Event"'
                  image="https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/2018/01/15155312/iStock-667709450.jpg"
                  location="in your mind"
                  >
              </EventCard>
            </Link>
          </Col>
          <Col size="md-6">
            <Link to="/Event/1">
              <EventCard
                  guessCard="2"
                  id="2"
                  key="2"
                  name='"Donation"'
                  image="https://www.csc.gov.sg/images/default-source/ethos-images/ethos-digital-issue-3/charity_754x556px.jpg?sfvrsn=c26d54c4_0"
                  location="in your mind"
                  />
            </Link>
          </Col>
        </Row>
        
      </Container>
    );
  }
}

export default Books;
