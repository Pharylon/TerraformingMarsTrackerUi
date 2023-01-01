import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import { RecoilRoot, useRecoilState } from 'recoil';
import { StatusBar as StatusBarNative} from 'react-native';
import React, { useState } from 'react';
import UserName from './resources/UserName';
import { userState } from './state/UserState';
import Main from './components/Main';

export default function App() {
  const image = require("./assets/mars.png");
  return (
    <RecoilRoot>
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Main/>
        </ImageBackground>
    </View>
    <StatusBar style="auto" />
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: "center"
  }
});
