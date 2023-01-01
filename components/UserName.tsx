import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import {TextInput} from "@react-native-material/core";
import { View, Text, StyleSheet, Button } from 'react-native';
import { userState } from '../state/UserState';
import { useRecoilState } from 'recoil';
import { Box } from "@react-native-material/core";
import {} from "@react-native-material/core";


const UserName = () => {  
  const [userNameState, setUserNameState] = useRecoilState(userState);
  const [userNameInput, setUserNameInput] = useState("");
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@user_name');
      if(value !== null) {
        setUserNameState(userNameInput);
      }
    } catch(e) {
      // error reading value
    }
  }
  const setData = async () => {
    try {
      setUserNameState(userNameInput);
      await AsyncStorage.setItem('@user_name', userNameInput);
    } catch(e) {
      // error reading value
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <Grow in={checked}>{icon}</Grow>
      {/* Conditionally applies the timeout prop to change the entry speed. */}
      <Grow
        in={checked}
        style={{ transformOrigin: '0 0 0' }}
        {...(checked ? { timeout: 1000 } : {})}
      >
        {icon}
      </Grow>
    </Box>
  );

  // return (
  //   <View style={styles.container} >
  //     <Text style={styles.label}>Enter your name</Text>
  //     <TextInput placeholder='Name' style={{margin: "auto", width: "80%"}} value={userNameInput} onChangeText={setUserNameInput} >
  //     </TextInput>
  //     <Button title='Submit' onPress={setData}></Button>
  //   </View>    
  // );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex", 
    flexDirection: "column",
    height: 300,
    alignItems: "center",
    justifyContent: 'center'
  },
  label: {
    color: "white",
    fontSize: 14
  }
});



export default UserName;
