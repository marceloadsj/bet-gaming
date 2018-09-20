import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Icon from "domains/general/Icon";

class NotFoundPage extends Component {
  render() {
    return (
      <Row className="justify-content-center pt-5">
        <Col xs="auto" className="text-white text-center">
          <h1 className="mb-3">
            Oh... <Icon icon="sad-tear" />
          </h1>

          <p>
            I'm sad to say but... <br />
            The page you are looking for does not exists!
          </p>

          <Button tag={Link} to="/" color="secondary" block className="mt-4">
            <Icon icon="home" /> Click here to go to Home page
          </Button>
        </Col>
      </Row>
    );
  }
}

export default NotFoundPage;
