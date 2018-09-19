import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import UserLogin from "domains/user/UserLogin";

class HomePage extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  };

  render() {
    if (!this.props.user.name) return <UserLogin />;

    return <div />;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

// const mapDispatchToProps = dispatch => bindActionCreators(dispatch, {});

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(HomePage);
