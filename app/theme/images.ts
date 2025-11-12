export const Images = {
  results: require('../../assets/images/results.png'),
} as const;

export type ImageKey = keyof typeof Images;
