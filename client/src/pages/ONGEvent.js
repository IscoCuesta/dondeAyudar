import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

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
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Register new event</h1>
            </Jumbotron>
            <form>
            <Input
                name="Username"
                placeholder="Name"
              />
              <Input
                name="Password"
                placeholder="Place"
              />
              <Input
                name="Password"
                placeholder="details"
              />
              <Link to="/ONG">
                <FormBtn>
                  Register
                </FormBtn>
              </Link>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
