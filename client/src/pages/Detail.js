import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Header, Portada, InfoONG } from "../components/ORGheader";
import API from "../utils/API";

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
      <Container fluid>
        <Row>
          <Col size="md-12">
          <Header 
          nombre="NOMBRE ONG">
        </Header>

        <Row>
          <Col size="md-12">
            <Portada>
              <p>"ONG Information"</p>
            </Portada>
          </Col>  
        </Row>

          </Col>
          <Col size="md-2 md-offset-10">
            <Link to="/ONG/1">Ver fundacion</Link>
          </Col>       
        </Row>
        
        <hr></hr>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>"Event Info"</h1>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </article>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
