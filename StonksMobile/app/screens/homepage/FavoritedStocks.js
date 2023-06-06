import { useState, useEffect } from "react";
import { View, ActivityIndicator, StyleSheet, FlatList, Text } from "react-native";
import StockBox from "../../components/stockbox/StockBox";
import AppStyles from "../../globals/styles/AppStyles";


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
        <Text style={[AppStyles.textSemiBold, styles.header]}>Watchlist</Text>
        {quoteData.map((value, index) => (
          <StockBox key={index} stockInfo={value} />
        ))}
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
    fontSize: 30,
    //this offset is to match the margin/padding of the stockbox's below it
    left: 10,
    alignSelf: "flex-start"
  }
})

export default FavoritedStocks;