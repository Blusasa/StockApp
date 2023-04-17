import { fonts } from "@rneui/base";
import { StyleSheet } from "react-native";

const appStyles2 = StyleSheet.create({
  flexContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },

  flexContainer2: {
    flex: 1,
    width: "95%",
    backgroundColor: "#808080",
    justifyContent: "center",
    alignItems: "center",
  },

  text2: {
    borderColor: "#B401FC",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "white",
  },

  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#B401FC",
    color: "white",
  },
  text: {
    color: "white",
    textAlign:"center"
   
  },
  text3:{
    textAlign: "left",
    width: "100%",
    color:"white",
    fontSize:20,
    paddingLeft:5
  },
  priceText:{
    textAlign: "left",
    width: "100%",
    //gray
    fontsize:10,
    paddingLeft:5,
    color:"#808080"
  },
  greenText: {
    color: "lightgreen",
    textAlign: "center",
    fontSize: 18,
    width:"100%"
  },
});

export default appStyles2;

