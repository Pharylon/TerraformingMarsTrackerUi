import { StatusBar } from 'expo-status-bar';
import { RefreshControlBase, StyleSheet, Text, View, Vibration, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from "../../Styles"
import {playerNumberState, Resource} from "../../state/BoardState"
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { UpdateGame } from '../../Connections/SignalR';

let timeout = 0;

const MegaCredits = (props: {resource: Resource, gameCode: string}) => {
  const [amount, setAmount] = useState(props.resource.amount);
  useEffect(() => {
    setAmount(props.resource.amount);
  }, [props.resource.amount]);

  useEffect(() => {
    if (timeout){
      window.clearTimeout(timeout);
    }
    timeout = window.setTimeout(() => sendUpdate(), 2000);
  }, [amount]);

  const sendUpdate = () => {
    console.log("Sending UPdate", amount)
    if (amount !== props.resource.amount){
      UpdateGame({
        gameCode: props.gameCode,
        resource: "MegaCredits",
        adjustmentAmount: amount - props.resource.amount,
        production: false
      });
    }
  }
  function incrementAmount(){
    setAmount(amount + 1);
  }
  function incrementAmountBy10(){
    setAmount(amount + 10);
    Vibration.vibrate(5);
  }
  function decrementAmount(){
    setAmount(amount - 1);
  }
  function decrementAmountBy10(){
    setAmount(amount - 10);
    Vibration.vibrate(5);
  }
  return (
    <View style={styles.resource}>      
      <View style={styles.resourceLine}>
        <Pressable hitSlop={20} style={styles.pressableStyle} onPress={decrementAmount} onLongPress={decrementAmountBy10}>
          <Ionicons   name="remove" size={32} color="black" />
        </Pressable>
        <Text style={styles.resourceText}>{amount}</Text>
        <Pressable hitSlop={20} style={styles.pressableStyle} onPress={incrementAmount} onLongPress={incrementAmountBy10} >
        <Ionicons name="add" size={32} color="black" />
        </Pressable>
      </View>
      <Ionicons name="logo-euro" size={32} color="gold" />
      <Text>{props.resource.production  ?? 0}</Text>
    </View>
  )
}

export default MegaCredits;