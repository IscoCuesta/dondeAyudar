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

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>New to DondeAyudar? Register</h1>
              <h3>Email us al dondeayudar@gmail.com for your verification</h3>
            </Jumbotron>
            <form>
            <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="Username"
                placeholder="Username"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="Password"
                placeholder="PassWord"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="Password"
                placeholder="Validation PassWord (contact Us)"
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
