import { Button, StyleSheet, Text, View } from 'react-native';
import Greenery from "./resources/Greenery";
import Heat from './resources/Heat';
import Power from './resources/Power';
import Titanium from './resources/Titanium';
import Steel from './resources/Steel';
import { BoardState } from '../state/BoardState';
import { useRecoilState } from 'recoil';
import ResourceCard from './resources/ResourceCard';
import Tr from './resources/TR';
import { useState } from 'react';
import { Ready, ReadyToProduce } from '../Connections/SignalR';
import ProduceButton from './ProduceButton';

const Board = (props: {playerState: BoardState, gameCode: string, userId: string, gameStarted: boolean}) => {
  const canEdit = props.userId === props.playerState.player.playerId;

  return (
    <View style={styles.board}>
      <ResourceCard 
        resource={props.playerState.megaCredits} 
        gameCode={props.gameCode} 
        canEdit={props.userId === props.playerState.player.playerId}
        resourceName="MegaCredits"
        iconName={"logo-euro"}
        iconColor="gold"
        />
        <ResourceCard 
        resource={props.playerState.steel} 
        gameCode={props.gameCode} 
        canEdit={canEdit}
        resourceName="Steel"
        iconName={"md-hammer"}
        iconColor="brown"
        />
        <ResourceCard 
        resource={props.playerState.titanium } 
        gameCode={props.gameCode} 
        canEdit={canEdit}
        resourceName="Titanium"
        iconName={"md-star"}
        iconColor="gold"
        />
        <ResourceCard 
        resource={props.playerState.plants } 
        gameCode={props.gameCode} 
        canEdit={canEdit}
        resourceName="Plants"
        iconName={"md-leaf"}
        iconColor="green"
        />
        <ResourceCard 
        resource={props.playerState.energy } 
        gameCode={props.gameCode} 
        canEdit={canEdit}
        resourceName="Energy"
        iconName={"md-flash"}
        iconColor="purple"
        />
        <ResourceCard 
        resource={props.playerState.heat} 
        gameCode={props.gameCode} 
        canEdit={canEdit}
        resourceName="Heat"
        iconName={"md-flame"}
        iconColor="red"
        /> 
        <View style={styles.lastRow}>
        <Tr
          gameCode={props.gameCode}
          canEdit={canEdit}
          tr={props.playerState.terraformRating}
        />
        </View>
        <View style={styles.lastRow}>
        {
          canEdit && props.gameStarted &&  (
            <ProduceButton gameCode={props.gameCode} rtp={props.playerState.player.readyToProduce} />
          )
        }
        {
          !props.gameStarted && (
                <View>
                  <Button onPress={() => Ready(props.gameCode)} title={"Ready To Start"}/>
                </View>
          )
        }
        </View>
        
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
  },
  lastRow: {
    width: "40%",
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    borderColor: 'black',
    marginBottom: 10
  },
});

export default Board;
