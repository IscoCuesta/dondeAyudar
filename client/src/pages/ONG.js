import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import EventCard from "../components/EventCard";
import API from "../utils/API";
import Nav from "../components/Nav";

class Detail extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    // API.getBook(this.props.match.params.id)
    //   .then(res => this.setState({ book: res.data }))
    //   .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
      <Nav/>
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <p>
                "ONG Information"
              </p>
            </Jumbotron>
          </Col>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>"ONG Info"</h1>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </article>
          </Col>             
        </Row>
        
        <hr></hr>

        <Row>
        <Col size="md-2 md-offset-10">
            <Link to="/ONG/newEvent">Add Event</Link>
          </Col>       
        <Col size="md-12">
            <Jumbotron>
              <p>
                "ONG Event Cards"
              </p>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
        <Col size="col-5 offset-1">
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
          <Col size="col-5 offset-1">
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
      </div>
    );
  }
}

export default Detail;
