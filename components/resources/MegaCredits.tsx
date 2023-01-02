import { StatusBar } from 'expo-status-bar';
import { RefreshControlBase, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from "../../Styles"
import {gameState, playerNumberState, Resource} from "../../state/BoardState"
import { useRecoilState } from 'recoil';

const MegaCredits = (props: {resource: Resource}) => {
  // const incrementMegaCredits = () => {
  //   const newMegaCreditAmount = myBoardState ? myBoardState.megaCredit + 1 : 1;
  //   const newBoardState = {...myBoardState, MegaCredits: newMegaCreditAmount};
  //   const myNewSTate = [...myState.currentState.filter(x => x.playerId !== playerNumber), newBoardState];
  //   setMyState({
  //     ...myState,
  //     currentState: myNewSate
  //   });
  // }
  
  return (
    <View style={styles.resource}>      
      <View style={styles.resourceLine}>
        <Ionicons  name="remove" size={32} color="black" />
        <Text style={styles.resourceText}>{props.resource.amount ?? 0}</Text>
        <Ionicons name="add" size={32} color="black" />
      </View>
      <Ionicons name="logo-euro" size={32} color="gold" />
      <Text>{props.resource.production  ?? 0}</Text>
    </View>
  )
}

export default MegaCredits;