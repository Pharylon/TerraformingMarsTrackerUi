import { StyleSheet, Text, View } from 'react-native';
import { useRecoilState } from 'recoil';
import UserName from './UserName';
import { userState } from '../state/UserState';
import React, { useEffect, useState } from 'react';
import GameBoards from './GameBoards';
import { Icon, TabView } from '@rneui/themed';
import {gameState, playerNumberState} from "../state/BoardState";


const Main = () => {
  const [playerNumber, setPlayerNumber] = useRecoilState(playerNumberState);
  const [userNameState, setUserNameState] = useRecoilState(userState);
  const [currentPlayerNumber, setCurrentPlayerNumber] = useState(0);
  const [myGameState, setGameState] = useRecoilState(gameState);

  useEffect(() => {
    setCurrentPlayerNumber(playerNumber);
  }, [playerNumber]);

  return (
    <View style={styles.container}>
      {!userNameState && <UserName/>}
      {
        userNameState && 
        <View style={styles.main}>
          <Text style={styles.text} >
            <Icon name='reorder-three-outline' type='ionicon'/>
            {myGameState.gameCode}
          </Text>
          <GameBoards/>
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    fontSize: 50,
    color: "white"
  },
  text: {
    color: "white",
    fontSize: 30,
    marginBottom: "auto"
  },
  main: {
    display: "flex",
    height: "100%"
  }
});


export default Main;
