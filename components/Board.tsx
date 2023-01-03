import { StyleSheet, Text, View } from 'react-native';
import Greenery from "./resources/Greenery";
import Heat from './resources/Heat';
import Power from './resources/Power';
import Titanium from './resources/Titanium';
import Steel from './resources/Steel';
import { BoardState } from '../state/BoardState';
import { useRecoilState } from 'recoil';
import { userIdAtom } from '../state/UserState';
import ResourceCard from './resources/ResourceCard';

const Board = (props: {playerState: BoardState, gameCode: string}) => {
  const [userId, setUserId] = useRecoilState(userIdAtom);
  return (
    <View style={styles.board}>
      <ResourceCard 
        resource={props.playerState.megaCredits} 
        gameCode={props.gameCode} 
        canEdit={userId === props.playerState.playerId}
        resourceName="MegaCredits"
        iconName={"logo-euro"}
        iconColor="gold"
        />
        <ResourceCard 
        resource={props.playerState.steel} 
        gameCode={props.gameCode} 
        canEdit={userId === props.playerState.playerId}
        resourceName="Steel"
        iconName={"md-hammer"}
        iconColor="brown"
        />
        <ResourceCard 
        resource={props.playerState.titanium } 
        gameCode={props.gameCode} 
        canEdit={userId === props.playerState.playerId}
        resourceName="Titanium"
        iconName={"md-star"}
        iconColor="gold"
        />
        <ResourceCard 
        resource={props.playerState.plants } 
        gameCode={props.gameCode} 
        canEdit={userId === props.playerState.playerId}
        resourceName="Plants"
        iconName={"md-leaf"}
        iconColor="green"
        />
        <ResourceCard 
        resource={props.playerState.energy } 
        gameCode={props.gameCode} 
        canEdit={userId === props.playerState.playerId}
        resourceName="Energy"
        iconName={"md-flash"}
        iconColor="purple"
        />
        <ResourceCard 
        resource={props.playerState.heat} 
        gameCode={props.gameCode} 
        canEdit={userId === props.playerState.playerId}
        resourceName="Heat"
        iconName={"md-flame"}
        iconColor="red"
        /> 
    </View>
  );
};


const styles = StyleSheet.create({
  board: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    fontSize: 50,
    color: "white",
    alignSelf: "center",
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "space-around",
  }
});

export default Board;
