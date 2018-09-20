import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";
import PropTypes from "prop-types";
import classnames from "classnames";
import apple from "images/apple.svg";
import cherry from "images/cherry.svg";
import banana from "images/banana.svg";
import lemon from "images/lemon.svg";
import { APPLE, BANANA, CHERRY, LEMON } from "./constants";
import Loader from "domains/general/Loader";

class SlotMachineReel extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired
  };

  state = {
    loading: true
  };

  loading = 3;

  onImageLoad = () => {
    this.loading--;
    if (this.loading === 0) this.setState({ loading: false });
  };

  getCalculatedIndex(position) {
    let index = this.props.index + position;

    if (position === -1) {
      index = index === -1 ? this.props.data.length - 1 : index;
    } else if (position === 1) {
      index = index === this.props.data.length ? 0 : index;
    }

    return index;
  }

  renderImage(position = 0) {
    const index = this.getCalculatedIndex(position);

    const value = this.props.data[index];
    let image;
    let alt;

    switch (value) {
      case APPLE:
        image = apple;
        alt = APPLE;
        break;
      case BANANA:
        image = banana;
        alt = BANANA;
        break;
      case CHERRY:
        image = cherry;
        alt = CHERRY;
        break;
      case LEMON:
        image = lemon;
        alt = LEMON;
        break;
      default:
        break;
    }

    return (
      <div
        className={classnames("text-center px-2 py-3", {
          "bg-light": position !== 0
        })}
      >
        <img
          src={image}
          alt={alt}
          width={position !== 0 ? 50 : 75}
          className={this.state.loading ? "d-none" : "d-inline-block"}
          onLoad={this.onImageLoad}
        />

        {this.state.loading && <Loader />}
      </div>
    );
  }

  render() {
    return (
      <Card className="shadow-lg">
        <CardBody className="p-0">
          {this.renderImage(-1)}
          {this.renderImage()}
          {this.renderImage(1)}
        </CardBody>
      </Card>
    );
  }
}

export default SlotMachineReel;
