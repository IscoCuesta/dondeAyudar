import React, { Component } from "react";
import axios from 'axios';
import firebase from 'firebase';
import '@firebase/storage';

import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav";
import { Input, TextArea, FormBtn, Separator } from "../components/Form";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import Select from 'react-select';

import styles from "./ONGPost.module.css"

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
    selectedImage: null,
    organization: null,
    postId: null,
    firebaseUid: null,
    error: ""
  };

  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          firebaseUid: user.uid
        }, () => {
          console.log(this.state.firebaseUid);
          API.getOrgUid({
            userId: this.state.firebaseUid
          }).then(res => {
            console.log(res.data)
            this.setState ({
              organization: res.data._id
            }, () => {
              console.log(this.state);
            })
          })
        })
      }else{
        this.props.history.push("/Login")
      }
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    if (this.validate(name, value)){
      this.setState({ 
        error: ""
      })
    }
    this.setState({
      [name]: value
    });
  };

  handleSelectChange = (selectedOption, meta) => {
    const { name } = meta;
    console.log(selectedOption);
    if (this.validate(name, selectedOption)){
      this.setState({ 
        error: ""
      })
    }
    this.setState({
      [name]: selectedOption
    }, () => console.log(this.state));
  };

  fileChangedHandler = event => {
    console.log(event.target.id);
    this.setState({
      selectedImage: event.target.files[0] 
    } , () => {
      console.log(this.state.selectedImage.name)
    });
  };

  uploadImageHandler = (cb, postId) => {
    const formData = new FormData()
    formData.append(
      'myFile',
      this.state.selectedImage,
      this.state.selectedImage.name
    );
    formData.append('fileName', this.state.postId);
    axios.post('https://us-central1-dondeayudar.cloudfunctions.net/uploadPostImage', formData)
      .then(res => {
        console.log(res);
        cb(postId);
    })
      .catch(err => console.log(err))
      
  };

  retrieveUrl = (postId) => {
    const storage = firebase.storage();
    storage
      .ref(`/posts/${postId}.jpg`)
      .getDownloadURL()
      .then( url => {
        API.updatePost(postId, {imagen:url})
      })
      .catch(err => console.log(err));
  }

  handleFormSubmit = event => {

    event.preventDefault();

    const { firebaseUid, postId, organization, error, focusedInput, selectedImage, startDate, endDate, ...fields } = this.state;

    let allValid = Object.entries(fields).every(field => this.validate(...field))
    console.log(fields)
    console.log(allValid)

    if (allValid && selectedImage != null && startDate != null && endDate != null) {
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
        organization: this.state.organization
      })
        .then(res => {
          this.setState({ 
            postId: res.data._id
          } , () => {
            this.uploadImageHandler(this.retrieveUrl, this.state.postId);
          });
        }).then(setTimeout(() => { this.props.history.push(`/ONG/${organization}`) }, 3000))
        .catch(err => console.log(err));
    } else if (selectedImage == null || startDate == null || endDate == null) {
      this.setState({ 
        error: `Error: Debes llenar todos los campos`
      })
    }
  };

  validate = (name, value) => {
    let validInput = false;
    switch (name) {
      case "nombre":
      case "descripcion":
      case "resumen":
      case "lugar":
        validInput = value.trim().length > 0;
        if (!validInput) this.setState({ 
          error: `Error: El campo ${name} no puede estar vacío`
        })
        break;
      case "necesidad":
        validInput = value != null ? value.length > 0 : false;
        if (!validInput) this.setState({ 
          error: `Error: Debes seleccionar al menos una opción para ${name}`
        })
        break;
      case "tipo":
        validInput = typeof value === 'object' && value !== null
        break;
      case "link":
        const webRegexMatch = value.trim().match(/^http(s)?:\/\/.(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}/g)
        validInput = webRegexMatch != null;
        if (!validInput) this.setState({ 
          error: "Error: Formato inválido de página web (debe incluir http:// o https://)",
        })
        break;
    }
    return validInput;
  };


  render() {
    return (
      <div>
      <Nav/>
      <Container fluid>
        <Row>
          <Col size="12">
            <div className={styles.formContainer}>

            
              <h3 className="mb-3 mt-3">Crea un nuevo post</h3>
              <form>
                <Input
                  value={this.state.nombre}
                  onChange={this.handleInputChange}
                  name="nombre"
                  placeholder="Título de tu post"
                />
                <Row>
                  <Col size="md-6">
                    <Select
                      name="tipo"
                      value={this.state.tipo}
                      placeholder="¿Es un evento o recaudación?"
                      onChange={this.handleSelectChange}
                      options={[
                        {value: "evento", label: "Evento"}, 
                        {value: "recaudacion", label: "Recaudación"}]}
                    />
                  </Col>
                  <Col size="md-6">
                    <Select
                      className={styles.needsSelect}
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
                          {value: "personales", label: "Artículos personales"},
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
                  placeholder="Proporciona detalles sobre el evento/recaudación y la ayuda que necesitas"
                />
                <Row>
                  <Col size="md-6">
                    <Input
                      value={this.state.lugar}
                      onChange={this.handleInputChange}
                      name="lugar"
                      placeholder="¿Dónde ocurrirá el evento o recaudación?"
                    />
                  </Col>
                  <Col size="md-6">
                    <Input
                      value={this.state.link}
                      onChange={this.handleInputChange}
                      name="link"
                      placeholder="Introduce el link de tu evento o convocatoria"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col size="md-6">
                    <h6 className="ml-2 mb-3 mt-1">Sube una imagen para tu post</h6>
                    <Input id="input-postImage" type="file" onChange={this.fileChangedHandler}></Input>
                  </Col>
                  <Col size="md-6">
                    <Row>
                      <h6 className="ml-2 mb-3 mt-1">Selecciona una fecha o rango de fechas</h6>
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
                </Row>

                <div className={styles.submit}>
                  <FormBtn display="block" className="centered-btn mt-5" onClick={this.handleFormSubmit}>
                    Crear Post
                  </FormBtn>
                </div>       
               
                <p className={styles.errorDisplay}>{this.state.error}</p>

              </form>
            </div>         


          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Event;
