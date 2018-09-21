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
import {
  APPLE,
  BANANA,
  CHERRY,
  LEMON,
  FIRST_REEL_DATA,
  SECOND_REEL_DATA,
  THIRD_REEL_DATA,
  THREE_CHERRIES_PRIZE,
  TWO_CHERRIES_PRIZE,
  THREE_APPLES_PRIZE,
  TWO_APPLES_PRIZE,
  THREE_BANANAS_PRIZE,
  TWO_BANANAS_PRIZE,
  THREE_LEMONS_PRIZE,
  SPIN_SEED
} from "./constants";
import { spendUserCoin } from "domains/user/actions/spendUserCoin";
import { addUserCoins } from "domains/user/actions/addUserCoins";

const reelsData = [FIRST_REEL_DATA, SECOND_REEL_DATA, THIRD_REEL_DATA];

const getRandomReelDataIndexes = datas => {
  return datas.map(data => Math.floor(Math.random() * data.length));
};

const getRandomSpins = datas => {
  return datas.map(
    data => data.length + Math.floor(Math.random() * (data.length * SPIN_SEED))
  );
};

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
    reelIndexes: getRandomReelDataIndexes(reelsData)
  };

  checkThreeInARow(match) {
    return reelsData.every(
      (data, index) => data[this.state.reelIndexes[index]] === match
    );
  }

  checkTwoInARow(match) {
    return (
      reelsData.filter((data, index) => {
        return data[this.state.reelIndexes[index]] === match;
      }).length === 2
    );
  }

  getSpinPrize() {
    if (this.checkThreeInARow(CHERRY)) return THREE_CHERRIES_PRIZE;
    if (this.checkThreeInARow(APPLE)) return THREE_APPLES_PRIZE;
    if (this.checkThreeInARow(BANANA)) return THREE_BANANAS_PRIZE;
    if (this.checkThreeInARow(LEMON)) return THREE_LEMONS_PRIZE;
    if (this.checkTwoInARow(CHERRY)) return TWO_CHERRIES_PRIZE;
    if (this.checkTwoInARow(APPLE)) return TWO_APPLES_PRIZE;
    if (this.checkTwoInARow(BANANA)) return TWO_BANANAS_PRIZE;

    return false;
  }

  spinPrizeCalculate() {
    const spinPrize = this.getSpinPrize();

    if (spinPrize) this.props.addUserCoins(spinPrize);
    this.setState({ spinPrize, running: false });
  }

  spinReelCalculate = () => {
    let reelIndexes = [...this.state.reelIndexes];
    let spins = [...this.state.spins];

    spins.forEach((spin, index) => {
      if (spin > 0) {
        --spins[index];
        --reelIndexes[index];
        if (reelIndexes[index] === -1) {
          reelIndexes[index] = reelsData[index].length - 1;
        }
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

  onClick = () => {
    this.props.spendUserCoin();

    this.setState(
      { running: true, spinPrize: null, spins: getRandomSpins(reelsData) },
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
      <Button size="lg" onClick={this.onClick}>
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
              data={FIRST_REEL_DATA}
              index={this.state.reelIndexes[0]}
            />
          </Col>

          <Col>
            <SlotMachineReel
              data={SECOND_REEL_DATA}
              index={this.state.reelIndexes[1]}
            />
          </Col>

          <Col>
            <SlotMachineReel
              data={THIRD_REEL_DATA}
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
