import { StyleSheet, Text, View } from 'react-native';
import { useRecoilState } from 'recoil';
import UserName from '../resources/UserName';
import { userState } from '../state/UserState';

const Main = () => {
  const [userNameState, setUserNameState] = useRecoilState(userState);
  return (
    <View>
      {!userNameState && <UserName/>}
    </View>
  );
};

export default Main;
