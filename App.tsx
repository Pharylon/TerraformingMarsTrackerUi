import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import { RecoilRoot, useRecoilState } from 'recoil';
import { Dimensions, Platform, StatusBar as StatusBarNative } from 'react-native';
import React, { useState } from 'react';
import UserName from './components/UserName';
import { userState } from './state/UserState';
import Main from './components/Main';
import { createTheme, ThemeProvider, useTheme } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';



const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const { height, width } = Dimensions.get('window');

const isIPhoneX = () => Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS
  ? width === X_WIDTH && height === X_HEIGHT || width === XSMAX_WIDTH && height === XSMAX_HEIGHT
  : false;

const StatusBarHeight = Platform.select({
  ios: isIPhoneX() ? 44 : 20,
  android: StatusBarNative.currentHeight,
  default: 0
})


const myTheme = createTheme({
  lightColors: {
    primary: '#f2f2f2',
  },
  darkColors: {
    primary: '#121212',
  },
  mode: 'dark',
});

export default function App() {
  const image = require("./assets/mars.png");
  return (
    <SafeAreaProvider>
      <RecoilRoot>
        <ThemeProvider theme={myTheme}>
          <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
              <Main />
            </ImageBackground>
          </View>
          <StatusBar backgroundColor='black' style="light" />
        </ThemeProvider>
      </RecoilRoot>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBarHeight,
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: "center"
  }
});
