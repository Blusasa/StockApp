import { useState, useEffect, ReactElement } from "react";
import { View, ActivityIndicator, StyleSheet, Pressable, Text, Dimensions} from "react-native";

import StockBox from "./StockBox";
import { Theme, commonStyles, useTheme } from "../../../theme";
import { IStockInfo } from "../../../types";


const FavoritedStocks = () : ReactElement => {
  const [quoteData, setQouteData] = useState(null);

  const theme = useTheme();
  const componentStyles = styles(theme);

  const stocks: IStockInfo[] = [
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
    }
  ];

  useEffect(() => {
    setQouteData(stocks);
  }, [])

  if (!quoteData) {
    return <ActivityIndicator color={"#E91EAC"} size={"large"} />;
  }

  return (
    <View style={[componentStyles.sectionContainer, commonStyles.devBorder]}>
        <Text style={[componentStyles.header]}>Prices</Text>
        {quoteData.map((value: IStockInfo, index: number) => (
          <StockBox key={index} stockInfo={value} showCharts/>
        ))}
        <Pressable style={[componentStyles.button]}>
          <Text style={componentStyles.buttonTxt}>View All -{'>'}</Text>
        </Pressable>
    </View>
  );
};

const styles = (theme : Theme) => StyleSheet.create({
  sectionContainer: {
    flex: 1,
    ...commonStyles.flexColCenter,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
  },
  header: {
    ...theme.fonts.header,
    fontSize: 22,
    //this offset is to match the margin/padding of the stockbox's below it
    left: 10,
    alignSelf: "flex-start"
  },
  button: {
    height: "10%",
    marginVertical: 10,
    marginHorizontal: 5,
    backgroundColor: theme.colors.action,
    borderRadius: 8,
    justifyContent: "center",
  },
  buttonTxt: {
    ...theme.fonts.header,
    fontSize: 15,
    color: "black", 
    alignSelf: "center",
  }
})

export default FavoritedStocks;