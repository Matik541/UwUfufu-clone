export interface GameMode {
  id: number;
  name: string;
  min: number;
  brackets?: number[];
  points?: number[];
}

export enum GameModes {
  'Bracket' = 1,
  'Points' = 2,
  'WhouldYouRather' = 3,
}

export const GameModesArray = [
  { id: 1, name: 'Bracket ...', min: 4, brackets: [4, 8, 16, 32, 64, 128] },
  { id: 2, name: 'Points', min: 8, points: [4, 3, 2, 1]},
  { id: 3, name: 'Whould You Rather', min: 2 },

  
]
