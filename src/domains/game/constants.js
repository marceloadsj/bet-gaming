import SlotMachineRules from "modules/SlotMachineRules";

const CHERRY = SlotMachineRules.CHERRY;
const APPLE = SlotMachineRules.APPLE;
const BANANA = SlotMachineRules.BANANA;
const LEMON = SlotMachineRules.LEMON;

const FIRST_REEL_DATA = [
  CHERRY,
  LEMON,
  APPLE,
  LEMON,
  BANANA,
  BANANA,
  LEMON,
  LEMON
];

const SECOND_REEL_DATA = [
  LEMON,
  APPLE,
  LEMON,
  LEMON,
  CHERRY,
  APPLE,
  BANANA,
  LEMON
];

const THIRD_REEL_DATA = [
  LEMON,
  APPLE,
  LEMON,
  APPLE,
  CHERRY,
  LEMON,
  BANANA,
  LEMON
];

export const REELS_DATA = [FIRST_REEL_DATA, SECOND_REEL_DATA, THIRD_REEL_DATA];
