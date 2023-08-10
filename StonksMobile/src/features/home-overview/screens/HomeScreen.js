import { View, Text, StyleSheet, Image, FlatList } from "react-native";

import AppStyles from "../../../theme/AppStyles";

import CustomTextInput from "../../../components/CustomTextInput";
import Underline from "../../../components/Underline";
import AssetChart from "../../../components/AssetChart";
import NotifBellSVG from "../../../assets/notifBell";

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
                <View style={[{maxWidth: "40%"}]}>
                    <AssetChart />
                </View>
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
                    <View style={[commonStyles.flexRow, {justifyContent: "space-between"}]}>
                        <CustomTextInput placeholderText={"Search for a Stock"}/>
                        <NotifBellSVG />
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
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
        padding: 10,
        width: screenDimensions.width - 20,
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