import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Register extends Component {
  state = {
    username: "",
    password: "",
    validation: "",
    nombre: "",
    descripcion: "",
    mision: "",
    vision: "",
    objetivo: "",
    email: "",
    telefono: "",
    paginaweb: "",
    direccion: "",
    logo: "",
    portada: "",
    necesidades: ""
  };

  componentDidMount() {
    // this.loadBooks();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.saveOrg({
      nombre: this.state.nombre,
      descripcion: this.state.descripcion,
      mision: this.state.mision,
      vision: this.state.vision,
      objetivo: this.state.objetivo,
      email: this.state.email,
      telefono: this.state.telefono,
      paginaweb: this.state.paginaweb,
      direccion: this.state.direccion,
      logo: this.state.logo,
      portada: this.state.portada,
      necesidades: this.state.necesidades
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
          {/*     <p>New to DondeAyudar? Register</p>
              <h3>Email us at dondeayudar@gmail.com for your verification</h3> */}
            </Jumbotron>
            <form>
            <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="Nombre de usuario"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Contraseña"
              />
              <Input
                value={this.state.validation}
                onChange={this.handleInputChange}
                name="validation"
                placeholder="Contraseña de validación (La recibirás en un correo electrónico)"
              />
              <Input
              value={this.state.nombre}
              onChange={this.handleInputChange}
              name="nombre"
              placeholder="Nombre de tu organización/fundación"
              />
              <TextArea
              value={this.state.descripcion}
              onChange={this.handleInputChange}
              name="descripcion"
              placeholder="Proporciona una descripción básica de tu organización"
              />
              <TextArea
              value={this.state.mision}
              onChange={this.handleInputChange}
              name="mision"
              placeholder="Misión"
              />
              <TextArea
              value={this.state.vision}
              onChange={this.handleInputChange}
              name="vision"
              placeholder="Visión"
              />
              <Input
              value={this.state.objetivo}
              onChange={this.handleInputChange}
              name="objetivo"
              placeholder="Especifica el objeto de tu fundación"
              />
              <Input
              value={this.state.email}
              onChange={this.handleInputChange}
              name="email"
              placeholder="Introduce tu email"
              />
              <Input
              value={this.state.telefono}
              onChange={this.handleInputChange}
              name="telefono"
              placeholder="Introduce tu teléfono"
              />
              <Input
              value={this.state.paginaweb}
              onChange={this.handleInputChange}
              name="paginaweb"
              placeholder="Introduce el URL de tu página web"
              />
              <Input
              value={this.state.direccion}
              onChange={this.handleInputChange}
              name="direccion"
              placeholder="Dirección de la fundación"
              />
              <Input
              value={this.state.logo}
              onChange={this.handleInputChange}
              name="logo"
              placeholder="Inserta el URL del logo de tu fundación"
              />
              <Input
              value={this.state.portada}
              onChange={this.handleInputChange}
              name="portada"
              placeholder="Inserta el URL de una imagen para tu portada"
              />
              <Input
              value={this.state.necesidades}
              onChange={this.handleInputChange}
              name="necesidades"
              placeholder="Necesidades Fijas"
              />
              
              <FormBtn onClick={this.handleFormSubmit}>
                Register
              </FormBtn>
              <Link to="/ONG">
                
              </Link>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Register;
