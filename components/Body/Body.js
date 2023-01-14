import { FlatList,   StyleSheet, View,Text} from "react-native";
import {Dimensions} from 'react-native';
import React from "react";
import Card from "../Card/Card"
import data from "../../data.json"
const Body =() =>{

const renderCard = ({item}) => <Card product={item}/>;


    return(
        
      <View style={styles.body}>
        <FlatList 
     showsHorizontalScrollIndicator={false}
            numColumns={2}
            data={data}
            renderItem={renderCard}
        />


        </View>
    )

}
const styles = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
export default Body;