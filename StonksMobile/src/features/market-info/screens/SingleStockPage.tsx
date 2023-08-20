import { View, Text, StyleSheet } from "react-native";

import { Theme, useTheme, commonStyles } from "../../../theme";
import AppStyles from "../../../theme/AppStyles";
import AssetChart from "../../../components/AssetChart";

const SingleStockPage = () => {
    const theme = useTheme();
    const componentStyles = styles(theme);

    const fakeData = {
        "marketCap": 10.39,
        "averageVol": 1.234,
        "dayHigh": 40.56,
        "dayLow": 39.98,
        "todayVolume": 1.6,
        "open": 40.11,
        "yrHigh": 40.56,
        "yrLow": 24.52
    }

    return (
        <View style={[componentStyles.mainContainer, commonStyles.devBorder]}>
            <View style={[componentStyles.headerContainer]}>
                <Text style={[componentStyles.title]}>Stock 1 Price</Text>
            </View>
            <AssetChart/>
        </View>
    );
};

const styles = (theme: Theme) => StyleSheet.create({
    mainContainer: {
        flex: 1,
        ...commonStyles.flexColFullCenter,
        backgroundColor: theme.colors.background,
    },
    headerContainer: {
        flex: 1,
    },
    title: {
        ...theme.fonts.header,
        fontSize: 22,
    }
});

export default SingleStockPage;