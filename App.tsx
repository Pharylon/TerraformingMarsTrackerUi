import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import { RecoilRoot } from 'recoil';
import { StatusBar as StatusBarNative} from 'react-native';
import React, { useState } from 'react';
import UserName from './resources/UserName';

export default function App() {
  const image = require("./assets/mars.png");
  return (
    <RecoilRoot>
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          {/* <Text style={styles.text}>Inside</Text> */}
          <UserName/>
        </ImageBackground>
    </View>
    {/* <StatusBar style="auto" /> */}
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
