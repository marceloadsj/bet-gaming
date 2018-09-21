class SlotMachineRules {
  constructor(reelsData) {
    this.reelsData = reelsData;
  }

  getRandomReelDataIndexes() {
    return this.reelsData.map(data => Math.floor(Math.random() * data.length));
  }

  getRandomSpins() {
    return this.reelsData.map(
      data =>
        data.length +
        Math.floor(Math.random() * (data.length * SlotMachineRules.SPIN_SEED))
    );
  }

  lowerReelIndex(reelIndexes, index) {
    let newIndex = reelIndexes[index] - 1;
    if (newIndex === -1) newIndex = this.reelsData[index].length - 1;
    return newIndex;
  }

  checkThreeInARow(match, reelIndexes) {
    return this.reelsData.every(
      (data, index) => data[reelIndexes[index]] === match
    );
  }

  checkTwoInARow(match, reelIndexes) {
    return (
      this.reelsData.filter((data, index) => {
        return data[reelIndexes[index]] === match;
      }).length === 2
    );
  }

  getSpinPrize(reelIndexes) {
    if (this.checkThreeInARow(SlotMachineRules.CHERRY, reelIndexes))
      return SlotMachineRules.THREE_CHERRIES_PRIZE;

    if (this.checkThreeInARow(SlotMachineRules.APPLE, reelIndexes))
      return SlotMachineRules.THREE_APPLES_PRIZE;

    if (this.checkThreeInARow(SlotMachineRules.BANANA, reelIndexes))
      return SlotMachineRules.THREE_BANANAS_PRIZE;

    if (this.checkThreeInARow(SlotMachineRules.LEMON, reelIndexes))
      return SlotMachineRules.THREE_LEMONS_PRIZE;

    if (this.checkTwoInARow(SlotMachineRules.CHERRY, reelIndexes))
      return SlotMachineRules.TWO_CHERRIES_PRIZE;

    if (this.checkTwoInARow(SlotMachineRules.APPLE, reelIndexes))
      return SlotMachineRules.TWO_APPLES_PRIZE;

    if (this.checkTwoInARow(SlotMachineRules.BANANA, reelIndexes))
      return SlotMachineRules.TWO_BANANAS_PRIZE;

    return false;
  }
}

SlotMachineRules.SPIN_SEED = 3;

SlotMachineRules.CHERRY = "CHERRY";
SlotMachineRules.LEMON = "LEMON";
SlotMachineRules.APPLE = "APPLE";
SlotMachineRules.BANANA = "BANANA";

SlotMachineRules.THREE_CHERRIES_PRIZE = 50;
SlotMachineRules.TWO_CHERRIES_PRIZE = 40;
SlotMachineRules.THREE_APPLES_PRIZE = 20;
SlotMachineRules.TWO_APPLES_PRIZE = 10;
SlotMachineRules.THREE_BANANAS_PRIZE = 15;
SlotMachineRules.TWO_BANANAS_PRIZE = 5;
SlotMachineRules.THREE_LEMONS_PRIZE = 3;

module.exports = SlotMachineRules;
