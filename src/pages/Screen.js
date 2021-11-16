import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const Screen = ({ navigation }) => {

  const { count } = useSelector(store => store?.counter)

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contador</Text>
      <Text style={styles.counter}>{count}</Text>
      <TouchableOpacity style={styles.button} onPress={() => {navigation.goBack()}}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  counter: {
    marginTop: 20,
    fontSize: 18
  },
  button: {
    width: 130,
    height: 55,
    backgroundColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: "center",
    marginTop: 40
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
  }
})