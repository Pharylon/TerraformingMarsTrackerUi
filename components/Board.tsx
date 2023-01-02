import { StyleSheet, Text, View } from 'react-native';
import Greenery from "./resources/Greenery";
import MegaCredits from './resources/MegaCredits';
import Heat from './resources/Heat';
import Power from './resources/Power';
import Titanium from './resources/Titanium';
import Steel from './resources/Steel';
import { IPlayerState } from '../state/BoardState';

const Board = (props: {playerState: IPlayerState}) => {

  return (
    <View style={styles.board}>
      <MegaCredits resource={props.playerState.megaCredits}/>
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
    alignSelf: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "space-around"
  }
});

export default Board;
