import { StyleSheet, Text, View } from 'react-native';
import { useRecoilState } from 'recoil';
import UserName from './UserName';
import { userState } from '../state/UserState';
import React, { useEffect, useState } from 'react';
import GameBoards from './GameBoards';
import { Icon, TabView } from '@rneui/themed';
import {gameStateAtom, playerNumberState} from "../state/BoardState";
import ErrorOverlay from './ErrorOverlay';
import GameMenu from './GameMenu';
import Messages from './Messages';
import Board from './Board';
import TabTest from './TabTest';
import { Button } from '@rneui/base';
import TurnSound from "./TurnSound";
import { useKeepAwake } from 'expo-keep-awake';



const Main = (props: {goBack: () => void, navigateTo: (destination: string) => void}) => {
  useKeepAwake();
  const [playerNumber, setPlayerNumber] = useRecoilState(playerNumberState);
  const [userNameState, setUserNameState] = useRecoilState(userState);
  const [currentPlayerNumber, setCurrentPlayerNumber] = useState(0);
  const [gameState, setGameState] = useRecoilState(gameStateAtom);

  const showGameMenu = !!userNameState && !gameState;

  useEffect(() => {
    setCurrentPlayerNumber(playerNumber);
  }, [playerNumber]);
  
  return(
    <View style={styles.container}>
      {!userNameState && <UserName/>}
      {
        showGameMenu && <GameMenu goBack={() => props.goBack()} navigateTo={props.navigateTo} />
      }
      {
        !showGameMenu && (
          <GameBoards/>
        )
      }
      {
        !showGameMenu && (
          <View><Messages/></View>
        )
      }
    <TurnSound/>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  child: {},
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  buttonView: {
  }
});


export default Main;
