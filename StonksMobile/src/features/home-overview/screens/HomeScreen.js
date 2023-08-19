import { View, Text, StyleSheet, FlatList, ScrollView, useWindowDimensions } from "react-native";

import AppStyles from "../../../theme/AppStyles";
import { commonStyles, useTheme } from "../../../theme";

import SvgComponent from "../../../assets/SvgComponent";
import { notifBellXml } from "../../../assets/svgXmls";

import CustomTextInput from "../../../components/CustomTextInput";
import Underline from "../../../components/Underline";
import AssetChart from "../../../components/AssetChart";

import FavoritedStocks from "../components/FavoritedStocks";
import DailyMoverContainer from "../components/DailyMoverContainer";
import UserGroups from "../components/UserGroups";

const HomeScreen = () => {

    const {width} = useWindowDimensions();
    const theme = useTheme();
    const componentStyles = styles({width, theme});

    const BalanceComponent = () => {
        return (
            <View style={[componentStyles.balanceComponentContainer, commonStyles.devBorder]}>
                <View style={[componentStyles.balanceInfoContainer]}>
                    <Text style={[componentStyles.balanceHeader]}>YOUR BALANCE</Text>
                    <Text style={[componentStyles.balancePrice]}>$10,420.11</Text>
                </View>
                <AssetChart />
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={[componentStyles.mainContainer, commonStyles.devBorder]}>
            <View style={[componentStyles.headerContainer, commonStyles.devBorder]}>
                <CustomTextInput placeholderText={"Search for a Stock"}/>
                <SvgComponent svgXml={notifBellXml} dimensionMultipliers={{height: 0.75, width: 0.75}} />
            </View>
            {BalanceComponent()}
            <Underline />
            <FavoritedStocks />
            <Underline/>
            {/* <DailyMoverContainer /> */}
            {/* <Underline/> */}
            {/* <UserGroups /> */}
        </ScrollView>
    );
};

const styles = ({width, height, theme}) => StyleSheet.create({
    mainContainer: {
        flex: 1,
        ...commonStyles.flexColCenter,
        padding: 15,
        backgroundColor: theme.colors.background,
    },
    headerContainer: {
        flex: 1,
        ...commonStyles.flexRowSpaceBW,
        maxHeight: "10%",
    },
    balanceComponentContainer: {
        ...commonStyles.flexRowSpaceBW,
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        maxHeight: "13%",
    },
    balanceInfoContainer: {
        //Asset Chart is flex: 1, so make the info section take up 2/3rds of the box
        flex: 2,
        ...commonStyles.flexColEnd,
    },
    componentContainer: {
        flex: 1,
        padding: 5
    },
    balancePrice: {
        fontSize: 28,
        alignSelf: "flex-start",
        ...theme.fonts.regular,
    },
    balanceHeader: {
        fontSize: 14,
        alignSelf: "flex-start",
        ...theme.fonts.subtext,
    }
})

export default HomeScreen;