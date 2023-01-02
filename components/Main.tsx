import { StyleSheet, Text, View } from 'react-native';
import { useRecoilState } from 'recoil';
import UserName from './UserName';
import { userState } from '../state/UserState';
import React, { useEffect, useState } from 'react';
import GameBoards from './GameBoards';
import { Icon, TabView } from '@rneui/themed';
import {gameStateAtom, playerNumberState} from "../state/BoardState";
import OverlayComponent from './Options';
import GameMenu from './GameMenu';
import Messages from './Messages';


const Main = (props: {goBack: () => void, navigateTo: (destination: string) => void}) => {
  const [playerNumber, setPlayerNumber] = useRecoilState(playerNumberState);
  const [userNameState, setUserNameState] = useRecoilState(userState);
  const [currentPlayerNumber, setCurrentPlayerNumber] = useState(0);
  const [gameState, setGameState] = useRecoilState(gameStateAtom);

  const showGameMenu = !!userNameState && !gameState;

  useEffect(() => {
    setCurrentPlayerNumber(playerNumber);
  }, [playerNumber]);

  return (
    <View style={styles.container}>
      {!userNameState && <UserName/>}
      {showGameMenu && 
        <View style={styles.main}>
            <GameMenu goBack={() => props.goBack()} navigateTo={props.navigateTo} />
        </View>}
      {
        !showGameMenu && 
        <View style={styles.main}>
          <View style={styles.child}>
            <GameBoards/>
          </View>
          <View style={styles.child}>
          <Messages/>
          </View>
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    fontSize: 50,
    color: "white",
    height: "100%",
  },
  child: {
    flex: 1
  },
  main: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
  }
});


export default Main;
