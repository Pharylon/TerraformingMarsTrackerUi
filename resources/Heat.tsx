import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from "../Styles"

export default function Heat(){
  return (
    <View style={styles.resource}>
      <Text></Text>
      <Ionicons name="md-flame" size={32} color="red" />
    </View>
  )
}