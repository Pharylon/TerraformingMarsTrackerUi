import { StatusBar } from 'expo-status-bar';
import { RefreshControlBase, StyleSheet, Text, View, Vibration, Pressable } from 'react-native';
import Ionicons  from '@expo/vector-icons/Ionicons';
import styles from "../../Styles"
import { BoardState, gameStateAtom, playerNumberState, Resource } from "../../state/BoardState"
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { UpdateGame } from '../../Connections/SignalR';
import ProductionLine from './ProductionLine';


const Tr = (props: {tr: number, gameId: string, canEdit: boolean}) => {
  const [tr, setTr] = useState(0);
  const [timeout, setTimeout] = useState(0);
  useEffect(() => {
    setTr(props.tr);
  }, [props]);

  useEffect(() => {
    if (timeout) {
      window.clearTimeout(timeout);
    }
    setTimeout(window.setTimeout(() => sendUpdate(), 1000));
  }, [tr]);

  const sendUpdate = () => {
    if (tr !== props.tr) {
      UpdateGame({
        gameId: props.gameId,
        resource: "tr",
        adjustmentAmount: tr - props.tr,
        production: false
      });
    }
  }
  function incrementAmount() {
    setTr(tr + 1);
  }
  function incrementAmountBy10() {
    setTr(tr + 10);
    Vibration.vibrate(5);
  }
  function decrementAmount() {
    setTr(tr - 1);
  }
  function decrementAmountBy10() {
    setTr(tr - 10);
    Vibration.vibrate(5);
  }
  return (
    <View style={styles.tr}>
      <View style={styles.trResourceLine}>
        {
          props.canEdit && (
            <Pressable hitSlop={20} style={styles.pressableStyle} onPress={decrementAmount} onLongPress={decrementAmountBy10}>
              <Ionicons style={styles.inoniconStyle} name="remove" size={32} />
            </Pressable>
          )
        }
        <Text style={styles.resourceText}>{tr}</Text>
        {
          props.canEdit && (
            <Pressable hitSlop={20} style={styles.pressableStyle} onPress={incrementAmount} onLongPress={incrementAmountBy10} >
              <Ionicons style={styles.inoniconStyle} name="add" size={32} />
            </Pressable>
          )
        }
      </View>
      
    </View>
  )
}

export default Tr;