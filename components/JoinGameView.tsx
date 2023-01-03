import { Button, Input } from '@rneui/themed';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRecoilState } from 'recoil';
import { JoinGame, StartGame } from '../Connections/SignalR';
import { gameStateAtom } from '../state/BoardState';
import { userState } from '../state/UserState';

const JoinGameView = (props: {goBack: () => void, navigateTo: (destination: string) => void}) => {
  const [gameState, setGameState] = useRecoilState(gameStateAtom);
  const [userName, setUserName] = useRecoilState(userState);
  const [gameCodeInput, setGameCodeInput] = useState("");
  async function joinGame(){
    await JoinGame(gameCodeInput, userName);
    props.navigateTo("Game");
  }
  return (
    <View style={styles.container} >
      {!gameState && (
        <View style={styles.inner}>
          <Text style={styles.label}>{"Join A Game."}</Text>
          <Input autoCapitalize='characters' placeholder='Game Code' style={{margin: "auto", width: "80%"}} value={gameCodeInput} onChangeText={setGameCodeInput} />
          <Button title='Join Game' onPress={joinGame}></Button>
          <Text style={styles.label2}>{"Join a game created by someone else"}</Text>
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


export default JoinGameView;
