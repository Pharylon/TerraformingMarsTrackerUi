import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  resource: {
    width: "40%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    borderColor: 'black',
    borderWidth: 2,
  },
  resourceLine: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-around',
    width: "100%"
  },
  resourceText: {
    fontSize: 32
  },
  pressableStyle: {
    backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row"
  }
});

export default styles;