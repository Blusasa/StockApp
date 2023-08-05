import { View, Text, StyleSheet, Image, FlatList } from "react-native";

import AppStyles from "../../../theme/AppStyles";

import CustomTextInput from "../../../components/CustomTextInput";
import Underline from "../../../components/Underline";

import FavoritedStocks from "../components/FavoritedStocks";
import DailyMoverContainer from "../components/DailyMoverContainer";
import UserGroups from "../components/UserGroups";

const HomeScreen = () => {

    const BalanceComponent = () => {
        return (
            <View style={[styles.balanceContainer]}>
                <View>
                    <Text style={[AppStyles.text, styles.balanceHeader]}>YOUR BALANCE</Text>
                    <Text style={[AppStyles.text, styles.balancePrice]}>$10,420.11</Text>
                </View>
                <Image style={[styles.img]} source="../../assets/test-chart1.png"/>
            </View>
        );
    }

    let components = [
        { component: BalanceComponent()},
        { component: <Underline/> }
    ]

    return (
        <View style={[AppStyles.flexContainer, AppStyles.mainApp]}>

            <FlatList
                ListHeaderComponent={() => (
                    <View>
                        <CustomTextInput placeholderText={"Search for a Stock"}/>
                        <Image source={"../assets/notifBell.svg"}/>
                    </View>
                )}
                ListHeaderComponentStyle={{ width: 350, alignSelf: "center" }}
                data={components}
                renderItem={({ item }) => item.component}
                ListFooterComponent={() => (
                    <View>
                        <FavoritedStocks />
                        <Underline/>
                        <DailyMoverContainer />
                        <Underline/>
                        <UserGroups />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    balanceContainer: {
        flexShrink: 1,
        flexDirection: "row",
        margin: 10,
        // marginBottom: 0,
        padding: 10,
        width: 375
    },
    componentContainer: {
        flex: 1,
        padding: 5
    },
    balancePrice: {
        fontSize: 28,
        alignSelf: "flex-start"
    },
    balanceHeader: {
        fontSize: 14,
        alignSelf: "flex-start",
        color: "#8e8D8D",
    },
    img: {
        alignSelf: "flex-end",

        //temporary because align self isn't working
        right: -125
    }
})

export default HomeScreen;