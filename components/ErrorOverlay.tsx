import Modal from 'modal-react-native-web';
import { Button, Overlay, Icon, Text } from '@rneui/themed';
import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import Ionicons from '@expo/vector-icons/Ionicons';
import { errorMessageAtom } from '../state/BoardState';


type OverlayComponentProps = {};

const ErrorOverlay: React.FunctionComponent<OverlayComponentProps> = () => {
  const [errorMessage, setErrorMessage] = useRecoilState(errorMessageAtom);

  return (
    <View>
      <Overlay isVisible={!!errorMessage} onBackdropPress={() => setErrorMessage("")}>
        <Text h2>Error</Text>
        <View style={styles.main}>
          <Text style={styles.text}>{errorMessage}</Text>
          <View style={styles.buttonView}>
            <Button color={"error"}  onPress={() => setErrorMessage("")} title="OK" />
          </View>
        </View>
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "black",
    margin: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    minHeight: 100,
  },
  text: {
    color: "red",
    fontFamily: "monospace",
    margin: 20
  },
  buttonView: {
    margin: 10
  }
});

export default ErrorOverlay;