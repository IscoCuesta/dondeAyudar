import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container, Wrapper } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Header from "../components/Header";
import logoPage from "../Logo_DondeAyudar.svg";
import imgInicio from "../images/img_incio.svg";
import Nav from "../components/Nav";

const textWelcome = {
  color: "#FFFFFF",
  textJustify: "justify",
};


const divBtns = {
  display: "flex",
  justifyContent: "center",
  marginTop: "1.5rem",
/*   margin: "0, auto",
  left: "50%", */
};


/* const btnWelcome = {
  margin: "1rem",
}; */

const divLogoGde = {
  display: "flex",
  justifyContent: "center",
  marginTop:"2rem",
}





class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    // this.loadBooks();
  }

  

  render() {
    return (
      <Wrapper>
      <Nav/>
      <Container fluid className="container">
        <Row>
        <Col size="md-6">
          <div style={divLogoGde}>
            <img src={logoPage} width="80%" margin="auto"></img>
          </div>
          <div style={{marginTop:"2rem"}}>
            <p style={textWelcome}>¿Te ha pasado que escombras y te sale mucha ropa en buen estado pero no sabes a dónde llevarla para que otros la pueda aprovechar?</p>
            <p style={textWelcome}>¿O tienes algo de tiempo y te gustaría usarlo para una buena causa pero no sabes dónde puedes ir?</p>
            <p style={textWelcome}>Por eso surge "Dónde Ayudar", aquí concentramos eventos, campañas de donación y demás necesidades de diversas fundaciones y ONG ubicadas en la Ciudad de México. Para comenzar es simple, si eres ONG o tienes una fundación registrate, si quieres ver donde ayudar revisa las publicaciones más recientes.</p>
          </div>
      
            <div style={divBtns}>
                <Link to="/Search">
                  <FormBtn>
                    Empieza a ayudar
                  </FormBtn>
                </Link>  
            </div>
          </Col>
        
        <Col size="md-6">
        <img src={imgInicio} width="90%"></img>
          
        </Col>  
        </Row>

      </Container>
      
      </Wrapper>
    );
  }
}

export default Books;
