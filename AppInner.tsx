import { StatusBar } from 'expo-status-bar';
import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import { RecoilRoot, useRecoilState } from 'recoil';
import { Dimensions, Platform, StatusBar as StatusBarNative } from 'react-native';
import React, { useState } from 'react';
import UserName from './components/UserName';
import { userState } from './state/UserState';
import Main from './components/Main';
import { createTheme, ThemeProvider, useTheme } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DarkTheme, Theme, useNavigationContainerRef } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import RecoilNexus from 'recoil-nexus';
import StartGameView from './components/StartGame';
import GameMenu from './components/GameMenu';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JoinGameView from './components/JoinGameView';
import TabTest from './components/TabTest';
import ErrorOverlay from './components/ErrorOverlay';
import { gameStateAtom } from './state/BoardState';
import LeaveGameOverlay from './components/LeaveGameOverlay';



const image = require("./assets/mars.png");

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

function HomeScreen(props: { navigation: any }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Main goBack={() => props.navigation.goBack()} navigateTo={props.navigation.navigate} />
      </ImageBackground>
    </View>
  );
}

function GameMenuNav(props: { navigation: any }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <GameMenu goBack={() => props.navigation.goBack()} navigateTo={props.navigation.navigate} />
      </ImageBackground>
    </View>
  );
}

function StartGameNav(props: { navigation: any }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <StartGameView goBack={() => props.navigation.goBack()} navigateTo={props.navigation.navigate} />
      </ImageBackground>
    </View>
  );
}

function JoinGameNav(props: { navigation: any }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <JoinGameView goBack={() => props.navigation.goBack()} navigateTo={props.navigation.navigate} />
      </ImageBackground>
    </View>
  );
}

function UserNameNavigation(props: { navigation: any }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <UserName close={() => props.navigation.goBack()} />
      </ImageBackground>
    </View>
  );
}

function About(props: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={{color: "white", margin: 20}}>The Terraforming Mars Multiplayer Resource Tracker was made by Zachary Shuford</Text>
      <Text style={{color: "white", margin: 20}}>v. 1.2.1</Text>
    </View>
  );
}





const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function AppInner() {
  const [gameState, setGameState] = useRecoilState(gameStateAtom);

  const myNavigatorTheme: Theme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      notification: "white",
    }
  }
  return (
    <ThemeProvider theme={myTheme} >
      <NavigationContainer theme={DarkTheme} >
        <Drawer.Navigator initialRouteName="Game" screenOptions={({ navigation }) => ({
          headerLeft: props => <Ionicons name="reorder-three-outline" size={40} color="white" onPress={navigation.toggleDrawer} />,
        })} >
          <Drawer.Screen name="Game" component={HomeScreen} options={{title: "Game " + (gameState?.gameCode ? gameState.gameCode : "")}}/>
          <Drawer.Screen name="Set User Name" component={UserNameNavigation} />
          <Drawer.Screen name="Game Menu" component={GameMenuNav} />
          <Drawer.Screen name="About" component={About} />
          <Drawer.Screen options={{ drawerItemStyle: { display: "none" } }} name="Start Game" component={StartGameNav} />
          <Drawer.Screen options={{ drawerItemStyle: { display: "none" } }} name="Join Game" component={JoinGameNav} />
        </Drawer.Navigator>
        <ErrorOverlay />
        <LeaveGameOverlay/>
        <StatusBar backgroundColor='black' style="light" />
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
  },
  menu: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  }
});
