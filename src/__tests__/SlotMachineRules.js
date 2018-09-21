import SlotMachineRules from "modules/SlotMachineRules";

const CHERRY = SlotMachineRules.CHERRY;
const APPLE = SlotMachineRules.APPLE;
const BANANA = SlotMachineRules.BANANA;
const LEMON = SlotMachineRules.LEMON;

describe("expects getRandomReelDataIndexes", () => {
  it("returns an array", () => {
    const slotMachineRules = new SlotMachineRules([
      [CHERRY, APPLE, BANANA, LEMON],
      [CHERRY, BANANA, APPLE, LEMON],
      [BANANA, LEMON, APPLE, CHERRY]
    ]);

    expect(Array.isArray(slotMachineRules.getRandomReelDataIndexes())).toBe(
      true
    );
  });

  it("returns an array with same length as data", () => {
    const data = [
      [CHERRY, APPLE, BANANA, LEMON],
      [CHERRY, BANANA, APPLE, LEMON],
      [BANANA, LEMON, APPLE, CHERRY]
    ];
    const slotMachineRules = new SlotMachineRules(data);

    expect(slotMachineRules.getRandomReelDataIndexes()).toHaveLength(3);
  });
});

describe("expects getRandomSpins", () => {
  it("returns an array", () => {
    const slotMachineRules = new SlotMachineRules([
      [CHERRY, APPLE, BANANA, LEMON],
      [CHERRY, BANANA, APPLE, LEMON],
      [BANANA, LEMON, APPLE, CHERRY]
    ]);

    expect(Array.isArray(slotMachineRules.getRandomSpins())).toBe(true);
  });

  it("returns an array with same length as data", () => {
    const data = [
      [CHERRY, APPLE, BANANA, LEMON],
      [CHERRY, BANANA, APPLE, LEMON],
      [BANANA, LEMON, APPLE, CHERRY]
    ];
    const slotMachineRules = new SlotMachineRules(data);

    expect(slotMachineRules.getRandomSpins()).toHaveLength(3);
  });
});

describe("expects lowerReelIndex", () => {
  it("returns an number", () => {
    const slotMachineRules = new SlotMachineRules([
      [CHERRY, APPLE, BANANA, LEMON],
      [CHERRY, BANANA, APPLE, LEMON],
      [BANANA, LEMON, APPLE, CHERRY]
    ]);

    expect(
      typeof slotMachineRules.lowerReelIndex([0, 0, 0], 0) === "number"
    ).toBe(true);
  });

  it("returns the correct index number minus one", () => {
    const data = [
      [CHERRY, APPLE, BANANA, LEMON],
      [CHERRY, BANANA, APPLE, LEMON],
      [BANANA, LEMON, APPLE, CHERRY]
    ];
    const slotMachineRules = new SlotMachineRules(data);

    expect(slotMachineRules.lowerReelIndex([1, 0, 0], 0)).toBe(0);
  });

  it("returns the correct index number when reaches end", () => {
    const data = [
      [CHERRY, APPLE, BANANA, LEMON],
      [CHERRY, BANANA, APPLE, LEMON],
      [BANANA, LEMON, APPLE, CHERRY]
    ];
    const slotMachineRules = new SlotMachineRules(data);

    expect(slotMachineRules.lowerReelIndex([0, 0, 0], 0)).toBe(3);
  });
});

