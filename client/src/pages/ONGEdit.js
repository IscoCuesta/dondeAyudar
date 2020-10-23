import React, { Component } from "react";
import axios from 'axios';
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn, Separator } from "../components/Form";
import Select from 'react-select';
import firebase from 'firebase'
import Nav from "../components/Nav";

import styles from "./Register.module.css"

class Edit extends Component {

  state = {
    nombre: "",
    descripcion: "",
    mision: "",
    vision: "",
    email: "",
    telefono: "",
    paginaweb: "",
    direccion: "",
    objetivo: [],
    necesidades: [],
    selectedLogo: null,
    selectedHeader: null,
    firebaseUid: "",
    orgId: null,
    error: "",
    objectOptions: [
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
    ],
    needsOptions: [
      {value: "dinero", label: "Apoyo económico"}, 
      {value: "voluntarios", label: "Voluntariado"},
      {value: "ropa", label: "Ropa"},
      {value: "comida", label: "Comida"},
      {value: "juguetes", label: "Juguetes"},
      {value: "hogar", label: "Artículos del hogar"},
      {value: "otros", label: "Otros"}
    ]
  };

  componentWillMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        localStorage.setItem("DAU", user.uid)

      } else {
        // No user is signed in.
        this.props.history.push("/");
      }
    });

    this.setState({
      firebaseUid: localStorage.getItem("DAU")
    });
  }

  componentDidMount() {
    this.setState({ 
      orgId: this.props.match.params.id
    } , () => {
      this.retrieveDetails();
      this.retrieveLogo();
      this.retrieveHeader();
    });   
  }

  retrieveDetails = () => {
    API.getOrgDetails(this.state.orgId)
    .then(res =>
      this.setState({ 
        userId: res.data.userId,
        nombre: res.data.nombre,
        descripcion: res.data.descripcion,
        mision: res.data.mision,
        vision: res.data.vision,
        objetivo: res.data.objetivo.map(e => this.getSelectLabel(e, "object")),
        necesidades: res.data.necesidades.map(e => this.getSelectLabel(e, "needs")),
        direccion: res.data.direccion,
        telefono: res.data.telefono.toString(),
        email: res.data.email,
        paginaweb: res.data.paginaweb
      }, () => {
        firebase.auth().onAuthStateChanged(user => {
          if(user){
            if (user.uid === this.state.userId){
              this.setState({
                isOwner: true,
                isLoggedIn: true
              }, () => {
                console.log(this.state)
              })
            }
          }
          else{
            console.log(this.state)
            this.setState({
              isOwner: false,
              isLoggedIn: false
            }, () => {
              console.log(this.state)
            })
          }
        })  
      }))
    .catch(err => console.log(err));   
  }

  getSelectLabel = (option, type) => {
    const selectType = type === "needs" ? this.state.needsOptions : this.state.objectOptions;
    const filtered = selectType.filter(obj => {
      return obj.value === option
    })
    return filtered[0];
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

  loadUser = () => {
    let orgID = "";

    API.getOrgUid({
      userId: this.state.firebaseUid
    }).then((res) =>{
      console.log(res)
      orgID = res.data._id;
    }).then(() => {
      if(orgID){
        this.props.history.push("/ong/"+ orgID)
      }
    }).catch((err) => console.log(err));
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

  fileChangedHandler = event => {
    console.log(event.target.id);
    if (event.target.id === "input-logo"){
      this.setState({ 
        selectedLogo: event.target.files[0] 
      } , () => {
        console.log(this.state.selectedLogo.name)
      });
    }
    else {
      this.setState({ 
        selectedHeader: event.target.files[0] 
      } , () => {
        console.log(this.state.selectedHeader.name)
      });
    }  
  }

  uploadLogoHandler = () => {
    const formData = new FormData()
    formData.append(
      'myFile',
      this.state.selectedLogo,
      this.state.selectedLogo.name 
    );
    formData.append('fileName', this.state.orgId);
    axios.post('https://us-central1-dondeayudar.cloudfunctions.net/uploadLogo', formData)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  uploadHeaderHandler = () => {
    const formData = new FormData()
    formData.append(
      'myFile',
      this.state.selectedHeader,
      this.state.selectedHeader.name
    );
    formData.append('fileName', this.state.orgId);
    axios.post('https://us-central1-dondeayudar.cloudfunctions.net/uploadHeader', formData)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  handleFormSubmit = event => {
    event.preventDefault();

    const { firebaseUid, userId, orgId, error, selectedHeader, selectedLogo, objectOptions, needsOptions, orgHeaderUrl, orgLogoUrl, isOwner, isLoggedIn, ...fields } = this.state;
    
    console.log(fields)
    let allValid = Object.entries(fields).every(field => this.validate(...field))
    console.log(allValid)

    if (allValid && selectedHeader != null && selectedLogo != null){
      API.updateOrg(this.state.orgId, {
        nombre: this.state.nombre,
        descripcion: this.state.descripcion,
        mision: this.state.mision,
        vision: this.state.vision,
        objetivo: this.state.objetivo.map(x => x.value),
        email: this.state.email,
        telefono: this.state.telefono,
        paginaweb: this.state.paginaweb,
        direccion: this.state.direccion,
        userId: this.state.firebaseUid,
        necesidades: this.state.necesidades.map(x => x.value)
      })
        .then(res => { 
            this.uploadLogoHandler();
            this.uploadHeaderHandler();
          }
        ).then(setTimeout(() => { this.props.history.push(`/ONG/${this.state.orgId}`) }, 3000))
        .catch(err => console.log(err));
    }
  };

  validate = (name, value) => {
    let validInput = false;
    switch (name) {
      case "nombre":
      case "descripcion":
      case "mision":
      case "vision":
      case "direccion":
        validInput = value.trim().length > 0;
        if (!validInput) this.setState({ 
          error: `Error: El campo ${name} no puede estar vacío`
        })
        break;
      case "objetivo":
      case "necesidades":
        validInput = value != null ? value.length > 0 : false;
        if (!validInput) this.setState({ 
          error: `Error: Debes seleccionar al menos una opción para ${name}`
        })
        break;
      case "email":
        const emailRegexMatch = value.trim().match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
        validInput = emailRegexMatch != null;
        if (!validInput) this.setState({ 
          error: "Error: Formato inválido de correo electrónico"
        })
        break;
      case "telefono":
        const phoneRegexMatch = value.trim().match(/[0-9]{10}/g)
        validInput = phoneRegexMatch != null && value.trim().length == 10;
        if (!validInput) this.setState({ 
          error: "Error: Introduce un número de teléfono a 10 dígitos",
        })
        break;
      case "paginaweb":
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
              <h3 className="mb-3 mt-3">Actualiza tu información</h3>
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
                      options={this.state.objectOptions}
                    />
                  </Col>
                  <Col size="md-6">
                    <Select
                      className={styles.needsSelect}
                      isMulti
                      name= "necesidades"
                      value={this.state.necesidades}
                      placeholder="Tipo de ayuda que estás buscando"
                      onChange={this.handleSelectChange}
                      options={this.state.needsOptions}
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
                  <h6 className="ml-2 mb-3 mt-1">Sube el logo de tu organización</h6>
                  <Input id="input-logo" type="file" onChange={this.fileChangedHandler}></Input>
                  </Col>
                  <Col size="md-6">
                  <h6 className="ml-2 mb-3 mt-1">Sube una imagen de portada</h6>
                  <Input id="input-header" type="file" onChange={this.fileChangedHandler}></Input>
                  </Col>
                </Row>

                <FormBtn display="block" className="centered-btn" onClick={this.handleFormSubmit}>
                  Actualizar información
                </FormBtn>

                <div>
                  <p className={styles.errorDisplay}>{this.state.error}</p>
                </div>
              </div>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Edit;