import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ReadyToProduce } from '../Connections/SignalR';

const ProduceButton = (props: {rtp: boolean, gameId: string}) => {
  const [amReadyToProduce, setReadyToProduce] = useState(false);

  useEffect(() => {
    setReadyToProduce(props.rtp);
  }, [props]);

  function productionTime(){
    setReadyToProduce(true);
    ReadyToProduce(props.gameId);
  }
  return (
    <Button disabled={amReadyToProduce} onPress={productionTime} title="Ready to Produce"></Button>
  );
};

export default ProduceButton;
