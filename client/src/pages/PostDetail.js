import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Cards from "../components/ONGcard";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Header, Portada, InfoONG } from "../components/EventHeader";
import Nav from "../components/Nav";
// import EventCard from "../components/EventCard";


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
        <Header 
          nombre="Nombre Evento">
        </Header>
        <Row>
          <Col size="md-7">
            <Portada>
              <p>"ONG Information"</p>
            </Portada>
          </Col> 

          {/* <Col size="md-2 md-offset-10">
            <Link to="/ONG/1">Ver fundacion</Link> */}

          <Col size="md-5">
            <Link to="/ONG/1">
              <Cards
                  id=""
                  key=""
                  nombre=""
                  descripcion=""
                >
              </Cards>
            </Link>
          </Col>
   
        </Row>
        
        <hr></hr>

        <Row>
          <InfoONG 
            nombre="CONCIERTO PARA RECAUDAR FONDOSPARA LA FUNDACION...."
            lugar="Auditorio Nacional, venta de garage, direccion..."
            startDate="12 de octubre"
            endDate="15 de Octubre"
            descripcion="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                It has survived not only five centuries. Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry. It has survived not only five centuries. 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            resumen="Necesitamos jovenes, necesitamos dinero..."
            necesidad="Economica, recursos, voluntarios..."
            vision="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                It has survived not only five centuries"
            link="facebook, tickermaster....."
            >
          </InfoONG>
        </Row>
      </Container>
      </div>

    );
  }
}

export default Detail;
