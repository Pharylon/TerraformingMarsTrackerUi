import { StyleSheet, Text, View } from 'react-native';
import { useRecoilState } from 'recoil';
import UserName from './UserName';
import { userState } from '../state/UserState';

const Main = () => {
  const [userNameState, setUserNameState] = useRecoilState(userState);
  return (
    <View style={styles.container}>
      <View><Text style={styles.text} >{userNameState}FDKLJFLDKJ</Text></View>
      <UserName/>
      {/* {!userNameState && <UserName/>}
      {!userNameState && <UserName/>} */}
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
    fontSize: 50
  }
});


export default Main;
