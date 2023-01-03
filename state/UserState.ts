import AsyncStorage from '@react-native-async-storage/async-storage';
import { atom } from 'recoil';
import 'react-native-get-random-values'
import {v4 as uuidv4 } from 'uuid';

export const userState = atom<string>(({
  key: 'username',
  default: "",
}))


export async function getUserId(){
  let userId = await AsyncStorage.getItem('@user_id');
  if (!userId){
    userId = uuidv4();;
    await AsyncStorage.setItem("@user_id", userId);
  }
  console.log("UserID", userId);
  return userId;
}