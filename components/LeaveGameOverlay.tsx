import { Overlay } from '@rneui/themed';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useRecoilState } from 'recoil';
import { LeaveGame } from '../Connections/SignalR';
import { gameStateAtom } from '../state/BoardState';
import { showLeaveGameAtom } from '../state/UserState';

const LeaveGameOverlay = () => {
  const [showLeaveOverlay, setShowLeaveOverlay] = useRecoilState(showLeaveGameAtom);
  const [gameState, setGameState] = useRecoilState(gameStateAtom);

  async function leaveGame(){
    if (gameState)
    await LeaveGame(gameState.id);
    setGameState(undefined);
  }

  return (
    <Overlay style={{backgroundColor: "black"}} isVisible={showLeaveOverlay} onBackdropPress={() => setShowLeaveOverlay(false)}>
      <View style={styles.main}>
        <Text style={styles.text}>Are you sure you wish to leave the game? This cannot be undone!</Text>
        <Button color={"red"} title={"Leave Game"} onPress={leaveGame} />
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "black",
    margin: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    minHeight: 100,
  },
  text: {
    color: "red",
    fontFamily: "monospace",
    margin: 20
  },
  buttonView: {
    margin: 10
  }
});


export default LeaveGameOverlay;
