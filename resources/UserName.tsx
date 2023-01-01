import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const UserName = () => {  
const [userNameInput, setUserNameInput] = useState("");
const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@user_name');
    if(value !== null) {
      setUserNameInput(userNameInput);
    }
  } catch(e) {
    // error reading value
  }
}

useEffect(() => {
  getData();
});

  return (
    <TextInput value={userNameInput} onChangeText={setUserNameInput} >
    </TextInput>
  );
};

export default UserName;
