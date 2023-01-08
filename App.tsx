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
import AppInner from './AppInner';

export default function App() {
  return (
    <SafeAreaProvider>
      <RecoilRoot>
        <RecoilNexus />
        <AppInner/>
      </RecoilRoot>
    </SafeAreaProvider>
  );
}
