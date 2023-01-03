import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { userState } from '../state/UserState';
import { useRecoilState } from 'recoil';
import { Input } from '@rneui/themed';


const UserName = (props: {close?: () => void}) => {  
  const [userNameState, setUserNameState] = useRecoilState(userState);
  const [userNameInput, setUserNameInput] = useState("");
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@user_name');
      if(value !== null) {
        setUserNameState(value);
        setUserNameInput(value);
      }
    } catch(e) {
      // error reading value
    }
  }
  const setData = async () => {
    try {
      setUserNameState(userNameInput);
      if (props.close){
        props.close();
      }
      await AsyncStorage.setItem('@user_name', userNameInput);
    } catch(e) {
      // error reading value
    }
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <View style={styles.container} >
      <View style={styles.child}>
        <Text style={styles.label}>{"Enter your name"}</Text>
        <Input placeholder='Name' style={{margin: "auto", width: "80%"}} value={userNameInput} onChangeText={setUserNameInput} />
        <Button title='Submit' onPress={setData}></Button>
      </View>
    </View>    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex", 
    flexDirection: "column",
    height: 300,
    alignItems: "center",
    justifyContent: 'center',
    width: "100%",
  },
  child: {
    width: "80%",
    
  },
  label: {
    color: "white",
    fontSize: 14
  }
});



export default UserName;
