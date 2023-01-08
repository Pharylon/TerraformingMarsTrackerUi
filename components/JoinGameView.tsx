import { Input } from '@rneui/themed';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, Button, AppState } from 'react-native';
import { useRecoilState } from 'recoil';
import { JoinGame, StartGame } from '../Connections/SignalR';
import { gameStateAtom } from '../state/BoardState';
import { userState } from '../state/UserState';

const JoinGameView = (props: {goBack: () => void, navigateTo: (destination: string) => void}) => {
  const [gameState, setGameState] = useRecoilState(gameStateAtom);
  const [userName, setUserName] = useRecoilState(userState);
  const [gameCodeInput, setGameCodeInput] = useState("");
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", nextAppState => {
      if (appState.current.match(/inactive|background/) && nextAppState === "active" && gameState && gameState.gameCode) 
      {
        //App has come to the foreground
        console.log("App to foregrand, reconnection");
          // JoinGame(gameState.gameCode, userName);        
      }

      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, [gameState])

  async function joinGame(){
    await JoinGame(gameCodeInput, userName);
    props.navigateTo("Game");
  }


  return (
    <View style={styles.container} >
      <View style={styles.inner}>
          <Text style={styles.label}>{"Join a Game."}</Text>
          <Input autoCapitalize='characters' placeholder='Game Code' style={{margin: "auto", width: "80%"}} value={gameCodeInput} onChangeText={setGameCodeInput} />
          <Button title='Join Game' onPress={joinGame}></Button>
          <Text style={styles.label2}>{"Join a game created by someone else"}</Text>
        </View>
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
