import { View } from 'react-native';
import Greenery from "./resources/Greenery";
import MegaCredits from './resources/MegaCredits';
import Heat from './resources/Heat';
import Power from './resources/Power';
import Titanium from './resources/Titanium';
import Steel from './resources/Steel';

const Board = () => {
  return (
    <View>
      <MegaCredits/>
      <Steel/>
      <Titanium/>
      <Greenery/>
      <Power/>
      <Heat/>
    </View>
  );
};

export default Board;
