import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import {
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";
import UserCard from "domains/user/UserCard";
import CountriesCard from "domains/country/CountriesCard";
import SlotMachineCard from "domains/game/SlotMachineCard";
import Icon from "domains/general/Icon";
import "./HomePage.css";

class HomePage extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    pathname: PropTypes.string.isRequired
  };

  render() {
    if (!this.props.user.name || !this.props.user.country) {
      return <Redirect to="/login" />;
    }

    return (
      <Row>
        <Col xs="12" lg="8" className="mb-3 mb-lg-0">
          <Navbar color="dark" dark expand="xs" className="mb-3">
            <NavbarBrand tag={Link} to="/">
              {process.env.REACT_APP_NAME}
            </NavbarBrand>

            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/" active={this.props.pathname === "/"}>
                  <Icon icon="globe-americas" /> Countries
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  tag={Link}
                  to="/slot-machine"
                  active={this.props.pathname === "/slot-machine"}
                >
                  <Icon icon="play" /> Slot Machine
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>

          <Switch>
            <Route exact path="/" component={CountriesCard} />
            <Route exact path="/slot-machine" component={SlotMachineCard} />
          </Switch>
        </Col>

        <Col xs="12" lg="4" className="index-home-page-sticky">
          <UserCard className="sticky-top pt-3" />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    pathname: state.router.location.pathname,
    user: state.user
  };
};

export default connect(mapStateToProps)(HomePage);
