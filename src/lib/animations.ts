export const ease = {
  enter: [0.16, 1, 0.3, 1] as const,
  exit: [0.4, 0, 1, 1] as const,
  inOut: [0.87, 0, 0.13, 1] as const,
};

export const duration = {
  fast: 0.2,
  normal: 0.5,
  slow: 0.8,
  crawl: 1.2,
};

export const stagger = {
  children: 0.06,
  words: 0.04,
  cards: 0.08,
};
