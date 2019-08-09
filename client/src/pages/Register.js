import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn, Separator } from "../components/Form";
import Select from 'react-select';

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

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleSelectChange = (selectedOption, meta) => {
    const { name } = meta;
    this.setState({
      [name]: selectedOption
    }, () => {
      console.log(this.state);
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
                    name= "objeto"
                    value={this.state.objeto}
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
                    name= "necesidad"
                    value={this.state.necesidad}
                    placeholder="Selecciona el tipo de ayuda que estás buscando"
                    onChange={this.handleSelectChange}
                    options={[
                        {value: "dinero", label: "Apoyo económico"}, 
                        {value: "voluntarios", label: "Voluntariado"},
                        {value: "ropa", label: "Ropa"},
                        {value: "comida", label: "Comida"},
                        {value: "juguetes", label: "Juguetes"},
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
