import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import firebase from 'firebase'
<<<<<<< HEAD
import { userInfo } from "os";
import $ from 'jquery';
import '../App.css';

=======
import Nav from "../components/Nav";
>>>>>>> master



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
  }};

  render() {
    return (
      <div>
      <Nav/>
      <Container fluid>
      
        <Row>
          <Col size="md-12">
            <Jumbotron>
              {/* <p>If you are a ONG Login</p> */}
            </Jumbotron>
            </Col>
            <div><h1>{this.state.error}</h1></div>
            <Col size="md-6">
            <div style={{marginTop:"2rem"}}>
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
                  placeholder="Password"
                />
                <Col size="md-4 colBtns">
                <div style={{display:"-webkit-inline-box", justifyContent:"center", marginLeft:"10rem"}}>
                
                  <FormBtn
                    onClick={this.handleFormSubmit}>
                    Log in
                  </FormBtn>
                  <FormBtn
                    onClick={this.handleFormSubmitRegister}>
                    Register
                  </FormBtn>
                </div>
                </Col>
              </form>
            </div>
            </Col>
            
          
        </Row>
      </Container>
      </div>
    );
  }
}

export default Books;
