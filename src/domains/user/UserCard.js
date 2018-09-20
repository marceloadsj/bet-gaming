import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  CardText,
  Badge,
  Row,
  Col,
  Button
} from "reactstrap";
import { push } from "connected-react-router";
import Icon from "domains/general/Icon";
import CountryInfos from "domains/country/CountryInfos";
import { fetchCountryByCode } from "domains/country/actions/fetchCountryByCode";
import { removeUser } from "./actions/removeUser";

class UserCard extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired,
    className: PropTypes.string,
    push: PropTypes.func.isRequired,
    removeUser: PropTypes.func.isRequired
  };

  onSignOutClick = () => {
    this.props.removeUser();
    this.props.push("/login");
    localStorage.removeItem(process.env.REACT_APP_LOCALSTORAGE_KEY);
  };

  render() {
    return (
      <div className={this.props.className || ""}>
        <Card className="shadow-lg">
          <CardHeader className="text-white">
            <Row className="align-items-center">
              <Col>
                <h5 className="my-2">
                  <Icon icon="user" className="mr-2" /> Hello,{" "}
                  {this.props.user.name}!
                </h5>
              </Col>

              <Col xs="auto">
                <Button onClick={this.onSignOutClick}>
                  <Icon icon="sign-out-alt" />
                </Button>
              </Col>
            </Row>
          </CardHeader>

          <CardBody>
            <CardText>
              The {process.env.REACT_APP_NAME} platform is the place where you
              can win every day!
            </CardText>

            <h4>
              You have <Badge>{this.props.user.coins}</Badge> coins left!
            </h4>
          </CardBody>

          <CardBody>
            <h5>Country Infos:</h5>

            <CountryInfos code={this.props.user.country} />
          </CardBody>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    country: state.country.list[state.user.country],
    fetchingCountryByCode: state.country.fetchingCountryByCode
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchCountryByCode, push, removeUser }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCard);
