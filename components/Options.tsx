import Modal from 'modal-react-native-web';
import { Button, Overlay, Icon } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import {gameState, playerNumberState} from "../state/BoardState";
import { useRecoilState } from 'recoil';
import Ionicons from '@expo/vector-icons/Ionicons';


type OverlayComponentProps = {};

const OverlayComponent: React.FunctionComponent<OverlayComponentProps> = () => {
const [visible, setVisible] = useState(false);

const toggleOverlay = () => {
  setVisible(!visible);
};

const [myGameState, setGameState] = useRecoilState(gameState);

return (
  <View>
    <View style={styles.menu}>
      <Icon onPress={toggleOverlay} size={40} name='reorder-three-outline' type='ionicon'/>
      <Text style={styles.text} >{myGameState.gameCode}</Text>
    </View>
    <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
      <Button
        icon={
          <Icon
            name="add-circle-outline"
            type="ionicons"
            color="white"
            size={25}
            iconStyle={{ marginRight: 10 }}
          />
        }
        title="Join Game"
        onPress={toggleOverlay}
      />
       <Button
        icon={
          <Ionicons
            name="close-circle-outline"
            type="ionicons"
            color="white"
            size={25}
            iconStyle={{ marginRight: 10 }}
          />
        }
        title="Leave Game"
        onPress={toggleOverlay}
      />
      <Button
        icon={
          <Ionicons
            name="rocket-outline"
            type="ionicons"
            color="white"
            size={25}
            iconStyle={{ marginRight: 10 }}
          />
        }
        title="&nbsp;Create New Game"
        onPress={toggleOverlay}
      />
    </Overlay>
  </View>
);
};

const styles = StyleSheet.create({
button: {
  margin: 10,
},
textPrimary: {
  marginVertical: 20,
  textAlign: 'center',
  fontSize: 20,
},
textSecondary: {
  marginBottom: 10,
  textAlign: 'center',
  fontSize: 17,
},
text: {
  color: "white",
  fontSize: 30,
  marginBottom: "auto"
},
menu: {
  display: "flex",
  flexDirection: "row",
  alignContent: 'center',
}
});

export default OverlayComponent;