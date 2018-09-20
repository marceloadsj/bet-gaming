import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  UncontrolledTooltip
} from "reactstrap";
import { push } from "connected-react-router";
import classnames from "classnames";
import Icon from "domains/general/Icon";
import CountrySelect from "domains/country/CountrySelect";
import MultiSearchTooltip from "domains/general/MultiSearchTooltip";
import { createUser } from "./actions/createUser";

class LoginForm extends PureComponent {
  static propTypes = {
    createUser: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired
  };

  state = {
    name: "",
    country: "",
    selectTouched: false,
    selectErrored: false
  };

  onInputChange = event => this.setState({ name: event.target.value });

  onSelectChange = ({ value }) => this.setState({ country: value });

  onSelectInputChange = () => {
    this.setState({ selectTouched: true, selectErrored: false });
  };

  onSelectError = () => this.setState({ selectErrored: true });

  onLoginClick = event => {
    event.stopPropagation();

    this.props.createUser({
      name: this.state.name,
      country: this.state.country
    });

    this.props.push("/");
  };

  renderButton() {
    const disabled = !this.state.name || !this.state.country;
    const tooltip = disabled ? (
      "Please, fill the form before enter!"
    ) : (
      <Fragment>
        Let's get it on, <br />
        {this.state.name}!
      </Fragment>
    );

    return (
      <Fragment>
        <div id="userLoginButton">
          <Button
            color="secondary"
            block
            className={classnames("mt-4", { "pointer-events-none": disabled })}
            disabled={disabled}
            onClick={this.onLoginClick}
          >
            Enter to {process.env.REACT_APP_NAME} <Icon icon="sign-in-alt" />
          </Button>
        </div>

        <UncontrolledTooltip placement="bottom" target="userLoginButton">
          {tooltip}
        </UncontrolledTooltip>
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
        <Label className={error && "text-danger"}>
          Your Country <MultiSearchTooltip /> {error}
        </Label>

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
        <FormGroup>
          <Label for="userLoginName">Your Name</Label>

          <Input
            name="name"
            id="userLoginName"
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ createUser, push }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
