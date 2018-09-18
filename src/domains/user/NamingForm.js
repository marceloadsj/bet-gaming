import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardText,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import "./NamingForm.css";
import Icon from "domains/general/Icon";
import { APP_NAME } from "configs/constants";

class NamingForm extends Component {
  render() {
    return (
      <Container fluid className="user-naming-form py-5">
        <Row className="justify-content-center">
          <Col xs="12" sm="7" md="6" lg="5" xl="4">
            <Card className="shadow-lg">
              <CardHeader className="text-white">
                <h5 className="my-2">
                  <Icon icon="coins" className="mr-2" /> Welcome to {APP_NAME}!
                </h5>
              </CardHeader>

              <CardBody>
                <CardText>Please, tell us your name to enter.</CardText>

                <Form>
                  <FormGroup className="mt-3">
                    <Label for="userName">Your Name</Label>

                    <Input
                      name="name"
                      id="userName"
                      placeholder="Type here..."
                    />
                  </FormGroup>

                  <Button color="secondary" block className="mt-4">
                    Enter to {APP_NAME} <Icon icon="sign-in-alt" />
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NamingForm;
