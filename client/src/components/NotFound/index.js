import React from "react";
import { Col, Row, Container } from "../Grid";

import styles from "./NoMatch.module.css"

import logo from "../../images/DA-icon.svg"

function NotFound() {
  return (
    <div>
    <Container fluid>
      <Row>
        <Col size="md-12">
            <div className={styles.notFoundContainer}>
              <img className={styles.logo} src={logo}></img>
              <h3>Error 404
                <span role="img" aria-label="Face With Rolling Eyes Emoji">
                  🙄
                </span>
              </h3>
              <h3>No pudimos encontrar la página que estás buscando</h3>
            </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default NotFound;