describe("expects checkThreeInARow", () => {
  it("returns true for cherry", () => {
    const slotMachineRules = new SlotMachineRules([
      [CHERRY, APPLE, BANANA, LEMON],
      [CHERRY, BANANA, APPLE, LEMON],
      [BANANA, LEMON, APPLE, CHERRY]
    ]);

    expect(slotMachineRules.checkThreeInARow(CHERRY, [0, 0, 3])).toBe(true);
  });

  it("returns true for banana", () => {
    const slotMachineRules = new SlotMachineRules([
      [CHERRY, APPLE, BANANA, LEMON],
      [CHERRY, BANANA, APPLE, LEMON],
      [BANANA, LEMON, APPLE, CHERRY]
    ]);

    expect(slotMachineRules.checkThreeInARow(BANANA, [2, 1, 0])).toBe(true);
  });

  it("returns true for apple", () => {
    const slotMachineRules = new SlotMachineRules([
      [CHERRY, APPLE, BANANA, LEMON],
      [CHERRY, BANANA, APPLE, LEMON],
      [BANANA, LEMON, APPLE, CHERRY]
    ]);

    expect(slotMachineRules.checkThreeInARow(APPLE, [1, 2, 2])).toBe(true);
  });

  it("returns true for lemon", () => {
    const slotMachineRules = new SlotMachineRules([
      [CHERRY, APPLE, BANANA, LEMON],
      [CHERRY, BANANA, APPLE, LEMON],
      [BANANA, LEMON, APPLE, CHERRY]
    ]);

    expect(slotMachineRules.checkThreeInARow(LEMON, [3, 3, 1])).toBe(true);
  });

  it("returns false for not three cherry", () => {
    const slotMachineRules = new SlotMachineRules([
      [CHERRY, APPLE, BANANA, LEMON],
      [CHERRY, BANANA, APPLE, LEMON],
      [BANANA, LEMON, APPLE, CHERRY]
    ]);

    expect(slotMachineRules.checkThreeInARow(CHERRY, [0, 0, 0])).toBe(false);
  });

  it("returns false for not three banana", () => {
    const slotMachineRules = new SlotMachineRules([
      [CHERRY, APPLE, BANANA, LEMON],
      [CHERRY, BANANA, APPLE, LEMON],
      [BANANA, LEMON, APPLE, CHERRY]
    ]);

    expect(slotMachineRules.checkThreeInARow(BANANA, [0, 0, 0])).toBe(false);
  });

  it("returns false for not three apple", () => {
    const slotMachineRules = new SlotMachineRules([
      [CHERRY, APPLE, BANANA, LEMON],
      [CHERRY, BANANA, APPLE, LEMON],
      [BANANA, LEMON, APPLE, CHERRY]
    ]);

    expect(slotMachineRules.checkThreeInARow(APPLE, [0, 0, 0])).toBe(false);
  });

  it("returns false for not three lemon", () => {
    const slotMachineRules = new SlotMachineRules([
      [CHERRY, APPLE, BANANA, LEMON],
      [CHERRY, BANANA, APPLE, LEMON],
      [BANANA, LEMON, APPLE, CHERRY]
    ]);

    expect(slotMachineRules.checkThreeInARow(LEMON, [0, 0, 0])).toBe(false);
  });
});

describe("expects checkTwoInARow", () => {
  it("returns true for cherry", () => {
    const slotMachineRules = new SlotMachineRules([
      [CHERRY, APPLE, BANANA, LEMON],
      [CHERRY, BANANA, APPLE, LEMON],
      [BANANA, LEMON, APPLE, CHERRY]
    ]);

    expect(slotMachineRules.checkTwoInARow(CHERRY, [0, 0, 0])).toBe(true);
  });

  it("returns true for banana", () => {
    const slotMachineRules = new SlotMachineRules([
      [CHERRY, APPLE, BANANA, LEMON],
      [CHERRY, BANANA, APPLE, LEMON],
      [BANANA, LEMON, APPLE, CHERRY]
    ]);

    expect(slotMachineRules.checkTwoInARow(BANANA, [2, 1, 1])).toBe(true);
  });

  it("returns true for apple", () => {
    const slotMachineRules = new SlotMachineRules([
      [CHERRY, APPLE, BANANA, LEMON],
      [CHERRY, BANANA, APPLE, LEMON],
      [BANANA, LEMON, APPLE, CHERRY]
    ]);

    expect(slotMachineRules.checkTwoInARow(APPLE, [1, 3, 2])).toBe(true);
  });

  it("returns true for lemon", () => {
    const slotMachineRules = new SlotMachineRules([
      [CHERRY, APPLE, BANANA, LEMON],
      [CHERRY, BANANA, APPLE, LEMON],
      [BANANA, LEMON, APPLE, CHERRY]
    ]);

    expect(slotMachineRules.checkTwoInARow(LEMON, [1, 3, 1])).toBe(true);
  });

  it("returns false for not three cherry", () => {
    const slotMachineRules = new SlotMachineRules([
      [CHERRY, APPLE, BANANA, LEMON],
      [CHERRY, BANANA, APPLE, LEMON],
      [BANANA, LEMON, APPLE, CHERRY]
    ]);

    expect(slotMachineRules.checkTwoInARow(CHERRY, [2, 0, 0])).toBe(false);
  });

  it("returns false for not three banana", () => {
    const slotMachineRules = new SlotMachineRules([
      [CHERRY, APPLE, BANANA, LEMON],
      [CHERRY, BANANA, APPLE, LEMON],
      [BANANA, LEMON, APPLE, CHERRY]
    ]);

    expect(slotMachineRules.checkTwoInARow(BANANA, [0, 0, 0])).toBe(false);
  });

  it("returns false for not three apple", () => {
    const slotMachineRules = new SlotMachineRules([
      [CHERRY, APPLE, BANANA, LEMON],
      [CHERRY, BANANA, APPLE, LEMON],
      [BANANA, LEMON, APPLE, CHERRY]
    ]);

    expect(slotMachineRules.checkTwoInARow(APPLE, [0, 0, 0])).toBe(false);
  });

  it("returns false for not three lemon", () => {
    const slotMachineRules = new SlotMachineRules([
      [CHERRY, APPLE, BANANA, LEMON],
      [CHERRY, BANANA, APPLE, LEMON],
      [BANANA, LEMON, APPLE, CHERRY]
    ]);

    expect(slotMachineRules.checkTwoInARow(LEMON, [0, 0, 0])).toBe(false);
  });
});

