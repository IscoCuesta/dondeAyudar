import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import OngCard from "../components/ONGcard";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Header, Portada, PostInfo } from "../components/EventHeader";
import Nav from "../components/Nav";
import firebase from '@firebase/app';
import '@firebase/storage';

// import EventCard from "../components/EventCard";


class Detail extends Component {
  state = {
    postId: null,
    postDetails: {},
    orgDetails: {},
    orgLogoUrl: null
  };

  componentDidMount() {
    this.setState({ 
      postId: this.props.match.params.id
    } , () => {
    this.retrieveDetails();
    });
  }

  retrieveDetails = () => {
    API.getPostDetails(this.state.postId)
    .then(res =>
      this.setState({ 
        postDetails: res.data,
        orgDetails: res.data.organization
      }, () => {
        this.retrieveLogo();
        console.log(this.state);
    }))
    .catch(err => console.log(err));  
  }

  retrieveLogo = () => {
    const storage = firebase.storage();
    storage
      .ref(`/logos/${this.state.orgDetails._id}.jpg`)
      .getDownloadURL()
      .then( url => {
        this.setState({ 
          orgLogoUrl: url 
        }, () => {
          //console.log(this.state);
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
      <Nav/>
      <Container fluid>
        <Header 
          nombre={this.state.postDetails.nombre}>
        </Header>
        <Row>
          <Col size="md-7">
            <Portada
            imagen={this.state.postDetails.imagen}
            nombre={this.state.postDetails.nombre}>
            </Portada>
          </Col> 

          {/* <Col size="md-2 md-offset-10">
            <Link to="/ONG/1">Ver fundacion</Link> */}

          <Col size="md-5">
              <OngCard
                  id={this.state.orgDetails._id}
                  key={this.state.orgDetails._id}
                  nombre={this.state.orgDetails.nombre}
                  logo={this.state.orgLogoUrl}
                >
              </OngCard>
          </Col>
   
        </Row>
        
        <hr></hr>

        <Row>
          <PostInfo
            nombre={this.state.postDetails.nombre}
            lugar={this.state.postDetails.lugar}
            fechaInicial={this.state.postDetails.fechaInicial}
            fechaFinal={this.state.postDetails.fechaFinal}
            descripcion={this.state.postDetails.descripcion}
            resumen={this.state.postDetails.resumen}
            necesidad={this.state.postDetails.necesidad}
            link={this.state.postDetails.link}
            >
          </PostInfo>
        </Row>
      </Container>
      </div>

    );
  }
}

export default Detail;
