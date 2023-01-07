import { atom } from 'recoil';

export interface BoardState {
  megaCredits: Resource
  steel: Resource
  titanium: Resource
  plants: Resource
  energy: Resource
  heat: Resource
  terraformRating: number
  player: Player,
}

export interface Player {
  playerId: string,
  playerName: string,
  readyToProduce: boolean;
  readyToStart: boolean;
}

export interface Resource {
  amount: number,
  production: number
}


export interface GameState {
  id: string,
  started: boolean,
  gameCode: string,
  boards: BoardState[],
  messages: string[],
  turn: number

}


export function getEmptyGameState (playerId: string): BoardState {
  return {
    player: {
      playerId: "",
      playerName: "",
      readyToProduce: false,
      readyToStart: false,
    },
    megaCredits: {
      amount: 20,
      production: 0
    },
    steel: {
      amount: 0,
      production: 0
    },
    titanium: {
      amount: 0,
      production: 0
    },
    energy: {
      amount: 0,
      production: 0
    },
    heat: {
      amount: 0,
      production: 0
    },
    plants: {
      amount: 0,
      production: 0
    },
    terraformRating: 0
  }
}

export const gameStateAtom = atom<GameState | undefined>(({
  key: 'gamestate',
  default: undefined,
}))

export const playerNumberState = atom<number>(({
  key: 'playerNumberState',
  default: 1,
}))

export const errorMessageAtom = atom<string>(({
  key: 'errorMessageAtom',
  default: "",
}))