import { View, Text, StyleSheet, Image, ScrollView, SectionList, FlatList } from "react-native";

import CustomTextInput from "../../components/CustomTextInput";
import AppStyles from "../../globals/styles/AppStyles";
import FavoritedStocks from "./FavoritedStocks";
import DailyMoverContainer from "./DailyMoverContainer";
import Underline from "../../components/Underline";
import UserGroups from "./UserGroups";

const HomeScreen = () => {

    const BalanceComponent = () => {
        return (
            <View style={[styles.balanceContainer]}>
                <View>
                    <Text style={[AppStyles.text, styles.balanceHeader]}>YOUR BALANCE</Text>
                    <Text style={[AppStyles.text, styles.balancePrice]}>$10,420.11</Text>
                </View>
                <Image style={[styles.img]} source={require("../../assets/test-chart1.png")} />
            </View>
        );
    }

    let components = [
        { component: BalanceComponent()},
        { component: <Underline/> }
    ]

    return (
        <View style={[AppStyles.flexContainer, AppStyles.mainApp]}>
            <Text style={[AppStyles.textSemiBold, { marginTop: 10 }]}>STONKS</Text>

            <FlatList
                ListHeaderComponent={() => <CustomTextInput placeholderText={"Search for a Stock"} />}
                ListHeaderComponentStyle={{ width: 350, alignSelf: "center" }}
                data={components}
                renderItem={({ item }) => item.component}
                ListFooterComponent={() => (
                    <View>
                        <FavoritedStocks />
                        <DailyMoverContainer />
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
        marginBottom: -7.5,
        padding: 10,
        width: 375
    },
    componentContainer: {
        flex: 1,
        padding: 5
    },
    balancePrice: {
        fontSize: 30,
        alignSelf: "flex-start"
    },
    balanceHeader: {
        fontSize: 15,
        alignSelf: "flex-start",
    },
    img: {
        alignSelf: "flex-end",

        //temporary because align self isn't working
        right: -125
    }
})

export default HomeScreen;