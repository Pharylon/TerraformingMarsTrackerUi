import { atom } from 'recoil';

export const userState = atom<string>(({
  key: 'username',
  default: "",
}))


export const userIdAtom = atom<string>(({
  key: 'userId',
  default: "",
}))
