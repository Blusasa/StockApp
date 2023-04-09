import styles from "../frontPage/Styles";
import AppStyles from "../../globals/styles/AppStyles";
import { View, Text,TextInput, Button } from "react-native";
import appStyles2 from "../../globals/styles/AppStyles2";
import PricesComponent from "./PricesComponent";
import StockTickerComponent from "./StockTickerComponent"
const HomePage = () => {
    return (
        <View style ={appStyles2.flexContainer}>
            <Text style={appStyles2.text}>STONKS</Text>
            <TextInput style={appStyles2.input}
            
            
        placeholder="Search For An Asset"
        keyboardType="text"

            />
            <PricesComponent/>
            <StockTickerComponent/>
            
        </View>
    );
};




export default HomePage;