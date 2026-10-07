export interface LevelProgress {
  unlocked: boolean;
  completed: boolean;
  stars: number;
  bestScore: number;
}

export interface Progress {
  totalScore: number;
  solvedRiddles: number;
  levels: Record<number, LevelProgress>;
  soundOn: boolean;
}

export const createDefaultProgress = (levelIds: number[]): Progress => {
  const levels: Record<number, LevelProgress> = {};
  levelIds.forEach((id, index) => {
    levels[id] = {
      unlocked: index === 0,
      completed: false,
      stars: 0,
      bestScore: 0,
    };
  });
  return {
    totalScore: 0,
    solvedRiddles: 0,
    levels,
    soundOn: true,
  };
};
