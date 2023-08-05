import { useState, useEffect } from "react";
import { View, ActivityIndicator, StyleSheet, FlatList, Text, Button } from "react-native";

import StockBox from "../../../components/StockBox";
import AppStyles from "../../../theme/AppStyles";


const FavoritedStocks = () => {
  const [quoteData, setQouteData] = useState(null);

  const stocks = [
    {
      name: "Stock1",
      symbol: "STK1",
      currentPrice: 100.01,
      percentChange: 0.05
    },
    {
      name: "Stock2",
      symbol: "STK2",
      currentPrice: 50.00,
      percentChange: -0.02
    },
    {
      name: "Stock3",
      symbol: "STK3",
      currentPrice: 75.00,
      percentChange: 0.1
    },
    {
      name: "Stock4",
      symbol: "STK4",
      currentPrice: 1.73,
      percentChange: 1.45
    },
    {
      name: "Stock5",
      symbol: "STK5",
      currentPrice: 11.23,
      percentChange: -5.6
    }
  ];

  useEffect(() => {
    setQouteData(stocks);
  }, [])

  if (!quoteData) {
    return <ActivityIndicator color={"#E91EAC"} size={"large"} />;
  }

  return (
    <View style={[AppStyles.flexContainer, AppStyles.componentContainerBackground, styles.container]}>
        <Text style={[AppStyles.textSemiBold, styles.header]}>Prices</Text>
        {quoteData.map((value, index) => (
          <StockBox key={index} stockInfo={value} />
        ))}
        <Button style={[styles.button]} title="View All ->"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    maxHeight: 500,
  },
  header: {
    fontSize: 20,
    //this offset is to match the margin/padding of the stockbox's below it
    left: 10,
    alignSelf: "flex-start"
  },
  button: {
    margin: 7,
    backgroundColor: "transparent",
    borderColor: "#E91EAC",
    borderRadius: 5,
    width: 150,
  }
})

export default FavoritedStocks;