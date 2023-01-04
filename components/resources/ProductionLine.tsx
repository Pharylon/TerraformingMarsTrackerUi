import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, Vibration, View } from 'react-native';
import { UpdateGame } from '../../Connections/SignalR';
import { Resource } from '../../state/BoardState';
import styles from '../../Styles';
import Ionicons from '@expo/vector-icons/Ionicons';

let timeout = 0;

const ProductionLine = (props: { resource: Resource, gameCode: string, canEdit: boolean, resourceName: string }) => {
  const [amount, setAmount] = useState(props.resource.production);

  useEffect(() => {
    setAmount(props.resource.production);
  }, [props.resource.production]);

  useEffect(() => {
    if (timeout) {
      window.clearTimeout(timeout);
    }
    timeout = window.setTimeout(() => sendUpdate(), 1000);
  }, [amount]);

  const sendUpdate = () => {
    if (amount !== props.resource.production) {
      UpdateGame({
        gameCode: props.gameCode,
        resource: props.resourceName,
        adjustmentAmount: amount - props.resource.production,
        production: true,        
      });
    }
  }
  function incrementAmount() {
    setAmount(amount + 1);
  }
  function incrementAmountBy10() {
    setAmount(amount + 10);
    Vibration.vibrate(5);
  }
  function decrementAmount() {
    setAmount(amount - 1);
  }
  function decrementAmountBy10() {
    setAmount(amount - 10);
    Vibration.vibrate(5);
  }
  // return (
  //   <View><Text style={styles.productionText}>{amount}</Text></View>
  // );
  return (
    <View style={styles.production}>
      {
          props.canEdit && (
            
            <Pressable hitSlop={20} style={styles.pressableStyle} onPress={incrementAmount} onLongPress={incrementAmountBy10} >
            <Ionicons color={"orange"} name="add" size={40} />
          </Pressable>
          )
        }
        <Text style={styles.productionText}>{amount}</Text>
        {
          props.canEdit && (
            <Pressable hitSlop={20} style={styles.pressableStyle} onPress={decrementAmount} onLongPress={decrementAmountBy10}>
              <Ionicons color="orange"  name="remove" size={32} />
            </Pressable>
          )
        }
      </View>
  );
};

export default ProductionLine;
