import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import appStyles2 from "../../globals/styles/AppStyles2";
import api from "../../api/Api";
import endpoints from "../../api/Endpoints";
import Ionicons from "../../assets/rneIcons/Ionicons";

const StockTickerComponent = () => {
 

  return (
    <View style={styles.container}>
      
        <View  style={styles.box}>
          <View style={appStyles2.text3}>
            <Text style={appStyles2.text3} >AAPL</Text>
            <Text style={appStyles2.priceText} >$10.95</Text>
          </View>
          <View>
            <Text style={appStyles2.greenText} ><Ionicons name={"ios-trending-up-outline"}/>42.34%</Text>
          </View>
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    backgroundColor: "gray",
    paddingTop: 10,
    width: "95%",
    justifyContent: "space-between",
    paddingLeft: 10,
  },
  box: {
    width: 85,
    height: 85,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  boxText: {
    color: "white",
  },
});

export default StockTickerComponent;
