import { Button, Input } from '@rneui/themed';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRecoilState } from 'recoil';
import { StartGame } from '../Connections/SignalR';
import { gameStateAtom } from '../state/BoardState';
import { userState } from '../state/UserState';

const StartGameView = (props: {goBack: () => void, navigateTo: (destination: string) => void}) => {
  const [gameState, setGameState] = useRecoilState(gameStateAtom);
  const [userName, setUserName] = useRecoilState(userState);
  const [gameCodeInput, setGameCodeInput] = useState("");
  function startGame(){
    StartGame(gameCodeInput, userName);
  }

  return (
    <View style={styles.container} >
      {!gameState && (
        <View style={styles.inner}>
          <Text style={styles.label}>{"Start a New Game."}</Text>
          <Input autoCapitalize='characters' placeholder='Game Code' style={{margin: "auto", width: "80%"}} value={gameCodeInput} onChangeText={setGameCodeInput} />
          <Button title='Create Game' onPress={startGame}></Button>
          <Text style={styles.label2}>{"Anyone with this code can join your game. Suggested Code length is 8 characters"}</Text>
        </View>
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
    justifyContent: 'center',
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


export default StartGameView;
