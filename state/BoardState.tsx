import { atom } from 'recoil';

export interface BoardState {
  playerId: string,
  megaCredits: Resource
  steel: Resource
  titanium: Resource
  plants: Resource
  energy: Resource
  heat: Resource
}

export interface Player {
  playerId: string,
  playerName: string,
  email: string | undefined;
}

export interface Resource {
  amount: number,
  production: number
}


export interface GameState {
  started: boolean,
  gameCode: string,
  players: Player[],
  boards: BoardState[],
  messages: string[]
}

// const statingState: GameState = {
//   gameCode: "ABCDEF",
//   players: [
//     {
//       playerId: 1,
//       playerName: "Zachary",
//       email: "zshuford@gmail.com"
//     },
//     {
//       playerId: 2,
//       playerName: "Shauna",
//       email: "shauna216@gmail.com"
//     },
//     {
//       playerId: 2,
//       playerName: "Lee",
//       email: "mlshuford14@gmail.com"
//     },
//     {
//       playerId: 2,
//       playerName: "Lee",
//       email: "eashuford@gmail.com"
//     }
//   ],
//   playerStates: [getEmptyGameState(1), getEmptyGameState(2)]
// }


export function getEmptyGameState (playerId: string): BoardState {
  return {
    playerId,
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