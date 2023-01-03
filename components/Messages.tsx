import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useRecoilState } from 'recoil';
import { gameStateAtom } from '../state/BoardState';

const Messages = () => {
  const [gameState, setGameState] = useRecoilState(gameStateAtom);
  
  return (
    <ScrollView style={styles.container}>
      {
        gameState && gameState.messages.map((x, i) => (
          <Text style={styles.text} key={i}>{x}</Text>
        ))
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 50,
    maxHeight: 150,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  text: {
    fontSize: 14,
    fontFamily: "monospace",
    color: "white"
  }
})

export default Messages;
