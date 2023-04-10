import { View, Text,TextInput } from "react-native";
import appStyles2 from "../../globals/styles/AppStyles2";
import PricesComponent from "./PricesComponent";
import CustomTextInput from "../../components/CustomTextInput";

const HomeScreen = (props) => {
    return (
        <View style ={appStyles2.flexContainer}>
            <Text style={appStyles2.text}>STONKS</Text>
            <CustomTextInput placeholderText={"Search a Stock"} styles={{width: 300}}/>
        
            <PricesComponent/>
        </View>
    );
};

export default HomeScreen;