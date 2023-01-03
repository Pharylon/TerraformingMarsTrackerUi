import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useRecoilState } from 'recoil';
import { gameStateAtom, getEmptyGameState, BoardState } from '../state/BoardState';
import Board from './Board';
import { TabView, Tab, Text, Avatar } from '@rneui/themed';
import { Image } from '@rneui/base';
import { userIdAtom } from '../state/UserState';

const GameBoards = () => {
  const [gameState, setMyState] = useRecoilState(gameStateAtom);
  const [index, setIndex] = useState(0);
  const [userId, setUserId] = useRecoilState(userIdAtom);
  const sortedPlayers = gameState?.players;
  if (sortedPlayers) {
    sortedPlayers.sort((a, b) => a.playerId == userId ? -1 : 1);
  }
  function getPlayerState(playerId: string): BoardState {
    if (!gameState) {
      return getEmptyGameState(playerId);
    }
    const playerState = gameState.boards.find(x => x.playerId === playerId);
    if (playerState) {
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
        {sortedPlayers && sortedPlayers.map((player, index) =>
          <Tab.Item
            key={index}
            title={player.playerName}
            titleStyle={{ fontSize: 12 }}
          >
            <View>
              <Avatar size="medium" title={player.playerName.substring(0, 1)}  />
              <Text>{player.playerName}</Text>
            </View>
          </Tab.Item>
        )
        }
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        {sortedPlayers && sortedPlayers.map((player, index) =>
          <TabView.Item key={index} style={{ width: '100%' }}>
            <Board gameCode={gameState.gameCode} playerState={getPlayerState(player.playerId)} />
          </TabView.Item>
        )
        }
      </TabView>
    </>
  );
};


export default GameBoards;
