import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  Alert,
  Card,
  CardHeader,
  CardBody,
  CardText,
  Button,
  Row,
  Col
} from "reactstrap";
import Icon from "domains/general/Icon";
import SlotMachineReel from "./SlotMachineReel";
import { REELS_DATA } from "./constants";
import { spendUserCoin } from "domains/user/actions/spendUserCoin";
import { addUserCoins } from "domains/user/actions/addUserCoins";
import SlotMachineRules from "modules/SlotMachineRules";

const slotMachineRules = new SlotMachineRules(REELS_DATA);

class SlotMachineCard extends PureComponent {
  static propTypes = {
    coins: PropTypes.number.isRequired,
    spendUserCoin: PropTypes.func.isRequired,
    addUserCoins: PropTypes.func.isRequired
  };

  state = {
    spinPrize: null,
    running: false,
    spins: [0, 0, 0],
    reelIndexes: slotMachineRules.getRandomReelDataIndexes()
  };

  spinPrizeCalculate() {
    const spinPrize = slotMachineRules.getSpinPrize(this.state.reelIndexes);

    if (spinPrize) this.props.addUserCoins(spinPrize);
    this.setState({ spinPrize, running: false });
  }

  spinReelCalculate = () => {
    let reelIndexes = [...this.state.reelIndexes];
    let spins = [...this.state.spins];

    spins.forEach((spin, index) => {
      if (spin > 0) {
        --spins[index];

        reelIndexes[index] = slotMachineRules.lowerReelIndex(
          reelIndexes,
          index
        );
      }
    });

    this.setState({ spins, reelIndexes }, () => {
      setTimeout(() => {
        if (this.state.spins.some(spin => spin > 0)) {
          this.spinReelCalculate();
        } else {
          this.spinPrizeCalculate();
        }
      }, 100);
    });
  };

  onPlayClick = () => {
    this.props.spendUserCoin();

    this.setState(
      {
        running: true,
        spinPrize: null,
        spins: slotMachineRules.getRandomSpins()
      },
      this.spinReelCalculate
    );
  };

  renderResult() {
    const { spinPrize } = this.state;

    if (spinPrize !== null) {
      return (
        <CardBody>
          <Alert color={spinPrize ? "success" : "danger"} className="mb-0">
            {spinPrize
              ? `Yeah. You got ${spinPrize} coins!`
              : "Oh, sorry. Maybe next time!"}
          </Alert>
        </CardBody>
      );
    }

    return (
      <CardBody>
        <CardText className="my-2">
          {this.props.coins === 0
            ? "Oh, sorry, you don't have more coins!"
            : "Do you want to try your luck today? Let's do it!"}
        </CardText>
      </CardBody>
    );
  }

  renderPlayButton() {
    if (this.props.coins === 0 || this.state.running) return null;

    return (
      <Button size="lg" onClick={this.onPlayClick}>
        Push to Play <Icon icon="play" />
      </Button>
    );
  }

  renderReels() {
    return (
      <CardBody>
        <Row className="mb-3">
          <Col>
            <SlotMachineReel
              data={REELS_DATA[0]}
              index={this.state.reelIndexes[0]}
            />
          </Col>

          <Col>
            <SlotMachineReel
              data={REELS_DATA[1]}
              index={this.state.reelIndexes[1]}
            />
          </Col>

          <Col>
            <SlotMachineReel
              data={REELS_DATA[2]}
              index={this.state.reelIndexes[2]}
            />
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs="auto">{this.renderPlayButton()}</Col>
        </Row>
      </CardBody>
    );
  }

  render() {
    return (
      <Card className="shadow-lg">
        <CardHeader className="text-white">
          <h5 className="my-2">
            <Icon icon="play" className="mr-2" /> Welcome to our Slot Machine
          </h5>
        </CardHeader>

        {this.renderResult()}

        {this.renderReels()}
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    coins: state.user.coins
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ spendUserCoin, addUserCoins }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SlotMachineCard);
