import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View , FlatList,SafeAreaView} from 'react-native';
import Card from "./components/Card/Card" ;
import Body from './components/Body/Body';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.header}>PATİKASTORE</Text>
    <TextInput  style={styles.input} placeholder="  Ara...."/>
    <View style={styles.innerContainer}> 
    <Body />
    </View>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:11,
    justifyContent: 'center',

  },
  innerContainer: {
    flex: 1,
    margin: 10,
    alignItems: "center",
  },
  header:{
    fontSize:41, 
    fontWeight: 'bold',
    marginTop:10,
    marginLeft:10,
    color:'rgb(117,20,124)'
  },
  input:{
    marginTop:10,
    backgroundColor: 'rgb(237,239,241)',
    borderRadius:10,
    height:40,
    paddingLeft:10,
    margin:10,
    marginBottom:0,
  }
});
