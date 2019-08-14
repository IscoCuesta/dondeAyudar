import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import EventCard from "../components/EventCard";
import Nav from "../components/Nav";
import API from "../utils/API";
import { Header, Portada, InfoONG, Footer } from "../components/ORGheader";
import firebase from '@firebase/app';
import '@firebase/storage';


class Detail extends Component {
  state = {
    orgId: null,
    orgDetails: {},
    orgLogoUrl: null,
    orgHeaderUrl: null,
    orgPosts: [],
    isOwner: false,
    logged: false
  };

  componentDidMount() {
    this.setState({ 
      orgId: this.props.match.params.id
    } , () => {
      this.retrieveDetails();
      this.retrieveLogo();
      this.retrieveHeader();
      this.retrievePosts();
    });   
  }

  retrieveDetails = () => {
    API.getOrgDetails(this.state.orgId)
    .then(res =>
      this.setState({ 
        orgDetails: res.data 
      }, () => {
        firebase.auth().onAuthStateChanged(user => {
          if (user.uid === this.state.orgDetails.userId){
            this.setState({
              isOwner: true,
              logged: true
            }, () => {
              console.log(this.state)
            })
          }
          else{
            console.log(this.state)
          }
        })  
      }))
    .catch(err => console.log(err));   
  }

  retrieveLogo = () => {
    const storage = firebase.storage();
    storage
      .ref(`/logos/${this.state.orgId}.jpg`)
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

  retrieveHeader = () => {
    const storage = firebase.storage();
    storage
      .ref(`/headers/${this.state.orgId}.jpg`)
      .getDownloadURL()
      .then( url => {
        this.setState({ 
          orgHeaderUrl: url 
        }, () => {
          //console.log(this.state);
        });
      })
      .catch(err => console.log(err));
  }

  retrievePosts = () => {
    API.getOrgPosts({
      organization: this.state.orgId
    }).then(res => {
      this.setState({ 
        orgPosts: res.data 
      }, () => {
        console.log(this.state)
      })
    })  
  }
  logOut = () => {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      
    }).catch(function(error) {
      // An error happened.
    });
  }

  render() {
    return (
      <Container fluid>
        <Nav/>
        <Header 
          nombre={this.state.orgDetails.nombre}
          logoUrl={this.state.orgLogoUrl}>
        </Header>
        <Row>
          <Col size="md-12">
            <Portada
            headerUrl={this.state.orgHeaderUrl}>
              <p>"ONG Information"</p>
            </Portada>
          </Col>  
        </Row>

        <hr></hr>

        <InfoONG 
          descripcion={this.state.orgDetails.descripcion}
          mision={this.state.orgDetails.mision}
          vision={this.state.orgDetails.vision}
          objetivo={this.state.orgDetails.objetivo}
          necesidades={this.state.orgDetails.necesidades}>
        </InfoONG>

          <hr></hr>
        <Row>
        {this.state.orgPosts.map(post => (
          <Link to="posts/1">
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
            </Link>
        ))}
        </Row>
        <Footer
          direccion={this.state.orgDetails.direccion}
          telefono={this.state.orgDetails.telefono}
          email={this.state.orgDetails.email}
          paginaweb={this.state.orgDetails.paginaweb}>
        </Footer>
      </Container>

    );
  }
}

export default Detail;
