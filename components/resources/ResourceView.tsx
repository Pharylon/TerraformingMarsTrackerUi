import { StatusBar } from 'expo-status-bar';
import { RefreshControlBase, StyleSheet, Text, View, Vibration, Pressable, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from "../../Styles"
import { playerNumberState, Resource } from "../../state/BoardState"
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { UpdateGame } from '../../Connections/SignalR';
import ProductionLine from './ProductionLine';



const ResourceCard = (props: { resource: Resource, gameId: string, canEdit: boolean, resourceName: string, image: any }) => {
  const [timeout, setTimeout] = useState(0);
  const [prodDiff, setProdDiff] = useState(0);
  if (!props.resource){
    console.error("Resource Missing!", props.resourceName)
  }
  const [amount, setAmount] = useState(props.resource.amount);
  const diff = amount - props.resource.amount;
  useEffect(() => {
    setAmount(props.resource.amount);
  }, [props.resource.amount]);

  useEffect(() => {
    if (timeout) {
      window.clearTimeout(timeout);
    }
    setTimeout(window.setTimeout(() => sendUpdate(), 3000));
  }, [amount]);

  const sendUpdate = () => {
    if (amount !== props.resource.amount) {
      UpdateGame({
        gameId: props.gameId,
        resource: props.resourceName,
        adjustmentAmount: amount - props.resource.amount,
        production: false
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
  return (
    <View style={styles.resource}>
      <View style={styles.resourceLine}>
        {
          props.canEdit && (
            <Pressable hitSlop={20} style={styles.pressableStyle} onPress={incrementAmount} onLongPress={incrementAmountBy10} >
              <Ionicons style={styles.inoniconStyle} name="add" size={32} />
            </Pressable>
          )
        }
        <Text style={styles.resourceText}>{amount}</Text>
        {
          props.canEdit && (
            
            <Pressable hitSlop={20} style={styles.pressableStyle} onPress={decrementAmount} onLongPress={decrementAmountBy10}>
            <Ionicons style={styles.inoniconStyle} name="remove" size={32} />
          </Pressable>
          )
        }

      </View>
      <View>
        {/* {diff === 0 ? (
          <Image style={{height: 50, width: 50}} source={props.image}/>
        ) : (
          <View><Text style={{height: 50, width: 60, fontSize: 30, overflow: "visible", zIndex: 1000, textAlign: "right"}} >{(diff > 0 ? "+"  : "") + diff}</Text></View>
        )} */}
        <Image style={{height: 70, width: 70}} source={props.image}/>
        </View>
      
      <ProductionLine resource={props.resource}
        gameId={props.gameId}
        canEdit={props.canEdit}
        resourceName={props.resourceName} />

    </View>
  )
}

export default ResourceCard;