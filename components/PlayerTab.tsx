import { Tab } from '@rneui/themed';
import { IPlayer } from '../state/BoardState';

const PlayerTab = (props: { player: IPlayer }) => {
  return (
            <Tab.Item
        title={props.player.playerName}
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'person-circle-outline', type: 'ionicon', color: 'white' }}
      />
  );
};

export default PlayerTab;
