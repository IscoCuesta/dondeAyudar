import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Cards from "../components/ONGcard";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Header, Portada, InfoONG } from "../components/EventHeader";

// import EventCard from "../components/EventCard";


class Detail extends Component {
  state = {
    postId: null,
    postDetails: {},
    orgDetails: {}
  };

  componentDidMount() {
    this.setState({ 
      postId: this.props.match.params.id
    } , () => {
    this.retrieveDetails();
    });
  }

  retrieveDetails= () => {
    API.getPostDetails(this.state.postId)
    .then(res =>
      this.setState({ 
        postDetails: res.data,
        orgDetails: res.data.organization
      }, () => {
        console.log(this.state);
    }))
    .catch(err => console.log(err));  
  }

  render() {
    return (
      <Container fluid>
        <Header 
          nombre={this.state.postDetails.nombre}>
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
              <Cards
                  id={this.state.orgDetails._id}
                  key={this.state.orgDetails._id}
                  nombre={this.state.orgDetails.nombre}
                  descripcion={this.state.orgDetails.descripcion}
                >
              </Cards>
          </Col>
   
        </Row>
        
        <hr></hr>

        <Row>
          <InfoONG 
            nombre={this.state.postDetails.nombre}
            lugar={this.state.postDetails.lugar}
            fechaInicial={this.state.postDetails.fechaInicial}
            fechaFinal={this.state.postDetails.fechaFinal}
            descripcion={this.state.postDetails.descripcion}
            resumen={this.state.postDetails.resumen}
            necesidad={this.state.postDetails.necesidad}
            link={this.state.postDetails.link}
            >
          </InfoONG>
        </Row>

      </Container>
    );
  }
}

export default Detail;
