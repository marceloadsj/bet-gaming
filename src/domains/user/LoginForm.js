import React, { Component, Fragment } from "react";
// import PropTypes from "prop-types";
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  UncontrolledTooltip
} from "reactstrap";
import "./UserLogin.css";
import Icon from "domains/general/Icon";
import CountrySelect from "domains/country/CountrySelect";

class LoginForm extends Component {
  state = {
    name: "",
    country: "",
    selectTouched: false,
    selectErrored: false
  };

  onInputChange = event => this.setState({ name: event.target.value });

  onSelectChange = country => this.setState({ country });

  onSelectInputChange = () =>
    this.setState({ selectTouched: true, selectErrored: false });

  onSelectError = () => this.setState({ selectErrored: true });

  renderButton() {
    const disabled = !this.state.name || !this.state.country;

    let tooltip;
    if (disabled) {
      tooltip = (
        <UncontrolledTooltip placement="top" target="userUserLoginButton">
          Please, fill the form before enter!
        </UncontrolledTooltip>
      );
    }

    return (
      <Fragment>
        <div id="userUserLoginButton">
          <Button color="secondary" block className="mt-4" disabled={disabled}>
            Enter to {process.env.REACT_APP_NAME} <Icon icon="sign-in-alt" />
          </Button>
        </div>

        {tooltip}
      </Fragment>
    );
  }

  renderCountrySelect() {
    let error;
    if (this.state.selectTouched && this.state.selectErrored) {
      error = (
        <div className="invalid-feedback d-inline ml-1">
          No countries found!
        </div>
      );
    }

    return (
      <FormGroup className="mt-3">
        <Label>Your Country {error}</Label>

        <CountrySelect
          onChange={this.onSelectChange}
          onError={this.onSelectError}
          onInputChange={this.onSelectInputChange}
        />
      </FormGroup>
    );
  }

  render() {
    return (
      <Form>
        <FormGroup className="mt-3">
          <Label for="userUserLoginName">Your Name</Label>

          <Input
            name="name"
            id="userUserLoginName"
            placeholder="Type here..."
            onChange={this.onInputChange}
          />
        </FormGroup>

        {this.renderCountrySelect()}

        {this.renderButton()}
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({}, dispatch);
// };

export default connect(
  mapStateToProps
  //   mapDispatchToProps
)(LoginForm);
