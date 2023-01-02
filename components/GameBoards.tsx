import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useRecoilState } from 'recoil';
import { gameStateAtom, getEmptyGameState, BoardState } from '../state/BoardState';
import Board from './Board';
import { TabView, Tab, Text } from '@rneui/themed';
import {Gravatar, GravatarApi} from 'react-native-gravatar';
import { Image } from '@rneui/base';

const GameBoards = () => {
  const [gameState, setMyState] = useRecoilState(gameStateAtom);
  const [playerId, setPlayerId] = useState(1);
  const [index, setIndex] = useState(0);
  function getPlayerState(playerId: string): BoardState {
    if (!gameState){
      return getEmptyGameState(playerId);
    }
    const playerState = gameState.boards.find(x => x.playerId === playerId);
    if (playerState){
      return playerState;
    }
    return getEmptyGameState(playerId);
  }

  return (
    <>
    <Tab
      value={index}
      onChange={(e) => setIndex(e)}
      indicatorStyle={{
        backgroundColor: 'white',
        height: 3,
      }}
      variant="primary"
    >
      {gameState && gameState.players.map((player, index) => 
        <Tab.Item
        key={index}
        title={player.playerName}
        titleStyle={{ fontSize: 12 }}
      >
        <View>
        <Gravatar options={{
          email: player.email,          
        }} />
        <Text>{player.playerName}</Text>
        </View>
      </Tab.Item>
        )
      }
    </Tab>

    <TabView value={index} onChange={setIndex} animationType="spring">
      {gameState && gameState.players.map((player, index) => 
        <TabView.Item key={index} style={{  width: '100%' }}>
        <Board gameCode={gameState.gameCode} playerState={getPlayerState(player.playerId)} />
        </TabView.Item>
        )
      }
    </TabView>
  </>
  );
};


export default GameBoards;
