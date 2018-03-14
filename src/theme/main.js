import color from "color";

const black = `rgb(55, 55, 55)`;
const white = `rgb(254, 255, 255)`;
const diamond = `rgb(196, 233, 255)`;
const cyanCornflowerBlue = `rgb(34, 133, 191)`;
const mayaBlue = `rgb(92, 194, 255)`;
const brilliantAzure = `rgb(45, 177, 255)`;

export default {
  animations: {
    defaultDuration: `1s`,
    fast: `0.5s`,
  },

  fonts: {
    baseSize: `28px`,
    scale: 2,
  },

  colors: {
    white,
    black,

    foreground: black,
    background: diamond,

    link: cyanCornflowerBlue,

    shadow: color(black).fade(0.75).rgb().string(),

    diamond,
    cyanCornflowerBlue,
    mayaBlue,
    brilliantAzure,
  },

  content: {
    maxWidth: `1000px`,
  },
};
