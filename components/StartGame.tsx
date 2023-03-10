import { Input } from '@rneui/themed';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import { useRecoilState } from 'recoil';
import { StartGame } from '../Connections/SignalR';
import { gameStateAtom } from '../state/BoardState';
import { userState } from '../state/UserState';

const StartGameView = (props: { goBack: () => void, navigateTo: (destination: string) => void }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [gameState, setGameState] = useRecoilState(gameStateAtom);
  const [userName, setUserName] = useRecoilState(userState);
  const [gameCodeInput, setGameCodeInput] = useState("");
  const [showLoadSpinner, setShowLoadSpinner] = useState(false);

  async function startGame() {
    if (gameCodeInput) {
      setShowLoadSpinner(true);
      await StartGame(gameCodeInput, userName);
      setShowLoadSpinner(false);
      props.navigateTo("Game");
    }
  }

  useEffect(() => {
    let myCode = "";
    for (var i = 0; i < 4; i++) {
      const index = Math.floor(Math.random() * 24);
      myCode += letters[index];
    }
    setGameCodeInput(myCode);
  }, [gameState]);



  function setGameCodeInputClean(str: string) {
    var replaced = str.replace(/\s/gm, '');
    setGameCodeInput(replaced);
  }

  return (
    <View style={styles.container} >
      {
        showLoadSpinner ? (
          <View>
            <View>
              <Text style={{ color: "white", fontSize: 20, marginBottom: 20 }}>Launching Ships...</Text>
              <ActivityIndicator size="large" />
            </View>
          </View>
        ) : (
          <View style={styles.inner}>
            <Text style={styles.label}>{"Start a New Game."}</Text>
            <Input autoCapitalize='characters' placeholder={"Game Code"} style={{ margin: "auto", width: "80%" }} value={gameCodeInput} onChangeText={setGameCodeInputClean} />
            <Button title='Create Game' onPress={startGame}></Button>
            <Text style={styles.label2}>{"Anyone with this code can join your game. Suggested Code length is 4-6 characters"}</Text>
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
