import { StyleSheet, Text, View } from 'react-native';
import { useRecoilState } from 'recoil';
import UserName from './UserName';
import { userState } from '../state/UserState';
import React from 'react';
import Board from './Board';

const Main = () => {
  const [userNameState, setUserNameState] = useRecoilState(userState);
  return (
    <View style={styles.container}>
      {!userNameState && <UserName/>}
      {
        userNameState && 
        <View style={styles.main}>
          <Text style={styles.text} >{userNameState}</Text>
          <Board/>
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    fontSize: 50,
    color: "white"
  },
  text: {
    color: "white",
    fontSize: 50,
    marginBottom: "auto"
  },
  main: {
    display: "flex",
    height: "100%"
  }
});


export default Main;
