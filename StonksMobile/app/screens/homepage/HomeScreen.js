import { View, Text,TextInput } from "react-native";
import appStyles2 from "../../globals/styles/AppStyles2";
import CustomTextInput from "../../components/CustomTextInput";
import PricesComponent from "./PricesComponent";
import StockTickerComponent from "./StockTickerComponent"


const HomeScreen = (props) => {
    return (
        <View style ={appStyles2.flexContainer}>
            <Text style={appStyles2.text}>STONKS</Text>
            <CustomTextInput placeholderText={"Search a Stock"} styles={{width: 300}}/>
        
            <PricesComponent/>
            <StockTickerComponent/>
        </View>
    );
};

export default HomeScreen;