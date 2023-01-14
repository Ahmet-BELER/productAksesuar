import { FlatList,   styleheet, View,Text,Image} from "react-native";
import React from "react"; 
import style from "./Card.style"

const Card = (item) =>{
const {product} = item

    return(
        <View style={style.card}>
        <View style={style.imageContainer}>
        <Image style={style.image}
            source={{uri:product.imgURL}}
        />
        </View>
           <View style={style.descriptionConatiner}>
       <Text style={style.title}>{product.title}</Text> 
       <Text style={style.price}>{product.price}</Text>
       <Text style={style.rate}>Stoke: {product.inStock}</Text>
        </View>
        </View>

    )
}

export default Card; 