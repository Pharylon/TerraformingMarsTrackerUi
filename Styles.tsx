import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  resource: {
    width: "40%",
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
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
    fontSize: 32,
    color: "black"
  },
  pressableStyle: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  inoniconStyle: {
    color: "black"
  },
  production: {
    backgroundColor: "rgba(255, 88, 0, 1)",
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row"
  },
  productionText: {
    fontSize: 22
  }
});

export default styles;