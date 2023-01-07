import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useRecoilState } from 'recoil';
import { Ready } from '../Connections/SignalR';
import { BoardState, gameStateAtom } from '../state/BoardState';
import { getUserId } from '../state/UserState';

const StartGameButton = (props: {boardState: BoardState, gameId: string}) => {
  // const [gameState, setGameState] = useRecoilState(gameStateAtom);
  // const [userId, setUserId] = useState("");

  // async function SetUserId() {
  //   const userId = await getUserId();
  //   setUserId(userId);
  // }

  // useEffect(() => {
  //   SetUserId();
  // }, [])

  // function sendReady(){
  //   if (gameState){
  //     Ready(gameState.gameCode);
  //   }
  // }
  

  // const [readyToTart, setReadyToStart] = useState(false);
  // function readyToStart(){
  //   setReadyToStart(true);
  //   if (gameState){
  //     Ready(gameState.gameCode);
  //   }    
  // }



  return (
    <View>
      <Button disabled={props.boardState.player.readyToStart} onPress={() => Ready(props.gameId)} title={"Ready To Start"} />
    </View>
  );
};

export default StartGameButton;
