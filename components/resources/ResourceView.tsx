import { StatusBar } from 'expo-status-bar';
import { RefreshControlBase, StyleSheet, Text, View, Vibration, Pressable, Image } from 'react-native';
import Ionicons, {IconProps} from '@expo/vector-icons/Ionicons';
import styles from "../../Styles"
import { playerNumberState, Resource } from "../../state/BoardState"
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { UpdateGame } from '../../Connections/SignalR';
import ProductionLine from './ProductionLine';



const ResourceCard = (props: { resource: Resource, gameCode: string, canEdit: boolean, resourceName: string, image: any }) => {
  const [timeout, setTimeout] = useState(0);
  if (!props.resource){
    console.error("Resource Missing!", props.resourceName)
  }
  const [amount, setAmount] = useState(props.resource.amount);
  useEffect(() => {
    setAmount(props.resource.amount);
  }, [props.resource.amount]);

  useEffect(() => {
    if (timeout) {
      window.clearTimeout(timeout);
    }
    setTimeout(window.setTimeout(() => sendUpdate(), 1000));
  }, [amount]);

  const sendUpdate = () => {
    if (amount !== props.resource.amount) {
      UpdateGame({
        gameCode: props.gameCode,
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
            <Pressable hitSlop={20} style={styles.pressableStyle} onPress={decrementAmount} onLongPress={decrementAmountBy10}>
              <Ionicons style={styles.inoniconStyle} name="remove" size={32} />
            </Pressable>
          )
        }
        <Text style={styles.resourceText}>{amount}</Text>
        {
          props.canEdit && (
            <Pressable hitSlop={20} style={styles.pressableStyle} onPress={incrementAmount} onLongPress={incrementAmountBy10} >
              <Ionicons style={styles.inoniconStyle} name="add" size={32} />
            </Pressable>
          )
        }

      </View>
      <Image style={{height: 50, width: 50}} source={props.image}/>
      <ProductionLine resource={props.resource}
        gameCode={props.gameCode}
        canEdit={props.canEdit}
        resourceName={props.resourceName} />

    </View>
  )
}

export default ResourceCard;