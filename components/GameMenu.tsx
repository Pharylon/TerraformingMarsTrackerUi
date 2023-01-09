import { Input, Overlay } from '@rneui/themed';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useRecoilState } from 'recoil';
import { LeaveGame, StartGame } from '../Connections/SignalR';
import { gameStateAtom } from '../state/BoardState';
import { showLeaveGameAtom, userState } from '../state/UserState';

const GameMenu = (props: {goBack: () => void, navigateTo: (destination: string) => void}) => {
  const [gameState, setGameState] = useRecoilState(gameStateAtom);
  const [showLeaveOverlay, setShowLeaveOverlay] = useRecoilState(showLeaveGameAtom);


  return (
    <View style={styles.container} >
      <Button title={"Start Game"} onPress={() => props.navigateTo("Start Game")}/>
      <Button title={"Join Game"} onPress={() => props.navigateTo("Join Game")}/>
      {
        gameState && gameState.gameCode && (
          <Button color={"red"} title={"Leave Game"} onPress={() => setShowLeaveOverlay(true)}/>
        )
      }
      
    </View>    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex", 
    flexDirection: "column",
    height: 300,
    alignItems: "center",
    justifyContent: 'space-around',
  },
  inner: {
    margin: "auto",
    width: "80%"
  },
  label: {
    color: "white",
    fontSize: 14
  },
  label2: {
    color: "white",
    fontSize: 14,
    marginTop: 25,
  }
});


export default GameMenu;
