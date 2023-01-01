import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from "../Styles"

export default function Greenery(){
  return (
    <View style={styles.resource}>
      <Text></Text>
      <Ionicons name="md-leaf" size={32} color="green" />
    </View>
  )
}