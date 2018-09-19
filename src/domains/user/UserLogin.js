import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardText
} from "reactstrap";
import "./UserLogin.css";
import LoginForm from "./LoginForm";
import Icon from "domains/general/Icon";

class UserLogin extends Component {
  render() {
    return (
      <Container fluid className="user-login py-5">
        <Row className="justify-content-center">
          <Col xs="12" sm="7" md="6" lg="5" xl="4">
            <Card className="shadow-lg">
              <CardHeader className="text-white">
                <h5 className="my-2">
                  <Icon icon="coins" className="mr-2" /> Welcome to{" "}
                  {process.env.REACT_APP_NAME}!
                </h5>
              </CardHeader>

              <CardBody>
                <CardText>Please, first, tell us a little about you!</CardText>

                <LoginForm />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UserLogin;
