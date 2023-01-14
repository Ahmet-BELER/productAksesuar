import { StyleSheet , Dimensions} from "react-native";

export default StyleSheet.create({

    card: {
        margin: 5,
        width: Dimensions.get("window").width / 2.2,
        height: Dimensions.get("window").height / 3,
        backgroundColor: "#ECEFF1",
        justifyContent: "space-between",
        borderRadius: 10,
      },
      imageContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        
      },
    
      descriptionConatiner: {
        justifyContent: "center",
        marginVertical: 10,
        marginHorizontal: 10,
      },
      image: {
        width: Dimensions.get("window").width / 3,
        height: Dimensions.get("window").height / 5,
        borderRadius: 10,
      },
      title: {
        fontWeight: "bold",
        marginTop:5
      },
      price: { marginVertical: 0, color: "#808080" },
      rate: { color: "grey", textAlign: "right", fontSize: 12 },
    });