import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  resource: {
    width: "40%",
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    alignItems: 'center',
    justifyContent: 'space-around',
    display: 'flex',
    borderColor: 'black',
    borderWidth: 2,
    flexDirection: "row",    
    marginBottom: 20
  },
  resourceLine: {
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  resourceText: {
    fontSize: 20,
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
    // backgroundColor: "rgba(255, 88, 0, .5)",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: 'center',
  },
  productionText: {
    fontSize: 20,
    color: "orange"
  },
  tr: {
    width: "100%",
    backgroundColor: 'rgba(245, 127, 39, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 10,
  },
  trResourceLine: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-around',
    width: "100%"
  },
});

export default styles;