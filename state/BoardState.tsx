import { atom } from 'recoil';

export interface IPlayerState {
  playerId: number,
  megaCredits: Resource
}

export interface IPlayer {
  playerId: number,
  playerName: string,
  email: string | undefined;
}

export interface Resource {
  amount: number,
  production: number
}


export interface GameState {
  gameCode: string,
  players: IPlayer[],
  playerStates: IPlayerState[]
}

const statingState: GameState = {
  gameCode: "ABCDEF",
  players: [
    {
      playerId: 1,
      playerName: "Zachary",
      email: "zshuford@gmail.com"
    },
    {
      playerId: 2,
      playerName: "Shauna",
      email: "shauna216@gmail.com"
    },
    {
      playerId: 2,
      playerName: "Lee",
      email: "mlshuford14@gmail.com"
    },
    {
      playerId: 2,
      playerName: "Lee",
      email: "eashuford@gmail.com"
    }
  ],
  playerStates: [getEmptyGameState(1), getEmptyGameState(2)]
}


export function getEmptyGameState (playerId: number): IPlayerState {
  return {
    playerId,
    megaCredits: {
      amount: playerId === 1 ? 20 : 30,
      production: 0
    }
  }
}

export const gameState = atom<GameState>(({
  key: 'gamestate',
  default: statingState,
}))

export const playerNumberState = atom<number>(({
  key: 'playerNumberState',
  default: 1,
}))