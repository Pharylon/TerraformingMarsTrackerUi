import { StyleSheet, Text, TextInput, View } from 'react-native';
import { GLView } from 'expo';
import Expo2DContext from 'expo-2d-context';
import React from 'react';

const StarField = () => {
  const COLOR_SPACE = "black";
  const COLOR_STARS = "white";
  const STAR_NUM = 200;
  const STAR_SIZE = 0.005;
  const STAR_SPEED = 0.05;
  // const canvas = document.createElement("canvas");
  // const ctx = canvas.getContext("2d");
  // canvas.height = document.documentElement.clientHeight;
  // canvas.width = document.documentElement.clientWidth;
  // document.body.appendChild(canvas);
  return (
    <Text>
      Hello World
    </Text>
  );
};

export default StarField;
