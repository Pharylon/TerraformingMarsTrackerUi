import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useRecoilState } from 'recoil';
import { gameState, getEmptyGameState, IPlayerState } from '../state/BoardState';
import Board from './Board';
import { TabView, Tab, Text } from '@rneui/themed';
import {Gravatar, GravatarApi} from 'react-native-gravatar';
import { Image } from '@rneui/base';

const GameBoards = () => {
  const [myState, setMyState] = useRecoilState(gameState);
  const [playerId, setPlayerId] = useState(1);
  const [index, setIndex] = useState(0);
  function getPlayerState(playerId: number): IPlayerState {
    const playerState = myState.playerStates.find(x => x.playerId === playerId);
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
      {myState.players.map((player, index) => 
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
      {myState.players.map((player, index) => 
        <TabView.Item key={index} style={{  width: '100%' }}>
        <Board playerState={getPlayerState(player.playerId)} />
        </TabView.Item>
        )
      }
      {/* <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
        <Text h1>Recent</Text>
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
        <Text h1>Favorite</Text>
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
        <Text h1>Cart</Text>
      </TabView.Item> */}
    </TabView>
  </>
    // <View style={styles.gameBoard}>
    //   <Board playerState={playerState} />
    // </View>
  );
};


export default GameBoards;
