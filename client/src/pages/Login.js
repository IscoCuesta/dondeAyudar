import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import firebase from 'firebase'
import Nav from "../components/Nav";

import styles from "./Login.module.css"

class Books extends Component {
  state = {
    email: "",
    name: "",
    password: "",
    UserEmail: "",
    UserFirebaseId: "",
    error: "",
    isError: false
  };

  componentDidMount() {
    // this.loadUser();

    // console.log();
    // $('.toast').toast("hide")
  }

  loadUser = () => {
    // const current = firebase.default.auth().getCurrentUser();
    // console.log(current);

  };


  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        localStorage.setItem("DAU", user.user.uid);
        this.props.history.push("/Register");
      })
      .catch((err)=> this.setState({error: err.message, isError: true}))
    } else {
      this.setState({error: "Introduce un email y contraseña", isError: true})
    }

  };

  handleFormSubmitRegister = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        this.setState({
          UserEmail: user.user.email,
          UserFirebaseId: user.user.uid,
        })
      }).then(() => API.saveUser({
        email: this.state.UserEmail,
        userFirebaseId: this.state.UserFirebaseId,
        nombre: this.state.name
      })).then((res) => {
        console.log(res.data);
        this.props.history.push("/Register");
      }).catch(err => {
        this.setState({error: err.message, isError: true})
      });
    } else {
      this.setState({error: "Elige un email y contraseña para iniciar", isError: true})
    }
  };

  render() {
    return (
      <div>
      <Nav/>
      <Container fluid>
        <Row>
          <Col size="md-6 12">
            <Jumbotron/>
          </Col>
          <Col size="md-6 12">
            <div className={styles.formContainer}>
              <h5 className={styles.defaultFont}> Inicia sesión en Donde Ayudar </h5>
              <form>
                <Input
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  placeholder="Email"
                />
                <Input
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  type="password"
                  placeholder="Contraseña"
                />
                  <FormBtn
                    display="block"
                    onClick={this.handleFormSubmit}>
                    Iniciar sesión
                  </FormBtn>
                  <p className={styles.registerPrompt}> ¿Aún no tienes una cuenta para tu ONG? <span className={styles.registerButton} onClick={this.handleFormSubmitRegister}> Regístrala </span></p>
              </form>
              <p className={styles.errorDisplay}>{this.state.error ? "Error: " + this.state.error : ""}</p>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Books;
