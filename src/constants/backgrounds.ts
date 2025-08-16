export const backgroundImages = {
  startScreen: require('../../assets/backgrounds/start-screen-bg.png'),
  wiedikon: require('../../assets/backgrounds/wiedikon-bg.png'),
  districtSelect: null,
  gameBackground: require('../../assets/backgrounds/wiedikon-bg.png'),
} as const;

export type BackgroundKey = keyof typeof backgroundImages;

export const getBackgroundImage = (key: BackgroundKey) => {
  return backgroundImages[key];
};
