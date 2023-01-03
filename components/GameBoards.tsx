import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useRecoilState } from 'recoil';
import { gameStateAtom, getEmptyGameState, BoardState } from '../state/BoardState';
import Board from './Board';
import { TabView, Tab, Text, Avatar } from '@rneui/themed';
import { Image } from '@rneui/base';
import { getUserId } from '../state/UserState';

const GameBoards = () => {
  const [gameState, setMyState] = useRecoilState(gameStateAtom);
  const [index, setIndex] = useState(0);
  const [userId, setUserId] = useState("");

  async function initalizeUserId(){
    const id = await getUserId();
    setUserId(id);
  }
  
  useEffect(() => {
    initalizeUserId();
  }, []);

  const sortedBoards = gameState?.boards;
  if (sortedBoards) {
    sortedBoards.sort((a, b) => a.player.playerId == userId ? -1 : 1);
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
        {sortedBoards && sortedBoards.map((board, index) =>
          <Tab.Item
            key={index}
            title={board.player.playerName}
            titleStyle={{ fontSize: 12 }}
          >
            <View>
              <Text>{board.player.playerName}</Text>
            </View>
          </Tab.Item>
        )
        }
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        {sortedBoards && sortedBoards.map((board, index) =>
          <TabView.Item key={index} style={{ width: '100%' }}>
            <Board userId={userId} gameCode={gameState.gameCode} playerState={board} gameStarted={gameState.started} />
          </TabView.Item>
        )
        }
      </TabView>
    </>
  );
};


export default GameBoards;
