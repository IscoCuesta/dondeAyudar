import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

import { Input, TextArea, FormBtn, Separator } from "../components/Form";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import Select from 'react-select';

class Event extends Component {
  state = {
    nombre: "",
    tipo: "",
    necesidad: [],
    resumen: "",
    descripcion: "",
    startDate: null,
    endDate: null,
    lugar: "",
    link: "",
    imagen: "",
    organization: "Default"
  };

  componentDidMount() {
    // this.loadBooks();
  }


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    }, () => {
      console.log(this.state);
    }
    );
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

  handleFormSubmit = event => {
    event.preventDefault();
    API.savePost({
      nombre: this.state.nombre,
      tipo: this.state.tipo.value,
      necesidad: this.state.necesidad.map(x => x.value),
      resumen: this.state.resumen,
      descripcion: this.state.descripcion,
      fechaInicial: this.state.startDate._d,
      fechaFinal: this.state.endDate._d,
      lugar: this.state.lugar,
      link: this.state.link,
      imagen: this.state.imagen,
      // organization: this.state.organization,
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
            <h3 className="mb-3 mt-3">Crea un nuevo post</h3>
            <form>
            <Input
              value={this.state.nombre}
              onChange={this.handleInputChange}
              name="nombre"
              placeholder="Título de tu evento o convocatoria"
            />
            <Row>
              <Col size="md-6">
                <Select
                  name="tipo"
                  value={this.state.tipo}
                  placeholder="¿Es un evento o convocatoria para apoyar?"
                  onChange={this.handleSelectChange}
                  options={[
                    {value: "evento", label: "Evento"}, 
                    {value: "convocatoria", label: "Convocatoria"}]}
                />
              </Col>
              <Col size="md-6">
                <Select
                  isMulti
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
                      {value: "hogar", label: "Artículos del hogar"},
                      {value: "otros", label: "Otros"}
                    ]}
                />
              </Col>
            </Row>
            <Separator></Separator>
            <Row className="mt-3">
              <Col size="md-12">
              <Input
                value={this.state.resumen}
                onChange={this.handleInputChange}
                name="resumen"
                placeholder="Descripción breve"
              />
              </Col>
            </Row>
            <TextArea
              value={this.state.descripcion}
              onChange={this.handleInputChange}
              name="descripcion"
              placeholder="Proporciona detalles sobre el evento/convocatoria y la ayuda que necesitas"
            />
            <Input
              value={this.state.lugar}
              onChange={this.handleInputChange}
              name="lugar"
              placeholder="¿Dónde ocurrirá el evento o la recepción de donaciones?"
            />
            <Row>
              <Col size="md-6">
                <Input
                  value={this.state.link}
                  onChange={this.handleInputChange}
                  name="link"
                  placeholder="Introduce el link de tu evento o convocatoria"
                />
                <Input
                  value={this.state.imagen}
                  onChange={this.handleInputChange}
                  name="imagen"
                  placeholder="Introduce el url de la imagen para tu post"
                />
              </Col>
              <Col size="md-4">
                <Row>
                  <h6 className="mb-3 mt-2">Selecciona una fecha o rango de fechas</h6>
                </Row>
                <Row>
                <DateRangePicker
                  startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                  startDatePlaceholderText="Fecha Inicial"
                  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                  endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                  endDatePlaceholderText="Fecha Final"
                  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                  onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                />
                </Row>
              </Col>
              <Col size="md-2">

                  <FormBtn className="mt-5" onClick={this.handleFormSubmit}>
                    Crear Post
                  </FormBtn>

              </Col>
            </Row>
            </form>
           
              <Link to="/ONG">
                
              </Link>


          </Col>
        </Row>
      </Container>
    );
  }
}

export default Event;
