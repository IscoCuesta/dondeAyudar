import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn, Separator } from "../components/Form";
import Select from 'react-select';
import firebase from 'firebase'

class Register extends Component {
  state = {
    username: "",
    password: "",
    validation: "",
    nombre: "",
    descripcion: "",
    mision: "",
    vision: "",
    objetivo: [],
    email: "",
    telefono: "",
    paginaweb: "",
    direccion: "",
    logo: "",
    portada: "",
    necesidades: [],
    firebaseUID: ""
  };

  componentDidMount() {
    this.loadUser();
    // const user = firebase.auth().currentUser
    // console.log(user.uid);
  }

  loadUser = () => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        this.setState({
          firebaseUID: localStorage.getItem("DAU")
        })
      } else {
        // No user is signed in.
        this.props.history.push("/Login");
      }
    });
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleSelectChange = (selectedOption, meta) => {
    const { name } = meta;
    console.log(selectedOption);
    this.setState({
      [name]: selectedOption
    }, () => {
      console.log(this.state.objetivo);
      console.log(this.state.necesidades.map(x => x.value));
    }
    );
  };

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
      objetivo: this.state.objetivo.map(x => x.value),
      email: this.state.email,
      telefono: this.state.telefono,
      paginaweb: this.state.paginaweb,
      direccion: this.state.direccion,
      logo: this.state.logo,
      portada: this.state.portada,
      userId: this.state.firebaseUID,
      necesidades: this.state.necesidades.map(x => x.value)
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));

  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-2"></Col>
          <Col size="md-8">
            <h3 className="mb-3 mt-3">Registra tu organización</h3>
            <form>
            {/* <Input
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
              /> */}
              <Input
              value={this.state.nombre}
              onChange={this.handleInputChange}
              name="nombre"
              placeholder="Nombre de tu organización/fundación"
              />
              <Row>
                <Col size="md-6">
                  <Select
                    isMulti
                    name= "objetivo"
                    value={this.state.objetivo}
                    placeholder="¿Cuál es el objeto de tu organización?"
                    onChange={this.handleSelectChange}
                    options={[
                      {value: "niños", label: "Niños / Adolescentes"}, 
                      {value: "mujeres", label: "Mujeres"},
                      {value: "senectud", label: "Adultos mayores"},
                      {value: "enfermedad", label: "Enfermedades / Adicciones"},
                      {value: "discapacidad", label: "Personas con capacidades diferentes"},
                      {value: "casa", label: "Casa hogar / Asilo / Comedor"},
                      {value: "cultura", label: "Cultura / Educación"},
                      {value: "reinsercion", label: "Reinserción social"},
                      {value: "victimas", label: "Víctimas de violencia"},
                      {value: "migrantes", label: "Migrantes"},
                      {value: "ambiente", label: "Medio ambiente"},
                      {value: "animales", label: "Animales"},
                      {value: "otros", label: "Otros"}
                    ]}
                  />
                </Col>
                <Col size="md-6">
                  <Select
                    isMulti
                    name= "necesidades"
                    value={this.state.necesidades}
                    placeholder="Selecciona el tipo de ayuda que estás buscando"
                    onChange={this.handleSelectChange}
                    options={[
                        {value: "dinero", label: "Apoyo económico"}, 
                        {value: "voluntarios", label: "Voluntariado"},
                        {value: "ropa", label: "Ropa"},
                        {value: "comida", label: "Comida"},
                        {value: "juguetes", label: "Juguetes"},
                        {value: "hogar", label: "Artículos del hogar"},
                        {value: "otros", label: "Otros"}
                      ]}
                  />
                </Col>
              </Row>
              
              <Separator></Separator>
              <TextArea
              value={this.state.descripcion}
              onChange={this.handleInputChange}
              name="descripcion"
              placeholder="Proporciona una descripción básica de tu organización"
              />
              <Row>
                <Col size="md-6">
                  <TextArea
                  value={this.state.mision}
                  onChange={this.handleInputChange}
                  name="mision"
                  placeholder="Misión"
                  />
                </Col>
                <Col size="md-6">
                  <TextArea
                  value={this.state.vision}
                  onChange={this.handleInputChange}
                  name="vision"
                  placeholder="Visión"
                  />
                </Col>
              </Row>
              <Input
              value={this.state.direccion}
              onChange={this.handleInputChange}
              name="direccion"
              placeholder="Dirección de la fundación"
              />
              <Row>
                <Col size="md-4">
                  <Input
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  placeholder="Introduce tu email de contacto"
                  />
                </Col>
                <Col size="md-4">
                  <Input
                  value={this.state.telefono}
                  onChange={this.handleInputChange}
                  name="telefono"
                  placeholder="Introduce tu teléfono"
                  />
                </Col>
                <Col size="md-4">
                  <Input
                  value={this.state.paginaweb}
                  onChange={this.handleInputChange}
                  name="paginaweb"
                  placeholder="Introduce el URL de tu website"
                  />
                </Col>
              </Row>
              <Row>
                <Col size="md-6">
                <Input
                value={this.state.logo}
                onChange={this.handleInputChange}
                name="logo"
                placeholder="Inserta el URL del logo de tu fundación"
                />
                </Col>
                <Col size="md-6">
                <Input
                value={this.state.portada}
                onChange={this.handleInputChange}
                name="portada"
                placeholder="Inserta el URL de una imagen para tu portada"
                />
                </Col>
              </Row>
              
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
