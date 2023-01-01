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
    justifyContent: 'center'
  },
  resourceText: {
    fontSize: 32
  }
});

export default styles;