describe("expects getSpinPrize", () => {
  it("returns 50 for 3 cherries", () => {
    const slotMachineRules = new SlotMachineRules([
      [CHERRY, APPLE, BANANA, LEMON],
      [CHERRY, BANANA, APPLE, LEMON],
      [BANANA, LEMON, APPLE, CHERRY]
    ]);

    expect(slotMachineRules.getSpinPrize([0, 0, 3])).toBe(50);
  });

  it("returns 40 for 2 cherries", () => {
    const slotMachineRules = new SlotMachineRules([
      [CHERRY, APPLE, BANANA, LEMON],
      [CHERRY, BANANA, APPLE, LEMON],
      [BANANA, LEMON, APPLE, CHERRY]
    ]);

    expect(slotMachineRules.getSpinPrize([0, 0, 0])).toBe(40);
  });

  it("returns 20 for 3 apples", () => {
    const slotMachineRules = new SlotMachineRules([
      [CHERRY, APPLE, BANANA, LEMON],
      [CHERRY, BANANA, APPLE, LEMON],
      [BANANA, LEMON, APPLE, CHERRY]
    ]);

    expect(slotMachineRules.getSpinPrize([1, 2, 2])).toBe(20);
  });

  it("returns 10 for 2 apples", () => {
    const slotMachineRules = new SlotMachineRules([
      [CHERRY, APPLE, BANANA, LEMON],
      [CHERRY, BANANA, APPLE, LEMON],
      [BANANA, LEMON, APPLE, CHERRY]
    ]);

    expect(slotMachineRules.getSpinPrize([1, 2, 0])).toBe(10);
  });

  it("returns 15 for 3 bananas", () => {
    const slotMachineRules = new SlotMachineRules([
      [CHERRY, APPLE, BANANA, LEMON],
      [CHERRY, BANANA, APPLE, LEMON],
      [BANANA, LEMON, APPLE, CHERRY]
    ]);

    expect(slotMachineRules.getSpinPrize([2, 1, 0])).toBe(15);
  });

  it("returns 5 for 2 bananas", () => {
    const slotMachineRules = new SlotMachineRules([
      [CHERRY, APPLE, BANANA, LEMON],
      [CHERRY, BANANA, APPLE, LEMON],
      [BANANA, LEMON, APPLE, CHERRY]
    ]);

    expect(slotMachineRules.getSpinPrize([0, 1, 0])).toBe(5);
  });

  it("returns 3 for 3 lemons", () => {
    const slotMachineRules = new SlotMachineRules([
      [CHERRY, APPLE, BANANA, LEMON],
      [CHERRY, BANANA, APPLE, LEMON],
      [BANANA, LEMON, APPLE, CHERRY]
    ]);

    expect(slotMachineRules.getSpinPrize([3, 3, 1])).toBe(3);
  });

  it("returns false for no match", () => {
    const slotMachineRules = new SlotMachineRules([
      [CHERRY, APPLE, BANANA, LEMON],
      [CHERRY, BANANA, APPLE, LEMON],
      [BANANA, LEMON, APPLE, CHERRY]
    ]);

    expect(slotMachineRules.getSpinPrize([1, 0, 0])).toBe(false);
  });
});
