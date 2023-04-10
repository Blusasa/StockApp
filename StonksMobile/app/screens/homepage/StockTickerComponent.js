import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import appStyles2 from "../../globals/styles/AppStyles2";
import api from "../../api/Api";
import endpoints from "../../api/Endpoints";

const BoxRow = () => {
 

  const [quoteData, setQouteData] = useState(undefined);

    useEffect(() => {
        api.get(endpoints.getQoute('AAPL'))
            .then((res) => {
                console.log(res.data);
                setQouteData(res.data.quote);
            }).catch((err) => { });
    }, []);


    if (!quoteData) return null;
    const quoteArray = Object.values(quoteData);
    const currentPrice = quoteArray[0]
    console.log("this is the data" + quoteArray)
    
  return (
    <View style={styles.container}>
      {quoteArray.slice(0, 4).map((data, index) => (
        <View key={index} style={styles.box}>
          <Text style={styles.boxText}>this{data[0]}</Text>
          
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
      flexDirection: 'row',
      marginHorizontal: 20,
      backgroundColor: 'gray', // add background color
      paddingTop: 10, // add top padding
      width: "95%"
    },
    box: {
      width: 85,
      height: 85,
      margin:"10px",
      backgroundColor: 'black', // set box background to black
      alignItems: 'center',
      justifyContent: 'center',
    },
    boxText: {
      color: 'white',
    },
  });
  
  export default StockTickerComponent;