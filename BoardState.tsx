import { atom } from 'recoil';

export interface IPlayerState {
  playerId: number,
  megaCredits: Resource
}

export interface IPlayer {
  playerId: number,
  playerName: string
}

export interface Resource {
  amount: number,
  production: number
}


export interface BoardState {
  players: IPlayer[],
  currentState: IPlayerState[]
}

const statingState: BoardState = {
  players: [
    {
      playerId: 1,
      playerName: "Zachary"
    },
    {
      playerId: 2,
      playerName: "Shauna"
    }
  ],
  currentState: [getStartingState(1), getStartingState(2)]
}


function getStartingState(playerId: number): IPlayerState{
  return {
    playerId,
    megaCredits: {
      amount: 0,
      production: 0
    }
  }
}

export const boardState = atom<BoardState>(({
  key: 'boardstate',
  default: statingState,
}))

export const playerNumberState = atom<number>(({
  key: 'playerNumberState',
  default: 1,
}))