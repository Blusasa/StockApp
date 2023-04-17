import { View, Text,TextInput } from "react-native";
import appStyles2 from "../../globals/styles/AppStyles2";
import PricesComponent from "./PricesComponent";
import CustomTextInput from "../../components/CustomTextInput";
import StockBox from "../../components/stockbox/StockBox";
import AppStyles from "../../globals/styles/AppStyles";
import StockTickerComponent from "./StockTickerComponent";

const HomeScreen = (props) => {
    return (
        <View style ={[AppStyles.flexContainer, AppStyles.mainApp]}>

            
            <Text style={AppStyles.textSemiBold}>STONKS</Text>
            <CustomTextInput placeholderText={"Search a Stock"} styles={{width: 300}}/>
            <View style ={appStyles2.flexContainer2}>
            <PricesComponent/>
            <StockTickerComponent/>
            </View>
        </View>
    );
};

export default HomeScreen;