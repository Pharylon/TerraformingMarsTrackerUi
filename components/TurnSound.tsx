import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RecoilState, useRecoilState } from 'recoil';
import { GameState, gameStateAtom } from '../state/BoardState';
import { Audio } from 'expo-av';

const TurnSound = () => {
  const [sound, setSound] = useState<any>();
  const [gameState, setGameSTate] = useRecoilState(gameStateAtom);
  const [turn, setTurn] = useState(0);
  console.log("TurnSound");

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../assets/clink.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    console.log(gameState?.turn, turn);
    if (gameState && gameState.turn > turn){
      playSound();
      setTurn(gameState.turn);
    }
  }, [gameState])

  return (
    <></>
  );
};

export default TurnSound;
