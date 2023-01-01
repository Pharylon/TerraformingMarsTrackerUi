import { View, StyleSheet } from 'react-native';
import Greenery from "./resources/Greenery";
import MegaCredits from './resources/MegaCredits';
import Heat from './resources/Heat';
import Power from './resources/Power';
import Titanium from './resources/Titanium';
import Steel from './resources/Steel';

const Board = () => {
  return (
    <View style={styles.board}>
      <MegaCredits/>
      <Steel/>
      <Titanium/>
      <Greenery/>
      <Power/>
      <Heat/>
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    fontSize: 50,
    color: "white",
    marginBottom: "auto",
  }
});

export default Board;
