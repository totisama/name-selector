export const INITIAL_NAMES = [
  'Sophia',
  'Jackson',
  'Olivia',
  'Liam',
  'Emma',
  'Noah',
  'Ava',
  'Lucas',
  'Isabella',
  'Oliver',
  'Mia',
  'Ethan',
  'Amelia',
  'Aiden',
  'Harper',
  'Elijah',
  'Evelyn',
  'James',
  'Charlotte',
  'Benjamin',
  'Abigail',
  'William',
  'Emily',
  'Alexander',
  'Madison',
  'Michael',
  'Elizabeth',
  'Mason',
  'Sofia',
  'Logan',
  'Avery',
  'Matthew',
  'Ella',
  'Daniel',
  'Scarlett',
  'Henry',
  'Grace',
  'Joseph',
  'Lily',
  'Samuel',
  'Chloe',
  'David',
  'Victoria',
  'Carter',
  'Riley',
  'Wyatt',
  'Aria',
  'Jayden',
  'Zoey',
  'Gabriel',
]

export enum DirectionsEnum {
  Left = 'Left',
  Right = 'Right',
  Up = 'Up',
}

export type Direction =
  | DirectionsEnum.Left
  | DirectionsEnum.Right
  | DirectionsEnum.Up

export const DIRECTIONS = [
  DirectionsEnum.Left,
  DirectionsEnum.Right,
  DirectionsEnum.Up,
]

export type HexColor = `#${string}`
