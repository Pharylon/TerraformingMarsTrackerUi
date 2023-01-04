import { Button, StyleSheet, Text, View } from 'react-native';
import { BoardState } from '../state/BoardState';
import Tr from './resources/TR';
import { Ready, ReadyToProduce } from '../Connections/SignalR';
import ProduceButton from './ProduceButton';
import ResourceView from './resources/ResourceView';
import { Asset, useAssets } from 'expo-asset';
import { useEffect, useState } from 'react';
import StartGameButton from './StartGameButton';
const mc = require("../assets/MC.png");
const steel = require("../assets/Steel.png");
const plants = require("../assets/Plants.png");
const titanium = require("../assets/Titanium.png");
const heat = require("../assets/Heat.png");
const energy = require("../assets/Energy.png");

const Board = (props: {playerState: BoardState, gameCode: string, userId: string, gameStarted: boolean}) => {
  const canEdit = props.userId === props.playerState.player.playerId;


  return (
    <View style={styles.board}>
      <ResourceView 
        resource={props.playerState.megaCredits} 
        gameCode={props.gameCode} 
        canEdit={props.userId === props.playerState.player.playerId}
        resourceName="MegaCredits"
        image={mc}
        />
        <ResourceView 
        resource={props.playerState.steel} 
        gameCode={props.gameCode} 
        canEdit={canEdit}
        resourceName="Steel"
        image={steel}
        />
        <ResourceView 
        resource={props.playerState.titanium } 
        gameCode={props.gameCode} 
        canEdit={canEdit}
        resourceName="Titanium"
        image={titanium}
        />
        <ResourceView 
        resource={props.playerState.plants } 
        gameCode={props.gameCode} 
        canEdit={canEdit}
        resourceName="Plants"
        image={plants}
        />
        <ResourceView 
        resource={props.playerState.energy } 
        gameCode={props.gameCode} 
        canEdit={canEdit}
        resourceName="Energy"
        image={energy}
        />
        <ResourceView 
        resource={props.playerState.heat} 
        gameCode={props.gameCode} 
        canEdit={canEdit}
        resourceName="Heat"
        image={heat}
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
                <StartGameButton boardState={props.playerState} gameCode={props.gameCode} />
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
